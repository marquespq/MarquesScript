// ==UserScript==
// @name         TW Agendador de Comandos - MarquesScripts atualizado
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Agende ataques e apoios automaticamente com interface MarquesScripts
// @author       Eleição
// @include      https://*.tribalwars.*/*screen=place*
// @exclude      https://*.tribalwars.*/*screen=place*mode=units*
// @exclude      https://*.tribalwars.*/*screen=place*mode=scavenge*
// @exclude      https://*.tribalwars.*/*screen=place*mode=scavenge_mass*
// @exclude      https://*.tribalwars.*/*screen=place*mode=sim*
// @exclude      https://*.tribalwars.*/*screen=place*mode=neighbor*
// @exclude      https://*.tribalwars.*/*screen=place*mode=call*
// @exclude      https://*.tribalwars.*/*screen=place*mode=templates*
// @grant        GM_openInTab
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// @grant        GM_xmlhttpRequest
// @connect      delay-agendador.dbrummer11.workers.dev
// ==/UserScript==

(function () {
  "use strict";

  // Corrigido para evitar ReferenceError
  const setValue =
    typeof GM_setValue !== "undefined"
      ? GM_setValue
      : (key, value) => {
          localStorage.setItem(key, JSON.stringify(value));
        };
  const addValueChangeListener =
    typeof GM_addValueChangeListener !== "undefined"
      ? GM_addValueChangeListener
      : () => {};
  const openInTab =
    typeof GM_openInTab !== "undefined"
      ? GM_openInTab
      : (url, opts) => {
          window.open(url, opts?.active ? "_blank" : "_self");
          return null;
        };
  const xmlHTTPReq =
    typeof GM_xmlhttpRequest !== "undefined"
      ? GM_xmlhttpRequest
      : (url, opts) => {
          window.open(url, opts?.active ? "_blank" : "_self");
          return null;
        };

  const currentURL = window.location.href;

  const isPage = currentURL.includes("screen=place");

  if (isPage) {
    (function manterTituloAba() {
      const tituloDesejado = "⚔️ Agendador";
      setInterval(() => {
        if (document.title !== tituloDesejado) {
          document.title = tituloDesejado;
        }
      }, 1000);
    })();

    // ─── Armazena o cmdId na sessionStorage se existir na URL ───────────
    (function storeCmdId() {
      const u = new URL(location.href);
      const id = u.searchParams.get("cmdId");
      if (id) {
        sessionStorage.setItem("TWAG_currentCmdId", id);
        console.log("[TWAG] cmdId armazenado em sessionStorage:", id);
      }
    })();

    /* ================================================================
   ▸ CONFIG DO BÔNUS NOTURNO (BN)
   ================================================================ */
    let BN_ATIVO = false;
    let BN_INICIO = 0; // hora inteira (0-23)
    let BN_FIM = 0; // hora inteira (0-23)

    /* contagens “zeradas” visuais */
    const BASE_KEYS = {
      cmd: "TWAG_base_sent_cmd",
      atk: "TWAG_base_sent_atk",
      sup: "TWAG_base_sent_sup",
    };
    function toB64(txt) {
      return btoa(unescape(encodeURIComponent(txt)));
    }
    function fromB64(b64) {
      return decodeURIComponent(escape(atob(b64)));
    }

    (async function carregaConfigBN() {
      try {
        const xml = await (
          await fetch("/interface.php?func=get_config")
        ).text();
        const ativo = +xml.match(/<night>\s*<active>(\d+)<\/active>/s)[1];
        const ini = +xml.match(/<start_hour>(\d+)<\/start_hour>/)[1];
        const fim = +xml.match(/<end_hour>(\d+)<\/end_hour>/)[1];

        BN_ATIVO = ativo === 1;
        BN_INICIO = ini; // ex.: 23  → 23:00
        BN_FIM = fim; // ex.: 7   → 07:00

        const cruza = BN_INICIO > BN_FIM;
        console.log(
          `[TWAG] BN ${BN_ATIVO ? "ON" : "OFF"} ` +
            `(${String(BN_INICIO).padStart(2, "0")}:00` +
            `–${String(BN_FIM).padStart(2, "0")}:00${cruza ? " +0h" : ""})`
        );
      } catch (e) {
        console.warn("[TWAG] Falhou ao ler config BN", e);
      }
    })();

    (function () {
      "use strict";

      function keepTabAwake() {
        if (window.__TWAG_KEEPALIVE__) return; // evita duplicar
        window.__TWAG_KEEPALIVE__ = true;

        /* 1 ▸ Wake Lock (quando visível) */
        let wakeLock = null;
        async function reqWake() {
          try {
            wakeLock = await navigator.wakeLock?.request?.("screen");
          } catch {}
        }
        if ("wakeLock" in navigator) {
          reqWake();
          document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "visible" && !wakeLock) reqWake();
          });
        }

        /* 2 ▸ Áudio HTML5 mudo em loop (funciona mesmo em background) */
        const audio = document.createElement("audio");
        audio.src =
          "https://cdn.jsdelivr.net/gh/eleicaotw/TwManager@main/Brown%20Noise%20(1).mp3";
        audio.loop = true;
        audio.muted = true;
        audio.volume = 0;
        audio.setAttribute("playsinline", "");
        audio.autoplay = true;
        audio.style.display = "none";
        document.documentElement.appendChild(audio);

        /* 3 ▸ Pequeno ping para diagnóstico (30 s) */
        setInterval(
          () => console.debug("[TWAG] keep-alive ping", Date.now()),
          30_000
        );
      }
      /* ============================================================== */
      /*  ▸ Globais                                                     */
      /* ============================================================== */
      const STORAGE_CMDS = "TWAG_comandos";
      const tabsAbertas = new Map(); // cmdId → GM_Tab
      const LS_LOCK = (id) => `TWAG_exec_${id}`;
      const MY_TOKEN = Date.now() + "_" + Math.random().toString(16).slice(2);
      const u = new URL(location.href);

      const childCmdId = sessionStorage.getItem("TWAG_currentCmdId");
      const IS_CHILD = !!childCmdId; // ← nova flag global
      if (childCmdId && u.searchParams.get("screen") === "place") {
        const hasTry = u.searchParams.has("try");
        const hasX = u.searchParams.has("x");
        const hasY = u.searchParams.has("y");

        // 3ª página: /place sem ?try, x, y  ⇒ fecha
        if (!hasTry && !hasX && !hasY) {
          /* ✅ marca como ENVIADO exatamente como nos envios “no horário” */
          if (typeof finalizarComando === "function") {
            finalizarComando(childCmdId); // seta .enviado, salva, ping pai
          } else {
            // fallback ultra-raro
            const lista = lerComandos();
            const i = lista.findIndex((c) => c.id == childCmdId);
            if (i > -1) {
              lista[i].enviado = true;
              delete lista[i].sendNow;
              salvarComandos(lista);
            }
            setValue("TWAG_done_" + childCmdId, Date.now()); // mantém ping
          }

          sessionStorage.removeItem("TWAG_currentCmdId");
          console.log("[TWAG·FILHO] 3ª URL atingida; comando concluído");
        }
      }

      /* ============================================================= */
      /* 1 ▸ Listener global (qualquer alteração) */
      addValueChangeListener("*", (key, _ov, _nv, remote) => {
        if (!remote) return; // ignora alterações locais

        // ⬤  sinal normal de “comando concluído”
        if (key.startsWith("TWAG_done_")) {
          const cmdId = key.slice(10);
          fecharAba(cmdId); // encerra a aba-filho
          updateGeralStats(); // 🔄 contador sobe
          carregarComandosAgendados?.(); // refresca a lista
        }

        // ⬤  ping redundante — opcional
        if (key === "TWAG_refresh_stats") {
          updateGeralStats();
          carregarComandosAgendados?.();
        }
      });

      function estaNoBN(epochMs) {
        if (!BN_ATIVO) return false; // mundo sem BN
        const d = new Date(epochMs);
        const h = d.getHours(); // 0-23
        if (BN_INICIO < BN_FIM) {
          // BN não cruza 00 h
          return h >= BN_INICIO && h < BN_FIM;
        } else {
          // ex.: 23h–07h (cruza 00 h)
          return h >= BN_INICIO || h < BN_FIM;
        }
      }

      /* ---------- leitura / gravação seguras ------------------------ */
      function lerComandos() {
        const raw = localStorage.getItem(STORAGE_CMDS);
        if (raw === null) return [];
        try {
          const d = JSON.parse(raw);
          return Array.isArray(d) ? d : [];
        } catch {
          localStorage.setItem(STORAGE_CMDS, "[]");
          return [];
        }
      }
      function salvarComandos(lista) {
        if (Array.isArray(lista))
          localStorage.setItem(STORAGE_CMDS, JSON.stringify(lista));
      }

      /* ===== Config ===== */
      const PRELOAD_MS = 15_000; // abre aba 25 s antes
      const TICK_MS = 100; // checagem de envio
      const OPEN_TICK_MS = 1_000; // checagem de pré-abertura

      // === Estilo visual MarquesScripts ===
      const estilo = document.createElement("style");
      estilo.innerHTML = `
        @import url('https://use.typekit.net/ady4wsm.css');

        .tw-agendador-container {
            position: fixed;
            top: 160px;
            left: 50%;
            transform: translateX(-50%);
            background: #121212;
            border: 2px solid #2E2E2E;
            border-radius: 12px;
            padding: 20px;
            z-index: 9999;
            width: 700px;
            font-family: 'pf-videotext';
            color: #ccc;
            max-height: 80vh;
            overflow: auto;
        }
        .tw-agendador-container::-webkit-scrollbar {
          width: 8px;
        }
        .tw-agendador-container::-webkit-scrollbar-track {
          background: #1b1b1b;                                /* trilho dark */
          border-radius: 4px;
        }
        .tw-agendador-container::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg,#00E5FF,#00B8E5);
          border-radius: 4px;
          box-shadow: 0 0 6px #00E5FFaa;                      /* glow suave */
        }
        .tw-agendador-container::-webkit-scrollbar-thumb:hover {
          background: #00E5FF;                                /* destaque no hover */
        }

        .marques-header {
            font-size: 18px;
            color: #00E5FF;
            margin-bottom: 12px;
            border-bottom: 1px solid #2e2e2e;
            padding-bottom: 6px;
        }

        .marques-tabs {
            display: flex;
            gap: 8px;
            margin-bottom: 16px;
        }

        .marques-tabs button {
            flex: 1;
            background: #1b1b1b;
            border: 1px solid #2e2e2e;
            color: #ccc;
            padding: 6px;
            font-family: 'pf-videotext';
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .marques-tabs button.active {
            background: #00E5FF;
            color: #121212;
        }

        .marques-tab-content {
            display: none;
        }

        .marques-tab-content.active {
            display: block;
        }
.tw-config-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
}

.tw-config-row label {
  color: #ccc;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.tw-config-row input,
.tw-config-row select {
  background: #1e1e1e;
  border: 1px solid #2e2e2e;
  color: #ccc;
  padding: 4px;
  border-radius: 4px;
  font-family: 'pf-videotext';
  font-size: 13px;
}

.btn-neon {
  background-color: #00E5FF;
  color: #121212;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  cursor: pointer;
  font-family: 'pf-videotext';
  transition: 0.2s;
}

.btn-neon:hover {
  filter: brightness(1.2);
}
.marques-tabela-unidades {
  background: #1b1b1b;
  border: 1px solid #2e2e2e;
  border-radius: 8px;
  width: 160px;
  font-family: 'pf-videotext';
  font-size: 13px;
  color: #ccc;
  border-spacing: 0;
  table-layout: fixed;
}

.marques-tabela-unidades th {
  background: #121212 !important;
  color: #00E5FF;
  padding: 6px;
  font-weight: normal;
  text-align: center;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid #2e2e2e;
}

.marques-tabela-unidades td {
  padding: 6px;
  border-top: 1px solid #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  height: 36px;
}

.marques-tabela-unidades img {
  width: 20px;
  height: 20px;
}

.marques-tabela-unidades input[type="text"] {
  background: #1e1e1e;
  border: 1px solid #2e2e2e;
  color: #ccc;
  border-radius: 4px;
  padding: 2px 4px;
  width: 40px;
  text-align: center;
}

.marques-tabela-unidades input[type="checkbox"] {
  transform: scale(1.1);
  cursor: pointer;
}

.placeholder-row {
  height: 36px;
  visibility: hidden;
  border-top: 1px solid transparent;
}
/* =========================================================
   LISTA DE COMANDOS AGENDADOS – cabeçalho fixo + scroll
   ========================================================= */

/* WRAPPER – scroll vertical isolado --------------------------- */
.twag-scrollwrap{
  max-height:420px;              /* ≈ 7 linhas visíveis            */
  overflow-y:auto;               /* scroll só no corpo             */
  overflow-x:hidden;             /* nunca barra horizontal         */

  /* barra fina ciano – Firefox */
  scrollbar-width:thin;
  scrollbar-color:#00e5ff #191919;
}
/* WebKit (Chrome / Edge) */
.twag-scrollwrap::-webkit-scrollbar{ width:8px; }
.twag-scrollwrap::-webkit-scrollbar-track{ background:#191919;border-radius:4px; }
.twag-scrollwrap::-webkit-scrollbar-thumb{ background:#00e5ff;border-radius:4px; }

/* TABELA – 100 % menos a largura da barra ---------------------- */
.marques-tabela-comandos{
  width:calc(100% - 8px);        /* reserva 8 px p/ scrollbar     */
  border-collapse:collapse;
  table-layout:auto;             /* datas podem expandir           */
  font-family:'pf-videotext';
  font-size:12px;                /* ↓ 1 pt – continua legível      */
  color:#ccc;
  background:#1b1b1b;
}

/* Cabeçalho fixo ---------------------------------------------- */
.marques-tabela-comandos thead th{
  position:sticky;
  top:0;
  z-index:2;
  background:#121212!important;
  color:#00e5ff!important;
  padding:4px 6px;
  border:1px solid #2e2e2e;
  white-space:nowrap;
}

/* Células padrão ---------------------------------------------- */
.marques-tabela-comandos td{
  padding:4px 6px;
  border:1px solid #2e2e2e;
  text-align:center;
  background:#1b1b1b;
  white-space:nowrap;            /* mantém colunas compactas       */
}

/* ⇲ Linha EXPANDIDA (detalhes) -------------------------------- */
.linha-expandida{ display:none; }             /* default = oculta        */
.linha-expandida td{
  white-space:normal;            /* permite que o conteúdo quebre  */
  padding:8px 10px;              /* respira mais                   */
  background:#1e1e1e;            /* destaca do fundo               */
  overflow-x:auto;               /* scroll horizontal se necessário*/
}

/* Colunas “Saída” / “Chegada” ---------------------------------- */
.marques-tabela-comandos th:nth-child(4),
.marques-tabela-comandos td:nth-child(4),
.marques-tabela-comandos th:nth-child(5),
.marques-tabela-comandos td:nth-child(5){
  min-width:180px;               /* ↓ de 210 → 180 px              */
}

/* Coluna “Ação” ------------------------------------------------ */
.marques-tabela-comandos th:nth-child(6),
.marques-tabela-comandos td:nth-child(6){
  min-width:100px;               /* ↓ de 120 → 100 px              */
}

/* Ícone da primeira coluna ------------------------------------ */
.marques-tabela-comandos td:first-child img{
  width:16px;
  height:16px;
}

/* Botões de ação ---------------------------------------------- */
.marques-tabela-comandos button{
  background:#ff4444;
  border:none;
  color:#fff;
  padding:3px 6px;
  border-radius:4px;
  cursor:pointer;
  font-size:11px;
  line-height:1;
}

/* Botão “Excluir Todos” --------------------------------------- */
.twag-btn-red{
  background:#c62828;
  color:#fff;
  border:none;
  border-radius:6px;
  padding:6px 12px;
  cursor:pointer;
  font-weight:bold;
  font-family:'pf-videotext';
  margin:8px 6px 4px auto;
  display:block;
}

/* Bloco NT (Nobre Train) -------------------------------------- */
.nt-linha{
  display:flex;
  flex-direction:column;
  gap:6px;
  margin-bottom:12px;
  background:#1a1a1a;
  padding:10px;
  border-radius:6px;
  border:1px solid #2e2e2e;
}
.nt-linha h4{
  margin:0 0 6px;
  font-size:13px;
  color:#00e5ff;
}
.nt-unidades{
  display:flex;
  gap:8px;
  flex-wrap:wrap;
}
.nt-unidade{
  display:flex;
  flex-direction:column;
  align-items:center;
  font-family:'pf-videotext';
}
.nt-unidade img{
  width:22px;
  height:22px;
  margin-bottom:4px;
}
.nt-unidade input{
  width:36px;
  text-align:center;
  background:#1e1e1e;
  border:1px solid #2e2e2e;
  border-radius:4px;
  color:#ccc;
  font-family:'pf-videotext';
  font-size:12px;
}

#tw-agendador-header {
  cursor: move;
  user-select: none;
background: #00e5ff;
    color: #1e1e1e;
    font-weight: 700;
    font-size: 18px;
    text-align: center;

    padding: 10px;
    border-radius: 10px 10px 0 0;

    /* “Estica” sobre o padding do container */
    margin: -20px -20px 12px -20px;      /* top, right, bottom, left */
}
#tw-agendador {
  position: fixed;
  top: 160px;
  left: 50%;
  /* retire transform se existir */
}
.twag-row{display:grid;gap:12px;margin-bottom:16px}
.twag-row.row1{grid-template-columns:repeat(3,minmax(160px,1fr))}
.twag-row.row2{grid-template-columns:repeat(4,minmax(120px,1fr))}
.stat-card{
  background:#111;
  border:1px solid #2c2c2c;
  border-radius:8px;
  padding:12px;
  text-align:center
}
.stat-card h3{
  margin:0 0 8px;
  font-size:13px;
  color:#00e5ff
}
.stat-card span{
  font-size:24px;
  font-weight:700;
  color:#fff
}
.twag-geral-actions{
  display:flex;
  justify-content:center;
  gap:12px;
  margin-bottom:8px
}
.twag-btn-blue{
  background:#00e5ff;
  color:#111;
  padding:8px 16px;
  border:none;
  border-radius:6px;
  font-weight:600;
  cursor:pointer
}
.linha-expandida { transition: all 150ms ease-in-out; }
.linha-expandida[style*="display: none"] { opacity: 0; height: 0; }
.linha-expandida[style*="display:"]     { opacity: 1; height: auto; }

    `;
      document.head.appendChild(estilo);

      // Evita duplicar a UI se ela já existe
      if (document.getElementById("tw-agendador")) return;
      const painel = document.createElement("div");
      painel.id = "tw-agendador";
      painel.className = "tw-agendador-container";
      if (location.href.includes("try=confirm")) {
        painel.style.display = "none";
      }
      if (IS_CHILD) {
        const painel = document.getElementById("tw-agendador");
        if (painel) painel.style.display = "none";
      }
      painel.innerHTML = `
  <div class="tw-agendador-header" id="tw-agendador-header">Agendador de Comandos</div>

  <div class="marques-tabs">
    <button class="tab-btn active" data-tab="geral">Geral</button>
    <button class="tab-btn"          data-tab="simples">Agendador Simples</button>
    <button class="tab-btn"          data-tab="massa">Agendador em Massa</button>
    <button class="tab-btn"          data-tab="agendados">Comandos Agendados</button>
</div>

<!-- Aba Geral -->
<div id="tab-geral" class="marques-tab-content active">
 <!-- PRIMEIRA LINHA -->
<div class="twag-row row1">
  <div class="stat-card"><h3>Próximo envio</h3><span id="twag_next_send">—</span></div>
  <div class="stat-card"><h3>Comandos Agendados</h3><span id="twag_cnt_cmds">0</span></div>
  <div class="stat-card"><h3>Comandos Enviados</h3><span id="twag_sent_cmds">0</span></div>
</div>

<!-- SEGUNDA LINHA -->
<div class="twag-row row2">
  <div class="stat-card"><h3>Ataques Agendados</h3><span id="twag_cnt_attk">0</span></div>
  <div class="stat-card"><h3>Ataques Enviados</h3><span id="twag_sent_attk">0</span></div>
  <div class="stat-card"><h3>Apoios Agendados</h3><span id="twag_cnt_supp">0</span></div>
  <div class="stat-card"><h3>Apoios Enviados</h3><span id="twag_sent_supp">0</span></div>
</div>

  <div class="twag-geral-actions">
  <button id="twag_reset"  class="twag-btn-blue">↺ Zerar enviados</button>
  <button id="twag_export" class="twag-btn-blue">⤴ Exportar comandos</button>
  <button id="twag_import" class="twag-btn-blue">⤵ Importar comandos</button>
</div>
</div>
</div>

  <!-- Aba Simples -->
  <div id="tab-simples" class="marques-tab-content">
    <div class="tw-config-row" style="margin-bottom: 16px;">
      <label>🏰 Aldeia de Origem:</label>
      <span id="aldeiaOrigem" style="color: #00E5FF;"></span>
    </div>

    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: space-between;">
        <!-- INFANTARIA -->
    <table class="marques-tabela-unidades" style="background: transparent; border: none; font-family: 'pf-videotext'; color: #ccc; width: 160px;">
      <tr><th style="color: #00E5FF;">Infantaria</th></tr>
      <tr><td><img src="/graphic/unit/unit_spear.png"> <input type="text" id="unit_spear" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="spear" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_sword.png"> <input type="text" id="unit_sword" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="sword" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_axe.png"> <input type="text" id="unit_axe" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="axe" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_archer.png"> <input type="text" id="unit_archer" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="archer" title="Usar máximo disponível"></td></tr>
    </table>

    <!-- CAVALARIA -->
    <table class="marques-tabela-unidades" style="background: transparent; border: none; font-family: 'pf-videotext'; color: #ccc; width: 160px;">
      <tr><th style="color: #00E5FF;">Cavalaria</th></tr>
      <tr><td><img src="/graphic/unit/unit_spy.png"> <input type="text" id="unit_spy" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="spy" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_light.png"> <input type="text" id="unit_light" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="light" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_marcher.png"> <input type="text" id="unit_marcher" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="marcher" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_heavy.png"> <input type="text" id="unit_heavy" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="heavy" title="Usar máximo disponível"></td></tr>
    </table>

    <!-- CERCO -->
    <table class="marques-tabela-unidades" style="background: transparent; border: none; font-family: 'pf-videotext'; color: #ccc; width: 160px;">
      <tr><th style="color: #00E5FF;">Cerco</th></tr>
      <tr><td><img src="/graphic/unit/unit_ram.png"> <input type="text" id="unit_ram" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="ram" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_catapult.png"> <input type="text" id="unit_catapult" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="catapult" title="Usar máximo disponível"></td></tr>
<tr><td class="placeholder-row"></td></tr>
<tr><td class="placeholder-row"></td></tr>
    </table>

    <!-- OUTROS -->
    <table class="marques-tabela-unidades" style="background: transparent; border: none; font-family: 'pf-videotext'; color: #ccc; width: 160px;">
      <tr><th style="color: #00E5FF;">Outros</th></tr>
      <tr><td><img src="/graphic/unit/unit_knight.png"> <input type="text" id="unit_knight" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="knight" title="Usar máximo disponível"></td></tr>
      <tr><td><img src="/graphic/unit/unit_snob.png"> <input type="text" id="unit_snob" placeholder="0" style="width: 40px;"> <input type="checkbox" class="use-max" data-unit="snob" title="Usar máximo disponível"></td></tr>
<tr><td class="placeholder-row"></td></tr>
<tr><td class="placeholder-row"></td></tr>
    </table>
  </div>


    <!-- Linha 1 -->
    <div class="tw-config-row" style="flex-wrap: nowrap; gap: 16px;">
  <label>Tipo:</label>
  <select id="tipoComando">
    <option value="attack">Ataque</option>
    <option value="support">Apoio</option>
  </select>

  <div id="campoAflicao" style="display: none; align-items: center; gap: 6px;">
    <label for="aflicaoPercentual">Aflição (%):</label>
    <input type="number" id="aflicaoPercentual" value="0" min="0" max="99" style="width: 60px;">
  </div>

  <label>Modelo de NT:</label>
  <select id="modeloNT">
    <option value="SEM NT">SEM NT</option>
    <option value="NT 2">NT 2</option>
    <option value="NT 3">NT 3</option>
    <option value="NT 4">NT 4</option>
    <option value="NT 5">NT 5</option>
  </select>

  <label>Alvo das Catapultas:</label>
  <select id="alvoCatapultas">
    <option value="Padrão">Padrão</option>
        <option value="main">Edifício principal</option>
        <option value="barracks">Quartel</option>
        <option value="stable">Estábulo</option>
        <option value="garage">Oficina</option>
        <option value="watchtower">Torre de vigia</option>
        <option value="snob">Academia</option>
        <option value="smith">Ferreiro</option>
        <option value="place">Praça de reunião</option>
        <option value="statue">Estátua</option>
        <option value="market">Mercado</option>
        <option value="wood">Bosque</option>
        <option value="stone">Poço de argila</option>
        <option value="iron">Mina de ferro</option>
        <option value="farm">Fazenda</option>
        <option value="storage">Armazém</option>
        <option value="wall">Muralha</option>
      </select>
    </div>

    <!-- Linha 2 -->
    <div class="tw-config-row">
      <label>Destino:</label>
      <input type="text" id="destinoCoord" placeholder="123|456" />
      <label>Base:</label>
      <select id="baseHorario">
        <option value="arrival">Chegada</option>
        <option value="send">Envio</option>
      </select>
      <label>Horário:</label>
     <input type="datetime-local"
       id="horaAgendada"
       step="0.001"  style="width: 220px;" />

    </div>

    <div class="tw-config-row" style="margin-top: 12px;">
      <button class="btn-neon" id="btnAgendarSimples">📌 Agendar Comando</button>
    </div>

<div id="blocoNT" style="display:none; margin-top: 12px;">
  <div class="tw-config-row" style="margin-bottom: 6px;">
    <label for="modoDivisaoNT">Dividir tropas do NT:</label>
    <select id="modoDivisaoNT">
      <option value="fixo">Unidades</option>
      <option value="percentual">Percentual</option>
    </select>
  </div>

  <label style="color:#ccc;">Tropas por linha de NT:</label>
  <div id="nt-linhas-container"></div>
</div>

  </div> <!-- fecha aba simples -->

<!-- Aba Massa -->
<div id="tab-massa" class="marques-tab-content">

  <!-- Linha de tropas -->
  <div class="tw-config-row" style="margin-top: 4px; width: 100%;">
    <div style="
      display: grid;
      grid-template-columns: repeat(13, 1fr);
      gap: 10px;
      justify-items: center;
      align-items: center;
      width: 100%;
    ">
      ${[
        "spear",
        "sword",
        "axe",
        "archer",
        "spy",
        "light",
        "marcher",
        "heavy",
        "ram",
        "catapult",
        "knight",
        "snob",
      ]
        .map(
          (unit) => `
        <div style="display: flex; flex-direction: column; align-items: center;">
          <div style="display: flex; align-items: center; gap: 3px;">
            <img src="/graphic/unit/unit_${unit}.png" title="${unit}" width="20" />
            <input type="checkbox" class="use-max-mass" data-unit="${unit}" title="Usar máximo" style="transform: scale(0.9);" />
          </div>
          <input type="text" id="mass_${unit}" placeholder="0"
                 style="width: 41px; text-align: center; font-size: 11px; padding: 1px 3px; border-radius: 4px;">
        </div>
      `
        )
        .join("")}
    </div>
  </div>

  <!-- Alvo e Modelo NT -->
  <div class="tw-config-row">
    <label>Alvo das Catapultas:</label>
    <select id="mass_alvoCatapultas" style="min-width: 180px;"></select>

    <label>Modelo de NT:</label>
    <select id="mass_modeloNT" style="min-width: 120px;"></select>
  </div>

<div id="blocoNT-massa" style="display:none; margin-top: 12px;">
  <div class="tw-config-row" style="margin-bottom: 6px;">
    <label for="modoDivisaoNT-massa">Dividir tropas do NT:</label>
    <select id="modoDivisaoNT-massa">
      <option value="fixo">Unidades</option>
      <option value="percentual">Percentual</option>
    </select>
  </div>

  <label style="color:#ccc;">Tropas por linha de NT:</label>
  <div id="nt-linhas-container-massa"></div>
</div>


  <!-- Grupo e Coordenadas Origem -->
  <div class="tw-config-row">
    <label>Grupo de Origem:</label>
    <select id="mass_grupoOrigem" style="min-width: 160px;"></select>
    <button class="btn-neon" id="btnImportarCoordenadas">Importar Coordenadas</button>
    <button class="btn-neon" id="btnRemoverCoordenadasAgendadas" style="background:#c62828;">Remover Agendadas</button>
  </div>

  <div class="tw-config-row">
    <label style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
  <span>Coordenadas Origem:</span>
  <span id="contadorCoordsOrigem" style="font-size: 12px; color: #00E5FF;">0 coordenadas</span>
</label>

    <textarea id="mass_coordsOrigem" rows="3" style="width: 100%; resize: vertical;"></textarea>
  </div>

  <!-- Nro Origem e Definição -->
  <div class="tw-config-row">
    <label>Nro de Origem por Destino:</label>
    <input type="number" id="mass_numOrigem" style="width: 80px; margin-right: 20px;">
    <label>Definir Origens por Destino:</label>
    <select id="mass_criterioDestino" style="min-width: 200px;">
      <option value="mais_proximas">Priorizar Mais Próximas</option>
      <option value="distribuir">Distribuir Iguais</option>
    </select>
  </div>

  <!-- Coordenadas Destino -->
  <div class="tw-config-row">
    <label style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
  <span>Coordenadas Destino:</span>
  <span id="contadorCoordsDestino" style="font-size: 12px; color: #00E5FF;">0 coordenadas</span>
</label>

    <textarea id="mass_coordsDestino" rows="3" style="width: 100%; resize: vertical;"></textarea>
  </div>

<div style="margin-bottom: 10px; display: flex; gap: 12px; align-items: center;">
  <label for="modalidadeCadastro" style="color: #ccc; font-family: 'pf-videotext';">Modalidade de Cadastro:</label>
  <select id="modalidadeCadastro" style="padding: 4px 8px; font-size: 13px;">
    <option value="programado">Programado</option>
    <option value="envio_imediato">Envio Imediato</option>
    <option value="aleatorio">Programação Aleatória</option>
  </select>
</div>

<!-- Seletor de base de horário (visível só em "aleatorio") -->
<div id="grupoBaseHorario" style="display: none; margin-bottom: 10px;">
  <label for="modalidadeHorario" style="color: #ccc; font-family: 'pf-videotext';">Definir Horário:</label>
  <select id="modalidadeHorario" style="margin-left: 8px; padding: 4px 8px;">
    <option value="arrival">Chegada</option>
    <option value="send">Envio</option>
  </select>
</div>

<!-- Campo padrão de horário (para "programado") -->
<div id="campoHorarioSimples" style="margin-bottom: 10px;">
  <label for="mass_horario" style="color: #ccc; font-family: 'pf-videotext';">Horário:</label>
  <input id="mass_horario" type="datetime-local"  step="0.001" style="margin-left: 8px; padding: 4px 8px;">
</div>

<!-- Campo de intervalo (para "aleatorio") -->
<div id="campoHorarioIntervalo" style="display: none; margin-bottom: 10px;">
  <label style="color: #ccc; font-family: 'pf-videotext';">Horário:</label>
  <input id="mass_horario_inicio" type="datetime-local" step="1" style="margin-left: 8px; padding: 4px 8px;">
  <span style="margin: 0 6px; color: #ccc;">Até</span>
  <input id="mass_horario_fim" type="datetime-local"  step="0.001" style="padding: 4px 8px;">
</div>

  <!-- Opções -->
  <div class="tw-config-row" style="gap: 16px;">
    <label><input type="checkbox" id="mass_enviarMesmoBN"> Enviar Mesmo se Bater no BN</label>
    <label><input type="checkbox" id="mass_enviarMesmoAtrasado"> Enviar Mesmo com Atraso</label>
      </div>

  <!-- Botões -->
  <div class="tw-config-row" style="justify-content: space-between; margin-top: 10px;">
    <button class="btn-neon" id="btnConfirmarAtaqueMassa">Confirmar Ataque em Massa</button>
    <button class="btn-neon" id="btnConfirmarApoioMassa" style="background:#3399ff;">Confirmar Apoio em Massa</button>
  </div>

</div>


</div>
</div>

  <!-- Aba Comandos Agendados -->
<div id="tab-agendados" class="marques-tab-content">

  <div class="twag-agd-actions">
    <button id="btn-excluir-todos" class="twag-btn-red">🧹 Excluir Todos</button>
  </div>

  <div class="twag-scrollwrap">          <!-- <<< scroll só aqui -->
    <table class="marques-tabela-comandos">
      <thead>
        <tr>
          <th>Comando</th>
          <th>Origem</th>
          <th>Destino</th>
          <th>Saída</th>
          <th>Chegada</th>
          <th>Ação</th>
        </tr>
      </thead>

      <tbody id="corpoTabelaAgendados" class="twag-scrollbody"></tbody>
    </table>
  </div>
</div>



`;
      document.body.appendChild(painel);
      setTimeout(retomarComandosPendentes, 2000);
      document
        .getElementById("modalidadeCadastro")
        .addEventListener("change", function () {
          const modo = this.value;
          const baseHorario = document.getElementById("grupoBaseHorario");
          const horarioSimples = document.getElementById("campoHorarioSimples");
          const horarioIntervalo = document.getElementById(
            "campoHorarioIntervalo"
          );

          if (modo === "programado") {
            baseHorario.style.display = "none";
            horarioSimples.style.display = "";
            horarioIntervalo.style.display = "none";
          } else if (modo === "envio_imediato") {
            baseHorario.style.display = "none";
            horarioSimples.style.display = "none";
            horarioIntervalo.style.display = "none";
          } else if (modo === "aleatorio") {
            baseHorario.style.display = "";
            horarioSimples.style.display = "none";
            horarioIntervalo.style.display = "";
          }
        });
      // Carrega os grupos da conta no select mass_grupoOrigem
      $.get(
        TribalWars.buildURL("GET", "groups", { ajax: "load_group_menu" })
      ).then((res) => {
        const select = document.getElementById("mass_grupoOrigem");
        select.innerHTML = "";
        res.result.forEach((grupo) => {
          if (grupo.type !== "separator") {
            const opt = document.createElement("option");
            opt.value = grupo.group_id;
            opt.textContent = grupo.name;
            select.appendChild(opt);
          }
        });
      });

      document
        .getElementById("corpoTabelaAgendados")
        .addEventListener("click", (e) => {
          const btn = e.target.closest(".btn-editar");
          if (!btn) return;
          editarComando(+btn.dataset.index);
        });
      document.body.addEventListener("click", (e) => {
        const btn = e.target.closest(".btn-salvar-edicao");
        if (!btn) return;
        salvarEdicaoComando(+btn.dataset.index);
      });

      async function importarCoordenadasGrupo() {
        const grupoId = document.getElementById("mass_grupoOrigem")?.value;
        if (!grupoId) return alert("Selecione um grupo de origem.");

        const coords = [];

        await $.get(
          TribalWars.buildURL("GET", "overview_villages", {
            mode: "combined",
            group: grupoId,
          })
        ).then((html) => {
          const $html = $(html);
          $html.find("#combined_table tr.row_a, tr.row_b").each((_, el) => {
            const coord = $(el)
              .find(".quickedit-label")
              .text()
              .match(/\d+\|\d+/)?.[0];
            if (coord) coords.push(coord);
          });
        });

        if (coords.length === 0) {
          alert("Nenhuma coordenada encontrada para esse grupo.");
        } else {
          document.getElementById("mass_coordsOrigem").value = coords.join(" ");
          atualizarContadorCoordsOrigem();
        }
      }
      document
        .getElementById("btnImportarCoordenadas")
        .addEventListener("click", importarCoordenadasGrupo);
      document
        .getElementById("btnRemoverCoordenadasAgendadas")
        .addEventListener("click", () => {
          const textarea = document.getElementById("mass_coordsOrigem");
          const coordsTexto = textarea.value;
          const coords = (coordsTexto.match(/\d{3}\|\d{3}/g) || []).map(
            (coord) => coord.trim()
          );

          const comandos = lerComandos();
          const coordsAgendadas = new Set(comandos.map((c) => c.origem));

          const filtradas = coords.filter((c) => !coordsAgendadas.has(c));

          textarea.value = filtradas.join(" ");
          atualizarContadorCoordsOrigem();

          const removidas = coords.length - filtradas.length;
          UI.SuccessMessage(
            `🧹 ${removidas} coordenadas removidas por já estarem agendadas.`
          );
        });

      document
        .getElementById("mass_coordsOrigem")
        .addEventListener("input", atualizarContadorCoordsOrigem);
      document
        .getElementById("mass_coordsDestino")
        .addEventListener("input", atualizarContadorCoordsDestino);
      document
        .getElementById("btnConfirmarAtaqueMassa")
        .addEventListener("click", () => {
          gerarComandosMassa("attack");
        });

      document
        .getElementById("btnConfirmarApoioMassa")
        .addEventListener("click", () => {
          gerarComandosMassa("support");
        });

      const origens =
        document
          .getElementById("mass_coordsOrigem")
          .value.match(/\d{3}\|\d{3}/g) || [];
      const destinos =
        document
          .getElementById("mass_coordsDestino")
          .value.match(/\d{3}\|\d{3}/g) || [];
      const numPorDestino = parseInt(
        document.getElementById("mass_numOrigem").value || "0"
      );
      const criterio = document.getElementById("mass_criterioDestino").value;

      const atribuicoes = distribuirOrigensPorDestino(
        origens,
        destinos,
        numPorDestino,
        criterio
      );

      // Teste no console
      console.log("📦 Atribuições origem → destino:", atribuicoes);

      Object.entries(atribuicoes).forEach(([destino, origensSelecionadas]) => {
        origensSelecionadas.forEach((origem) => {
          console.log(`➡️ Criar comando de ${origem} para ${destino}`);
          // Aqui você pode gerar o comando real e salvar
        });
      });
      async function gerarComandosMassa(tipoComando) {
        const origens =
          document
            .getElementById("mass_coordsOrigem")
            .value.match(/\d{3}\|\d{3}/g) || [];
        const destinos =
          document
            .getElementById("mass_coordsDestino")
            .value.match(/\d{3}\|\d{3}/g) || [];
        let numPorDestino = parseInt(
          document.getElementById("mass_numOrigem").value || "0",
          10
        );

        if (!numPorDestino) {
          /* divide origens de forma uniforme, mas sem repetir
     exemplo: 38 origens / 10 destinos → 3 por destino       */
          numPorDestino = Math.max(
            1,
            Math.floor(origens.length / destinos.length)
          );
        }
        const criterio = document.getElementById("mass_criterioDestino").value;
        const modeloNT = document.getElementById("mass_modeloNT").value;
        const alvoCatapultas = document.getElementById(
          "mass_alvoCatapultas"
        ).value;
        const permitirAtrasado = document.getElementById(
          "mass_enviarMesmoAtrasado"
        )?.checked;
        const modalidadeCadastro =
          document.getElementById("modalidadeCadastro")?.value || "programado";

        const baseHorario =
          modalidadeCadastro === "aleatorio"
            ? document.getElementById("modalidadeHorario")?.value || "arrival"
            : modalidadeCadastro === "envio_imediato"
            ? "departure" // ← envia pelo horário de SAÍDA
            : "arrival";

        // ① inicializa como array vazio
        let linhasNT = [];

        // ② se for NT, percorre cada "linha" de inputs e monta o objeto
        if (modeloNT !== "SEM NT") {
          linhasNT = Array.from(document.querySelectorAll(".nt-linha")).map(
            (linhaEl) => {
              const dadosLinha = {};
              linhaEl.querySelectorAll("input[data-unit]").forEach((inp) => {
                const unit = inp.dataset.unit;
                const raw = (inp.value || "").trim().toLowerCase();
                if (raw === "max") dadosLinha[unit] = "full";
                else if (!isNaN(parseInt(raw)))
                  dadosLinha[unit] = parseInt(raw, 10);
              });
              return dadosLinha;
            }
          );
        }
        let horarioFixo = null;
        if (modalidadeCadastro === "programado") {
          horarioFixo = document.getElementById("mass_horario").value;
          if (!horarioFixo) {
            UI.ErrorMessage(
              "⏰ Informe o horário para o envio dos comandos (modo Programado)."
            );
            return;
          }
        } else if (modalidadeCadastro === "aleatorio") {
          const intervaloInicio = document.getElementById(
            "mass_horario_inicio"
          )?.value;
          const intervaloFim =
            document.getElementById("mass_horario_fim")?.value;
          if (!intervaloInicio || !intervaloFim) {
            UI.ErrorMessage("⏰ Defina o intervalo de horários aleatórios.");
            return;
          }
        }

        if (destinos.length === 0 || origens.length === 0) {
          UI.ErrorMessage("❌ Preencha as coordenadas de origem e destino.");
          return;
        }

        const tropas = {};
        const todasUnidades = [
          "spear",
          "sword",
          "axe",
          "archer",
          "spy",
          "light",
          "marcher",
          "heavy",
          "ram",
          "catapult",
          "knight",
          "snob",
        ];

        todasUnidades.forEach((unit) => {
          const input = document.getElementById(`mass_${unit}`);
          const checkbox = document.querySelector(
            `.use-max-mass[data-unit="${unit}"]`
          );
          if (checkbox?.checked) {
            tropas[unit] = "full";
          } else {
            const val = parseInt(input?.value || "0");
            if (val > 0) tropas[unit] = val;
          }
        });

        if (Object.keys(tropas).length === 0) {
          UI.ErrorMessage(
            "❌ Configure pelo menos uma tropa para agendar os comandos."
          );
          return;
        }

        const atribuicoes = distribuirOrigensPorDestino(
          origens,
          destinos,
          numPorDestino,
          criterio
        );
        const comandosSalvos = lerComandos();
        const novosComandos = [];
        const bloqueados = [];
        const atrasados = [];
        let ordemEnvio = 0;

        for (const [destino, origensSelecionadas] of Object.entries(
          atribuicoes
        )) {
          for (const origem of origensSelecionadas) {
            const speeds = await carregarVelocidades();
            const unids = Object.keys(tropas);
            const maisLenta = unids.reduce(
              (a, b) => (speeds[a] > speeds[b] ? a : b),
              unids[0] || "spear"
            );
            const velMaisLenta = speeds[maisLenta] || 1;

            let horario = null;
            let horarioEnvio = null;

            if (modalidadeCadastro === "aleatorio") {
              const intervaloInicio = document.getElementById(
                "mass_horario_inicio"
              )?.value;
              const intervaloFim =
                document.getElementById("mass_horario_fim")?.value;
              horario = gerarHorarioAleatorio(intervaloInicio, intervaloFim);
              if (!horario) {
                console.warn("⛔ Falha ao gerar horário aleatório:", {
                  intervaloInicio,
                  intervaloFim,
                });
                continue;
              }
              horarioEnvio =
                baseHorario === "arrival"
                  ? calcularEnvio(horario, velMaisLenta, origem, destino)
                  : horario;
            } else if (modalidadeCadastro === "programado") {
              horario = horarioFixo;
              horarioEnvio =
                baseHorario === "arrival"
                  ? calcularEnvio(horario, velMaisLenta, origem, destino)
                  : horario;
            } else if (modalidadeCadastro === "envio_imediato") {
              /* relógio do servidor + 30 s (1º) / 15 s (demais) */
              const serverNow = getServerTimestamp(); // ms no fuso BR
              const atrasoMs =
                ordemEnvio === 0 ? 30_000 : 30_000 + 15_000 * (ordemEnvio - 1);
              const envioMs = serverNow + atrasoMs;

              /* string local com milissegundos */
              const localStr = formatarParaStringLocal(envioMs); // "YYYY-MM-DD HH:MM:SS.mmm"

              horario = localStr; // exibir na UI
              horarioEnvio = localStr; // "YYYY-MM-DDTHH:MM:SS.mmm"
            } else {
              /* fallback (deixa como estava) */
              horario = new Date().toISOString().slice(0, 19).replace("T", " ");
              horarioEnvio = horario;
            }

            /* incrementa o contador ao fim de cada iteração ----------------*/
            ordemEnvio++;

            // ❌ Evita salvar comandos inválidos
            if (!horario || !horarioEnvio) {
              console.warn("❌ Comando ignorado por horário inválido:", {
                origem,
                destino,
                horario,
                horarioEnvio,
              });
              continue;
            }

            const envioTimestamp = new Date(horarioEnvio).getTime();
            const agora = Date.now();
            if (!permitirAtrasado && envioTimestamp < agora) {
              atrasados.push(`${origem} → ${destino}`);
              continue;
            }
            const origemId = await getVillageIdByCoord(origem);
            console.log("🌐 ID da aldeia para", origem, "→", origemId);
            if (!origemId) {
              console.warn(
                `⚠️ Não foi possível obter o ID da aldeia ${origem}. Comando ignorado.`
              );
              continue;
            }

            const [x, y] = destino.split("|");
            const comandoId = Date.now() + Math.floor(Math.random() * 10000);

            const comando = {
              id: comandoId,
              enviado: false,
              opened: false,
              url: `${location.origin}/game.php?village=${origemId}&screen=place&x=${x}&y=${y}&cmdId=${comandoId}`,
              origem,
              destino,
              tipo: tipoComando,
              modeloNT,
              alvoCatapultas,
              baseHorario,
              chegadaDesejada: baseHorario === "arrival" ? horario : null,
              horarioEnvio,
              tropas,
              modoDivisaoNT:
                document.getElementById("modoDivisaoNT-massa")?.value || "fixo",
              linhasNT: linhasNT || [],
              modoCadastro: modalidadeCadastro,
            };
            /* ────────── bloqueio BN ────────── */
            const allowBN =
              document.getElementById("mass_enviarMesmoBN")?.checked;
            const dist = getDistance(origem, destino); // usa helper existente
            const chegadaTs =
              baseHorario === "arrival"
                ? new Date(horario).getTime()
                : new Date(horarioEnvio).getTime() +
                  velMaisLenta * 60_000 * dist;

            if (!allowBN && estaNoBN(chegadaTs)) {
              bloqueados.push(
                `${origem} → ${destino} às ${new Date(
                  chegadaTs
                ).toLocaleTimeString()}`
              );
              continue; // NÃO salva este comando
            }
            /* ────────── fim bloqueio ────────── */

            novosComandos.push(comando);
          }
        }
        if (bloqueados.length) {
          alert(
            `⚠️ ${bloqueados.length} comando(s) caem no Bônus Noturno e foram ignorados:\n` +
              bloqueados.join("\n")
          );
        }

        salvarComandos([...comandosSalvos, ...novosComandos]);

        if (atrasados.length > 0 && !permitirAtrasado) {
          UI.ErrorMessage(
            `⚠️ ${
              atrasados.length
            } comandos não foram agendados por estarem atrasados:\n${atrasados.join(
              "\n"
            )}`
          );
        }

        UI.SuccessMessage(
          `✅ ${novosComandos.length} comandos agendados com sucesso!`
        );
      }

      function gerarHorarioAleatorio(inicioCompleto, fimCompleto) {
        try {
          const inicioMs = new Date(inicioCompleto).getTime();
          const fimMs = new Date(fimCompleto).getTime();

          if (isNaN(inicioMs) || isNaN(fimMs)) return null;

          const aleatorioMs =
            inicioMs + Math.floor(Math.random() * (fimMs - inicioMs));
          const aleatorioDate = new Date(aleatorioMs);

          const pad = (n) => String(n).padStart(2, "0");
          const ms = String(aleatorioDate.getMilliseconds()).padStart(3, "0");

          return (
            `${aleatorioDate.getFullYear()}-${pad(
              aleatorioDate.getMonth() + 1
            )}-${pad(aleatorioDate.getDate())} ` +
            `${pad(aleatorioDate.getHours())}:${pad(
              aleatorioDate.getMinutes()
            )}:${pad(aleatorioDate.getSeconds())}.${ms}`
          );
        } catch (e) {
          console.warn("Erro ao gerar horário aleatório:", e);
          return null;
        }
      }

      function gerarHorariosEnvioImediato(qtd) {
        const agora = Date.now();
        const horarios = [];
        for (let i = 0; i < qtd; i++) {
          const atraso = i === 0 ? 30_000 : 15_000 * i; // 30 s no 1º, 15 s nos demais
          horarios.push(new Date(agora + atraso).toISOString());
        }
        return horarios;
      }

      function atualizarContadorCoordsOrigem() {
        const textarea = document.getElementById("mass_coordsOrigem");
        const contador = document.getElementById("contadorCoordsOrigem");
        if (!textarea || !contador) return;

        const texto = textarea.value.trim();
        const coords = texto.match(/\d{3}\|\d{3}/g) || [];
        contador.textContent = `${coords.length} coordenadas`;
      }
      function atualizarContadorCoordsDestino() {
        const textarea = document.getElementById("mass_coordsDestino");
        const contador = document.getElementById("contadorCoordsDestino");
        if (!textarea || !contador) return;

        const texto = textarea.value.trim();
        const coords = texto.match(/\d{3}\|\d{3}/g) || [];
        contador.textContent = `${coords.length} coordenadas`;
      }

      // 🔄 Copia opções do Agendador Simples para o Agendador em Massa
      const modeloSimples = document.getElementById("modeloNT");
      const catapultasSimples = document.getElementById("alvoCatapultas");
      const modeloMassa = document.getElementById("mass_modeloNT");
      const catapultasMassa = document.getElementById("mass_alvoCatapultas");

      if (modeloSimples && modeloMassa) {
        modeloMassa.innerHTML = modeloSimples.innerHTML;
      }

      if (catapultasSimples && catapultasMassa) {
        catapultasMassa.innerHTML = catapultasSimples.innerHTML;
      }

      document
        .getElementById("mass_modeloNT")
        .addEventListener("change", () => {
          const modelo = document.getElementById("mass_modeloNT").value;
          const bloco = document.getElementById("blocoNT-massa");
          const container = document.getElementById(
            "nt-linhas-container-massa"
          );

          bloco.style.display = modelo !== "SEM NT" ? "block" : "none";
          container.innerHTML = "";

          if (modelo !== "SEM NT") {
            const linhasExtras = parseInt(modelo.replace("NT ", "")) - 1;
            for (let i = 0; i < linhasExtras; i++) {
              adicionarLinhaNTMassa(i);
            }
          }
        });
      /* ===== Arrastar painel ===== */
      (function makeDraggable() {
        const painel = document.getElementById("tw-agendador");
        const alca = document.getElementById("tw-agendador-header");
        let offsetX = 0;
        let offsetY = 0;
        let dragging = false;

        alca.addEventListener("mousedown", (e) => {
          dragging = true;
          const rect = painel.getBoundingClientRect();
          offsetX = e.clientX - rect.left;
          offsetY = e.clientY - rect.top;
          document.body.style.userSelect = "none";
        });

        document.addEventListener("mousemove", (e) => {
          if (!dragging) return;
          painel.style.left = `${e.clientX - offsetX}px`;
          painel.style.top = `${e.clientY - offsetY}px`;
        });

        document.addEventListener("mouseup", () => {
          dragging = false;
          document.body.style.userSelect = "";
        });
      })();
      const spanOrigem = document.getElementById("aldeiaOrigem");
      if (
        game_data.village &&
        game_data.village.name &&
        game_data.village.coord
      ) {
        spanOrigem.textContent = `${game_data.village.name} (${game_data.village.coord})`;
      }

      // Exibe ou oculta o campo de aflição quando muda o tipo
      document
        .getElementById("tipoComando")
        .addEventListener("change", function () {
          const tipo = this.value;
          const campoAfl = document.getElementById("campoAflicao");
          campoAfl.style.display = tipo === "support" ? "inline-flex" : "none";
        });

      document
        .getElementById("btnAgendarSimples")
        .addEventListener("click", async () => {
          const tropas = {};
          const campos = document.querySelectorAll('[id^="unit_"]');

          campos.forEach((input) => {
            const unidade = input.id.replace("unit_", "");
            const valor = parseInt(input.value || "0", 10);
            const checkbox = document.querySelector(
              `.use-max[data-unit="${unidade}"]`
            );
            if (checkbox && checkbox.checked) {
              tropas[unidade] = "full";
            } else if (valor > 0) {
              tropas[unidade] = valor;
            }
          });

          const origem = game_data.village.coord;
          const destino = document.getElementById("destinoCoord").value.trim();
          const tipo = document.getElementById("tipoComando").value;
          const modeloNT = document.getElementById("modeloNT").value;
          const alvoCatapultas =
            document.getElementById("alvoCatapultas").value;
          const baseHorario = document.getElementById("baseHorario").value;
          const horario = document.getElementById("horaAgendada").value;
          const speeds = await carregarVelocidades(); // usa o helper que já existe
          const unids = Object.keys(tropas);
          const maisLenta = unids.reduce(
            (a, b) => (speeds[a] > speeds[b] ? a : b),
            unids[0] || "spear"
          );
          let velMaisLenta = speeds[maisLenta] || 1;

          // Verifica aflição se for apoio
          if (tipo === "support") {
            const aflicao = parseFloat(
              document.getElementById("aflicaoPercentual")?.value || "0"
            );
            if (!isNaN(aflicao) && aflicao > 0 && aflicao < 100) {
              velMaisLenta *= 1 - aflicao / 100;
            }
          }

          if (!destino.match(/^\d{3}\|\d{3}$/)) {
            UI.ErrorMessage("Destino inválido! Use o formato 000|000.");
            return;
          }

          if (!horario) {
            UI.ErrorMessage("Informe o horário do comando.");
            return;
          }

          // 🚫 Validação extra se modeloNT exigir nobre configurado corretamente
          if (modeloNT !== "SEM NT") {
            const qntNobres =
              tropas.snob === "full" ? 5 : parseInt(tropas.snob) || 0;
            if (qntNobres === 0) {
              UI.ErrorMessage(
                "❌ Para NT é necessário configurar pelo menos 1 nobre."
              );
              return;
            }
            if (tropas.snob === "full" || qntNobres > 3) {
              UI.ErrorMessage(
                "❌ Não é permitido enviar todos os nobres com NT. Ajuste a quantidade."
              );
              return;
            }
          }

          // 🧠 Coleta das linhas NT (caso aplicável)
          let linhasNT = null;
          if (modeloNT !== "SEM NT") {
            linhasNT = Array.from(document.querySelectorAll(".nt-linha")).map(
              (linha) => {
                const inputs = linha.querySelectorAll("input.nt-input");
                const dados = {};
                inputs.forEach((input) => {
                  const val = input.value.trim();
                  if (val !== "") {
                    dados[input.dataset.unit] =
                      val.toLowerCase() === "max" ? "full" : parseInt(val, 10);
                  } else {
                    dados[input.dataset.unit] = 0; // salva 0 explicitamente
                  }
                });
                return dados;
              }
            );
          }
          const modoDivisaoNT = document.getElementById("modoDivisaoNT").value;

          const comando = {
            id: Date.now(),
            enviado: false,
            opened: false,
            url: "",
            origem,
            tropas,
            destino,
            tipo,
            modeloNT,
            alvoCatapultas,
            baseHorario,
            horario,
            chegadaDesejada: baseHorario === "arrival" ? horario : null,
            horarioEnvio:
              baseHorario === "arrival"
                ? calcularEnvio(horario, velMaisLenta, origem, destino)
                : horario,
            modoDivisaoNT,
            linhasNT,
            aflicao:
              tipo === "support"
                ? parseFloat(
                    document.getElementById("aflicaoPercentual")?.value || "0"
                  )
                : 0,
          };

          /* -- preenche a url de /screen=place -- */
          const [tx, ty] = destino.split("|").map(Number); // "543|510"
          const idOrigem = game_data.village.id; // aldeia de origem
          const baseURL = unsafeWindow.location.origin; // https://br123.tribalwars.com.br

          /* ► usa parâmetros x e y – o jogo já coloca as coords nos inputs */
          comando.url = `${baseURL}/game.php?village=${idOrigem}&screen=place&x=${tx}&y=${ty}`;

          /* agora sim grava */
          const lista = lerComandos();
          lista.push(comando);
          salvarComandos(lista);

          UI.SuccessMessage("✅ Comando agendado com sucesso!");
        });

      document.getElementById("modeloNT").addEventListener("change", () => {
        const modelo = document.getElementById("modeloNT").value;
        const blocoNT = document.getElementById("blocoNT");
        const container = document.getElementById("nt-linhas-container");
        blocoNT.style.display = modelo !== "SEM NT" ? "block" : "none";
        container.innerHTML = "";

        if (modelo !== "SEM NT") {
          const linhasExtras = parseInt(modelo.replace("NT ", "")) - 1;
          for (let i = 0; i < linhasExtras; i++) {
            adicionarLinhaNT(i);
          }
        }
      });

      function adicionarLinhaNT(idx) {
        const todasUnidades = [
          "spear",
          "sword",
          "axe",
          "archer",
          "spy",
          "light",
          "marcher",
          "heavy",
          "ram",
          "catapult",
          "knight",
          "snob",
        ];

        const linha = document.createElement("div");
        linha.className = "nt-linha";
        linha.innerHTML = `
    <h4>#${idx + 2}</h4>
    <div class="nt-unidades">
      ${todasUnidades
        .map(
          (u) => `
        <div class="nt-unidade">
          <img src="/graphic/unit/unit_${u}.png" alt="${u}">
          <input type="text"
                 class="nt-input"
                 data-linha="${idx}"
                 data-unit="${u}"
                 ${
                   u === "snob"
                     ? 'value="1" disabled style="background:#333;cursor:not-allowed;"'
                     : ""
                 }
          />
        </div>
      `
        )
        .join("")}
    </div>
  `;
        document.getElementById("nt-linhas-container").appendChild(linha);
      }

      function adicionarLinhaNTMassa(idx) {
        const todasUnidades = [
          "spear",
          "sword",
          "axe",
          "archer",
          "spy",
          "light",
          "marcher",
          "heavy",
          "ram",
          "catapult",
          "knight",
          "snob",
        ];

        const linha = document.createElement("div");
        linha.className = "nt-linha";
        linha.innerHTML = `
    <h4>#${idx + 2}</h4>
    <div class="nt-unidades">
      ${todasUnidades
        .map(
          (u) => `
        <div class="nt-unidade">
          <img src="/graphic/unit/unit_${u}.png" alt="${u}">
          <input type="text"
                 class="nt-input"
                 data-linha="${idx}"
                 data-unit="${u}"
                 ${
                   u === "snob"
                     ? 'value="1" disabled style="background:#333;cursor:not-allowed;"'
                     : ""
                 }
          />
        </div>
      `
        )
        .join("")}
    </div>
  `;
        document.getElementById("nt-linhas-container-massa").appendChild(linha);
      }

      function distribuirOrigensPorDestino(
        origens,
        destinos,
        numPorDestino,
        criterio
      ) {
        const pool = [...origens]; // origens ainda disponíveis
        const atrib = {}; // resultado

        const dist = (o, d) => {
          const [ox, oy] = o.split("|").map(Number);
          const [dx, dy] = d.split("|").map(Number);
          return Math.hypot(ox - dx, oy - dy);
        };

        destinos.forEach((destino) => {
          /* ordena o pool atual conforme critério escolhido */
          const ordenadas = pool.slice().sort((a, b) => {
            if (criterio === "priorizar_mais_proximas")
              return dist(a, destino) - dist(b, destino);
            if (criterio === "priorizar_mais_distantes")
              return dist(b, destino) - dist(a, destino);
            return 0; // “aleatorio” mantém ordem
          });

          /* pega até 'numPorDestino' sem reutilizar */
          const selecionadas = ordenadas.slice(0, numPorDestino);

          /* remove do pool para que não apareçam em outro destino */
          selecionadas.forEach((o) => {
            const idx = pool.indexOf(o);
            if (idx > -1) pool.splice(idx, 1);
          });

          atrib[destino] = selecionadas; // pode ter menos que numPorDestino
        });

        return atrib;
      }
      function getDistance(coord1, coord2) {
        const [x1, y1] = coord1.split("|").map(Number);
        const [x2, y2] = coord2.split("|").map(Number);
        return Math.hypot(x1 - x2, y1 - y2);
      }
      function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      /* ================================================================
   ▸ Carrega apenas comandos **não enviados** e popula a tabela
   ================================================================ */
      async function carregarComandosAgendados() {
        const tabela = document.getElementById("corpoTabelaAgendados");
        if (!tabela) return;

        /* 1 ▸ filtra e ordena comandos não enviados */
        const comandos = lerComandos()
          .filter((c) => !c.enviado)
          .sort((a, b) => new Date(a.horarioEnvio) - new Date(b.horarioEnvio));

        tabela.innerHTML = "";
        if (!comandos.length) {
          tabela.innerHTML = `<tr><td colspan="6" style="color:#888;text-align:center;">Nenhum comando agendado.</td></tr>`;
          return;
        }

        /* formata timestamp completo com milissegundos */
        const formatFullTS = (s) => {
          const d = new Date(s);
          const pad = (n) => String(n).padStart(2, "0");
          return (
            `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ` +
            `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
              d.getSeconds()
            )}.` +
            `${String(d.getMilliseconds()).padStart(3, "0")}`
          );
        };

        /* 2 ▸ dados auxiliares */
        const speeds = await carregarVelocidades();
        const todasUnidades = [
          "spear",
          "sword",
          "axe",
          "archer",
          "spy",
          "light",
          "marcher",
          "heavy",
          "ram",
          "catapult",
          "knight",
          "snob",
        ];

        /* injeta estilos compactos (se ainda não existir) */
        if (!document.getElementById("twag-styles")) {
          const style = document.createElement("style");
          style.id = "twag-styles";
          style.textContent = `
    .twag-row-main { background: #222; border-radius: 6px; margin: 4px 0; }
    .twag-row-main td { padding: 4px 6px; color: #ddd; font-size: 12px; }
    .twag-expand { cursor: pointer; font-size: 13px; padding: 2px 4px; }
    .twag-row-details { display: none; background: #1b1b1b; border-radius: 6px; margin: 0 0 4px; }
    .twag-details {
      padding: 6px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      color: #ccc;
      align-items: center;
    }
    .twag-details-troops {
      display: flex;
      flex-wrap: nowrap;
      gap: 2px;
      overflow-x: auto;
      justify-content: center;
    }
    .twag-details-troops img { width: 10px !important; height: auto; }
    .twag-badge {
      display: inline-block;
      background: #333;
      border: 1px solid #444;
      border-radius: 6px;
      padding: 1px 4px;
      font-size: 10px;
      color: #eee;
      text-align: center;
      min-width: 20px;
    }
    .twag-info-line {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      font-size: 12px;
      align-items: center;
      justify-content: center;
    }
    .twag-section { padding-top: 4px; width: 100%; border-top: 1px solid #444; }
    .twag-actions { text-align: center; padding: 3px 6px; }
    .twag-nt-line {
      display: flex;
      flex-wrap: nowrap;
      gap: 2px;
      justify-content: center;
      align-items: center;
      margin: 2px 0;
    }
    .twag-nt-line strong { font-size: 12px; margin-right: 4px; }
  `;
          document.head.appendChild(style);
        }

        /* 3 ▸ renderiza cada comando */
        comandos.forEach((cmd, i) => {
          // linha principal
          const unidades = Object.keys(cmd.tropas || {});
          const slowest = unidades.reduce(
            (a, b) => (speeds[a] > speeds[b] ? a : b),
            unidades[0] || "spear"
          );
          const corFundo = cmd.tipo === "attack" ? "#8B0000" : "#005580";
          const icone = `/graphic/unit/unit_${slowest}.png`;
          const horSaida = cmd.horarioEnvio
            ? formatFullTS(cmd.horarioEnvio)
            : "—";
          const horCheg = cmd.chegadaDesejada
            ? formatFullTS(cmd.chegadaDesejada)
            : "—";

          const tr = document.createElement("tr");
          tr.className = "twag-row-main";
          tr.dataset.index = i;
          tr.innerHTML = `
      <td>
        <div style="background:${corFundo};padding:4px;border-radius:4px;display:inline-block;">
          <img src="${icone}" width="20" height="auto" />
        </div>
      </td>
      <td>${cmd.origem}</td>
      <td>${cmd.destino}</td>
      <td>${horSaida}</td>
      <td>${horCheg}</td>
      <td class="twag-actions">
        <button class="twag-expand">+</button>
        <button class="btn-remover" data-id="${cmd.id}">×</button>
      </td>
    `;
          tabela.appendChild(tr);

          // linha de detalhes
          const trD = document.createElement("tr");
          trD.className = "twag-row-details";
          const tdD = document.createElement("td");
          tdD.colSpan = 6;

          // Tropas: 1 linha só, sem wrap
          const tropasHTML = todasUnidades
            .map((u) => {
              const v =
                cmd.tropas?.[u] === "full" ? "Max" : cmd.tropas?.[u] || 0;
              return `<div style="display:flex;align-items:center;gap:2px;white-space:nowrap;">
                <img src="/graphic/unit/unit_${u}.png" width="12" height="auto"/>
                <span class="twag-badge">${v}</span>
              </div>`;
            })
            .join("");

          // Linhas NT detalhadas: pular NT1, exibir NT2...NTn
          let ntHTML = "";
          if (cmd.linhasNT && cmd.linhasNT.length > 1) {
            cmd.linhasNT.slice(1).forEach((linha, idx) => {
              const label = `NT ${idx + 2}:`;
              const lineUnits = todasUnidades
                .map((u) => {
                  const val = linha[u] || 0;
                  return `<div style="display:flex;align-items:center;gap:2px;white-space:nowrap;">
                    <img src="/graphic/unit/unit_${u}.png" width="12" height="auto"/>
                    <span class="twag-badge">${val}</span>
                  </div>`;
                })
                .join("");
              ntHTML += `<div class="twag-nt-line">
                     <strong style="margin-right:6px;">${label}</strong>
                     ${lineUnits}
                   </div>`;
            });
          }

          // Informações abaixo (Modelo NT, Catapultas, Base, Horário)
          const sections = [];
          sections.push(
            `<div><strong>Modelo NT:</strong> <span class="twag-badge">${
              cmd.modeloNT || "—"
            }</span></div>`
          );
          sections.push(
            `<div><strong>Catapultas:</strong> <span class="twag-badge">${
              cmd.alvoCatapultas || 0
            }</span></div>`
          );
          sections.push(
            `<div><strong>Base:</strong> <span class="twag-badge">${cmd.baseHorario}</span></div>`
          );
          const horaTxt =
            cmd.baseHorario === "arrival"
              ? formatFullTS(cmd.chegadaDesejada)
              : formatFullTS(cmd.horarioEnvio);
          sections.push(
            `<div><strong>Horário:</strong> <span class="twag-badge">${horaTxt}</span></div>`
          );
          const infoHTML = `<div class="twag-info-line">${sections.join(
            ""
          )}</div>`;

          tdD.innerHTML = `
      <div class="twag-details">
        <div class="twag-details-troops">${tropasHTML}</div>
        ${ntHTML ? `<div class="twag-section">${ntHTML}</div>` : ""}
        ${infoHTML}
      </div>
      <div class="twag-actions">
        <button class="btn-editar" data-index="${i}">✏️ Editar</button>
      </div>
    `;
          trD.appendChild(tdD);
          tabela.appendChild(trD);

          // toggle expande/colapsa
          tr.querySelector(".twag-expand").addEventListener("click", () => {
            const hidden = window.getComputedStyle(trD).display === "none";
            trD.style.display = hidden ? "table-row" : "none";
            tr.querySelector(".twag-expand").textContent = hidden ? "−" : "+";
          });
        });

        /* ----------------------------------------------------------------
     5 ▸ EVENTOS – usam data-id em vez de índice
     ----------------------------------------------------------------*/
        document.querySelectorAll(".btn-expandir").forEach((btn) => {
          btn.addEventListener("click", () => {
            const tr = btn.closest("tr");
            const trExpand = tr.nextElementSibling;
            trExpand.style.display =
              trExpand.style.display === "none" ? "table-row" : "none";
            btn.textContent = trExpand.style.display === "none" ? "+" : "-";
          });
        });

        document.querySelectorAll(".btn-remover").forEach((btn) => {
          btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const lista = lerComandos();
            const idx = lista.findIndex((c) => c.id == id);
            if (idx > -1) {
              lista.splice(idx, 1);
              salvarComandos(lista);
              carregarComandosAgendados(); // repinta a tabela
            }
          });
        });

        /* botão “Excluir Todos” permanece igual --------------------------- */
        document
          .getElementById("btn-excluir-todos")
          ?.addEventListener("click", () => {
            if (
              confirm(
                "Tem certeza que deseja excluir todos os comandos agendados?"
              )
            ) {
              localStorage.removeItem("TWAG_comandos");
              carregarComandosAgendados();
              UI.SuccessMessage("🧹 Todos os comandos foram excluídos.");
            }
          });
      }

      /* botão “Editar” -------------------------------------------------- */
      document.querySelectorAll(".btn-editar").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = +btn.dataset.index; // <string> → <number>
          editarComando(idx); // chama o editor
        });
      });

      async function carregarVelocidades() {
        const resp = await fetch("/interface.php?func=get_unit_info");
        const xmlText = await resp.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, "application/xml");
        const unidades = {};
        xml.querySelectorAll("config > *").forEach((el) => {
          const nome = el.nodeName;
          const velocidade = parseFloat(el.querySelector("speed").textContent);
          unidades[nome] = velocidade;
        });
        return unidades;
      }
      /* === Hora oficial do servidor (relógio no canto superior) ========= */
      function getServerTimestamp() {
        const t = document.getElementById("serverTime")?.textContent?.trim(); // "23:05:12"
        const d = document.getElementById("serverDate")?.textContent?.trim(); // "10/06/2025"
        if (!t || !d) return Date.now(); // fallback

        const [hh, mm, ss] = t.split(":").map(Number);
        const [dd, MM, yyyy] = d.split("/").map(Number);
        return new Date(yyyy, MM - 1, dd, hh, mm, ss).getTime();
      }
      function formatarParaStringLocal(ms) {
        const d = new Date(ms);
        const pad = (n) => String(n).padStart(2, "0");
        const mss = String(d.getMilliseconds()).padStart(3, "0");
        return (
          `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}` +
          ` ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(
            d.getSeconds()
          )}.${mss}`
        );
      }

      // calcula horário de envio a partir do horário-alvo de chegada
      function calcularEnvio(
        horarioChegada,
        velocidadeMinCampo,
        origemCoord,
        destinoCoord
      ) {
        try {
          if (!horarioChegada || !velocidadeMinCampo) return "Horário inválido";

          const chegada = new Date(horarioChegada);
          if (isNaN(chegada)) return "Horário inválido";

          const [ox, oy] = origemCoord.split("|").map(Number);
          const [dx, dy] = destinoCoord.split("|").map(Number);
          const distancia = Math.hypot(ox - dx, oy - dy);

          const tempoMin = distancia * velocidadeMinCampo;
          const envio = new Date(chegada.getTime() - tempoMin * 60_000);

          const pad = (n) => String(n).padStart(2, "0");
          const ms = String(envio.getMilliseconds()).padStart(3, "0");

          // ✅ Retorno no formato "YYYY-MM-DD HH:MM:SS.mmm"
          return (
            `${envio.getFullYear()}-${pad(envio.getMonth() + 1)}-${pad(
              envio.getDate()
            )} ` +
            `${pad(envio.getHours())}:${pad(envio.getMinutes())}:${pad(
              envio.getSeconds()
            )}.${ms}`
          );
        } catch (e) {
          console.warn("Erro ao calcular envio:", e);
          return "Erro";
        }
      }

      function editarComando(index) {
        const comandos = JSON.parse(
          localStorage.getItem("TWAG_comandos") || "[]"
        );
        const comando = comandos[index];
        const linhaExpandida =
          document.querySelectorAll(".linha-expandida")[index];
        const container = linhaExpandida.querySelector("td");

        const todasUnidades = [
          "spear",
          "sword",
          "axe",
          "archer",
          "spy",
          "light",
          "marcher",
          "heavy",
          "ram",
          "catapult",
          "knight",
          "snob",
        ];

        container.innerHTML = `
    <div style="padding: 8px; background: #1e1e1e; border-radius: 8px;">
      <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
        ${todasUnidades
          .map((unit) => {
            const valor = comando.tropas[unit];
            const valText = valor === "full" ? "Max" : valor || 0;
            return `
            <div style="display: flex; align-items: center; gap: 4px;">
              <img src="/graphic/unit/unit_${unit}.png" width="18" />
              <input type="text" data-unit="${unit}" value="${valText}" style="width: 50px; background: #2e2e2e; border: none; color: #ccc; border-radius: 4px; padding: 2px 4px; font-family: 'pf-videotext'; text-align: center;" />
            </div>
          `;
          })
          .join("")}
      </div>

      <div style="margin-top: 6px; font-size: 13px; color: #ccc;">
        <b>Modelo NT:</b>
        <select id="editModeloNT" style="margin-right: 12px;">
          ${["SEM NT", "NT 2", "NT 3", "NT 4", "NT 5"]
            .map(
              (opt) => `
            <option value="${opt}" ${
                comando.modeloNT === opt ? "selected" : ""
              }>${opt}</option>
          `
            )
            .join("")}
        </select>

        <b>Catapultas:</b>
        <select id="editCatapultas">
          ${[
            "Padrão",
            "main",
            "barracks",
            "stable",
            "garage",
            "watchtower",
            "snob",
            "smith",
            "place",
            "statue",
            "market",
            "wood",
            "stone",
            "iron",
            "farm",
            "storage",
            "wall",
          ]
            .map(
              (opt) => `
            <option value="${opt}" ${
                comando.alvoCatapultas === opt ? "selected" : ""
              }>${opt}</option>
          `
            )
            .join("")}
        </select>
      </div>

      <div style="margin-top: 6px; font-size: 13px; color: #ccc;">
        <b>Base:</b>
        <select id="editBaseHorario" style="margin-right: 12px;">
          <option value="arrival" ${
            comando.baseHorario === "arrival" ? "selected" : ""
          }>Chegada</option>
          <option value="send" ${
            comando.baseHorario === "send" ? "selected" : ""
          }>Envio</option>
        </select>

        <b>Horário:</b>
        <input id="editHorario" type="datetime-local" value="${
          comando.horario
        }" style="background: #2e2e2e; color: #ccc; border: none; border-radius: 4px; padding: 2px 6px;" />
      </div>

      ${
        comando.linhasNT && comando.linhasNT.length > 0
          ? `
        <div style="margin-top: 12px;">
          <label style="color:#ccc; font-size: 13px;">Divisão NT:</label>
          <select id="editModoDivisaoNT" style="margin-left: 8px; background: #1e1e1e; color: #ccc; border: 1px solid #2e2e2e; border-radius: 4px; padding: 2px 6px; font-family: 'pf-videotext';">
            <option value="unidades" ${
              comando.modoDivisaoNT === "unidades" ? "selected" : ""
            }>Unidades</option>
            <option value="percentual" ${
              comando.modoDivisaoNT === "percentual" ? "selected" : ""
            }>Percentual</option>
          </select>

          <div style="font-size: 13px; color: #00E5FF; margin: 8px 0 4px;">Linhas NT programadas:</div>
          ${comando.linhasNT
            .map(
              (linha, i) => `
            <div style="margin-bottom: 6px;">
              <div style="color: #888; font-size: 13px; margin-bottom: 4px;">#${
                i + 2
              }</div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${todasUnidades
                  .map(
                    (unit) => `
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <img src="/graphic/unit/unit_${unit}.png" width="18" />
                    <input type="text" class="nt-edit-input" data-ntline="${i}" data-unit="${unit}" value="${
                      linha[unit] ?? 0
                    }"
                      style="width: 40px; background: #2e2e2e; border: 1px solid #2e2e2e; color: #ccc; border-radius: 4px; text-align: center; font-family: 'pf-videotext';" />
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `
          : ""
      }

      <div style="margin-top: 10px;">
        <button class="btn-neon btn-salvar-edicao" data-index="${index}">💾 Salvar</button>
        <button class="btn-neon" style="background:#666;" id="btnCancelar">❌ Cancelar</button>
      </div>
    </div>
  `;
        // assume que você já declarou/definiu carregarComandosAgendados() em algum lugar
        const btnCancelar = document.getElementById("btnCancelar");
        if (btnCancelar) {
          btnCancelar.addEventListener("click", (e) => {
            e.preventDefault();
            // aqui você re-renderiza a lista de comandos
            carregarComandosAgendados();
          });
        } else {
          console.warn("[TWAG] não encontrou #btnCancelar para bindar evento");
        }
      }

      function salvarEdicaoComando(index) {
        const comandos = JSON.parse(
          localStorage.getItem("TWAG_comandos") || "[]"
        );
        const comando = comandos[index];

        // Tropas principais
        const novasTropas = {};
        document.querySelectorAll(`[data-unit]`).forEach((input) => {
          const unidade = input.dataset.unit;
          const valor = (input.value || "").trim().toLowerCase(); // <-- garante que não seja undefined

          if (valor === "max") {
            novasTropas[unidade] = "full";
          } else {
            const numero = parseInt(valor, 10);
            if (!isNaN(numero) && numero > 0) {
              novasTropas[unidade] = numero;
            }
          }
        });
        comando.tropas = novasTropas;

        // Outras configurações
        comando.modeloNT = document.getElementById("editModeloNT").value;
        comando.alvoCatapultas =
          document.getElementById("editCatapultas").value;
        comando.baseHorario = document.getElementById("editBaseHorario").value;
        comando.horario = document.getElementById("editHorario").value;

        // NT: coleta das linhas editadas
        const linhasEditadas = {};
        document.querySelectorAll(".nt-edit-input").forEach((input) => {
          const linha = input.dataset.ntline;
          const unidade = input.dataset.unit;
          const valor = input.value.trim().toLowerCase();

          if (!linhasEditadas[linha]) linhasEditadas[linha] = {};
          if (valor === "max") {
            linhasEditadas[linha][unidade] = "full";
          } else {
            const numero = parseInt(valor, 10);
            if (!isNaN(numero)) {
              linhasEditadas[linha][unidade] = numero;
            }
          }
        });

        comando.linhasNT = Object.values(linhasEditadas);

        const modoDivisaoEl = document.getElementById("editModoDivisaoNT");
        if (modoDivisaoEl) {
          comando.modoDivisaoNT = modoDivisaoEl.value;
        }

        // Salva e atualiza
        comandos[index] = comando;
        localStorage.setItem("TWAG_comandos", JSON.stringify(comandos));
        carregarComandosAgendados();
      }

      function preencherUnidadesDisponiveis() {
        const unidades = document.querySelectorAll(
          "#units_form input.unitsInput"
        );

        unidades.forEach((input) => {
          const unit = input.name;
          const disponivel = parseInt(input.dataset.allCount || "0", 10);
          const painelInput = document.getElementById(`unit_${unit}`);
          const checkbox = document.querySelector(
            `.use-max[data-unit="${unit}"]`
          );

          if (painelInput && checkbox) {
            checkbox.addEventListener("change", () => {
              if (checkbox.checked) {
                painelInput.value = disponivel;
              } else {
                painelInput.value = "";
              }
            });
          }
        });
      }

      /* ============================================================== */
      /*  ▸ Agendador – Abertura, fechamento e watchdog                 */
      /* ============================================================== */

      function checkForCommandsToOpen() {
        const agora = Date.now();
        const lista = lerComandos(); // array salvo no localStorage

        lista.forEach((cmd, idx) => {
          // ← agora temos (cmd, idx)
          if (cmd.enviado) return; // já concluído

          /* ▸ trava global (race-lock) --------------------------------- */
          const flag = LS_LOCK(cmd.id);
          if (localStorage.getItem(flag)) return;

          /* ▸ situação de tempo ---------------------------------------- */
          const falta = new Date(cmd.horarioEnvio).getTime() - agora; // >0 futuro
          const atrasado = !cmd.opened && falta <= 0; // passou!
          const precisa = !cmd.opened && falta <= PRELOAD_MS && falta > 0;
          const perdeuEnvio =
            cmd.opened &&
            agora - new Date(cmd.horarioEnvio) < 5 * 60_000 &&
            !tabsAbertas.has(cmd.id);

          /* ▸ se atrasou, marca para “enviar agora” -------------------- */
          if (atrasado && !cmd.sendNow) {
            cmd.sendNow = true; // nova flag
            lista[idx] = cmd; // reflete na lista in-memory
            salvarComandos(lista); // persiste
          }

          if (!(precisa || atrasado || perdeuEnvio)) return;

          /* ▸ tenta adquirir o lock ----------------------------------- */
          localStorage.setItem(flag, MY_TOKEN);
          if (localStorage.getItem(flag) !== MY_TOKEN) return; // perdeu corrida

          /* ▸ monta URL ------------------------------------------------ */
          let url = cmd.url || "";
          if (!url) {
            const origemId =
              cmd.origemId ||
              (game_data?.village?.id_by_coord?.[cmd.origem] ?? 0);
            const [x, y] = cmd.destino.split("|");
            url = `/game.php?village=${origemId}&screen=place&x=${x}&y=${y}`;
          }
          if (!url.includes("cmdId=")) url += `&cmdId=${cmd.id}`;
          if (cmd.sendNow && !url.includes("sendNow=1")) url += "&sendNow=1";

          /* ▸ abre aba ------------------------------------------------- */
          const tab = openInTab(url, { active: false, insert: true });
          if (!tab) {
            localStorage.removeItem(flag);
            return;
          } // falhou abrir
          tab.openedAt = Date.now();
          tabsAbertas.set(cmd.id, tab);

          cmd.opened = true;
          salvarComandos(lista);
          console.log(
            `[TWAG·PAI] GM_Tab aberta para cmdId ${cmd.id}` +
              (cmd.sendNow ? " (atrasado – enviar agora)" : "")
          );
        });

        setTimeout(checkForCommandsToOpen, OPEN_TICK_MS);
      }
      if (!IS_CHILD) checkForCommandsToOpen();

      /* ============================================================= */
      /* 3 ▸ utilitário de fechamento + watchdog */
      function fecharAba(cmdId) {
        const tab = tabsAbertas.get(cmdId);
        if (tab?.close) tab.close();
        tabsAbertas.delete(cmdId);
        localStorage.removeItem(LS_LOCK(cmdId));
        console.log(`[TWAG·PAI] GM_Tab fechada para cmdId ${cmdId}`);
        /* 🔄 atualiza painel imediatamente -------------------------- */
        if (typeof updateGeralStats === "function") updateGeralStats();
        if (typeof carregarComandosAgendados === "function")
          carregarComandosAgendados();
      }
      setInterval(() => {
        // fecha órfãs >20s
        const limite = 19_000,
          now = Date.now();
        tabsAbertas.forEach((t, id) => {
          if (now - (t.openedAt || 0) > limite) fecharAba(id);
        });
      }, 5_000);

      /* ============================================================= */
      /* 4 ▸ Dentro da ABA-FILHO */
      function finalizarComando(id) {
        const lista = lerComandos();
        const i = lista.findIndex((c) => c.id == id);
        if (i > -1) {
          lista[i].enviado = true; // marca como enviado
          delete lista[i].sendNow; // ← limpa flag “forçado”
          salvarComandos(lista);
        }

        /* avisa a aba-pai e força refresh dos cartões */
        setValue(`TWAG_done_${id}`, Date.now());
        setValue("TWAG_refresh_stats", Date.now()); //  ← NOVO
        try {
          window.opener?.updateGeralStats?.();
        } catch {}
        carregarComandosAgendados?.();
      }

      /* ===== Watch-dog de disparo (inalterado) ====================== */
      setInterval(() => {
        const agora = Date.now();
        const lista = lerComandos();

        const cmd = lista.find((c) => {
          if (!c.opened || c.enviado || c.sendNow) return false; // ← ignora atrasados
          const falta = new Date(c.horarioEnvio).getTime() - agora; // ms
          return falta >= 0 && falta <= TICK_MS; // só 0–500 ms no futuro
        });

        if (!cmd) return;

        cmd.enviado = true;
        salvarComandos(lista);
      }, TICK_MS);

      /* ===== Envio de um comando único ===== */
      async function enviarComando(cmd) {
        try {
          await garantirAldeiaDeOrigem(cmd.origem);

          // Já estamos na tela /place
          definirDestino(cmd.destino);
          preencherUnidades(cmd.tropas);
          definirCatapultas(cmd.alvoCatapultas);

          clicar("#target_" + (cmd.tipo === "support" ? "support" : "attack"));
          await esperarCarregar();

          // Verifica se o botão de confirmação está presente
          const botaoConfirmar = document.querySelector("#troop_confirm_go");
          if (!botaoConfirmar) {
            console.warn("⚠️ Botão de confirmação não encontrado.");
            return;
          }

          botaoConfirmar.click();

          // ✅ Envio confirmado — atualiza status
          marcarComandoComoEnviado(cmd.id);
          removerComandoAgendado(cmd.id);

          console.log(
            `✅ Comando ${cmd.id} enviado com sucesso de ${cmd.origem} para ${cmd.destino}`
          );

          // em enviarComando(cmd), no lugar do setTimeout original

          /*  ◀︎ ───────────────────────── ─── ◀︎ */
        } catch (e) {
          console.warn(`❌ Falha ao enviar comando ${cmd.id}`, e);
          cmd.enviado = false;
        }
      }

      /* ===== Utils: coord → id da aldeia ===== */
      const _villCache = {};
      async function getVillageIdByCoord(coord) {
        if (_villCache[coord]) return _villCache[coord];

        try {
          const txt = await (await fetch("/map/village.txt")).text();
          const [x, y] = coord.split("|");
          const village = txt
            .split("\n")
            .map((l) => l.split(","))
            .find((v) => v[2] === x && v[3] === y);

          const id = village ? +village[0] : 0;
          _villCache[coord] = id;
          return id;
        } catch (e) {
          console.error("❌ Erro ao buscar ID da aldeia para", coord, e);
          return 0;
        }
      }

      function marcarComandoComoEnviado(id) {
        const comandos = lerComandos();
        const atualizados = comandos.map((c) => {
          if (c.id === id) c.enviado = true;
          return c;
        });
        salvarComandos(atualizados);
      }

      function removerComandoAgendado(id) {
        const comandos = lerComandos().filter((c) => c.id !== id);
        salvarComandos(comandos);
      }

      /* ===== Helpers ===== */
      function clicar(sel) {
        const el = document.querySelector(sel);
        if (el) el.click();
      }

      function esperarCarregar() {
        return new Promise((r) => setTimeout(r, 300)); // atraso curto; ajuste se precisar
      }

      async function garantirAldeiaDeOrigem(coord) {
        if (game_data.village.coord === coord) return;

        const id =
          game_data.village.id_by_coord?.[coord] || game_data.village.id;
        window.location.href = `/game.php?village=${id}&screen=place`;
        await esperarCarregar();
      }

      function definirDestino(coord) {
        const inp = document.querySelector("#place_target");
        if (inp) inp.value = coord;
      }

      function preencherUnidades(tropas) {
        Object.entries(tropas).forEach(([unit, qtd]) => {
          const inp = document.querySelector(`#unit_input_${unit}`);
          if (!inp) return;
          if (qtd === "full") {
            // 🔄 pega máximo disponível exibido no form
            inp.value = inp.dataset.allCount || "";
          } else {
            inp.value = qtd;
          }
        });
      }

      function definirCatapultas(target) {
        if (target === "Padrão") return;
        const sel = document.querySelector("#catapult_target");
        if (sel) sel.value = target;
      }

      // Aguarda o DOM do jogo carregar
      if (window.location.href.includes("screen=place")) {
        setTimeout(preencherUnidadesDisponiveis, 300);
      }
      /* ===== Auto-execução se veio de cmdId ===== */
      (async function autoCommand() {
        // helper – aguarda um seletor existir
        const waitForElm = (sel, t = 60) =>
          new Promise((res) => {
            const iv = setInterval(() => {
              const el = document.querySelector(sel);
              if (el) {
                clearInterval(iv);
                res(el);
              }
            }, t);
          });

        // identifica se é aba-filho
        const childCmdId = sessionStorage.getItem("TWAG_currentCmdId");
        const IS_CHILD = !!childCmdId;

        // parâmetros da URL
        const params = new URLSearchParams(location.search);
        const idCmd = params.get("cmdId");
        const forceNow = params.get("sendNow") === "1";

        if (!IS_CHILD || !idCmd) {
          console.log(
            "[autoCommand] não é aba-filho ou faltou cmdId, abortando"
          );
          return;
        }

        // carrega comando
        const lista = lerComandos();
        const cmd = lista.find((c) => c.id == idCmd);
        if (!cmd) {
          console.warn("[autoCommand] Comando não encontrado:", idCmd);
          return;
        }

        // reabre atrasados
        if (forceNow && cmd.enviado) {
          cmd.enviado = false;
          salvarComandos(lista);
        } else if (cmd.enviado && !location.search.includes("try=confirm")) {
          return;
        }

        // —— BRANCH PLACE ——
        if (!location.search.includes("try=confirm")) {
          console.log("[autoCommand] Tela de place detectada");

          // espera inputs
          await waitForElm('input[id^="unit_input_"]');

          // preenche destino
          const [x, y] = cmd.destino.split("|");
          const inpX = document.getElementById("inputx");
          if (inpX) inpX.value = x;
          const inpY = document.getElementById("inputy");
          if (inpY) inpY.value = y;
          const tgt = document.querySelector("#place_target");
          if (tgt) tgt.value = cmd.destino;

          // preenche tropas
          Object.entries(cmd.tropas).forEach(([unit, q0]) => {
            const fld = document.getElementById("unit_input_" + unit);
            if (!fld) return;
            let q = q0;
            if (typeof q === "string" && q.toLowerCase() !== "full") {
              q = parseInt(q, 10) || 0;
            }
            if (typeof q === "string") {
              q =
                fld.dataset.allCount ||
                fld.getAttribute("data-all-count") ||
                fld.getAttribute("data-max-value") ||
                "";
            }
            fld.value = q;
            fld.dispatchEvent(new Event("input", { bubbles: true }));
            fld.dispatchEvent(new Event("change", { bubbles: true }));
          });

          // preenche catapultas (na place não tem confirmação ainda)
          if (cmd.alvoCatapultas && cmd.alvoCatapultas !== "Padrão") {
            const cat = document.querySelector("#catapult_target");
            if (cat) cat.value = cmd.alvoCatapultas;
          }

          // envia para a tela de confirmação
          const formP = document.getElementById("command-data-form");
          if (formP && !formP.action.includes("cmdId=")) {
            formP.action += `&cmdId=${cmd.id}${forceNow ? "&sendNow=1" : ""}`;
          }
          document
            .querySelector(
              "#target_" + (cmd.tipo === "support" ? "support" : "attack")
            )
            ?.click();

          console.log("[autoCommand] Place enviado, aguardando confirmação…");
          return; // STOP: não faz mais nada aqui
        }

        // —— BRANCH CONFIRM —— (try=confirm)
        console.log("[autoCommand] Tela de confirmação detectada");

        // injeta cmdId no form de confirmação
        const formC = document.querySelector('form[action*="action=command"]');
        if (formC && !formC.action.includes("cmdId=")) {
          formC.action += `&cmdId=${cmd.id}${forceNow ? "&sendNow=1" : ""}`;
        }

        // ajusta catapultas na confirmação
        if (cmd.alvoCatapultas && cmd.alvoCatapultas !== "Padrão") {
          try {
            const sel2 = await waitForElm(
              '#place_confirm_catapult_target select[name="building"]',
              300
            );
            sel2.value = cmd.alvoCatapultas;
            console.log(
              "[autoCommand] Catapulta ajustada para",
              cmd.alvoCatapultas
            );
          } catch {
            console.warn("[autoCommand] Selector de catapultas não encontrado");
          }
        }

        // expande e preenche NT
        const ntModelo = cmd.modeloNT || "SEM NT";
        const qtdLinhas = parseInt(ntModelo.replace(/\D/g, ""), 10) || 1;
        const linhasNT = cmd.linhasNT || [];

        if (qtdLinhas > 1) {
          console.log("[NT] Expandindo para", qtdLinhas, "ataques");
          const btnTrain = await waitForElm("#troop_confirm_train", 500);
          for (let i = 1; i < qtdLinhas; i++) {
            btnTrain.dispatchEvent(
              new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
              })
            );
            console.log(`[NT] Linha adicional ${i + 1} aberta`);
            await new Promise((r) => setTimeout(r, 300));
          }
          console.log("[NT] Preenchendo tropas nas linhas adicionais");
          linhasNT.forEach((linha, idx) => {
            const lineNum = idx + 2;
            Object.entries(linha).forEach(([unit, qty]) => {
              const selector = `input[name="train[${lineNum}][${unit}]"]`;
              const inp = document.querySelector(selector);
              if (!inp) {
                console.warn("[NT] Input não encontrado:", selector);
                return;
              }
              const valor =
                typeof qty === "string" && qty.toLowerCase() === "full"
                  ? inp.getAttribute("data-all-count") || ""
                  : qty;
              inp.value = valor;
              inp.dispatchEvent(new Event("input", { bubbles: true }));
              inp.dispatchEvent(new Event("change", { bubbles: true }));
              console.log(`[NT] ${unit}=${valor} na linha ${lineNum}`);
            });
          });
          console.log("[NT] Linhas NT prontas");
        }

        // **NÃO** clica em “Confirmar” aqui!
        // O initChegadaOffset() agora será quem agenda e dispara o click
      })();

      // === Lógica das Abas ===
      document.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const tabId = btn.dataset.tab; // <-- movido aqui para ser visível no escopo do if

          document
            .querySelectorAll(".tab-btn")
            .forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");

          document.querySelectorAll(".marques-tab-content").forEach((tab) => {
            tab.classList.remove("active");
          });
          document.getElementById(`tab-${tabId}`).classList.add("active");

          if (tabId === "agendados") {
            carregarComandosAgendados();
          }
        });
      });
      window.salvarEdicaoComando = function (index) {
        const comandos = JSON.parse(
          localStorage.getItem("TWAG_comandos") || "[]"
        );
        const comando = comandos[index];

        const novasTropas = {};
        document.querySelectorAll(`[data-unit]`).forEach((input) => {
          const unidade = input.dataset.unit;
          const valor = (input.value || "").trim().toLowerCase(); // <-- garante que não seja undefined

          if (valor === "max") {
            novasTropas[unidade] = "full";
          } else {
            const numero = parseInt(valor, 10);
            if (!isNaN(numero) && numero > 0) {
              novasTropas[unidade] = numero;
            }
          }
        });

        comando.tropas = novasTropas;
        comando.modeloNT = document.getElementById("editModeloNT").value;
        comando.alvoCatapultas =
          document.getElementById("editCatapultas").value;
        comando.baseHorario = document.getElementById("editBaseHorario").value;
        comando.horario = document.getElementById("editHorario").value;

        // NT: coleta das linhas editadas
        const linhasEditadas = {};
        document.querySelectorAll(".nt-edit-input").forEach((input) => {
          const linha = input.dataset.ntline;
          const unidade = input.dataset.unit;
          const valor = input.value.trim().toLowerCase();

          if (!linhasEditadas[linha]) linhasEditadas[linha] = {};
          if (valor === "max") {
            linhasEditadas[linha][unidade] = "full";
          } else {
            const numero = parseInt(valor, 10);
            if (!isNaN(numero)) {
              linhasEditadas[linha][unidade] = numero;
            }
          }
        });

        comando.linhasNT = Object.values(linhasEditadas);

        const modoDivisaoEl = document.getElementById("editModoDivisaoNT");
        if (modoDivisaoEl) {
          comando.modoDivisaoNT = modoDivisaoEl.value;
        }

        // Salva e atualiza
        comandos[index] = comando;
        localStorage.setItem("TWAG_comandos", JSON.stringify(comandos));
        carregarComandosAgendados();
      };

      // utilitárias de data/hora
      const pad = (n) => String(n).padStart(2, "0");
      const toIso = (d) =>
        `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T` +
        `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}.` +
        String(d.getMilliseconds()).padStart(3, "0");
      function parseTS(s) {
        if (!s || typeof s !== "string") {
          console.warn("⚠️ Valor inválido passado para parseTS:", s);
          return null;
        }
        return new Date(s.replace(" ", "T"));
      }
      /* ===== Atualização da aba GERAL =================================== */
      setInterval(updateGeralStats, 1000);

      function updateGeralStats() {
        const lista = lerComandos();
        const pend = lista.filter((c) => !c.enviado);
        const sent = lista.filter((c) => c.enviado);

        /* valores zerados (ou 0 se não houver) */
        const bCmd = +localStorage.getItem(BASE_KEYS.cmd) || 0;
        const bAtk = +localStorage.getItem(BASE_KEYS.atk) || 0;
        const bSup = +localStorage.getItem(BASE_KEYS.sup) || 0;

        // próximo envio
        const proximoMs = pend.length
          ? Math.min(...pend.map((c) => new Date(c.horarioEnvio).getTime()))
          : null;
        document.getElementById("twag_next_send").textContent = proximoMs
          ? fmtTempoRestante(proximoMs - Date.now())
          : "sem comandos";

        // contadores
        setTxt("#twag_cnt_cmds", pend.length);
        setTxt("#twag_sent_cmds", Math.max(0, sent.length - bCmd));
        setTxt(
          "#twag_cnt_attk",
          pend.filter((c) => c.tipo === "attack").length
        );
        setTxt(
          "#twag_sent_attk",
          Math.max(0, sent.filter((c) => c.tipo === "attack").length - bAtk)
        );
        setTxt(
          "#twag_cnt_supp",
          pend.filter((c) => c.tipo === "support").length
        );
        setTxt(
          "#twag_sent_supp",
          Math.max(0, sent.filter((c) => c.tipo === "support").length - bSup)
        );
      }

      function fmtTempoRestante(ms) {
        if (ms < 0) return "—";
        const s = Math.floor(ms / 1000) % 60;
        const m = Math.floor(ms / 60000) % 60;
        const h = Math.floor(ms / 3600000);
        return `${String(h).padStart(2, "0")}:${String(m).padStart(
          2,
          "0"
        )}:${String(s).padStart(2, "0")}`;
      }
      function setTxt(sel, val) {
        document.querySelectorAll(sel).forEach((el) => (el.textContent = val));
      }

      /* ===== Exportar / Importar ======================================= */
      document.getElementById("twag_export").onclick = () => {
        const pendentes = lerComandos().filter((c) => !c.enviado);
        if (!pendentes.length) {
          UI.InfoMessage("Nada a exportar: lista vazia.");
          return;
        }
        const b64 = toB64(JSON.stringify(pendentes));
        navigator.clipboard
          .writeText(b64)
          .then(() =>
            UI.SuccessMessage(`📋 ${pendentes.length} comando(s) copiados!`)
          );
      };

      document.getElementById("twag_import").onclick = () => {
        const b64 = prompt("Cole o texto Base-64 gerado pelo exportar:");
        if (!b64) return;

        try {
          const json = fromB64(b64.trim());
          const novos = JSON.parse(json);
          if (!Array.isArray(novos)) throw "não é array";

          /* mescla sem duplicar id */
          const atuais = lerComandos();
          const idsAtuais = new Set(atuais.map((c) => c.id));
          const realmenteNovos = novos.filter((c) => !idsAtuais.has(c.id));

          if (!realmenteNovos.length) {
            UI.InfoMessage("Nenhum comando novo para importar.");
            return;
          }

          salvarComandos(atuais.concat(realmenteNovos));
          updateGeralStats();
          carregarComandosAgendados?.();
          UI.SuccessMessage(
            `✅ ${realmenteNovos.length} comando(s) importados!`
          );
        } catch (e) {
          UI.ErrorMessage("❌ Base-64 / JSON inválido: " + e);
        }
      };

      document.getElementById("twag_reset").onclick = () => {
        const lista = lerComandos();
        /* grava o total enviado no momento do clique */
        localStorage.setItem(
          BASE_KEYS.cmd,
          lista.filter((c) => c.enviado).length
        );
        localStorage.setItem(
          BASE_KEYS.atk,
          lista.filter((c) => c.enviado && c.tipo === "attack").length
        );
        localStorage.setItem(
          BASE_KEYS.sup,
          lista.filter((c) => c.enviado && c.tipo === "support").length
        );

        updateGeralStats(); // refresca cartões
        UI.SuccessMessage("🔄 Contadores visuais zerados"); // ou alert(...)
      };

      /*────────  CommandSender clássico (UI + handler)  ────────*/
      const CommandSender = {
        confirmButton: null,
        duration: null,
        dateNow: null,
        offset: null,
        init: function () {
          $($("#command-data-form").find("tbody")[0]).append(
            '<tr><td>Chegada:</td><td> <input type="datetime-local" id="CStime" step=".001"> </td></tr><tr> <td>Offset:</td><td> <input type="number" id="CSoffset"> <button type="button" id="CSbutton" class="btn">Confirmar</button> </td></tr>'
          );
          this.confirmButton = $("#troop_confirm_submit");
          this.duration = $("#command-data-form")
            .find('td:contains("Duração:")')
            .next()
            .text()
            .split(":")
            .map(Number);
          this.offset = localStorage.getItem("CS.offset") || -250;
          this.dateNow = this.convertToInput(new Date());
          $("#CSoffset").val(this.offset);
          $("#CStime").val(this.dateNow);
          $("#CSbutton").click(function () {
            var offset = Number($("#CSoffset").val());
            var attackTime = CommandSender.getAttackTime();
            localStorage.setItem("CS.offset", offset);
            CommandSender.confirmButton.addClass("btn-disabled");
            setTimeout(function () {
              CommandSender.confirmButton.click();
            }, attackTime - Timing.getCurrentServerTime() + offset);
            this.disabled = true;
          });
        },
        getAttackTime: function () {
          var d = new Date($("#CStime").val().replace("T", " "));
          d.setHours(d.getHours() - this.duration[0]);
          d.setMinutes(d.getMinutes() - this.duration[1]);
          d.setSeconds(d.getSeconds() - this.duration[2]);
          return d;
        },
        convertToInput: function (t) {
          t.setHours(t.getHours() + this.duration[0]);
          t.setMinutes(t.getMinutes() + this.duration[1]);
          t.setSeconds(t.getSeconds() + this.duration[2]);
          var a = {
            y: t.getFullYear(),
            m: t.getMonth() + 1,
            d: t.getDate(),
            time: t.toTimeString().split(" ")[0],
            ms: t.getMilliseconds(),
          };
          if (a.m < 10) {
            a.m = "0" + a.m;
          }
          if (a.d < 10) {
            a.d = "0" + a.d;
          }
          if (a.ms < 100) {
            a.ms = "0" + a.ms;
            if (a.ms < 10) {
              a.ms = "0" + a.ms;
            }
          }
          return a.y + "-" + a.m + "-" + a.d + "T" + a.time + "." + a.ms;
        },
        addGlobalStyle: function (css) {
          var head, style;
          head = document.getElementsByTagName("head")[0];
          if (!head) {
            return;
          }
          style = document.createElement("style");
          style.type = "text/css";
          style.innerHTML = css;
          head.appendChild(style);
        },
      };
      CommandSender.addGlobalStyle(
        "#CStime, #CSoffset {font-size: 9pt;font-family: Verdana,Arial;}#CSbutton {float:right;}"
      );
      // 20 ms às vezes ainda é cedo

      /*═════════════════════════════════════════════════════════════
  Injeta o mini-CommandSender somente em …place&try=confirm
═════════════════════════════════════════════════════════════*/
      (function injectCS() {
        const q = new URLSearchParams(location.search);
        if (q.get("screen") !== "place" || q.get("try") !== "confirm") return; // filtro

        var a = setInterval(function () {
          if (document.getElementById("command-data-form") && jQuery) {
            CommandSender.init();
            clearInterval(a);
          }
        }, 1); // faster load
      })();

      /*─────────────────────────────────────────────────────────────
  offsetAuto – RTT/4 + lag-JS (12 pings HEAD)
─────────────────────────────────────────────────────────────*/
      async function offsetAuto() {
        const PINGS = 12,
          GAP = 35;
        let best = Infinity;

        for (let i = 0; i < PINGS; i++) {
          const t0 = performance.now();
          await fetch(`/game.php?ts=${Date.now() + i}`, {
            method: "HEAD",
            cache: "no-store",
          });
          best = Math.min(best, performance.now() - t0);
          await new Promise((r) => setTimeout(r, GAP));
        }
        const rtt4 = best / 4;
        const lag0 = performance.now();
        await new Promise((r) => setTimeout(r, 0));
        const lagJS = performance.now() - lag0;
        return Math.round(rtt4 + lagJS); // (+) atrasa | (–) adianta
      }

      /*─────────────────────────────────────────────────────────────
  Mede offset uma única vez por aba
─────────────────────────────────────────────────────────────*/
      (async function medirOffsetGlobal() {
        const saved = +localStorage.getItem("CS.offset"); // numérico
        if (saved) return; // 0 == inválido
        const OFF = await offsetAuto();
        localStorage.setItem("CS.offset", OFF);
      })();

      /*─────────────────────────────────────────────────────────────
  Garante um offset “fresco” (RTT/4 + lag-JS)
─────────────────────────────────────────────────────────────*/
      async function ensureFreshOffset(maxAgeMs = 120_000) {
        const saved = Number(localStorage.getItem("CS.offset"));
        const savedTS = Number(localStorage.getItem("CS.offset_ts")); // epoch-ms
        const tooOld = !savedTS || Date.now() - savedTS > maxAgeMs;
        const needCalc = !saved || tooOld;

        if (needCalc) {
          const off = await offsetAuto(); // mede agora
          localStorage.setItem("CS.offset", off);
          localStorage.setItem("CS.offset_ts", Date.now());
          return off;
        }
        return saved; // valor ainda válido
      }

      /* mede logo ao carregar a aba (background) */
      ensureFreshOffset();

      // ────────────────────────────────────────────────────────────
      // initChegadaOffset – preenche campos e confirma
      // ────────────────────────────────────────────────────────────
      async function initChegadaOffset() {
        /* 1) só em /place&try=confirm */
        const qs = new URLSearchParams(location.search);
        if (qs.get("screen") !== "place" || qs.get("try") !== "confirm") return;

        /* 2) precisa do cmdId gerado pelo agendador */
        const cmdId = sessionStorage.getItem("TWAG_currentCmdId");
        if (!cmdId) return;
        const cmd = lerComandos().find((c) => c.id == cmdId);
        if (!cmd) return;

        /* 3) envio imediato */
        if (qs.get("sendNow") === "1") {
          $("#troop_confirm_submit").click();
          finalizarComando?.(cmdId);
          return setTimeout(() => window.close(), 200);
        }

        /* 4) espera UI mini-CommandSender */
        await new Promise((res) => {
          const ok = () => document.getElementById("CSbutton");
          if (ok()) return res();
          new MutationObserver((m, o) => {
            if (ok()) {
              o.disconnect();
              res();
            }
          }).observe(document.body, { childList: true, subtree: true });
        });

        /* helpers */
        const parse = (s) => new Date(s.replace(" ", "T"));
        const isoLocal = (d) => {
          const tz = d.getTimezoneOffset() * 60000;
          return new Date(d.getTime() - tz).toISOString().slice(0, 23);
        };

        /* 5) calcula Chegada */
        const dur = CommandSender.duration; // [h,m,s]
        const durMs = (dur[0] * 3600 + dur[1] * 60 + dur[2]) * 1000;
        const chegadaDate =
          cmd.baseHorario === "arrival"
            ? parse(cmd.chegadaDesejada || cmd.horario)
            : new Date(parse(cmd.horarioEnvio).getTime() + durMs);

        /* 6) offset sempre atualizado */
        const autoOff = await ensureFreshOffset(); // aguarda se precisar

        /* 7) preenche campos */
        $("#CStime").val(isoLocal(chegadaDate));
        $("#CSoffset").val(autoOff);

        /* 8) dispara Confirmar (handler original já existe) */
        $("#CSbutton").click();
      }

      initChegadaOffset();

      /* ===== Retoma comandos já abertos, mas ainda não enviados ===== */
      async function retomarComandosPendentes() {
        /* só a aba-pai deve tentar retomar */
        if (IS_CHILD) return; // ← evita disparo na aba-filho

        /* seleciona apenas os que abriram aba, já passaram do horário,
     ainda NÃO foram enviados  e não têm flag sendNow               */
        const pendentes = lerComandos().filter(
          (cmd) =>
            !cmd.enviado &&
            cmd.opened &&
            !cmd.sendNow && // ← ignora atrasados “forçados”
            new Date(cmd.horarioEnvio).getTime() <= Date.now()
        );

        if (pendentes.length === 0) return;

        console.log(`🔁 Retomando ${pendentes.length} comandos pendentes…`);

        for (const cmd of pendentes) {
          try {
            /* tenta reenviar */
            await enviarComando(cmd);

            /* marca como concluído / remove sendNow e ping pai */
            finalizarComando(cmd.id);

            /* 🔄 refresca cartões e tabela imediatamente */
            if (typeof updateGeralStats === "function") updateGeralStats();
            if (typeof carregarComandosAgendados === "function")
              carregarComandosAgendados();

            /* intervalo entre envios para evitar flood */
            await sleep(5_000);
          } catch (e) {
            console.warn("❌ Erro ao retomar comando:", cmd, e);

            /* evita loop infinito: desmarca opened para tentar no máx. 3× */
            cmd.opened = false;
            cmd.tentativas = (cmd.tentativas || 0) + 1;
            salvarComandos(lerComandos());
          }
        }
      }
    })();
  }
})();
