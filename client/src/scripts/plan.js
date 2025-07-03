// ==UserScript==
// @name         TW Agendador de Comandos - MarquesScripts v1.0.0
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Agende ataques e apoios automaticamente com interface MarquesScripts
// @icon         https://i.imgur.com/IILGd2S.png
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
function _0xd2b7() {
  const _0x34fd83 = [
    "_blank",
    "modalidadeHorario",
    "src",
    "confirm",
    "13902pQTFTV",
    "title",
    "onclick",
    "player",
    "ErrorMessage",
    "\x20coordenadas",
    "axe",
    "iron",
    "getAttackTime",
    "</td>\x0a\x20\x20\x20\x20\x20\x20<td\x20class=\x22twag-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22twag-expand\x22>+</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-remover\x22\x20data-id=\x22",
    "aleatorio",
    "visibilitychange",
    "Informe\x20o\x20horário\x20do\x20comando.",
    "<div\x20class=\x22twag-info-line\x22>",
    ".marques-tab-content",
    "ataques",
    "keys",
    "clientX",
    "toString",
    "sup",
    "[NT]\x20Linha\x20adicional\x20",
    "\x20coordenadas\x20removidas\x20por\x20já\x20estarem\x20agendadas.",
    "CS.offset_ts",
    "\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "campoAflicao",
    "contadorCoordsOrigem",
    "overview_villages",
    "padStart",
    "find",
    "[TWAG·FILHO]\x203ª\x20URL\x20atingida;\x20comando\x20concluído",
    "⚠️\x20Botão\x20de\x20confirmação\x20não\x20encontrado.",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:\x206px;\x20font-size:\x2013px;\x20color:\x20#ccc;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<b>Base:</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22editBaseHorario\x22\x20style=\x22margin-right:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22arrival\x22\x20",
    "result",
    "#CStime",
    "tipoComando",
    "getMinutes",
    "CSbutton",
    "userSelect",
    "1548iGpBCa",
    "74050FNEnQF",
    "\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2040px;\x20background:\x20#2e2e2e;\x20border:\x201px\x20solid\x20#2e2e2e;\x20color:\x20#ccc;\x20border-radius:\x204px;\x20text-align:\x20center;\x20font-family:\x20\x27pf-videotext\x27;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "index",
    "replace",
    "[TWAG·PAI]\x20GM_Tab\x20aberta\x20para\x20cmdId\x20",
    "programado",
    "departure",
    "disconnect",
    "\x22\x20value=\x22",
    "getSeconds",
    "set",
    "val",
    "\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-neon\x20btn-salvar-edicao\x22\x20data-index=\x22",
    ".use-max[data-unit=\x22",
    "getMilliseconds",
    "random",
    "\x22\x20width=\x2220\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max-mass\x22\x20data-unit=\x22",
    "stringify",
    "TWAG_base_sent_atk",
    "#twag_sent_attk",
    "mousedown",
    ".png\x22\x20alt=\x22",
    "undefined",
    "disabled",
    "mass_horario_fim",
    "nextElementSibling",
    "\x20aberta",
    "storage",
    "data-max-value",
    "addEventListener",
    ".btn-editar",
    "id_by_coord",
    "/xdML/",
    "action",
    "\x20(atrasado\x20–\x20enviar\x20agora)",
    "⚠️\x20Não\x20foi\x20possível\x20obter\x20o\x20ID\x20da\x20aldeia\x20",
    "❌\x20Erro\x20ao\x20buscar\x20ID\x20da\x20aldeia\x20para",
    "origemId",
    "horarioEnvio",
    "</span></div>",
    "active",
    "__TWAG_KEEPALIVE__",
    "<div\x20class=\x22twag-section\x22>",
    "#twag_cnt_cmds",
    "now",
    "Nenhuma\x20coordenada\x20encontrada\x20para\x20esse\x20grupo.",
    "marcher",
    "spear",
    "cmd",
    "percentual",
    "appendChild",
    "command-data-form",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "round",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20@import\x20url(\x27https://use.typekit.net/ady4wsm.css\x27);\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tw-agendador-container\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20top:\x20160px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2050%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transform:\x20translateX(-50%);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#121212;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#2E2E2E;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20700px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27pf-videotext\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20max-height:\x2080vh;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tw-agendador-container::-webkit-scrollbar\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tw-agendador-container::-webkit-scrollbar-track\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1b1b1b;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20trilho\x20dark\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tw-agendador-container::-webkit-scrollbar-thumb\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20linear-gradient(180deg,#00E5FF,#00B8E5);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20box-shadow:\x200\x200\x206px\x20#00E5FFaa;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20glow\x20suave\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20.tw-agendador-container::-webkit-scrollbar-thumb:hover\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#00E5FF;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20destaque\x20no\x20hover\x20*/\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marques-header\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#00E5FF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2012px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-bottom:\x201px\x20solid\x20#2e2e2e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding-bottom:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marques-tabs\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20margin-bottom:\x2016px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marques-tabs\x20button\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20flex:\x201;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#1b1b1b;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#2e2e2e;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-family:\x20\x27pf-videotext\x27;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20transition:\x20all\x200.2s\x20ease;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marques-tabs\x20button.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#00E5FF;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20#121212;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marques-tab-content\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20none;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.marques-tab-content.active\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20display:\x20block;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a.tw-config-row\x20{\x0a\x20\x20display:\x20flex;\x0a\x20\x20flex-wrap:\x20wrap;\x0a\x20\x20gap:\x2012px;\x0a\x20\x20margin-bottom:\x2012px;\x0a\x20\x20align-items:\x20center;\x0a}\x0a\x0a.tw-config-row\x20label\x20{\x0a\x20\x20color:\x20#ccc;\x0a\x20\x20font-size:\x2013px;\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20center;\x0a\x20\x20gap:\x204px;\x0a}\x0a\x0a.tw-config-row\x20input,\x0a.tw-config-row\x20select\x20{\x0a\x20\x20background:\x20#1e1e1e;\x0a\x20\x20border:\x201px\x20solid\x20#2e2e2e;\x0a\x20\x20color:\x20#ccc;\x0a\x20\x20padding:\x204px;\x0a\x20\x20border-radius:\x204px;\x0a\x20\x20font-family:\x20\x27pf-videotext\x27;\x0a\x20\x20font-size:\x2013px;\x0a}\x0a\x0a.btn-neon\x20{\x0a\x20\x20background-color:\x20#00E5FF;\x0a\x20\x20color:\x20#121212;\x0a\x20\x20font-weight:\x20bold;\x0a\x20\x20border:\x20none;\x0a\x20\x20border-radius:\x206px;\x0a\x20\x20padding:\x206px\x2012px;\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20font-family:\x20\x27pf-videotext\x27;\x0a\x20\x20transition:\x200.2s;\x0a}\x0a\x0a.btn-neon:hover\x20{\x0a\x20\x20filter:\x20brightness(1.2);\x0a}\x0a.marques-tabela-unidades\x20{\x0a\x20\x20background:\x20#1b1b1b;\x0a\x20\x20border:\x201px\x20solid\x20#2e2e2e;\x0a\x20\x20border-radius:\x208px;\x0a\x20\x20width:\x20160px;\x0a\x20\x20font-family:\x20\x27pf-videotext\x27;\x0a\x20\x20font-size:\x2013px;\x0a\x20\x20color:\x20#ccc;\x0a\x20\x20border-spacing:\x200;\x0a\x20\x20table-layout:\x20fixed;\x0a}\x0a\x0a.marques-tabela-unidades\x20th\x20{\x0a\x20\x20background:\x20#121212\x20!important;\x0a\x20\x20color:\x20#00E5FF;\x0a\x20\x20padding:\x206px;\x0a\x20\x20font-weight:\x20normal;\x0a\x20\x20text-align:\x20center;\x0a\x20\x20border-radius:\x208px\x208px\x200\x200;\x0a\x20\x20border-bottom:\x201px\x20solid\x20#2e2e2e;\x0a}\x0a\x0a.marques-tabela-unidades\x20td\x20{\x0a\x20\x20padding:\x206px;\x0a\x20\x20border-top:\x201px\x20solid\x20#2e2e2e;\x0a\x20\x20display:\x20flex;\x0a\x20\x20align-items:\x20center;\x0a\x20\x20justify-content:\x20space-between;\x0a\x20\x20gap:\x206px;\x0a\x20\x20height:\x2036px;\x0a}\x0a\x0a.marques-tabela-unidades\x20img\x20{\x0a\x20\x20width:\x2020px;\x0a\x20\x20height:\x2020px;\x0a}\x0a\x0a.marques-tabela-unidades\x20input[type=\x22text\x22]\x20{\x0a\x20\x20background:\x20#1e1e1e;\x0a\x20\x20border:\x201px\x20solid\x20#2e2e2e;\x0a\x20\x20color:\x20#ccc;\x0a\x20\x20border-radius:\x204px;\x0a\x20\x20padding:\x202px\x204px;\x0a\x20\x20width:\x2040px;\x0a\x20\x20text-align:\x20center;\x0a}\x0a\x0a.marques-tabela-unidades\x20input[type=\x22checkbox\x22]\x20{\x0a\x20\x20transform:\x20scale(1.1);\x0a\x20\x20cursor:\x20pointer;\x0a}\x0a\x0a.placeholder-row\x20{\x0a\x20\x20height:\x2036px;\x0a\x20\x20visibility:\x20hidden;\x0a\x20\x20border-top:\x201px\x20solid\x20transparent;\x0a}\x0a/*\x20=========================================================\x0a\x20\x20\x20LISTA\x20DE\x20COMANDOS\x20AGENDADOS\x20–\x20cabeçalho\x20fixo\x20+\x20scroll\x0a\x20\x20\x20=========================================================\x20*/\x0a\x0a/*\x20WRAPPER\x20–\x20scroll\x20vertical\x20isolado\x20---------------------------\x20*/\x0a.twag-scrollwrap{\x0a\x20\x20max-height:420px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20≈\x207\x20linhas\x20visíveis\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a\x20\x20overflow-y:auto;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20scroll\x20só\x20no\x20corpo\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a\x20\x20overflow-x:hidden;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20nunca\x20barra\x20horizontal\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a\x0a\x20\x20/*\x20barra\x20fina\x20ciano\x20–\x20Firefox\x20*/\x0a\x20\x20scrollbar-width:thin;\x0a\x20\x20scrollbar-color:#00e5ff\x20#191919;\x0a}\x0a/*\x20WebKit\x20(Chrome\x20/\x20Edge)\x20*/\x0a.twag-scrollwrap::-webkit-scrollbar{\x20width:8px;\x20}\x0a.twag-scrollwrap::-webkit-scrollbar-track{\x20background:#191919;border-radius:4px;\x20}\x0a.twag-scrollwrap::-webkit-scrollbar-thumb{\x20background:#00e5ff;border-radius:4px;\x20}\x0a\x0a/*\x20TABELA\x20–\x20100\x20%\x20menos\x20a\x20largura\x20da\x20barra\x20----------------------\x20*/\x0a.marques-tabela-comandos{\x0a\x20\x20width:calc(100%\x20-\x208px);\x20\x20\x20\x20\x20\x20\x20\x20/*\x20reserva\x208\x20px\x20p/\x20scrollbar\x20\x20\x20\x20\x20*/\x0a\x20\x20border-collapse:collapse;\x0a\x20\x20table-layout:auto;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20datas\x20podem\x20expandir\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a\x20\x20font-family:\x27pf-videotext\x27;\x0a\x20\x20font-size:12px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20↓\x201\x20pt\x20–\x20continua\x20legível\x20\x20\x20\x20\x20\x20*/\x0a\x20\x20color:#ccc;\x0a\x20\x20background:#1b1b1b;\x0a}\x0a\x0a/*\x20Cabeçalho\x20fixo\x20----------------------------------------------\x20*/\x0a.marques-tabela-comandos\x20thead\x20th{\x0a\x20\x20position:sticky;\x0a\x20\x20top:0;\x0a\x20\x20z-index:2;\x0a\x20\x20background:#121212!important;\x0a\x20\x20color:#00e5ff!important;\x0a\x20\x20padding:4px\x206px;\x0a\x20\x20border:1px\x20solid\x20#2e2e2e;\x0a\x20\x20white-space:nowrap;\x0a}\x0a\x0a/*\x20Células\x20padrão\x20----------------------------------------------\x20*/\x0a.marques-tabela-comandos\x20td{\x0a\x20\x20padding:4px\x206px;\x0a\x20\x20border:1px\x20solid\x20#2e2e2e;\x0a\x20\x20text-align:center;\x0a\x20\x20background:#1b1b1b;\x0a\x20\x20white-space:nowrap;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20mantém\x20colunas\x20compactas\x20\x20\x20\x20\x20\x20\x20*/\x0a}\x0a\x0a/*\x20⇲\x20Linha\x20EXPANDIDA\x20(detalhes)\x20--------------------------------\x20*/\x0a.linha-expandida{\x20display:none;\x20}\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20default\x20=\x20oculta\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a.linha-expandida\x20td{\x0a\x20\x20white-space:normal;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20permite\x20que\x20o\x20conteúdo\x20quebre\x20\x20*/\x0a\x20\x20padding:8px\x2010px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20respira\x20mais\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a\x20\x20background:#1e1e1e;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20destaca\x20do\x20fundo\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a\x20\x20overflow-x:auto;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20scroll\x20horizontal\x20se\x20necessário*/\x0a}\x0a\x0a/*\x20Colunas\x20“Saída”\x20/\x20“Chegada”\x20----------------------------------\x20*/\x0a.marques-tabela-comandos\x20th:nth-child(4),\x0a.marques-tabela-comandos\x20td:nth-child(4),\x0a.marques-tabela-comandos\x20th:nth-child(5),\x0a.marques-tabela-comandos\x20td:nth-child(5){\x0a\x20\x20min-width:180px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20↓\x20de\x20210\x20→\x20180\x20px\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a}\x0a\x0a/*\x20Coluna\x20“Ação”\x20------------------------------------------------\x20*/\x0a.marques-tabela-comandos\x20th:nth-child(6),\x0a.marques-tabela-comandos\x20td:nth-child(6){\x0a\x20\x20min-width:100px;\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/*\x20↓\x20de\x20120\x20→\x20100\x20px\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20*/\x0a}\x0a\x0a/*\x20Ícone\x20da\x20primeira\x20coluna\x20------------------------------------\x20*/\x0a.marques-tabela-comandos\x20td:first-child\x20img{\x0a\x20\x20width:16px;\x0a\x20\x20height:16px;\x0a}\x0a\x0a/*\x20Botões\x20de\x20ação\x20----------------------------------------------\x20*/\x0a.marques-tabela-comandos\x20button{\x0a\x20\x20background:#ff4444;\x0a\x20\x20border:none;\x0a\x20\x20color:#fff;\x0a\x20\x20padding:3px\x206px;\x0a\x20\x20border-radius:4px;\x0a\x20\x20cursor:pointer;\x0a\x20\x20font-size:11px;\x0a\x20\x20line-height:1;\x0a}\x0a\x0a/*\x20Botão\x20“Excluir\x20Todos”\x20---------------------------------------\x20*/\x0a.twag-btn-red{\x0a\x20\x20background:#c62828;\x0a\x20\x20color:#fff;\x0a\x20\x20border:none;\x0a\x20\x20border-radius:6px;\x0a\x20\x20padding:6px\x2012px;\x0a\x20\x20cursor:pointer;\x0a\x20\x20font-weight:bold;\x0a\x20\x20font-family:\x27pf-videotext\x27;\x0a\x20\x20margin:8px\x206px\x204px\x20auto;\x0a\x20\x20display:block;\x0a}\x0a\x0a/*\x20Bloco\x20NT\x20(Nobre\x20Train)\x20--------------------------------------\x20*/\x0a.nt-linha{\x0a\x20\x20display:flex;\x0a\x20\x20flex-direction:column;\x0a\x20\x20gap:6px;\x0a\x20\x20margin-bottom:12px;\x0a\x20\x20background:#1a1a1a;\x0a\x20\x20padding:10px;\x0a\x20\x20border-radius:6px;\x0a\x20\x20border:1px\x20solid\x20#2e2e2e;\x0a}\x0a.nt-linha\x20h4{\x0a\x20\x20margin:0\x200\x206px;\x0a\x20\x20font-size:13px;\x0a\x20\x20color:#00e5ff;\x0a}\x0a.nt-unidades{\x0a\x20\x20display:flex;\x0a\x20\x20gap:8px;\x0a\x20\x20flex-wrap:wrap;\x0a}\x0a.nt-unidade{\x0a\x20\x20display:flex;\x0a\x20\x20flex-direction:column;\x0a\x20\x20align-items:center;\x0a\x20\x20font-family:\x27pf-videotext\x27;\x0a}\x0a.nt-unidade\x20img{\x0a\x20\x20width:22px;\x0a\x20\x20height:22px;\x0a\x20\x20margin-bottom:4px;\x0a}\x0a.nt-unidade\x20input{\x0a\x20\x20width:36px;\x0a\x20\x20text-align:center;\x0a\x20\x20background:#1e1e1e;\x0a\x20\x20border:1px\x20solid\x20#2e2e2e;\x0a\x20\x20border-radius:4px;\x0a\x20\x20color:#ccc;\x0a\x20\x20font-family:\x27pf-videotext\x27;\x0a\x20\x20font-size:12px;\x0a}\x0a\x0a#tw-agendador-header\x20{\x0a\x20\x20cursor:\x20move;\x0a\x20\x20user-select:\x20none;\x0abackground:\x20#00e5ff;\x0a\x20\x20\x20\x20color:\x20#1e1e1e;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20text-align:\x20center;\x0a\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20border-radius:\x2010px\x2010px\x200\x200;\x0a\x0a\x20\x20\x20\x20/*\x20“Estica”\x20sobre\x20o\x20padding\x20do\x20container\x20*/\x0a\x20\x20\x20\x20margin:\x20-20px\x20-20px\x2012px\x20-20px;\x20\x20\x20\x20\x20\x20/*\x20top,\x20right,\x20bottom,\x20left\x20*/\x0a}\x0a#tw-agendador\x20{\x0a\x20\x20position:\x20fixed;\x0a\x20\x20top:\x20160px;\x0a\x20\x20left:\x2050%;\x0a\x20\x20/*\x20retire\x20transform\x20se\x20existir\x20*/\x0a}\x0a.twag-row{display:grid;gap:12px;margin-bottom:16px}\x0a.twag-row.row1{grid-template-columns:repeat(3,minmax(160px,1fr))}\x0a.twag-row.row2{grid-template-columns:repeat(4,minmax(120px,1fr))}\x0a.stat-card{\x0a\x20\x20background:#111;\x0a\x20\x20border:1px\x20solid\x20#2c2c2c;\x0a\x20\x20border-radius:8px;\x0a\x20\x20padding:12px;\x0a\x20\x20text-align:center\x0a}\x0a.stat-card\x20h3{\x0a\x20\x20margin:0\x200\x208px;\x0a\x20\x20font-size:13px;\x0a\x20\x20color:#00e5ff\x0a}\x0a.stat-card\x20span{\x0a\x20\x20font-size:24px;\x0a\x20\x20font-weight:700;\x0a\x20\x20color:#fff\x0a}\x0a.twag-geral-actions{\x0a\x20\x20display:flex;\x0a\x20\x20justify-content:center;\x0a\x20\x20gap:12px;\x0a\x20\x20margin-bottom:8px\x0a}\x0a.twag-btn-blue{\x0a\x20\x20background:#00e5ff;\x0a\x20\x20color:#111;\x0a\x20\x20padding:8px\x2016px;\x0a\x20\x20border:none;\x0a\x20\x20border-radius:6px;\x0a\x20\x20font-weight:600;\x0a\x20\x20cursor:pointer\x0a}\x0a.linha-expandida\x20{\x20transition:\x20all\x20150ms\x20ease-in-out;\x20}\x0a.linha-expandida[style*=\x22display:\x20none\x22]\x20{\x20opacity:\x200;\x20height:\x200;\x20}\x0a.linha-expandida[style*=\x22display:\x22]\x20\x20\x20\x20\x20{\x20opacity:\x201;\x20height:\x20auto;\x20}\x0a\x0a\x20\x20\x20\x20",
    "mass_criterioDestino",
    "try=confirm",
    "\x0a\x20\x20<div\x20class=\x22tw-agendador-header\x22\x20id=\x22tw-agendador-header\x22>Agendador\x20de\x20Comandos</div>\x0a\x0a\x20\x20<div\x20class=\x22marques-tabs\x22>\x0a\x20\x20\x20\x20<button\x20class=\x22tab-btn\x20active\x22\x20data-tab=\x22geral\x22>Geral</button>\x0a\x20\x20\x20\x20<button\x20class=\x22tab-btn\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-tab=\x22simples\x22>Agendador\x20Simples</button>\x0a\x20\x20\x20\x20<button\x20class=\x22tab-btn\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-tab=\x22massa\x22>Agendador\x20em\x20Massa</button>\x0a\x20\x20\x20\x20<button\x20class=\x22tab-btn\x22\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-tab=\x22agendados\x22>Comandos\x20Agendados</button>\x0a</div>\x0a\x0a<!--\x20Aba\x20Geral\x20-->\x0a<div\x20id=\x22tab-geral\x22\x20class=\x22marques-tab-content\x20active\x22>\x0a\x20<!--\x20PRIMEIRA\x20LINHA\x20-->\x0a<div\x20class=\x22twag-row\x20row1\x22>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Próximo\x20envio</h3><span\x20id=\x22twag_next_send\x22>—</span></div>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Comandos\x20Agendados</h3><span\x20id=\x22twag_cnt_cmds\x22>0</span></div>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Comandos\x20Enviados</h3><span\x20id=\x22twag_sent_cmds\x22>0</span></div>\x0a</div>\x0a\x0a<!--\x20SEGUNDA\x20LINHA\x20-->\x0a<div\x20class=\x22twag-row\x20row2\x22>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Ataques\x20Agendados</h3><span\x20id=\x22twag_cnt_attk\x22>0</span></div>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Ataques\x20Enviados</h3><span\x20id=\x22twag_sent_attk\x22>0</span></div>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Apoios\x20Agendados</h3><span\x20id=\x22twag_cnt_supp\x22>0</span></div>\x0a\x20\x20<div\x20class=\x22stat-card\x22><h3>Apoios\x20Enviados</h3><span\x20id=\x22twag_sent_supp\x22>0</span></div>\x0a</div>\x0a\x0a\x20\x20<div\x20class=\x22twag-geral-actions\x22>\x0a\x20\x20<button\x20id=\x22twag_reset\x22\x20\x20class=\x22twag-btn-blue\x22>↺\x20Zerar\x20enviados</button>\x0a\x20\x20<button\x20id=\x22twag_export\x22\x20class=\x22twag-btn-blue\x22>⤴\x20Exportar\x20comandos</button>\x0a\x20\x20<button\x20id=\x22twag_import\x22\x20class=\x22twag-btn-blue\x22>⤵\x20Importar\x20comandos</button>\x0a</div>\x0a</div>\x0a</div>\x0a\x0a\x20\x20<!--\x20Aba\x20Simples\x20-->\x0a\x20\x20<div\x20id=\x22tab-simples\x22\x20class=\x22marques-tab-content\x22>\x0a\x20\x20\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22margin-bottom:\x2016px;\x22>\x0a\x20\x20\x20\x20\x20\x20<label>🏰\x20Aldeia\x20de\x20Origem:</label>\x0a\x20\x20\x20\x20\x20\x20<span\x20id=\x22aldeiaOrigem\x22\x20style=\x22color:\x20#00E5FF;\x22></span>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20gap:\x2012px;\x20flex-wrap:\x20wrap;\x20justify-content:\x20space-between;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20INFANTARIA\x20-->\x0a\x20\x20\x20\x20<table\x20class=\x22marques-tabela-unidades\x22\x20style=\x22background:\x20transparent;\x20border:\x20none;\x20font-family:\x20\x27pf-videotext\x27;\x20color:\x20#ccc;\x20width:\x20160px;\x22>\x0a\x20\x20\x20\x20\x20\x20<tr><th\x20style=\x22color:\x20#00E5FF;\x22>Infantaria</th></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_spear.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_spear\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22spear\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_sword.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_sword\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22sword\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_axe.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_axe\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22axe\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_archer.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_archer\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22archer\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20</table>\x0a\x0a\x20\x20\x20\x20<!--\x20CAVALARIA\x20-->\x0a\x20\x20\x20\x20<table\x20class=\x22marques-tabela-unidades\x22\x20style=\x22background:\x20transparent;\x20border:\x20none;\x20font-family:\x20\x27pf-videotext\x27;\x20color:\x20#ccc;\x20width:\x20160px;\x22>\x0a\x20\x20\x20\x20\x20\x20<tr><th\x20style=\x22color:\x20#00E5FF;\x22>Cavalaria</th></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_spy.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_spy\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22spy\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_light.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_light\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22light\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_marcher.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_marcher\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22marcher\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_heavy.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_heavy\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22heavy\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20</table>\x0a\x0a\x20\x20\x20\x20<!--\x20CERCO\x20-->\x0a\x20\x20\x20\x20<table\x20class=\x22marques-tabela-unidades\x22\x20style=\x22background:\x20transparent;\x20border:\x20none;\x20font-family:\x20\x27pf-videotext\x27;\x20color:\x20#ccc;\x20width:\x20160px;\x22>\x0a\x20\x20\x20\x20\x20\x20<tr><th\x20style=\x22color:\x20#00E5FF;\x22>Cerco</th></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_ram.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_ram\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22ram\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_catapult.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_catapult\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22catapult\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a<tr><td\x20class=\x22placeholder-row\x22></td></tr>\x0a<tr><td\x20class=\x22placeholder-row\x22></td></tr>\x0a\x20\x20\x20\x20</table>\x0a\x0a\x20\x20\x20\x20<!--\x20OUTROS\x20-->\x0a\x20\x20\x20\x20<table\x20class=\x22marques-tabela-unidades\x22\x20style=\x22background:\x20transparent;\x20border:\x20none;\x20font-family:\x20\x27pf-videotext\x27;\x20color:\x20#ccc;\x20width:\x20160px;\x22>\x0a\x20\x20\x20\x20\x20\x20<tr><th\x20style=\x22color:\x20#00E5FF;\x22>Outros</th></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_knight.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_knight\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22knight\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a\x20\x20\x20\x20\x20\x20<tr><td><img\x20src=\x22/graphic/unit/unit_snob.png\x22>\x20<input\x20type=\x22text\x22\x20id=\x22unit_snob\x22\x20placeholder=\x220\x22\x20style=\x22width:\x2040px;\x22>\x20<input\x20type=\x22checkbox\x22\x20class=\x22use-max\x22\x20data-unit=\x22snob\x22\x20title=\x22Usar\x20máximo\x20disponível\x22></td></tr>\x0a<tr><td\x20class=\x22placeholder-row\x22></td></tr>\x0a<tr><td\x20class=\x22placeholder-row\x22></td></tr>\x0a\x20\x20\x20\x20</table>\x0a\x20\x20</div>\x0a\x0a\x0a\x20\x20\x20\x20<!--\x20Linha\x201\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22flex-wrap:\x20nowrap;\x20gap:\x2016px;\x22>\x0a\x20\x20<label>Tipo:</label>\x0a\x20\x20<select\x20id=\x22tipoComando\x22>\x0a\x20\x20\x20\x20<option\x20value=\x22attack\x22>Ataque</option>\x0a\x20\x20\x20\x20<option\x20value=\x22support\x22>Apoio</option>\x0a\x20\x20</select>\x0a\x0a\x20\x20<div\x20id=\x22campoAflicao\x22\x20style=\x22display:\x20none;\x20align-items:\x20center;\x20gap:\x206px;\x22>\x0a\x20\x20\x20\x20<label\x20for=\x22aflicaoPercentual\x22>Aflição\x20(%):</label>\x0a\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22aflicaoPercentual\x22\x20value=\x220\x22\x20min=\x220\x22\x20max=\x2299\x22\x20style=\x22width:\x2060px;\x22>\x0a\x20\x20</div>\x0a\x0a\x20\x20<label>Modelo\x20de\x20NT:</label>\x0a\x20\x20<select\x20id=\x22modeloNT\x22>\x0a\x20\x20\x20\x20<option\x20value=\x22SEM\x20NT\x22>SEM\x20NT</option>\x0a\x20\x20\x20\x20<option\x20value=\x22NT\x202\x22>NT\x202</option>\x0a\x20\x20\x20\x20<option\x20value=\x22NT\x203\x22>NT\x203</option>\x0a\x20\x20\x20\x20<option\x20value=\x22NT\x204\x22>NT\x204</option>\x0a\x20\x20\x20\x20<option\x20value=\x22NT\x205\x22>NT\x205</option>\x0a\x20\x20</select>\x0a\x0a\x20\x20<label>Alvo\x20das\x20Catapultas:</label>\x0a\x20\x20<select\x20id=\x22alvoCatapultas\x22>\x0a\x20\x20\x20\x20<option\x20value=\x22Padrão\x22>Padrão</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22main\x22>Edifício\x20principal</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22barracks\x22>Quartel</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22stable\x22>Estábulo</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22garage\x22>Oficina</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22watchtower\x22>Torre\x20de\x20vigia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22snob\x22>Academia</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22smith\x22>Ferreiro</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22place\x22>Praça\x20de\x20reunião</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22statue\x22>Estátua</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22market\x22>Mercado</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22wood\x22>Bosque</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22stone\x22>Poço\x20de\x20argila</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22iron\x22>Mina\x20de\x20ferro</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22farm\x22>Fazenda</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22storage\x22>Armazém</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22wall\x22>Muralha</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<!--\x20Linha\x202\x20-->\x0a\x20\x20\x20\x20<div\x20class=\x22tw-config-row\x22>\x0a\x20\x20\x20\x20\x20\x20<label>Destino:</label>\x0a\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22destinoCoord\x22\x20placeholder=\x22123|456\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20<label>Base:</label>\x0a\x20\x20\x20\x20\x20\x20<select\x20id=\x22baseHorario\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22arrival\x22>Chegada</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22send\x22>Envio</option>\x0a\x20\x20\x20\x20\x20\x20</select>\x0a\x20\x20\x20\x20\x20\x20<label>Horário:</label>\x0a\x20\x20\x20\x20\x20<input\x20type=\x22datetime-local\x22\x0a\x20\x20\x20\x20\x20\x20\x20id=\x22horaAgendada\x22\x0a\x20\x20\x20\x20\x20\x20\x20step=\x220.001\x22\x20\x20style=\x22width:\x20220px;\x22\x20/>\x0a\x0a\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22margin-top:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-neon\x22\x20id=\x22btnAgendarSimples\x22>📌\x20Agendar\x20Comando</button>\x0a\x20\x20\x20\x20</div>\x0a\x0a<div\x20id=\x22blocoNT\x22\x20style=\x22display:none;\x20margin-top:\x2012px;\x22>\x0a\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22margin-bottom:\x206px;\x22>\x0a\x20\x20\x20\x20<label\x20for=\x22modoDivisaoNT\x22>Dividir\x20tropas\x20do\x20NT:</label>\x0a\x20\x20\x20\x20<select\x20id=\x22modoDivisaoNT\x22>\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22fixo\x22>Unidades</option>\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22percentual\x22>Percentual</option>\x0a\x20\x20\x20\x20</select>\x0a\x20\x20</div>\x0a\x0a\x20\x20<label\x20style=\x22color:#ccc;\x22>Tropas\x20por\x20linha\x20de\x20NT:</label>\x0a\x20\x20<div\x20id=\x22nt-linhas-container\x22></div>\x0a</div>\x0a\x0a\x20\x20</div>\x20<!--\x20fecha\x20aba\x20simples\x20-->\x0a\x0a<!--\x20Aba\x20Massa\x20-->\x0a<div\x20id=\x22tab-massa\x22\x20class=\x22marques-tab-content\x22>\x0a\x0a\x20\x20<!--\x20Linha\x20de\x20tropas\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22margin-top:\x204px;\x20width:\x20100%;\x22>\x0a\x20\x20\x20\x20<div\x20style=\x22\x0a\x20\x20\x20\x20\x20\x20display:\x20grid;\x0a\x20\x20\x20\x20\x20\x20grid-template-columns:\x20repeat(13,\x201fr);\x0a\x20\x20\x20\x20\x20\x20gap:\x2010px;\x0a\x20\x20\x20\x20\x20\x20justify-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:\x206px;\x20font-size:\x2013px;\x20color:\x20#ccc;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<b>Modelo\x20NT:</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22editModeloNT\x22\x20style=\x22margin-right:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "arrival",
    "game_data",
    "input[data-unit]",
    "catapult",
    "getTime",
    "<div\x20class=\x22twag-nt-line\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20style=\x22margin-right:6px;\x22>",
    "clipboard",
    "match",
    "NT\x203",
    "values",
    "twag_next_send",
    "mass_coordsOrigem",
    "\x0a\x20\x20\x20\x20<div\x20style=\x22padding:\x208px;\x20background:\x20#1e1e1e;\x20border-radius:\x208px;\x22>\x0a\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-wrap:\x20wrap;\x20gap:\x2010px;\x20margin-bottom:\x2010px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "⚔️\x20Agendador",
    "Erro",
    "1363221QdYFQk",
    ".linha-expandida",
    "includes",
    "[autoCommand]\x20Comando\x20não\x20encontrado:",
    ".tab-btn",
    "#8B0000",
    "horario",
    "text",
    "getHours",
    "body",
    "preventDefault",
    "farm",
    "remove",
    "sword",
    "Tem\x20certeza\x20que\x20deseja\x20excluir\x20todos\x20os\x20comandos\x20agendados?",
    "chegadaDesejada",
    "tw-agendador-header",
    ">Unidades</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22percentual\x22\x20",
    "getDate",
    "stone",
    "screen=place",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22",
    "aldeiaOrigem",
    "style",
    "editHorario",
    "allCount",
    "dispatchEvent",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22nt-unidade\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22/graphic/unit/unit_",
    "🌐\x20ID\x20da\x20aldeia\x20para",
    "loop",
    "getElementById",
    "delete",
    "warn",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "blocoNT",
    ".\x20Comando\x20ignorado.",
    "https://cdn.jsdelivr.net/gh/eleicaotw/TwManager@main/Brown%20Noise%20(1).mp3",
    "CS.offset",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "muted",
    "tab-",
    "origin",
    "textContent",
    "Max",
    "writeText",
    "\x20comandos\x20agendados\x20com\x20sucesso!",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "NT\x20",
    "\x22>💾\x20Salvar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-neon\x22\x20style=\x22background:#666;\x22\x20id=\x22btnCancelar\x22>❌\x20Cancelar</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20",
    "<div><strong>Catapultas:</strong>\x20<span\x20class=\x22twag-badge\x22>",
    "#combined_table\x20tr.row_a,\x20tr.row_b",
    "editCatapultas",
    "\x20→\x20",
    "group_id",
    "➡️\x20Criar\x20comando\x20de\x20",
    "observe",
    "input.nt-input",
    "mass_numOrigem",
    "twag-styles",
    "colSpan",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22twag-details\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22twag-details-troops\x22>",
    "has",
    "TWAG_currentCmdId",
    "hypot",
    "getTimezoneOffset",
    "<tr><td\x20colspan=\x226\x22\x20style=\x22color:#888;text-align:center;\x22>Nenhum\x20comando\x20agendado.</td></tr>",
    "max",
    "\x20comando(s)\x20caem\x20no\x20Bônus\x20Noturno\x20e\x20foram\x20ignorados:\x0a",
    "concat",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "</div>",
    "mass_",
    "join",
    "❌\x20Não\x20é\x20permitido\x20enviar\x20todos\x20os\x20nobres\x20com\x20NT.\x20Ajuste\x20a\x20quantidade.",
    "duration",
    "\x0a\x20\x20\x20\x20\x20\x20<td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22background:",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x22nt-input\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-linha=\x22",
    "\x22>×</button>\x0a\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20",
    "log",
    "corpoTabelaAgendados",
    "xdMLSSSSSSSSSSSSSSSSS",
    "btnRemoverCoordenadasAgendadas",
    "]\x22]",
    "string",
    "mass_alvoCatapultas",
    "smith",
    "Cole\x20o\x20texto\x20Base-64\x20gerado\x20pelo\x20exportar:",
    "#catapult_target",
    "salvarEdicaoComando",
    "destino",
    "#CSoffset",
    "[autoCommand]\x20Catapulta\x20ajustada\x20para",
    "&screen=place&x=",
    "[TWAG]\x20BN\x20",
    "✅\x20Comando\x20",
    "origem",
    "<div><strong>Base:</strong>\x20<span\x20class=\x22twag-badge\x22>",
    "knight",
    "reduce",
    "getComputedStyle",
    "\x22\x20width=\x2220\x22\x20height=\x22auto\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20<td>",
    "change",
    "place",
    ".png\x22\x20title=\x22",
    "/interface.php?func=get_config",
    "#005580",
    "TWAG_comandos",
    "https://marques-script.vercel.app/api",
    "createElement",
    "Erro\x20ao\x20gerar\x20horário\x20aleatório:",
    "wakeLock",
    "input[name=\x22train[",
    "[NT]\x20Expandindo\x20para",
    "priorizar_mais_distantes",
    "convertToInput",
    "tipo",
    "baseHorario",
    "SuccessMessage",
    "setHours",
    "config\x20>\x20*",
    "[TWAG]\x20Falhou\x20ao\x20ler\x20config\x20BN",
    "type",
    "getFullYear",
    "[data-unit]",
    "165fsWvYv",
    "support",
    "\x20às\x20",
    "json",
    "value=\x221\x22\x20disabled\x20style=\x22background:#333;cursor:not-allowed;\x22",
    "79252iCHBmz",
    "nt-linha",
    "click",
    "coord",
    "setMinutes",
    "querySelectorAll",
    "combined",
    "append",
    "selected",
    "getMonth",
    "priorizar_mais_proximas",
    "ntline",
    "enviado",
    "mass_coordsDestino",
    "push",
    "name",
    "garage",
    "\x20para\x20",
    ".nt-linha",
    "application/xml",
    "destinoCoord",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-top:\x2012px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22color:#ccc;\x20font-size:\x2013px;\x22>Divisão\x20NT:</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22editModoDivisaoNT\x22\x20style=\x22margin-left:\x208px;\x20background:\x20#1e1e1e;\x20color:\x20#ccc;\x20border:\x201px\x20solid\x20#2e2e2e;\x20border-radius:\x204px;\x20padding:\x202px\x206px;\x20font-family:\x20\x27pf-videotext\x27;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22unidades\x22\x20",
    "confirmButton",
    "Horário\x20inválido",
    "getItem",
    "from",
    "#twag_cnt_supp",
    "btnConfirmarAtaqueMassa",
    "classList",
    "audio",
    "input",
    "btn-disabled",
    "btnAgendarSimples",
    "none",
    "cmdId=",
    "#twag_cnt_attk",
    "close",
    "load_group_menu",
    "[TWAG]\x20keep-alive\x20ping",
    "td:contains(\x22Duração:\x22)",
    "inline-flex",
    "updateGeralStats",
    "inputx",
    "tropas",
    "twag_export",
    "valid",
    "input[id^=\x22unit_input_\x22]",
    "volume",
    "[autoCommand]\x20não\x20é\x20aba-filho\x20ou\x20faltou\x20cmdId,\x20abortando",
    "unit_",
    "atk",
    "5tyKzjz",
    "splice",
    ".png\x22\x20width=\x2212\x22\x20height=\x22auto\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22twag-badge\x22>",
    "Erro\x20ao\x20calcular\x20envio:",
    "setAttribute",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "[NT]\x20Linhas\x20NT\x20prontas",
    "ram",
    "grupoBaseHorario",
    "nt-linhas-container",
    "btnImportarCoordenadas",
    "agendados",
    "#CStime,\x20#CSoffset\x20{font-size:\x209pt;font-family:\x20Verdana,Arial;}#CSbutton\x20{float:right;}",
    "buildURL",
    "❌\x20Base-64\x20/\x20JSON\x20inválido:\x20",
    "attack",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22twag-actions\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn-editar\x22\x20data-index=\x22",
    "forEach",
    "Destino\x20inválido!\x20Use\x20o\x20formato\x20000|000.",
    "get",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-wrap:\x20wrap;\x20gap:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "[TWAG]\x20não\x20encontrou\x20#btnCancelar\x20para\x20bindar\x20evento",
    "#twag_sent_cmds",
    "init",
    "[TWAG·PAI]\x20GM_Tab\x20fechada\x20para\x20cmdId\x20",
    "opened",
    ".btn-remover",
    "speed",
    "toTimeString",
    "editBaseHorario",
    ".btn-salvar-edicao",
    "\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-unit=\x22",
    "href",
    "[NT]\x20Input\x20não\x20encontrado:",
    "&y=",
    "campoHorarioSimples",
    "\x22\x20placeholder=\x220\x22\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20style=\x22width:\x2041px;\x20text-align:\x20center;\x20font-size:\x2011px;\x20padding:\x201px\x203px;\x20border-radius:\x204px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "editModoDivisaoNT",
    "function",
    "removeItem",
    "#CSbutton",
    "\x20comandos\x20pendentes…",
    "<div\x20style=\x22display:flex;align-items:center;gap:2px;white-space:nowrap;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22/graphic/unit/unit_",
    "\x20comandos\x20não\x20foram\x20agendados\x20por\x20estarem\x20atrasados:\x0a",
    "archer",
    "/interface.php?func=get_unit_info",
    "[autoCommand]\x20Place\x20enviado,\x20aguardando\x20confirmação…",
    "TWAG_exec_",
    "checked",
    "&screen=place",
    "min",
    "mass_horario_inicio",
    "snob",
    "full",
    "&cmdId=",
    "getAttribute",
    "data-all-count",
    "NT\x205",
    "/game.php?village=",
    "envio_imediato",
    "3603006OVewVp",
    "cmdId",
    ".nt-edit-input",
    "NT\x204",
    "669gXXxvL",
    "display",
    "head",
    "map",
    "floor",
    "[id^=\x22unit_\x22]",
    "modeloNT",
    "toLowerCase",
    "target",
    "option",
    "twag_reset",
    "[autoCommand]\x20Selector\x20de\x20catapultas\x20não\x20encontrado",
    "setItem",
    "⏰\x20Defina\x20o\x20intervalo\x20de\x20horários\x20aleatórios.",
    "add",
    "startsWith",
    "sort",
    "setSeconds",
    "#place_confirm_catapult_target\x20select[name=\x22building\x22]",
    "entries",
    "unit",
    "length",
    "#target_",
    "className",
    "#place_target",
    "#troop_confirm_go",
    "869239PngQxF",
    "#troop_confirm_train",
    ".png\x22\x20width=\x2218\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20class=\x22nt-edit-input\x22\x20data-ntline=\x22",
    "[TWAG]\x20cmdId\x20armazenado\x20em\x20sessionStorage:",
    "filter",
    "trim",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22margin-bottom:\x206px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22color:\x20#888;\x20font-size:\x2013px;\x20margin-bottom:\x204px;\x22>#",
    "twag-row-details",
    "separator",
    "❌\x20Preencha\x20as\x20coordenadas\x20de\x20origem\x20e\x20destino.",
    "toLocaleTimeString",
    ":00",
    "🧹\x20",
    "8IXQXmI",
    "Nada\x20a\x20exportar:\x20lista\x20vazia.",
    "mass_grupoOrigem",
    "querySelector",
    "toISOString",
    "TWAG_done_",
    "mass_modeloNT",
    "opener",
    "stable",
    "request",
    "send",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x204px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22/graphic/unit/unit_",
    "no-store",
    "&sendNow=1",
    "❌\x20Para\x20NT\x20é\x20necessário\x20configurar\x20pelo\x20menos\x201\x20nobre.",
    "left",
    "#twag_sent_supp",
    "slice",
    "dateNow",
    "value",
    "closest",
    "light",
    "alvoCatapultas",
    "try",
    "spy",
    "não\x20é\x20array",
    "each",
    "TWAG_base_sent_sup",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "getBoundingClientRect",
    "text/css",
    "\x0a\x20\x20\x20\x20<h4>#",
    "searchParams",
    "fixo",
    "</td>\x0a\x20\x20\x20\x20\x20\x20<td>",
    "twag-row-main",
    "offset",
    "⚠️\x20",
    "openedAt",
    "open",
    "watchtower",
    "url",
    "modoDivisaoNT-massa",
    "⚠️\x20Valor\x20inválido\x20passado\x20para\x20parseTS:",
    "⛔\x20Falha\x20ao\x20gerar\x20horário\x20aleatório:",
    "[NT]\x20Preenchendo\x20tropas\x20nas\x20linhas\x20adicionais",
    "tab",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x204px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22/graphic/unit/unit_",
    "#command-data-form",
    "🔁\x20Retomando\x20",
    "aflicaoPercentual",
    "nt-linhas-container-massa",
    "Padrão",
    "tw-agendador",
    "InfoMessage",
    "search",
    "parseFromString",
    "SEM\x20NT",
    "\x22>✏️\x20Editar</button>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20",
    "mouseup",
    "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
    "\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Alvo\x20e\x20Modelo\x20NT\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22>\x0a\x20\x20\x20\x20<label>Alvo\x20das\x20Catapultas:</label>\x0a\x20\x20\x20\x20<select\x20id=\x22mass_alvoCatapultas\x22\x20style=\x22min-width:\x20180px;\x22></select>\x0a\x0a\x20\x20\x20\x20<label>Modelo\x20de\x20NT:</label>\x0a\x20\x20\x20\x20<select\x20id=\x22mass_modeloNT\x22\x20style=\x22min-width:\x20120px;\x22></select>\x0a\x20\x20</div>\x0a\x0a<div\x20id=\x22blocoNT-massa\x22\x20style=\x22display:none;\x20margin-top:\x2012px;\x22>\x0a\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22margin-bottom:\x206px;\x22>\x0a\x20\x20\x20\x20<label\x20for=\x22modoDivisaoNT-massa\x22>Dividir\x20tropas\x20do\x20NT:</label>\x0a\x20\x20\x20\x20<select\x20id=\x22modoDivisaoNT-massa\x22>\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22fixo\x22>Unidades</option>\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22percentual\x22>Percentual</option>\x0a\x20\x20\x20\x20</select>\x0a\x20\x20</div>\x0a\x0a\x20\x20<label\x20style=\x22color:#ccc;\x22>Tropas\x20por\x20linha\x20de\x20NT:</label>\x0a\x20\x20<div\x20id=\x22nt-linhas-container-massa\x22></div>\x0a</div>\x0a\x0a\x0a\x20\x20<!--\x20Grupo\x20e\x20Coordenadas\x20Origem\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22>\x0a\x20\x20\x20\x20<label>Grupo\x20de\x20Origem:</label>\x0a\x20\x20\x20\x20<select\x20id=\x22mass_grupoOrigem\x22\x20style=\x22min-width:\x20160px;\x22></select>\x0a\x20\x20\x20\x20<button\x20class=\x22btn-neon\x22\x20id=\x22btnImportarCoordenadas\x22>Importar\x20Coordenadas</button>\x0a\x20\x20\x20\x20<button\x20class=\x22btn-neon\x22\x20id=\x22btnRemoverCoordenadasAgendadas\x22\x20style=\x22background:#c62828;\x22>Remover\x20Agendadas</button>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20class=\x22tw-config-row\x22>\x0a\x20\x20\x20\x20<label\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20width:\x20100%;\x22>\x0a\x20\x20<span>Coordenadas\x20Origem:</span>\x0a\x20\x20<span\x20id=\x22contadorCoordsOrigem\x22\x20style=\x22font-size:\x2012px;\x20color:\x20#00E5FF;\x22>0\x20coordenadas</span>\x0a</label>\x0a\x0a\x20\x20\x20\x20<textarea\x20id=\x22mass_coordsOrigem\x22\x20rows=\x223\x22\x20style=\x22width:\x20100%;\x20resize:\x20vertical;\x22></textarea>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Nro\x20Origem\x20e\x20Definição\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22>\x0a\x20\x20\x20\x20<label>Nro\x20de\x20Origem\x20por\x20Destino:</label>\x0a\x20\x20\x20\x20<input\x20type=\x22number\x22\x20id=\x22mass_numOrigem\x22\x20style=\x22width:\x2080px;\x20margin-right:\x2020px;\x22>\x0a\x20\x20\x20\x20<label>Definir\x20Origens\x20por\x20Destino:</label>\x0a\x20\x20\x20\x20<select\x20id=\x22mass_criterioDestino\x22\x20style=\x22min-width:\x20200px;\x22>\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22mais_proximas\x22>Priorizar\x20Mais\x20Próximas</option>\x0a\x20\x20\x20\x20\x20\x20<option\x20value=\x22distribuir\x22>Distribuir\x20Iguais</option>\x0a\x20\x20\x20\x20</select>\x0a\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Coordenadas\x20Destino\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22>\x0a\x20\x20\x20\x20<label\x20style=\x22display:\x20flex;\x20justify-content:\x20space-between;\x20align-items:\x20center;\x20width:\x20100%;\x22>\x0a\x20\x20<span>Coordenadas\x20Destino:</span>\x0a\x20\x20<span\x20id=\x22contadorCoordsDestino\x22\x20style=\x22font-size:\x2012px;\x20color:\x20#00E5FF;\x22>0\x20coordenadas</span>\x0a</label>\x0a\x0a\x20\x20\x20\x20<textarea\x20id=\x22mass_coordsDestino\x22\x20rows=\x223\x22\x20style=\x22width:\x20100%;\x20resize:\x20vertical;\x22></textarea>\x0a\x20\x20</div>\x0a\x0a<div\x20style=\x22margin-bottom:\x2010px;\x20display:\x20flex;\x20gap:\x2012px;\x20align-items:\x20center;\x22>\x0a\x20\x20<label\x20for=\x22modalidadeCadastro\x22\x20style=\x22color:\x20#ccc;\x20font-family:\x20\x27pf-videotext\x27;\x22>Modalidade\x20de\x20Cadastro:</label>\x0a\x20\x20<select\x20id=\x22modalidadeCadastro\x22\x20style=\x22padding:\x204px\x208px;\x20font-size:\x2013px;\x22>\x0a\x20\x20\x20\x20<option\x20value=\x22programado\x22>Programado</option>\x0a\x20\x20\x20\x20<option\x20value=\x22envio_imediato\x22>Envio\x20Imediato</option>\x0a\x20\x20\x20\x20<option\x20value=\x22aleatorio\x22>Programação\x20Aleatória</option>\x0a\x20\x20</select>\x0a</div>\x0a\x0a<!--\x20Seletor\x20de\x20base\x20de\x20horário\x20(visível\x20só\x20em\x20\x22aleatorio\x22)\x20-->\x0a<div\x20id=\x22grupoBaseHorario\x22\x20style=\x22display:\x20none;\x20margin-bottom:\x2010px;\x22>\x0a\x20\x20<label\x20for=\x22modalidadeHorario\x22\x20style=\x22color:\x20#ccc;\x20font-family:\x20\x27pf-videotext\x27;\x22>Definir\x20Horário:</label>\x0a\x20\x20<select\x20id=\x22modalidadeHorario\x22\x20style=\x22margin-left:\x208px;\x20padding:\x204px\x208px;\x22>\x0a\x20\x20\x20\x20<option\x20value=\x22arrival\x22>Chegada</option>\x0a\x20\x20\x20\x20<option\x20value=\x22send\x22>Envio</option>\x0a\x20\x20</select>\x0a</div>\x0a\x0a<!--\x20Campo\x20padrão\x20de\x20horário\x20(para\x20\x22programado\x22)\x20-->\x0a<div\x20id=\x22campoHorarioSimples\x22\x20style=\x22margin-bottom:\x2010px;\x22>\x0a\x20\x20<label\x20for=\x22mass_horario\x22\x20style=\x22color:\x20#ccc;\x20font-family:\x20\x27pf-videotext\x27;\x22>Horário:</label>\x0a\x20\x20<input\x20id=\x22mass_horario\x22\x20type=\x22datetime-local\x22\x20\x20step=\x220.001\x22\x20style=\x22margin-left:\x208px;\x20padding:\x204px\x208px;\x22>\x0a</div>\x0a\x0a<!--\x20Campo\x20de\x20intervalo\x20(para\x20\x22aleatorio\x22)\x20-->\x0a<div\x20id=\x22campoHorarioIntervalo\x22\x20style=\x22display:\x20none;\x20margin-bottom:\x2010px;\x22>\x0a\x20\x20<label\x20style=\x22color:\x20#ccc;\x20font-family:\x20\x27pf-videotext\x27;\x22>Horário:</label>\x0a\x20\x20<input\x20id=\x22mass_horario_inicio\x22\x20type=\x22datetime-local\x22\x20step=\x221\x22\x20style=\x22margin-left:\x208px;\x20padding:\x204px\x208px;\x22>\x0a\x20\x20<span\x20style=\x22margin:\x200\x206px;\x20color:\x20#ccc;\x22>Até</span>\x0a\x20\x20<input\x20id=\x22mass_horario_fim\x22\x20type=\x22datetime-local\x22\x20\x20step=\x220.001\x22\x20style=\x22padding:\x204px\x208px;\x22>\x0a</div>\x0a\x0a\x20\x20<!--\x20Opções\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22gap:\x2016px;\x22>\x0a\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22mass_enviarMesmoBN\x22>\x20Enviar\x20Mesmo\x20se\x20Bater\x20no\x20BN</label>\x0a\x20\x20\x20\x20<label><input\x20type=\x22checkbox\x22\x20id=\x22mass_enviarMesmoAtrasado\x22>\x20Enviar\x20Mesmo\x20com\x20Atraso</label>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20<!--\x20Botões\x20-->\x0a\x20\x20<div\x20class=\x22tw-config-row\x22\x20style=\x22justify-content:\x20space-between;\x20margin-top:\x2010px;\x22>\x0a\x20\x20\x20\x20<button\x20class=\x22btn-neon\x22\x20id=\x22btnConfirmarAtaqueMassa\x22>Confirmar\x20Ataque\x20em\x20Massa</button>\x0a\x20\x20\x20\x20<button\x20class=\x22btn-neon\x22\x20id=\x22btnConfirmarApoioMassa\x22\x20style=\x22background:#3399ff;\x22>Confirmar\x20Apoio\x20em\x20Massa</button>\x0a\x20\x20</div>\x0a\x0a</div>\x0a\x0a\x0a</div>\x0a</div>\x0a\x0a\x20\x20<!--\x20Aba\x20Comandos\x20Agendados\x20-->\x0a<div\x20id=\x22tab-agendados\x22\x20class=\x22marques-tab-content\x22>\x0a\x0a\x20\x20<div\x20class=\x22twag-agd-actions\x22>\x0a\x20\x20\x20\x20<button\x20id=\x22btn-excluir-todos\x22\x20class=\x22twag-btn-red\x22>🧹\x20Excluir\x20Todos</button>\x0a\x20\x20</div>\x0a\x0a\x20\x20<div\x20class=\x22twag-scrollwrap\x22>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<!--\x20<<<\x20scroll\x20só\x20aqui\x20-->\x0a\x20\x20\x20\x20<table\x20class=\x22marques-tabela-comandos\x22>\x0a\x20\x20\x20\x20\x20\x20<thead>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<tr>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Comando</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Origem</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Destino</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Saída</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Chegada</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<th>Ação</th>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</tr>\x0a\x20\x20\x20\x20\x20\x20</thead>\x0a\x0a\x20\x20\x20\x20\x20\x20<tbody\x20id=\x22corpoTabelaAgendados\x22\x20class=\x22twag-scrollbody\x22></tbody>\x0a\x20\x20\x20\x20</table>\x0a\x20\x20</div>\x0a</div>\x0a\x0a\x0a\x0a",
    "then",
    "sendNow",
    "heavy",
    "dataset",
    "contadorCoordsDestino",
    "indexOf",
    "modoDivisaoNT",
    "\x20+0h",
    "userId",
    ";padding:4px;border-radius:4px;display:inline-block;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22",
    "village",
    "❌\x20Configure\x20pelo\x20menos\x20uma\x20tropa\x20para\x20agendar\x20os\x20comandos.",
    "div",
    "innerHTML",
    ".btn-expandir",
    "block",
    "linhasNT",
    "editModeloNT",
    "serverDate",
    "split",
    "location",
    "wall",
    "parse",
    "tentativas",
    "market",
    "barracks",
    "TWAG_base_sent_cmd",
    "<div><strong>Horário:</strong>\x20<span\x20class=\x22twag-badge\x22>",
    "isArray",
    "TWAG_refresh_stats",
    "tw-agendador-container",
    "\x20enviado\x20com\x20sucesso\x20de\x20",
    "#units_form\x20input.unitsInput",
    "findIndex",
    "✅\x20Comando\x20agendado\x20com\x20sucesso!",
    "table-row",
    "groups",
    "[autoCommand]\x20Tela\x20de\x20confirmação\x20detectada",
    ".use-max-mass[data-unit=\x22",
    "_self",
    "📦\x20Atribuições\x20origem\x20→\x20destino:",
    "</h4>\x0a\x20\x20\x20\x20<div\x20class=\x22nt-unidades\x22>\x0a\x20\x20\x20\x20\x20\x20",
    "❌\x20Comando\x20ignorado\x20por\x20horário\x20inválido:",
  ];
  _0xd2b7 = function () {
    return _0x34fd83;
  };
  return _0xd2b7();
}
function _0x362b(_0x171fe6, _0x465c14) {
  const _0xd2b71c = _0xd2b7();
  return (
    (_0x362b = function (_0x362b6c, _0x4fe6c4) {
      _0x362b6c = _0x362b6c - 0x1ab;
      let _0x2a723d = _0xd2b71c[_0x362b6c];
      return _0x2a723d;
    }),
    _0x362b(_0x171fe6, _0x465c14)
  );
}
(function (_0x4bc4bd, _0x4906a5) {
  const _0x4d6dc8 = _0x362b,
    _0x338189 = _0x4bc4bd();
  while (!![]) {
    try {
      const _0x1a82ad =
        (-parseInt(_0x4d6dc8(0x24e)) / 0x1) *
          (-parseInt(_0x4d6dc8(0x21b)) / 0x2) +
        (parseInt(_0x4d6dc8(0x28e)) / 0x3) *
          (-parseInt(_0x4d6dc8(0x348)) / 0x4) +
        (parseInt(_0x4d6dc8(0x216)) / 0x5) *
          (parseInt(_0x4d6dc8(0x322)) / 0x6) +
        parseInt(_0x4d6dc8(0x2a8)) / 0x7 +
        (-parseInt(_0x4d6dc8(0x2b5)) / 0x8) *
          (-parseInt(_0x4d6dc8(0x394)) / 0x9) +
        -parseInt(_0x4d6dc8(0x349)) / 0xa +
        -parseInt(_0x4d6dc8(0x28a)) / 0xb;
      if (_0x1a82ad === _0x4906a5) break;
      else _0x338189["push"](_0x338189["shift"]());
    } catch (_0x4c5ea8) {
      _0x338189["push"](_0x338189["shift"]());
    }
  }
})(_0xd2b7, 0x1f7d9),
  (function () {
    "use strict";
    const _0x352f8f = _0x362b;
    function _0xf35bc8(_0x48dc84) {
      (function () {
        const _0x4d00fa = _0x362b;
        var _0x474a6e = [
            _0x4d00fa(0x248),
            _0x4d00fa(0x36a),
            _0x4d00fa(0x386),
            _0x4d00fa(0x325),
            "id",
            _0x4d00fa(0x2fb),
            "localStorage",
            _0x4d00fa(0x233),
          ],
          _0x363df5 = function (_0x22e4e3) {
            return _0x474a6e[_0x22e4e3];
          },
          _0x130649 =
            (window[_0x363df5(0x2)] &&
              window[_0x363df5(0x2)][_0x363df5(0x3)] &&
              window[_0x363df5(0x2)][_0x363df5(0x3)][_0x363df5(0x4)]) ||
            window[_0x363df5(0x6)][_0x363df5(0x7)](_0x363df5(0x5));
        fetch(_0x48dc84 + _0x363df5(0x1) + _0x130649)
          [_0x4d00fa(0x2f3)](function (_0x51a882) {
            const _0x5ad67b = _0x4d00fa;
            return _0x51a882[_0x5ad67b(0x219)]();
          })
          [_0x4d00fa(0x2f3)](function (_0x52af04) {
            const _0xc93515 = _0x4d00fa;
            if (!_0x52af04[_0x363df5(0x0)]) throw new Error(_0xc93515(0x1ea));
          })
          ["catch"](function () {
            throw new Error("xdMLxcDDDDDDDDDDDDDDDDDDD");
          });
      })();
    }
    _0xf35bc8(_0x352f8f(0x205));
    const _0x167e88 =
        typeof GM_setValue !== "undefined"
          ? GM_setValue
          : (_0x4965e3, _0x22521e) => {
              const _0x52748a = _0x352f8f;
              localStorage[_0x52748a(0x29a)](
                _0x4965e3,
                JSON["stringify"](_0x22521e)
              );
            },
      _0x17a130 =
        typeof GM_addValueChangeListener !== "undefined"
          ? GM_addValueChangeListener
          : () => {},
      _0x44b9f6 =
        typeof GM_openInTab !== "undefined"
          ? GM_openInTab
          : (_0x176e95, _0x14e339) => {
              const _0x49a8bb = _0x352f8f;
              return (
                window["open"](
                  _0x176e95,
                  _0x14e339?.[_0x49a8bb(0x372)] ? _0x49a8bb(0x31e) : "_self"
                ),
                null
              );
            },
      _0x3eaad1 =
        typeof GM_xmlhttpRequest !== _0x352f8f(0x360)
          ? GM_xmlhttpRequest
          : (_0x21767a, _0x4c052f) => {
              const _0x4589fc = _0x352f8f;
              return (
                window[_0x4589fc(0x2dc)](
                  _0x21767a,
                  _0x4c052f?.["active"] ? _0x4589fc(0x31e) : _0x4589fc(0x31a)
                ),
                null
              );
            },
      _0x2b14fc = window["location"]["href"],
      _0x2398c2 = _0x2b14fc[_0x352f8f(0x396)](_0x352f8f(0x1ae));
    if (_0x2398c2) {
      (function _0x4b78c8() {
        const _0x1efdb7 = _0x352f8f,
          _0x56e260 = _0x1efdb7(0x392);
        setInterval(() => {
          const _0x5801fa = _0x1efdb7;
          document[_0x5801fa(0x323)] !== _0x56e260 &&
            (document[_0x5801fa(0x323)] = _0x56e260);
        }, 0x3e8);
      })(),
        (function _0x11b7d0() {
          const _0x1d3da3 = _0x352f8f,
            _0x158394 = new URL(location[_0x1d3da3(0x26e)]),
            _0x5ed8e2 = _0x158394[_0x1d3da3(0x2d5)][_0x1d3da3(0x261)](
              _0x1d3da3(0x28b)
            );
          _0x5ed8e2 &&
            (sessionStorage[_0x1d3da3(0x29a)](_0x1d3da3(0x1d8), _0x5ed8e2),
            console["log"](_0x1d3da3(0x2ab), _0x5ed8e2));
        })();
      let _0x229ee5 = ![],
        _0x2bc319 = 0x0,
        _0x477eda = 0x0;
      const _0x51c0f8 = {
        cmd: _0x352f8f(0x30d),
        atk: _0x352f8f(0x35c),
        sup: _0x352f8f(0x2d0),
      };
      function _0xd2276d(_0x5ccefd) {
        return btoa(unescape(encodeURIComponent(_0x5ccefd)));
      }
      function _0x294ab3(_0x55fb24) {
        return decodeURIComponent(escape(atob(_0x55fb24)));
      }
      (async function _0x366486() {
        const _0x5aff9d = _0x352f8f;
        try {
          const _0x2d5d6c = await (
              await fetch(_0x5aff9d(0x202))
            )[_0x5aff9d(0x39b)](),
            _0x1830ed = +_0x2d5d6c[_0x5aff9d(0x38c)](
              /<night>\s*<active>(\d+)<\/active>/s
            )[0x1],
            _0x55cb41 = +_0x2d5d6c[_0x5aff9d(0x38c)](
              /<start_hour>(\d+)<\/start_hour>/
            )[0x1],
            _0x30d6c8 = +_0x2d5d6c["match"](/<end_hour>(\d+)<\/end_hour>/)[0x1];
          (_0x229ee5 = _0x1830ed === 0x1),
            (_0x2bc319 = _0x55cb41),
            (_0x477eda = _0x30d6c8);
          const _0x306666 = _0x2bc319 > _0x477eda;
          console["log"](
            _0x5aff9d(0x1f7) +
              (_0x229ee5 ? "ON" : "OFF") +
              "\x20" +
              ("(" + String(_0x2bc319)["padStart"](0x2, "0") + ":00") +
              ("–" +
                String(_0x477eda)[_0x5aff9d(0x33d)](0x2, "0") +
                _0x5aff9d(0x2b3) +
                (_0x306666 ? _0x5aff9d(0x2fa) : "") +
                ")")
          );
        } catch (_0x4379d6) {
          console[_0x5aff9d(0x1ba)](_0x5aff9d(0x212), _0x4379d6);
        }
      })(),
        (function () {
          "use strict";
          const _0x19df86 = _0x352f8f;
          function _0x37bf3d() {
            const _0x4ccf89 = _0x362b;
            if (window[_0x4ccf89(0x373)]) return;
            window["__TWAG_KEEPALIVE__"] = !![];
            let _0x171e9c = null;
            async function _0x12f47a() {
              const _0x3be512 = _0x4ccf89;
              try {
                _0x171e9c = await navigator[_0x3be512(0x208)]?.[
                  _0x3be512(0x2be)
                ]?.("screen");
              } catch {}
            }
            _0x4ccf89(0x208) in navigator &&
              (_0x12f47a(),
              document[_0x4ccf89(0x367)](_0x4ccf89(0x32d), () => {
                if (document["visibilityState"] === "visible" && !_0x171e9c)
                  _0x12f47a();
              }));
            const _0x2b768b = document[_0x4ccf89(0x206)](_0x4ccf89(0x238));
            (_0x2b768b[_0x4ccf89(0x320)] = _0x4ccf89(0x1be)),
              (_0x2b768b[_0x4ccf89(0x1b7)] = !![]),
              (_0x2b768b[_0x4ccf89(0x1c1)] = !![]),
              (_0x2b768b[_0x4ccf89(0x24a)] = 0x0),
              _0x2b768b[_0x4ccf89(0x252)]("playsinline", ""),
              (_0x2b768b["autoplay"] = !![]),
              (_0x2b768b[_0x4ccf89(0x1b1)][_0x4ccf89(0x28f)] = "none"),
              document["documentElement"]["appendChild"](_0x2b768b),
              setInterval(
                () => console["debug"](_0x4ccf89(0x241), Date["now"]()),
                0x7530
              );
          }
          const _0x2cfce9 = _0x19df86(0x204),
            _0x2bc5f8 = new Map(),
            _0x5ad8f1 = (_0x3afe19) => _0x19df86(0x27d) + _0x3afe19,
            _0x49721a =
              Date[_0x19df86(0x376)]() +
              "_" +
              Math["random"]()[_0x19df86(0x334)](0x10)[_0x19df86(0x2c6)](0x2),
            _0xa00032 = new URL(location["href"]),
            _0x4c1a4a = sessionStorage[_0x19df86(0x233)]("TWAG_currentCmdId"),
            _0x387477 = !!_0x4c1a4a;
          if (
            _0x4c1a4a &&
            _0xa00032[_0x19df86(0x2d5)][_0x19df86(0x261)]("screen") === "place"
          ) {
            const _0x4fe009 = _0xa00032[_0x19df86(0x2d5)]["has"](
                _0x19df86(0x2cc)
              ),
              _0x3f7d9a = _0xa00032[_0x19df86(0x2d5)][_0x19df86(0x1d7)]("x"),
              _0x57d6f9 = _0xa00032[_0x19df86(0x2d5)][_0x19df86(0x1d7)]("y");
            if (!_0x4fe009 && !_0x3f7d9a && !_0x57d6f9) {
              if (typeof _0x39ed9c === "function") _0x39ed9c(_0x4c1a4a);
              else {
                const _0x424a84 = _0x3d21d5(),
                  _0x1fb9f7 = _0x424a84[_0x19df86(0x314)](
                    (_0x35a810) => _0x35a810["id"] == _0x4c1a4a
                  );
                _0x1fb9f7 > -0x1 &&
                  ((_0x424a84[_0x1fb9f7]["enviado"] = !![]),
                  delete _0x424a84[_0x1fb9f7][_0x19df86(0x2f4)],
                  _0x4e2f77(_0x424a84)),
                  _0x167e88(
                    _0x19df86(0x2ba) + _0x4c1a4a,
                    Date[_0x19df86(0x376)]()
                  );
              }
              sessionStorage[_0x19df86(0x275)]("TWAG_currentCmdId"),
                console[_0x19df86(0x1e8)](_0x19df86(0x33f));
            }
          }
          _0x17a130("*", (_0x1182c0, _0x575bf7, _0x36bbae, _0x2928bd) => {
            const _0xd7413b = _0x19df86;
            if (!_0x2928bd) return;
            if (_0x1182c0[_0xd7413b(0x29d)]("TWAG_done_")) {
              const _0x1ab915 = _0x1182c0[_0xd7413b(0x2c6)](0xa);
              _0x415d84(_0x1ab915), _0x8d46d3(), _0x2bcb01?.();
            }
            _0x1182c0 === _0xd7413b(0x310) && (_0x8d46d3(), _0x2bcb01?.());
          });
          function _0x4e28e7(_0xddc03c) {
            const _0x44e7a5 = _0x19df86;
            if (!_0x229ee5) return ![];
            const _0x2643a4 = new Date(_0xddc03c),
              _0x2c9309 = _0x2643a4[_0x44e7a5(0x39c)]();
            return _0x2bc319 < _0x477eda
              ? _0x2c9309 >= _0x2bc319 && _0x2c9309 < _0x477eda
              : _0x2c9309 >= _0x2bc319 || _0x2c9309 < _0x477eda;
          }
          function _0x3d21d5() {
            const _0x15e446 = _0x19df86,
              _0x541db2 = localStorage[_0x15e446(0x233)](_0x2cfce9);
            if (_0x541db2 === null) return [];
            try {
              const _0x19d6e9 = JSON[_0x15e446(0x309)](_0x541db2);
              return Array[_0x15e446(0x30f)](_0x19d6e9) ? _0x19d6e9 : [];
            } catch {
              return localStorage[_0x15e446(0x29a)](_0x2cfce9, "[]"), [];
            }
          }
          function _0x4e2f77(_0x40bcac) {
            const _0x285360 = _0x19df86;
            if (Array[_0x285360(0x30f)](_0x40bcac))
              localStorage[_0x285360(0x29a)](
                _0x2cfce9,
                JSON["stringify"](_0x40bcac)
              );
          }
          const _0x647bb6 = 0x4e20,
            _0x3148dd = 0x64,
            _0x4d9fce = 0x3e8,
            _0x3c5a0f = document[_0x19df86(0x206)](_0x19df86(0x1b1));
          (_0x3c5a0f["innerHTML"] = _0x19df86(0x380)),
            document[_0x19df86(0x290)][_0x19df86(0x37c)](_0x3c5a0f);
          if (document["getElementById"](_0x19df86(0x2ea))) return;
          const _0x1e3538 = document[_0x19df86(0x206)]("div");
          (_0x1e3538["id"] = "tw-agendador"),
            (_0x1e3538[_0x19df86(0x2a5)] = _0x19df86(0x311));
          location[_0x19df86(0x26e)][_0x19df86(0x396)]("try=confirm") &&
            (_0x1e3538[_0x19df86(0x1b1)][_0x19df86(0x28f)] = _0x19df86(0x23c));
          if (_0x387477) {
            const _0x1bc493 = document["getElementById"](_0x19df86(0x2ea));
            if (_0x1bc493)
              _0x1bc493["style"][_0x19df86(0x28f)] = _0x19df86(0x23c);
          }
          (_0x1e3538[_0x19df86(0x300)] =
            _0x19df86(0x383) +
            [
              _0x19df86(0x379),
              _0x19df86(0x3a1),
              _0x19df86(0x328),
              _0x19df86(0x27a),
              _0x19df86(0x2cd),
              _0x19df86(0x2ca),
              _0x19df86(0x378),
              "heavy",
              _0x19df86(0x255),
              _0x19df86(0x388),
              _0x19df86(0x1fb),
              _0x19df86(0x282),
            ]
              [_0x19df86(0x291)](
                (_0x396f49) =>
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20flex-direction:\x20column;\x20align-items:\x20center;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22display:\x20flex;\x20align-items:\x20center;\x20gap:\x203px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22/graphic/unit/unit_" +
                  _0x396f49 +
                  _0x19df86(0x201) +
                  _0x396f49 +
                  _0x19df86(0x35a) +
                  _0x396f49 +
                  "\x22\x20title=\x22Usar\x20máximo\x22\x20style=\x22transform:\x20scale(0.9);\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22mass_" +
                  _0x396f49 +
                  _0x19df86(0x272)
              )
              [_0x19df86(0x1e2)]("") +
            _0x19df86(0x2f2)),
            document[_0x19df86(0x39d)][_0x19df86(0x37c)](_0x1e3538),
            setTimeout(_0x11e126, 0x7d0),
            document[_0x19df86(0x1b8)]("modalidadeCadastro")[_0x19df86(0x367)](
              _0x19df86(0x1ff),
              function () {
                const _0x86d21a = _0x19df86,
                  _0x1a9f5e = this[_0x86d21a(0x2c8)],
                  _0x61517b = document[_0x86d21a(0x1b8)](_0x86d21a(0x256)),
                  _0x4d35b8 = document[_0x86d21a(0x1b8)](_0x86d21a(0x271)),
                  _0xa4e79b = document["getElementById"](
                    "campoHorarioIntervalo"
                  );
                if (_0x1a9f5e === _0x86d21a(0x34f))
                  (_0x61517b[_0x86d21a(0x1b1)][_0x86d21a(0x28f)] = "none"),
                    (_0x4d35b8["style"]["display"] = ""),
                    (_0xa4e79b[_0x86d21a(0x1b1)]["display"] = _0x86d21a(0x23c));
                else {
                  if (_0x1a9f5e === _0x86d21a(0x289))
                    (_0x61517b[_0x86d21a(0x1b1)][_0x86d21a(0x28f)] =
                      _0x86d21a(0x23c)),
                      (_0x4d35b8[_0x86d21a(0x1b1)][_0x86d21a(0x28f)] =
                        _0x86d21a(0x23c)),
                      (_0xa4e79b[_0x86d21a(0x1b1)]["display"] =
                        _0x86d21a(0x23c));
                  else
                    _0x1a9f5e === _0x86d21a(0x32c) &&
                      ((_0x61517b[_0x86d21a(0x1b1)][_0x86d21a(0x28f)] = ""),
                      (_0x4d35b8[_0x86d21a(0x1b1)][_0x86d21a(0x28f)] =
                        _0x86d21a(0x23c)),
                      (_0xa4e79b[_0x86d21a(0x1b1)][_0x86d21a(0x28f)] = ""));
                }
              }
            ),
            $["get"](
              TribalWars[_0x19df86(0x25b)]("GET", _0x19df86(0x317), {
                ajax: _0x19df86(0x240),
              })
            )[_0x19df86(0x2f3)]((_0x417b9e) => {
              const _0x44f781 = _0x19df86,
                _0x578d60 = document[_0x44f781(0x1b8)](_0x44f781(0x2b7));
              (_0x578d60[_0x44f781(0x300)] = ""),
                _0x417b9e[_0x44f781(0x342)][_0x44f781(0x25f)]((_0x3c3ec6) => {
                  const _0x388dd7 = _0x44f781;
                  if (_0x3c3ec6[_0x388dd7(0x213)] !== _0x388dd7(0x2b0)) {
                    const _0x389258 = document["createElement"](
                      _0x388dd7(0x297)
                    );
                    (_0x389258["value"] = _0x3c3ec6[_0x388dd7(0x1cf)]),
                      (_0x389258[_0x388dd7(0x1c4)] =
                        _0x3c3ec6[_0x388dd7(0x22a)]),
                      _0x578d60["appendChild"](_0x389258);
                  }
                });
            }),
            document[_0x19df86(0x1b8)](_0x19df86(0x1e9))["addEventListener"](
              _0x19df86(0x21d),
              (_0x42de8c) => {
                const _0x784f0c = _0x19df86,
                  _0x1a47fe =
                    _0x42de8c[_0x784f0c(0x296)][_0x784f0c(0x2c9)](
                      ".btn-editar"
                    );
                if (!_0x1a47fe) return;
                _0x252856(+_0x1a47fe[_0x784f0c(0x2f6)][_0x784f0c(0x34c)]);
              }
            ),
            document["body"][_0x19df86(0x367)](
              _0x19df86(0x21d),
              (_0x936b5e) => {
                const _0x39f4f1 = _0x19df86,
                  _0x512d8d = _0x936b5e[_0x39f4f1(0x296)][_0x39f4f1(0x2c9)](
                    _0x39f4f1(0x26c)
                  );
                if (!_0x512d8d) return;
                _0x457e5e(+_0x512d8d[_0x39f4f1(0x2f6)][_0x39f4f1(0x34c)]);
              }
            );
          async function _0x1c7a6d() {
            const _0x11119a = _0x19df86,
              _0x4b6335 = document[_0x11119a(0x1b8)](_0x11119a(0x2b7))?.[
                _0x11119a(0x2c8)
              ];
            if (!_0x4b6335)
              return alert("Selecione\x20um\x20grupo\x20de\x20origem.");
            const _0x2de658 = [];
            await $[_0x11119a(0x261)](
              TribalWars[_0x11119a(0x25b)]("GET", _0x11119a(0x33c), {
                mode: _0x11119a(0x221),
                group: _0x4b6335,
              })
            )["then"]((_0x110597) => {
              const _0x5501ea = _0x11119a,
                _0x513c25 = $(_0x110597);
              _0x513c25["find"](_0x5501ea(0x1cc))[_0x5501ea(0x2cf)](
                (_0x5db80c, _0x357fb6) => {
                  const _0x49c069 = _0x5501ea,
                    _0x197195 = $(_0x357fb6)
                      [_0x49c069(0x33e)](".quickedit-label")
                      [_0x49c069(0x39b)]()
                      [_0x49c069(0x38c)](/\d+\|\d+/)?.[0x0];
                  if (_0x197195) _0x2de658[_0x49c069(0x229)](_0x197195);
                }
              );
            }),
              _0x2de658[_0x11119a(0x2a3)] === 0x0
                ? alert(_0x11119a(0x377))
                : ((document[_0x11119a(0x1b8)](_0x11119a(0x390))[
                    _0x11119a(0x2c8)
                  ] = _0x2de658[_0x11119a(0x1e2)]("\x20")),
                  _0x4102ee());
          }
          document[_0x19df86(0x1b8)](_0x19df86(0x258))[_0x19df86(0x367)](
            _0x19df86(0x21d),
            _0x1c7a6d
          ),
            document[_0x19df86(0x1b8)](_0x19df86(0x1eb))["addEventListener"](
              _0x19df86(0x21d),
              () => {
                const _0x4f9447 = _0x19df86,
                  _0x229cc1 = document[_0x4f9447(0x1b8)](_0x4f9447(0x390)),
                  _0x6d1f06 = _0x229cc1[_0x4f9447(0x2c8)],
                  _0x104d61 = (_0x6d1f06[_0x4f9447(0x38c)](/\d{3}\|\d{3}/g) ||
                    [])["map"]((_0x6b065d) => _0x6b065d[_0x4f9447(0x2ad)]()),
                  _0x3498ba = _0x3d21d5(),
                  _0x3a5d56 = new Set(
                    _0x3498ba["map"]((_0xb08361) => _0xb08361[_0x4f9447(0x1f9)])
                  ),
                  _0x3b9c62 = _0x104d61[_0x4f9447(0x2ac)](
                    (_0x1af6c7) => !_0x3a5d56[_0x4f9447(0x1d7)](_0x1af6c7)
                  );
                (_0x229cc1[_0x4f9447(0x2c8)] =
                  _0x3b9c62[_0x4f9447(0x1e2)]("\x20")),
                  _0x4102ee();
                const _0x523b25 =
                  _0x104d61[_0x4f9447(0x2a3)] - _0x3b9c62[_0x4f9447(0x2a3)];
                UI[_0x4f9447(0x20f)](
                  _0x4f9447(0x2b4) + _0x523b25 + _0x4f9447(0x337)
                );
              }
            ),
            document[_0x19df86(0x1b8)]("mass_coordsOrigem")["addEventListener"](
              "input",
              _0x4102ee
            ),
            document[_0x19df86(0x1b8)](_0x19df86(0x228))["addEventListener"](
              _0x19df86(0x239),
              _0x3c9a3d
            ),
            document[_0x19df86(0x1b8)](_0x19df86(0x236))[_0x19df86(0x367)](
              _0x19df86(0x21d),
              () => {
                _0x4df479("attack");
              }
            ),
            document["getElementById"]("btnConfirmarApoioMassa")[
              "addEventListener"
            ](_0x19df86(0x21d), () => {
              const _0x3e4b40 = _0x19df86;
              _0x4df479(_0x3e4b40(0x217));
            });
          const _0x45fc1a =
              document[_0x19df86(0x1b8)](_0x19df86(0x390))[_0x19df86(0x2c8)][
                _0x19df86(0x38c)
              ](/\d{3}\|\d{3}/g) || [],
            _0x1568c5 =
              document[_0x19df86(0x1b8)](_0x19df86(0x228))[_0x19df86(0x2c8)][
                _0x19df86(0x38c)
              ](/\d{3}\|\d{3}/g) || [],
            _0x33a109 = parseInt(
              document["getElementById"](_0x19df86(0x1d3))[_0x19df86(0x2c8)] ||
                "0"
            ),
            _0x1a0c5c = document[_0x19df86(0x1b8)](_0x19df86(0x381))[
              _0x19df86(0x2c8)
            ],
            _0x4adb23 = _0x220e3a(_0x45fc1a, _0x1568c5, _0x33a109, _0x1a0c5c);
          console["log"](_0x19df86(0x31b), _0x4adb23),
            Object[_0x19df86(0x2a1)](_0x4adb23)[_0x19df86(0x25f)](
              ([_0x16c794, _0x1e64dc]) => {
                const _0x1e4da3 = _0x19df86;
                _0x1e64dc[_0x1e4da3(0x25f)]((_0x3c4237) => {
                  const _0x4cab70 = _0x1e4da3;
                  console[_0x4cab70(0x1e8)](
                    _0x4cab70(0x1d0) + _0x3c4237 + "\x20para\x20" + _0x16c794
                  );
                });
              }
            );
          async function _0x4df479(_0x51efb0) {
            const _0x56f353 = _0x19df86,
              _0xa3176b =
                document["getElementById"](_0x56f353(0x390))[_0x56f353(0x2c8)][
                  _0x56f353(0x38c)
                ](/\d{3}\|\d{3}/g) || [],
              _0x459fc7 =
                document[_0x56f353(0x1b8)](_0x56f353(0x228))["value"][
                  _0x56f353(0x38c)
                ](/\d{3}\|\d{3}/g) || [];
            let _0xff06c7 = parseInt(
              document[_0x56f353(0x1b8)]("mass_numOrigem")[_0x56f353(0x2c8)] ||
                "0",
              0xa
            );
            !_0xff06c7 &&
              (_0xff06c7 = Math["max"](
                0x1,
                Math[_0x56f353(0x292)](
                  _0xa3176b[_0x56f353(0x2a3)] / _0x459fc7["length"]
                )
              ));
            const _0x14c3f5 = document["getElementById"](
                "mass_criterioDestino"
              )["value"],
              _0x48dbdc =
                document["getElementById"]("mass_modeloNT")[_0x56f353(0x2c8)],
              _0x133c25 = document[_0x56f353(0x1b8)](_0x56f353(0x1ee))[
                _0x56f353(0x2c8)
              ],
              _0x5d0066 = document[_0x56f353(0x1b8)](
                "mass_enviarMesmoAtrasado"
              )?.[_0x56f353(0x27e)],
              _0x332f8c =
                document[_0x56f353(0x1b8)]("modalidadeCadastro")?.[
                  _0x56f353(0x2c8)
                ] || _0x56f353(0x34f),
              _0x10f23b =
                _0x332f8c === "aleatorio"
                  ? document[_0x56f353(0x1b8)](_0x56f353(0x31f))?.[
                      _0x56f353(0x2c8)
                    ] || _0x56f353(0x385)
                  : _0x332f8c === "envio_imediato"
                  ? _0x56f353(0x350)
                  : _0x56f353(0x385);
            let _0xdee239 = [];
            _0x48dbdc !== _0x56f353(0x2ee) &&
              (_0xdee239 = Array[_0x56f353(0x234)](
                document[_0x56f353(0x220)](_0x56f353(0x22d))
              )[_0x56f353(0x291)]((_0x245c47) => {
                const _0x86a0ca = _0x56f353,
                  _0x19ba2e = {};
                return (
                  _0x245c47[_0x86a0ca(0x220)](_0x86a0ca(0x387))[
                    _0x86a0ca(0x25f)
                  ]((_0x486083) => {
                    const _0x59bee7 = _0x86a0ca,
                      _0x180f35 = _0x486083[_0x59bee7(0x2f6)][_0x59bee7(0x2a2)],
                      _0x4af4a3 = (_0x486083[_0x59bee7(0x2c8)] || "")
                        [_0x59bee7(0x2ad)]()
                        [_0x59bee7(0x295)]();
                    if (_0x4af4a3 === "max")
                      _0x19ba2e[_0x180f35] = _0x59bee7(0x283);
                    else {
                      if (!isNaN(parseInt(_0x4af4a3)))
                        _0x19ba2e[_0x180f35] = parseInt(_0x4af4a3, 0xa);
                    }
                  }),
                  _0x19ba2e
                );
              }));
            let _0xb509e4 = null;
            if (_0x332f8c === _0x56f353(0x34f)) {
              _0xb509e4 = document[_0x56f353(0x1b8)]("mass_horario")["value"];
              if (!_0xb509e4) {
                UI["ErrorMessage"](
                  "⏰\x20Informe\x20o\x20horário\x20para\x20o\x20envio\x20dos\x20comandos\x20(modo\x20Programado)."
                );
                return;
              }
            } else {
              if (_0x332f8c === "aleatorio") {
                const _0x101eb5 = document[_0x56f353(0x1b8)](
                    _0x56f353(0x281)
                  )?.[_0x56f353(0x2c8)],
                  _0xee57d2 =
                    document[_0x56f353(0x1b8)]("mass_horario_fim")?.[
                      _0x56f353(0x2c8)
                    ];
                if (!_0x101eb5 || !_0xee57d2) {
                  UI[_0x56f353(0x326)](_0x56f353(0x29b));
                  return;
                }
              }
            }
            if (
              _0x459fc7[_0x56f353(0x2a3)] === 0x0 ||
              _0xa3176b["length"] === 0x0
            ) {
              UI[_0x56f353(0x326)](_0x56f353(0x2b1));
              return;
            }
            const _0x4a0837 = {},
              _0x1500c2 = [
                _0x56f353(0x379),
                "sword",
                _0x56f353(0x328),
                _0x56f353(0x27a),
                _0x56f353(0x2cd),
                _0x56f353(0x2ca),
                _0x56f353(0x378),
                "heavy",
                _0x56f353(0x255),
                _0x56f353(0x388),
                _0x56f353(0x1fb),
                _0x56f353(0x282),
              ];
            _0x1500c2[_0x56f353(0x25f)]((_0x39a5ab) => {
              const _0x399490 = _0x56f353,
                _0x35f223 = document["getElementById"](
                  _0x399490(0x1e1) + _0x39a5ab
                ),
                _0x1140aa = document["querySelector"](
                  _0x399490(0x319) + _0x39a5ab + "\x22]"
                );
              if (_0x1140aa?.[_0x399490(0x27e)]) _0x4a0837[_0x39a5ab] = "full";
              else {
                const _0x449048 = parseInt(
                  _0x35f223?.[_0x399490(0x2c8)] || "0"
                );
                if (_0x449048 > 0x0) _0x4a0837[_0x39a5ab] = _0x449048;
              }
            });
            if (Object[_0x56f353(0x332)](_0x4a0837)[_0x56f353(0x2a3)] === 0x0) {
              UI[_0x56f353(0x326)](_0x56f353(0x2fe));
              return;
            }
            const _0x44b46d = _0x220e3a(
                _0xa3176b,
                _0x459fc7,
                _0xff06c7,
                _0x14c3f5
              ),
              _0x4a0c0b = _0x3d21d5(),
              _0x523bc9 = [],
              _0x2571e1 = [],
              _0x5d8b30 = [];
            let _0x30a604 = 0x0;
            for (const [_0x5a44b1, _0x244309] of Object["entries"](_0x44b46d)) {
              for (const _0x39589e of _0x244309) {
                const _0x51820b = await _0x138dfa(),
                  _0x18bd09 = Object["keys"](_0x4a0837),
                  _0x58265e = _0x18bd09["reduce"](
                    (_0x5d948b, _0x2ca96a) =>
                      _0x51820b[_0x5d948b] > _0x51820b[_0x2ca96a]
                        ? _0x5d948b
                        : _0x2ca96a,
                    _0x18bd09[0x0] || _0x56f353(0x379)
                  ),
                  _0x209dca = _0x51820b[_0x58265e] || 0x1;
                let _0x5f01b6 = null,
                  _0x4e7b77 = null;
                if (_0x332f8c === _0x56f353(0x32c)) {
                  const _0x155af2 = document[_0x56f353(0x1b8)](
                      _0x56f353(0x281)
                    )?.["value"],
                    _0x58421d = document[_0x56f353(0x1b8)](_0x56f353(0x362))?.[
                      _0x56f353(0x2c8)
                    ];
                  _0x5f01b6 = _0x3ec627(_0x155af2, _0x58421d);
                  if (!_0x5f01b6) {
                    console[_0x56f353(0x1ba)](_0x56f353(0x2e1), {
                      intervaloInicio: _0x155af2,
                      intervaloFim: _0x58421d,
                    });
                    continue;
                  }
                  _0x4e7b77 =
                    _0x10f23b === _0x56f353(0x385)
                      ? _0x4c1517(_0x5f01b6, _0x209dca, _0x39589e, _0x5a44b1)
                      : _0x5f01b6;
                } else {
                  if (_0x332f8c === "programado")
                    (_0x5f01b6 = _0xb509e4),
                      (_0x4e7b77 =
                        _0x10f23b === "arrival"
                          ? _0x4c1517(
                              _0x5f01b6,
                              _0x209dca,
                              _0x39589e,
                              _0x5a44b1
                            )
                          : _0x5f01b6);
                  else {
                    if (_0x332f8c === _0x56f353(0x289)) {
                      const _0x341872 = _0x2128cd(),
                        _0x4b57fd =
                          _0x30a604 === 0x0
                            ? 0x7530
                            : 0x7530 + 0x3a98 * (_0x30a604 - 0x1),
                        _0x268c77 = _0x341872 + _0x4b57fd,
                        _0x3c8920 = _0x237482(_0x268c77);
                      (_0x5f01b6 = _0x3c8920), (_0x4e7b77 = _0x3c8920);
                    } else
                      (_0x5f01b6 = new Date()
                        [_0x56f353(0x2b9)]()
                        [_0x56f353(0x2c6)](0x0, 0x13)
                        [_0x56f353(0x34d)]("T", "\x20")),
                        (_0x4e7b77 = _0x5f01b6);
                  }
                }
                _0x30a604++;
                if (!_0x5f01b6 || !_0x4e7b77) {
                  console[_0x56f353(0x1ba)](_0x56f353(0x31d), {
                    origem: _0x39589e,
                    destino: _0x5a44b1,
                    horario: _0x5f01b6,
                    horarioEnvio: _0x4e7b77,
                  });
                  continue;
                }
                const _0x23b7b0 = new Date(_0x4e7b77)[_0x56f353(0x389)](),
                  _0x26e695 = Date[_0x56f353(0x376)]();
                if (!_0x5d0066 && _0x23b7b0 < _0x26e695) {
                  _0x5d8b30[_0x56f353(0x229)](
                    _0x39589e + _0x56f353(0x1ce) + _0x5a44b1
                  );
                  continue;
                }
                const _0x50258c = await _0x2ea635(_0x39589e);
                console[_0x56f353(0x1e8)](
                  _0x56f353(0x1b6),
                  _0x39589e,
                  "→",
                  _0x50258c
                );
                if (!_0x50258c) {
                  console[_0x56f353(0x1ba)](
                    _0x56f353(0x36d) + _0x39589e + _0x56f353(0x1bd)
                  );
                  continue;
                }
                const [_0x5485d5, _0x707d5c] = _0x5a44b1[_0x56f353(0x306)]("|"),
                  _0x2904a1 =
                    Date[_0x56f353(0x376)]() +
                    Math[_0x56f353(0x292)](Math[_0x56f353(0x359)]() * 0x2710),
                  _0x177899 = {
                    id: _0x2904a1,
                    enviado: ![],
                    opened: ![],
                    url:
                      location[_0x56f353(0x1c3)] +
                      _0x56f353(0x288) +
                      _0x50258c +
                      "&screen=place&x=" +
                      _0x5485d5 +
                      _0x56f353(0x270) +
                      _0x707d5c +
                      _0x56f353(0x284) +
                      _0x2904a1,
                    origem: _0x39589e,
                    destino: _0x5a44b1,
                    tipo: _0x51efb0,
                    modeloNT: _0x48dbdc,
                    alvoCatapultas: _0x133c25,
                    baseHorario: _0x10f23b,
                    chegadaDesejada: _0x10f23b === "arrival" ? _0x5f01b6 : null,
                    horarioEnvio: _0x4e7b77,
                    tropas: _0x4a0837,
                    modoDivisaoNT:
                      document[_0x56f353(0x1b8)](_0x56f353(0x2df))?.["value"] ||
                      _0x56f353(0x2d6),
                    linhasNT: _0xdee239 || [],
                    modoCadastro: _0x332f8c,
                  },
                  _0x28e49c =
                    document[_0x56f353(0x1b8)]("mass_enviarMesmoBN")?.[
                      "checked"
                    ],
                  _0x5b3cd4 = _0x481822(_0x39589e, _0x5a44b1),
                  _0x56e7a8 =
                    _0x10f23b === _0x56f353(0x385)
                      ? new Date(_0x5f01b6)["getTime"]()
                      : new Date(_0x4e7b77)[_0x56f353(0x389)]() +
                        _0x209dca * 0xea60 * _0x5b3cd4;
                if (!_0x28e49c && _0x4e28e7(_0x56e7a8)) {
                  _0x2571e1[_0x56f353(0x229)](
                    _0x39589e +
                      _0x56f353(0x1ce) +
                      _0x5a44b1 +
                      _0x56f353(0x218) +
                      new Date(_0x56e7a8)[_0x56f353(0x2b2)]()
                  );
                  continue;
                }
                _0x523bc9[_0x56f353(0x229)](_0x177899);
              }
            }
            _0x2571e1[_0x56f353(0x2a3)] &&
              alert(
                _0x56f353(0x2da) +
                  _0x2571e1["length"] +
                  _0x56f353(0x1dd) +
                  _0x2571e1[_0x56f353(0x1e2)]("\x0a")
              ),
              _0x4e2f77([..._0x4a0c0b, ..._0x523bc9]),
              _0x5d8b30["length"] > 0x0 &&
                !_0x5d0066 &&
                UI[_0x56f353(0x326)](
                  _0x56f353(0x2da) +
                    _0x5d8b30[_0x56f353(0x2a3)] +
                    _0x56f353(0x279) +
                    _0x5d8b30[_0x56f353(0x1e2)]("\x0a")
                ),
              UI["SuccessMessage"](
                "✅\x20" + _0x523bc9["length"] + _0x56f353(0x1c7)
              );
          }
          function _0x3ec627(_0xd30dff, _0x2526a5) {
            const _0x2e293f = _0x19df86;
            try {
              const _0x461422 = new Date(_0xd30dff)["getTime"](),
                _0x2bb598 = new Date(_0x2526a5)[_0x2e293f(0x389)]();
              if (isNaN(_0x461422) || isNaN(_0x2bb598)) return null;
              const _0x2cc521 =
                  _0x461422 +
                  Math["floor"](
                    Math[_0x2e293f(0x359)]() * (_0x2bb598 - _0x461422)
                  ),
                _0x3beaf7 = new Date(_0x2cc521),
                _0x3d3593 = (_0x4effc6) =>
                  String(_0x4effc6)[_0x2e293f(0x33d)](0x2, "0"),
                _0x22197b = String(_0x3beaf7[_0x2e293f(0x358)]())[
                  _0x2e293f(0x33d)
                ](0x3, "0");
              return (
                _0x3beaf7[_0x2e293f(0x214)]() +
                "-" +
                _0x3d3593(_0x3beaf7[_0x2e293f(0x224)]() + 0x1) +
                "-" +
                _0x3d3593(_0x3beaf7[_0x2e293f(0x1ac)]()) +
                "\x20" +
                (_0x3d3593(_0x3beaf7[_0x2e293f(0x39c)]()) +
                  ":" +
                  _0x3d3593(_0x3beaf7[_0x2e293f(0x345)]()) +
                  ":" +
                  _0x3d3593(_0x3beaf7[_0x2e293f(0x353)]()) +
                  "." +
                  _0x22197b)
              );
            } catch (_0x2bb13e) {
              return (
                console[_0x2e293f(0x1ba)](_0x2e293f(0x207), _0x2bb13e), null
              );
            }
          }
          function _0x2e6fa8(_0x4d6146) {
            const _0x389e4a = _0x19df86,
              _0x3156c2 = Date[_0x389e4a(0x376)](),
              _0x5e0f76 = [];
            for (let _0x2c4bff = 0x0; _0x2c4bff < _0x4d6146; _0x2c4bff++) {
              const _0x15ad2d = _0x2c4bff === 0x0 ? 0x7530 : 0x3a98 * _0x2c4bff;
              _0x5e0f76["push"](
                new Date(_0x3156c2 + _0x15ad2d)[_0x389e4a(0x2b9)]()
              );
            }
            return _0x5e0f76;
          }
          function _0x4102ee() {
            const _0x4f8ace = _0x19df86,
              _0x4e5243 = document["getElementById"](_0x4f8ace(0x390)),
              _0x17c40d = document["getElementById"](_0x4f8ace(0x33b));
            if (!_0x4e5243 || !_0x17c40d) return;
            const _0x4009be = _0x4e5243[_0x4f8ace(0x2c8)][_0x4f8ace(0x2ad)](),
              _0x2fda40 = _0x4009be[_0x4f8ace(0x38c)](/\d{3}\|\d{3}/g) || [];
            _0x17c40d[_0x4f8ace(0x1c4)] =
              _0x2fda40[_0x4f8ace(0x2a3)] + _0x4f8ace(0x327);
          }
          function _0x3c9a3d() {
            const _0x4f6c29 = _0x19df86,
              _0x162a03 = document[_0x4f6c29(0x1b8)](_0x4f6c29(0x228)),
              _0x1848c3 = document["getElementById"](_0x4f6c29(0x2f7));
            if (!_0x162a03 || !_0x1848c3) return;
            const _0x55769d = _0x162a03["value"]["trim"](),
              _0x81a01e = _0x55769d[_0x4f6c29(0x38c)](/\d{3}\|\d{3}/g) || [];
            _0x1848c3["textContent"] =
              _0x81a01e[_0x4f6c29(0x2a3)] + _0x4f6c29(0x327);
          }
          const _0x8e04ff = document[_0x19df86(0x1b8)](_0x19df86(0x294)),
            _0x5e59cb = document["getElementById"](_0x19df86(0x2cb)),
            _0xcfd7fc = document["getElementById"]("mass_modeloNT"),
            _0x4a730d = document[_0x19df86(0x1b8)](_0x19df86(0x1ee));
          _0x8e04ff &&
            _0xcfd7fc &&
            (_0xcfd7fc[_0x19df86(0x300)] = _0x8e04ff[_0x19df86(0x300)]);
          _0x5e59cb &&
            _0x4a730d &&
            (_0x4a730d[_0x19df86(0x300)] = _0x5e59cb[_0x19df86(0x300)]);
          document[_0x19df86(0x1b8)](_0x19df86(0x2bb))[_0x19df86(0x367)](
            _0x19df86(0x1ff),
            () => {
              const _0xf7d03f = _0x19df86,
                _0x37fb3d = document[_0xf7d03f(0x1b8)](_0xf7d03f(0x2bb))[
                  _0xf7d03f(0x2c8)
                ],
                _0xa6c240 = document[_0xf7d03f(0x1b8)]("blocoNT-massa"),
                _0x1b1fba = document[_0xf7d03f(0x1b8)](_0xf7d03f(0x2e8));
              (_0xa6c240[_0xf7d03f(0x1b1)][_0xf7d03f(0x28f)] =
                _0x37fb3d !== _0xf7d03f(0x2ee) ? "block" : _0xf7d03f(0x23c)),
                (_0x1b1fba[_0xf7d03f(0x300)] = "");
              if (_0x37fb3d !== _0xf7d03f(0x2ee)) {
                const _0x487184 =
                  parseInt(_0x37fb3d["replace"]("NT\x20", "")) - 0x1;
                for (let _0x24fce3 = 0x0; _0x24fce3 < _0x487184; _0x24fce3++) {
                  _0x29b1fd(_0x24fce3);
                }
              }
            }
          ),
            (function _0x1a8f51() {
              const _0xf0d154 = _0x19df86,
                _0x119bad = document[_0xf0d154(0x1b8)](_0xf0d154(0x2ea)),
                _0x330d8d = document["getElementById"](_0xf0d154(0x3a4));
              let _0x26fdaf = 0x0,
                _0x2aea8b = 0x0,
                _0x28535e = ![];
              _0x330d8d["addEventListener"](_0xf0d154(0x35e), (_0x15efef) => {
                const _0x17b8d9 = _0xf0d154;
                _0x28535e = !![];
                const _0x411f09 = _0x119bad[_0x17b8d9(0x2d2)]();
                (_0x26fdaf =
                  _0x15efef[_0x17b8d9(0x333)] - _0x411f09[_0x17b8d9(0x2c4)]),
                  (_0x2aea8b = _0x15efef["clientY"] - _0x411f09["top"]),
                  (document[_0x17b8d9(0x39d)][_0x17b8d9(0x1b1)][
                    _0x17b8d9(0x347)
                  ] = _0x17b8d9(0x23c));
              }),
                document[_0xf0d154(0x367)]("mousemove", (_0x23ad4a) => {
                  const _0x3de7a9 = _0xf0d154;
                  if (!_0x28535e) return;
                  (_0x119bad[_0x3de7a9(0x1b1)][_0x3de7a9(0x2c4)] =
                    _0x23ad4a["clientX"] - _0x26fdaf + "px"),
                    (_0x119bad[_0x3de7a9(0x1b1)]["top"] =
                      _0x23ad4a["clientY"] - _0x2aea8b + "px");
                }),
                document[_0xf0d154(0x367)](_0xf0d154(0x2f0), () => {
                  const _0x33f539 = _0xf0d154;
                  (_0x28535e = ![]),
                    (document[_0x33f539(0x39d)][_0x33f539(0x1b1)][
                      "userSelect"
                    ] = "");
                });
            })();
          const _0x40c0d1 = document[_0x19df86(0x1b8)](_0x19df86(0x1b0));
          game_data[_0x19df86(0x2fd)] &&
            game_data[_0x19df86(0x2fd)][_0x19df86(0x22a)] &&
            game_data[_0x19df86(0x2fd)]["coord"] &&
            (_0x40c0d1[_0x19df86(0x1c4)] =
              game_data[_0x19df86(0x2fd)]["name"] +
              "\x20(" +
              game_data[_0x19df86(0x2fd)][_0x19df86(0x21e)] +
              ")");
          document[_0x19df86(0x1b8)](_0x19df86(0x344))[_0x19df86(0x367)](
            _0x19df86(0x1ff),
            function () {
              const _0x3fb176 = _0x19df86,
                _0x50d560 = this["value"],
                _0x13a07f = document[_0x3fb176(0x1b8)](_0x3fb176(0x33a));
              _0x13a07f[_0x3fb176(0x1b1)]["display"] =
                _0x50d560 === _0x3fb176(0x217)
                  ? _0x3fb176(0x243)
                  : _0x3fb176(0x23c);
            }
          ),
            document[_0x19df86(0x1b8)](_0x19df86(0x23b))[_0x19df86(0x367)](
              _0x19df86(0x21d),
              async () => {
                const _0x32555d = _0x19df86,
                  _0x4d7bdb = {},
                  _0x477fd2 = document[_0x32555d(0x220)](_0x32555d(0x293));
                _0x477fd2[_0x32555d(0x25f)]((_0x3b04d1) => {
                  const _0x468bc8 = _0x32555d,
                    _0x2cc39c = _0x3b04d1["id"][_0x468bc8(0x34d)](
                      _0x468bc8(0x24c),
                      ""
                    ),
                    _0x3bdf2d = parseInt(
                      _0x3b04d1[_0x468bc8(0x2c8)] || "0",
                      0xa
                    ),
                    _0x37a750 = document[_0x468bc8(0x2b8)](
                      ".use-max[data-unit=\x22" + _0x2cc39c + "\x22]"
                    );
                  if (_0x37a750 && _0x37a750[_0x468bc8(0x27e)])
                    _0x4d7bdb[_0x2cc39c] = "full";
                  else _0x3bdf2d > 0x0 && (_0x4d7bdb[_0x2cc39c] = _0x3bdf2d);
                });
                const _0x379a05 = game_data["village"][_0x32555d(0x21e)],
                  _0x1affd0 = document[_0x32555d(0x1b8)](_0x32555d(0x22f))[
                    _0x32555d(0x2c8)
                  ][_0x32555d(0x2ad)](),
                  _0x388dbf = document["getElementById"](_0x32555d(0x344))[
                    _0x32555d(0x2c8)
                  ],
                  _0x5207bd = document[_0x32555d(0x1b8)](_0x32555d(0x294))[
                    "value"
                  ],
                  _0x16bf33 = document[_0x32555d(0x1b8)](_0x32555d(0x2cb))[
                    "value"
                  ],
                  _0x2418ed = document[_0x32555d(0x1b8)](_0x32555d(0x20e))[
                    _0x32555d(0x2c8)
                  ],
                  _0x550f80 =
                    document["getElementById"]("horaAgendada")[
                      _0x32555d(0x2c8)
                    ],
                  _0x826bbe = await _0x138dfa(),
                  _0x3790f7 = Object["keys"](_0x4d7bdb),
                  _0xa6b78 = _0x3790f7["reduce"](
                    (_0x33a562, _0x596573) =>
                      _0x826bbe[_0x33a562] > _0x826bbe[_0x596573]
                        ? _0x33a562
                        : _0x596573,
                    _0x3790f7[0x0] || _0x32555d(0x379)
                  );
                let _0x10383f = _0x826bbe[_0xa6b78] || 0x1;
                if (_0x388dbf === "support") {
                  const _0x3aac6d = parseFloat(
                    document[_0x32555d(0x1b8)](_0x32555d(0x2e7))?.[
                      _0x32555d(0x2c8)
                    ] || "0"
                  );
                  !isNaN(_0x3aac6d) &&
                    _0x3aac6d > 0x0 &&
                    _0x3aac6d < 0x64 &&
                    (_0x10383f *= 0x1 - _0x3aac6d / 0x64);
                }
                if (!_0x1affd0[_0x32555d(0x38c)](/^\d{3}\|\d{3}$/)) {
                  UI[_0x32555d(0x326)](_0x32555d(0x260));
                  return;
                }
                if (!_0x550f80) {
                  UI["ErrorMessage"](_0x32555d(0x32e));
                  return;
                }
                if (_0x5207bd !== "SEM\x20NT") {
                  const _0x46413b =
                    _0x4d7bdb["snob"] === _0x32555d(0x283)
                      ? 0x5
                      : parseInt(_0x4d7bdb["snob"]) || 0x0;
                  if (_0x46413b === 0x0) {
                    UI[_0x32555d(0x326)](_0x32555d(0x2c3));
                    return;
                  }
                  if (
                    _0x4d7bdb[_0x32555d(0x282)] === _0x32555d(0x283) ||
                    _0x46413b > 0x3
                  ) {
                    UI[_0x32555d(0x326)](_0x32555d(0x1e3));
                    return;
                  }
                }
                let _0x4802da = null;
                _0x5207bd !== _0x32555d(0x2ee) &&
                  (_0x4802da = Array[_0x32555d(0x234)](
                    document[_0x32555d(0x220)](_0x32555d(0x22d))
                  )["map"]((_0x57917b) => {
                    const _0x52c8cf = _0x32555d,
                      _0x157b73 = _0x57917b[_0x52c8cf(0x220)](_0x52c8cf(0x1d2)),
                      _0x235c61 = {};
                    return (
                      _0x157b73[_0x52c8cf(0x25f)]((_0x289e2d) => {
                        const _0x2c5fe8 = _0x52c8cf,
                          _0x5b0ead = _0x289e2d["value"][_0x2c5fe8(0x2ad)]();
                        _0x5b0ead !== ""
                          ? (_0x235c61[
                              _0x289e2d[_0x2c5fe8(0x2f6)][_0x2c5fe8(0x2a2)]
                            ] =
                              _0x5b0ead["toLowerCase"]() === "max"
                                ? _0x2c5fe8(0x283)
                                : parseInt(_0x5b0ead, 0xa))
                          : (_0x235c61[_0x289e2d["dataset"]["unit"]] = 0x0);
                      }),
                      _0x235c61
                    );
                  }));
                const _0x22b768 = document[_0x32555d(0x1b8)](_0x32555d(0x2f9))[
                    _0x32555d(0x2c8)
                  ],
                  _0x1adc61 = {
                    id: Date[_0x32555d(0x376)](),
                    enviado: ![],
                    opened: ![],
                    url: "",
                    origem: _0x379a05,
                    tropas: _0x4d7bdb,
                    destino: _0x1affd0,
                    tipo: _0x388dbf,
                    modeloNT: _0x5207bd,
                    alvoCatapultas: _0x16bf33,
                    baseHorario: _0x2418ed,
                    horario: _0x550f80,
                    chegadaDesejada:
                      _0x2418ed === _0x32555d(0x385) ? _0x550f80 : null,
                    horarioEnvio:
                      _0x2418ed === _0x32555d(0x385)
                        ? _0x4c1517(_0x550f80, _0x10383f, _0x379a05, _0x1affd0)
                        : _0x550f80,
                    modoDivisaoNT: _0x22b768,
                    linhasNT: _0x4802da,
                    aflicao:
                      _0x388dbf === _0x32555d(0x217)
                        ? parseFloat(
                            document[_0x32555d(0x1b8)](_0x32555d(0x2e7))?.[
                              "value"
                            ] || "0"
                          )
                        : 0x0,
                  },
                  [_0x5dbdc2, _0x1e9722] =
                    _0x1affd0[_0x32555d(0x306)]("|")[_0x32555d(0x291)](Number),
                  _0x4204eb = game_data["village"]["id"],
                  _0x305a4c = unsafeWindow[_0x32555d(0x307)][_0x32555d(0x1c3)];
                _0x1adc61[_0x32555d(0x2de)] =
                  _0x305a4c +
                  _0x32555d(0x288) +
                  _0x4204eb +
                  _0x32555d(0x1f6) +
                  _0x5dbdc2 +
                  _0x32555d(0x270) +
                  _0x1e9722;
                const _0x1e2a43 = _0x3d21d5();
                _0x1e2a43[_0x32555d(0x229)](_0x1adc61),
                  _0x4e2f77(_0x1e2a43),
                  UI[_0x32555d(0x20f)](_0x32555d(0x315));
              }
            ),
            document[_0x19df86(0x1b8)](_0x19df86(0x294))[_0x19df86(0x367)](
              "change",
              () => {
                const _0x53a7fc = _0x19df86,
                  _0x5f092a =
                    document[_0x53a7fc(0x1b8)]("modeloNT")[_0x53a7fc(0x2c8)],
                  _0x32e828 = document[_0x53a7fc(0x1b8)](_0x53a7fc(0x1bc)),
                  _0x2733aa = document[_0x53a7fc(0x1b8)](_0x53a7fc(0x257));
                (_0x32e828["style"][_0x53a7fc(0x28f)] =
                  _0x5f092a !== _0x53a7fc(0x2ee)
                    ? _0x53a7fc(0x302)
                    : _0x53a7fc(0x23c)),
                  (_0x2733aa[_0x53a7fc(0x300)] = "");
                if (_0x5f092a !== _0x53a7fc(0x2ee)) {
                  const _0x1c464b =
                    parseInt(_0x5f092a["replace"](_0x53a7fc(0x1c9), "")) - 0x1;
                  for (
                    let _0x267033 = 0x0;
                    _0x267033 < _0x1c464b;
                    _0x267033++
                  ) {
                    _0x2a084b(_0x267033);
                  }
                }
              }
            );
          function _0x2a084b(_0x6e846f) {
            const _0x494a92 = _0x19df86,
              _0x203eea = [
                _0x494a92(0x379),
                _0x494a92(0x3a1),
                _0x494a92(0x328),
                _0x494a92(0x27a),
                "spy",
                _0x494a92(0x2ca),
                _0x494a92(0x378),
                "heavy",
                _0x494a92(0x255),
                _0x494a92(0x388),
                "knight",
                _0x494a92(0x282),
              ],
              _0x3cb1d2 = document[_0x494a92(0x206)](_0x494a92(0x2ff));
            (_0x3cb1d2[_0x494a92(0x2a5)] = "nt-linha"),
              (_0x3cb1d2[_0x494a92(0x300)] =
                _0x494a92(0x2d4) +
                (_0x6e846f + 0x2) +
                _0x494a92(0x31c) +
                _0x203eea[_0x494a92(0x291)](
                  (_0x2c2113) =>
                    _0x494a92(0x1b5) +
                    _0x2c2113 +
                    _0x494a92(0x35f) +
                    _0x2c2113 +
                    _0x494a92(0x1e6) +
                    _0x6e846f +
                    _0x494a92(0x26d) +
                    _0x2c2113 +
                    _0x494a92(0x339) +
                    (_0x2c2113 === "snob" ? _0x494a92(0x21a) : "") +
                    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
                )[_0x494a92(0x1e2)]("") +
                _0x494a92(0x1bb)),
              document["getElementById"](_0x494a92(0x257))["appendChild"](
                _0x3cb1d2
              );
          }
          function _0x29b1fd(_0x274af7) {
            const _0x430767 = _0x19df86,
              _0x2564af = [
                _0x430767(0x379),
                _0x430767(0x3a1),
                _0x430767(0x328),
                "archer",
                _0x430767(0x2cd),
                _0x430767(0x2ca),
                _0x430767(0x378),
                "heavy",
                _0x430767(0x255),
                _0x430767(0x388),
                "knight",
                _0x430767(0x282),
              ],
              _0x205693 = document["createElement"](_0x430767(0x2ff));
            (_0x205693["className"] = _0x430767(0x21c)),
              (_0x205693["innerHTML"] =
                "\x0a\x20\x20\x20\x20<h4>#" +
                (_0x274af7 + 0x2) +
                _0x430767(0x31c) +
                _0x2564af[_0x430767(0x291)](
                  (_0xb6cb98) =>
                    _0x430767(0x1b5) +
                    _0xb6cb98 +
                    _0x430767(0x35f) +
                    _0xb6cb98 +
                    _0x430767(0x1e6) +
                    _0x274af7 +
                    _0x430767(0x26d) +
                    _0xb6cb98 +
                    _0x430767(0x339) +
                    (_0xb6cb98 === _0x430767(0x282) ? _0x430767(0x21a) : "") +
                    _0x430767(0x1c8)
                )[_0x430767(0x1e2)]("") +
                _0x430767(0x1bb)),
              document[_0x430767(0x1b8)](_0x430767(0x2e8))[_0x430767(0x37c)](
                _0x205693
              );
          }
          function _0x220e3a(_0x464fcc, _0x331c76, _0x215e96, _0x16d926) {
            const _0x3a492d = [..._0x464fcc],
              _0xcd10e2 = {},
              _0x973af = (_0x57f074, _0x14d68b) => {
                const _0x191932 = _0x362b,
                  [_0x50d90e, _0x481725] =
                    _0x57f074[_0x191932(0x306)]("|")["map"](Number),
                  [_0x495b3f, _0x5465e7] =
                    _0x14d68b[_0x191932(0x306)]("|")[_0x191932(0x291)](Number);
                return Math[_0x191932(0x1d9)](
                  _0x50d90e - _0x495b3f,
                  _0x481725 - _0x5465e7
                );
              };
            return (
              _0x331c76["forEach"]((_0x338078) => {
                const _0x5a1cf1 = _0x362b,
                  _0xa8188e = _0x3a492d[_0x5a1cf1(0x2c6)]()["sort"](
                    (_0x42263e, _0x399a5d) => {
                      const _0x318075 = _0x5a1cf1;
                      if (_0x16d926 === _0x318075(0x225))
                        return (
                          _0x973af(_0x42263e, _0x338078) -
                          _0x973af(_0x399a5d, _0x338078)
                        );
                      if (_0x16d926 === _0x318075(0x20b))
                        return (
                          _0x973af(_0x399a5d, _0x338078) -
                          _0x973af(_0x42263e, _0x338078)
                        );
                      return 0x0;
                    }
                  ),
                  _0x50b7f7 = _0xa8188e[_0x5a1cf1(0x2c6)](0x0, _0x215e96);
                _0x50b7f7[_0x5a1cf1(0x25f)]((_0x26b547) => {
                  const _0x18fb93 = _0x5a1cf1,
                    _0x25da6e = _0x3a492d[_0x18fb93(0x2f8)](_0x26b547);
                  if (_0x25da6e > -0x1)
                    _0x3a492d[_0x18fb93(0x24f)](_0x25da6e, 0x1);
                }),
                  (_0xcd10e2[_0x338078] = _0x50b7f7);
              }),
              _0xcd10e2
            );
          }
          function _0x481822(_0x4ab6d5, _0x43c206) {
            const _0x3c34c4 = _0x19df86,
              [_0x217231, _0xe801ed] =
                _0x4ab6d5["split"]("|")[_0x3c34c4(0x291)](Number),
              [_0x5db395, _0x1cddc9] =
                _0x43c206[_0x3c34c4(0x306)]("|")[_0x3c34c4(0x291)](Number);
            return Math[_0x3c34c4(0x1d9)](
              _0x217231 - _0x5db395,
              _0xe801ed - _0x1cddc9
            );
          }
          function _0x40f12b(_0x5c79e6) {
            const _0x197dd7 = _0x19df86,
              _0x5ac8ce = [..._0x5c79e6];
            for (
              let _0xad52a3 = _0x5ac8ce[_0x197dd7(0x2a3)] - 0x1;
              _0xad52a3 > 0x0;
              _0xad52a3--
            ) {
              const _0x5015e8 = Math[_0x197dd7(0x292)](
                Math[_0x197dd7(0x359)]() * (_0xad52a3 + 0x1)
              );
              [_0x5ac8ce[_0xad52a3], _0x5ac8ce[_0x5015e8]] = [
                _0x5ac8ce[_0x5015e8],
                _0x5ac8ce[_0xad52a3],
              ];
            }
            return _0x5ac8ce;
          }
          async function _0x2bcb01() {
            const _0x2ec157 = _0x19df86,
              _0x12a2cb = document[_0x2ec157(0x1b8)](_0x2ec157(0x1e9));
            if (!_0x12a2cb) return;
            const _0x265eca = _0x3d21d5()
              [_0x2ec157(0x2ac)]((_0x268102) => !_0x268102[_0x2ec157(0x227)])
              [_0x2ec157(0x29e)](
                (_0xbe5975, _0x4afdcc) =>
                  new Date(_0xbe5975[_0x2ec157(0x370)]) -
                  new Date(_0x4afdcc[_0x2ec157(0x370)])
              );
            _0x12a2cb["innerHTML"] = "";
            if (!_0x265eca[_0x2ec157(0x2a3)]) {
              _0x12a2cb[_0x2ec157(0x300)] = _0x2ec157(0x1db);
              return;
            }
            const _0x21e0de = (_0x3b3175) => {
                const _0x4182f5 = _0x2ec157,
                  _0x4dffe3 = new Date(_0x3b3175),
                  _0x3ecdb3 = (_0x407850) =>
                    String(_0x407850)[_0x4182f5(0x33d)](0x2, "0");
                return (
                  _0x4dffe3[_0x4182f5(0x214)]() +
                  "-" +
                  _0x3ecdb3(_0x4dffe3["getMonth"]() + 0x1) +
                  "-" +
                  _0x3ecdb3(_0x4dffe3[_0x4182f5(0x1ac)]()) +
                  "\x20" +
                  (_0x3ecdb3(_0x4dffe3[_0x4182f5(0x39c)]()) +
                    ":" +
                    _0x3ecdb3(_0x4dffe3[_0x4182f5(0x345)]()) +
                    ":" +
                    _0x3ecdb3(_0x4dffe3[_0x4182f5(0x353)]()) +
                    ".") +
                  ("" +
                    String(_0x4dffe3[_0x4182f5(0x358)]())[_0x4182f5(0x33d)](
                      0x3,
                      "0"
                    ))
                );
              },
              _0x3aef1f = await _0x138dfa(),
              _0x47359c = [
                "spear",
                "sword",
                _0x2ec157(0x328),
                "archer",
                _0x2ec157(0x2cd),
                _0x2ec157(0x2ca),
                _0x2ec157(0x378),
                _0x2ec157(0x2f5),
                _0x2ec157(0x255),
                "catapult",
                "knight",
                _0x2ec157(0x282),
              ];
            if (!document["getElementById"](_0x2ec157(0x1d4))) {
              const _0x41098f = document[_0x2ec157(0x206)]("style");
              (_0x41098f["id"] = _0x2ec157(0x1d4)),
                (_0x41098f["textContent"] =
                  "\x0a\x20\x20\x20\x20.twag-row-main\x20{\x20background:\x20#222;\x20border-radius:\x206px;\x20margin:\x204px\x200;\x20}\x0a\x20\x20\x20\x20.twag-row-main\x20td\x20{\x20padding:\x204px\x206px;\x20color:\x20#ddd;\x20font-size:\x2012px;\x20}\x0a\x20\x20\x20\x20.twag-expand\x20{\x20cursor:\x20pointer;\x20font-size:\x2013px;\x20padding:\x202px\x204px;\x20}\x0a\x20\x20\x20\x20.twag-row-details\x20{\x20display:\x20none;\x20background:\x20#1b1b1b;\x20border-radius:\x206px;\x20margin:\x200\x200\x204px;\x20}\x0a\x20\x20\x20\x20.twag-details\x20{\x0a\x20\x20\x20\x20\x20\x20padding:\x206px;\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20\x20\x20gap:\x2012px;\x0a\x20\x20\x20\x20\x20\x20color:\x20#ccc;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.twag-details-troops\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20flex-wrap:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20gap:\x202px;\x0a\x20\x20\x20\x20\x20\x20overflow-x:\x20auto;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.twag-details-troops\x20img\x20{\x20width:\x2010px\x20!important;\x20height:\x20auto;\x20}\x0a\x20\x20\x20\x20.twag-badge\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20inline-block;\x0a\x20\x20\x20\x20\x20\x20background:\x20#333;\x0a\x20\x20\x20\x20\x20\x20border:\x201px\x20solid\x20#444;\x0a\x20\x20\x20\x20\x20\x20border-radius:\x206px;\x0a\x20\x20\x20\x20\x20\x20padding:\x201px\x204px;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2010px;\x0a\x20\x20\x20\x20\x20\x20color:\x20#eee;\x0a\x20\x20\x20\x20\x20\x20text-align:\x20center;\x0a\x20\x20\x20\x20\x20\x20min-width:\x2020px;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.twag-info-line\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20flex-wrap:\x20wrap;\x0a\x20\x20\x20\x20\x20\x20gap:\x208px;\x0a\x20\x20\x20\x20\x20\x20font-size:\x2012px;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.twag-section\x20{\x20padding-top:\x204px;\x20width:\x20100%;\x20border-top:\x201px\x20solid\x20#444;\x20}\x0a\x20\x20\x20\x20.twag-actions\x20{\x20text-align:\x20center;\x20padding:\x203px\x206px;\x20}\x0a\x20\x20\x20\x20.twag-nt-line\x20{\x0a\x20\x20\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20\x20\x20flex-wrap:\x20nowrap;\x0a\x20\x20\x20\x20\x20\x20gap:\x202px;\x0a\x20\x20\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20\x20\x20margin:\x202px\x200;\x0a\x20\x20\x20\x20}\x0a\x20\x20\x20\x20.twag-nt-line\x20strong\x20{\x20font-size:\x2012px;\x20margin-right:\x204px;\x20}\x0a\x20\x20"),
                document[_0x2ec157(0x290)][_0x2ec157(0x37c)](_0x41098f);
            }
            _0x265eca[_0x2ec157(0x25f)]((_0x37dbbe, _0x2672be) => {
              const _0x2e02f2 = _0x2ec157,
                _0x1d8ba7 = Object[_0x2e02f2(0x332)](
                  _0x37dbbe[_0x2e02f2(0x246)] || {}
                ),
                _0x73112d = _0x1d8ba7[_0x2e02f2(0x1fc)](
                  (_0x187bcf, _0x20cabc) =>
                    _0x3aef1f[_0x187bcf] > _0x3aef1f[_0x20cabc]
                      ? _0x187bcf
                      : _0x20cabc,
                  _0x1d8ba7[0x0] || _0x2e02f2(0x379)
                ),
                _0x3a274e =
                  _0x37dbbe[_0x2e02f2(0x20d)] === _0x2e02f2(0x25d)
                    ? _0x2e02f2(0x399)
                    : _0x2e02f2(0x203),
                _0x38f4f6 = "/graphic/unit/unit_" + _0x73112d + ".png",
                _0x2130b3 = _0x37dbbe["horarioEnvio"]
                  ? _0x21e0de(_0x37dbbe[_0x2e02f2(0x370)])
                  : "—",
                _0x9b59a5 = _0x37dbbe[_0x2e02f2(0x3a3)]
                  ? _0x21e0de(_0x37dbbe["chegadaDesejada"])
                  : "—",
                _0x1c6c5e = document[_0x2e02f2(0x206)]("tr");
              (_0x1c6c5e[_0x2e02f2(0x2a5)] = _0x2e02f2(0x2d8)),
                (_0x1c6c5e[_0x2e02f2(0x2f6)][_0x2e02f2(0x34c)] = _0x2672be),
                (_0x1c6c5e[_0x2e02f2(0x300)] =
                  _0x2e02f2(0x1e5) +
                  _0x3a274e +
                  _0x2e02f2(0x2fc) +
                  _0x38f4f6 +
                  _0x2e02f2(0x1fe) +
                  _0x37dbbe[_0x2e02f2(0x1f9)] +
                  _0x2e02f2(0x2d7) +
                  _0x37dbbe[_0x2e02f2(0x1f3)] +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20<td>" +
                  _0x2130b3 +
                  "</td>\x0a\x20\x20\x20\x20\x20\x20<td>" +
                  _0x9b59a5 +
                  _0x2e02f2(0x32b) +
                  _0x37dbbe["id"] +
                  _0x2e02f2(0x1e7)),
                _0x12a2cb[_0x2e02f2(0x37c)](_0x1c6c5e);
              const _0x11f8ea = document[_0x2e02f2(0x206)]("tr");
              _0x11f8ea[_0x2e02f2(0x2a5)] = _0x2e02f2(0x2af);
              const _0x3ae628 = document[_0x2e02f2(0x206)]("td");
              _0x3ae628[_0x2e02f2(0x1d5)] = 0x6;
              const _0x1bc13c = _0x47359c[_0x2e02f2(0x291)]((_0x170542) => {
                const _0x2c6bd1 = _0x2e02f2,
                  _0x3d1a74 =
                    _0x37dbbe["tropas"]?.[_0x170542] === _0x2c6bd1(0x283)
                      ? "Max"
                      : _0x37dbbe[_0x2c6bd1(0x246)]?.[_0x170542] || 0x0;
                return (
                  _0x2c6bd1(0x278) +
                  _0x170542 +
                  ".png\x22\x20width=\x2212\x22\x20height=\x22auto\x22/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22twag-badge\x22>" +
                  _0x3d1a74 +
                  "</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>"
                );
              })[_0x2e02f2(0x1e2)]("");
              let _0x1835be = "";
              _0x37dbbe["linhasNT"] &&
                _0x37dbbe[_0x2e02f2(0x303)]["length"] > 0x1 &&
                _0x37dbbe[_0x2e02f2(0x303)]
                  [_0x2e02f2(0x2c6)](0x1)
                  ["forEach"]((_0x26e3ec, _0x13b5f4) => {
                    const _0x3cbddf = _0x2e02f2,
                      _0x54e8e9 = _0x3cbddf(0x1c9) + (_0x13b5f4 + 0x2) + ":",
                      _0x34eb8f = _0x47359c[_0x3cbddf(0x291)]((_0x8cdcda) => {
                        const _0xb94c5a = _0x3cbddf,
                          _0x56fcf1 = _0x26e3ec[_0x8cdcda] || 0x0;
                        return (
                          "<div\x20style=\x22display:flex;align-items:center;gap:2px;white-space:nowrap;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<img\x20src=\x22/graphic/unit/unit_" +
                          _0x8cdcda +
                          _0xb94c5a(0x250) +
                          _0x56fcf1 +
                          _0xb94c5a(0x2f1)
                        );
                      })[_0x3cbddf(0x1e2)]("");
                    _0x1835be +=
                      _0x3cbddf(0x38a) +
                      _0x54e8e9 +
                      _0x3cbddf(0x2d1) +
                      _0x34eb8f +
                      _0x3cbddf(0x37e);
                  });
              const _0x2d2f40 = [];
              _0x2d2f40["push"](
                "<div><strong>Modelo\x20NT:</strong>\x20<span\x20class=\x22twag-badge\x22>" +
                  (_0x37dbbe[_0x2e02f2(0x294)] || "—") +
                  _0x2e02f2(0x371)
              ),
                _0x2d2f40[_0x2e02f2(0x229)](
                  _0x2e02f2(0x1cb) +
                    (_0x37dbbe[_0x2e02f2(0x2cb)] || 0x0) +
                    _0x2e02f2(0x371)
                ),
                _0x2d2f40["push"](
                  _0x2e02f2(0x1fa) +
                    _0x37dbbe[_0x2e02f2(0x20e)] +
                    _0x2e02f2(0x371)
                );
              const _0x22a116 =
                _0x37dbbe["baseHorario"] === "arrival"
                  ? _0x21e0de(_0x37dbbe[_0x2e02f2(0x3a3)])
                  : _0x21e0de(_0x37dbbe[_0x2e02f2(0x370)]);
              _0x2d2f40[_0x2e02f2(0x229)](
                _0x2e02f2(0x30e) + _0x22a116 + "</span></div>"
              );
              const _0x4925d1 =
                _0x2e02f2(0x32f) +
                _0x2d2f40[_0x2e02f2(0x1e2)]("") +
                _0x2e02f2(0x1e0);
              (_0x3ae628[_0x2e02f2(0x300)] =
                _0x2e02f2(0x1d6) +
                _0x1bc13c +
                _0x2e02f2(0x1df) +
                (_0x1835be
                  ? _0x2e02f2(0x374) + _0x1835be + _0x2e02f2(0x1e0)
                  : "") +
                _0x2e02f2(0x1c0) +
                _0x4925d1 +
                _0x2e02f2(0x25e) +
                _0x2672be +
                _0x2e02f2(0x2ef)),
                _0x11f8ea[_0x2e02f2(0x37c)](_0x3ae628),
                _0x12a2cb[_0x2e02f2(0x37c)](_0x11f8ea),
                _0x1c6c5e[_0x2e02f2(0x2b8)](".twag-expand")[_0x2e02f2(0x367)](
                  _0x2e02f2(0x21d),
                  () => {
                    const _0x2310cf = _0x2e02f2,
                      _0x26669c =
                        window[_0x2310cf(0x1fd)](_0x11f8ea)[
                          _0x2310cf(0x28f)
                        ] === "none";
                    (_0x11f8ea[_0x2310cf(0x1b1)]["display"] = _0x26669c
                      ? _0x2310cf(0x316)
                      : _0x2310cf(0x23c)),
                      (_0x1c6c5e[_0x2310cf(0x2b8)](".twag-expand")[
                        "textContent"
                      ] = _0x26669c ? "−" : "+");
                  }
                );
            }),
              document[_0x2ec157(0x220)](_0x2ec157(0x301))[_0x2ec157(0x25f)](
                (_0x4f8997) => {
                  const _0x24eb5f = _0x2ec157;
                  _0x4f8997[_0x24eb5f(0x367)](_0x24eb5f(0x21d), () => {
                    const _0x2cd6d1 = _0x24eb5f,
                      _0x15065d = _0x4f8997[_0x2cd6d1(0x2c9)]("tr"),
                      _0x54ae54 = _0x15065d[_0x2cd6d1(0x363)];
                    (_0x54ae54[_0x2cd6d1(0x1b1)][_0x2cd6d1(0x28f)] =
                      _0x54ae54[_0x2cd6d1(0x1b1)][_0x2cd6d1(0x28f)] === "none"
                        ? _0x2cd6d1(0x316)
                        : _0x2cd6d1(0x23c)),
                      (_0x4f8997[_0x2cd6d1(0x1c4)] =
                        _0x54ae54["style"]["display"] === _0x2cd6d1(0x23c)
                          ? "+"
                          : "-");
                  });
                }
              ),
              document[_0x2ec157(0x220)](_0x2ec157(0x268))["forEach"](
                (_0x23d7ca) => {
                  const _0x3d5ad5 = _0x2ec157;
                  _0x23d7ca[_0x3d5ad5(0x367)](_0x3d5ad5(0x21d), () => {
                    const _0x1e8141 = _0x3d5ad5,
                      _0x268858 = _0x23d7ca[_0x1e8141(0x2f6)]["id"],
                      _0x2f1d2a = _0x3d21d5(),
                      _0x5af4d8 = _0x2f1d2a["findIndex"](
                        (_0x56068f) => _0x56068f["id"] == _0x268858
                      );
                    _0x5af4d8 > -0x1 &&
                      (_0x2f1d2a[_0x1e8141(0x24f)](_0x5af4d8, 0x1),
                      _0x4e2f77(_0x2f1d2a),
                      _0x2bcb01());
                  });
                }
              ),
              document[_0x2ec157(0x1b8)]("btn-excluir-todos")?.[
                _0x2ec157(0x367)
              ](_0x2ec157(0x21d), () => {
                const _0x5260e0 = _0x2ec157;
                confirm(_0x5260e0(0x3a2)) &&
                  (localStorage[_0x5260e0(0x275)](_0x5260e0(0x204)),
                  _0x2bcb01(),
                  UI[_0x5260e0(0x20f)](
                    "🧹\x20Todos\x20os\x20comandos\x20foram\x20excluídos."
                  ));
              });
          }
          document["querySelectorAll"](_0x19df86(0x368))["forEach"](
            (_0x509644) => {
              const _0x1f9089 = _0x19df86;
              _0x509644[_0x1f9089(0x367)]("click", () => {
                const _0x190cdc = _0x1f9089,
                  _0x5eb289 = +_0x509644[_0x190cdc(0x2f6)]["index"];
                _0x252856(_0x5eb289);
              });
            }
          );
          async function _0x138dfa() {
            const _0x54b175 = _0x19df86,
              _0xc623f0 = await fetch(_0x54b175(0x27b)),
              _0x27ef96 = await _0xc623f0[_0x54b175(0x39b)](),
              _0x1eee20 = new DOMParser(),
              _0x4b4d2f = _0x1eee20[_0x54b175(0x2ed)](
                _0x27ef96,
                _0x54b175(0x22e)
              ),
              _0x3ddfb2 = {};
            return (
              _0x4b4d2f[_0x54b175(0x220)](_0x54b175(0x211))["forEach"](
                (_0x35c904) => {
                  const _0x306070 = _0x54b175,
                    _0x5203d1 = _0x35c904["nodeName"],
                    _0x17063c = parseFloat(
                      _0x35c904[_0x306070(0x2b8)](_0x306070(0x269))[
                        _0x306070(0x1c4)
                      ]
                    );
                  _0x3ddfb2[_0x5203d1] = _0x17063c;
                }
              ),
              _0x3ddfb2
            );
          }
          function _0x2128cd() {
            const _0x3c917e = _0x19df86,
              _0x245cd4 =
                document[_0x3c917e(0x1b8)]("serverTime")?.[_0x3c917e(0x1c4)]?.[
                  _0x3c917e(0x2ad)
                ](),
              _0x27d27c = document[_0x3c917e(0x1b8)](_0x3c917e(0x305))?.[
                _0x3c917e(0x1c4)
              ]?.["trim"]();
            if (!_0x245cd4 || !_0x27d27c) return Date["now"]();
            const [_0x5566a4, _0x483f94, _0x4257fc] =
                _0x245cd4["split"](":")[_0x3c917e(0x291)](Number),
              [_0x1e7c0e, _0x2d556f, _0x26f96e] =
                _0x27d27c["split"]("/")[_0x3c917e(0x291)](Number);
            return new Date(
              _0x26f96e,
              _0x2d556f - 0x1,
              _0x1e7c0e,
              _0x5566a4,
              _0x483f94,
              _0x4257fc
            )["getTime"]();
          }
          function _0x237482(_0x435d8f) {
            const _0x3ea862 = _0x19df86,
              _0x53439d = new Date(_0x435d8f),
              _0x2f3a9e = (_0x12ed71) =>
                String(_0x12ed71)["padStart"](0x2, "0"),
              _0x55d72d = String(_0x53439d[_0x3ea862(0x358)]())[
                _0x3ea862(0x33d)
              ](0x3, "0");
            return (
              _0x53439d[_0x3ea862(0x214)]() +
              "-" +
              _0x2f3a9e(_0x53439d["getMonth"]() + 0x1) +
              "-" +
              _0x2f3a9e(_0x53439d[_0x3ea862(0x1ac)]()) +
              ("\x20" +
                _0x2f3a9e(_0x53439d[_0x3ea862(0x39c)]()) +
                ":" +
                _0x2f3a9e(_0x53439d[_0x3ea862(0x345)]()) +
                ":" +
                _0x2f3a9e(_0x53439d[_0x3ea862(0x353)]()) +
                "." +
                _0x55d72d)
            );
          }
          function _0x4c1517(_0x41458a, _0x1cdf1c, _0xe9744d, _0x2a4fc7) {
            const _0x37e2ba = _0x19df86;
            try {
              if (!_0x41458a || !_0x1cdf1c) return _0x37e2ba(0x232);
              const _0x34d53c = new Date(_0x41458a);
              if (isNaN(_0x34d53c)) return _0x37e2ba(0x232);
              const [_0x221e11, _0x1b8580] =
                  _0xe9744d["split"]("|")[_0x37e2ba(0x291)](Number),
                [_0x50ce60, _0x280dea] =
                  _0x2a4fc7[_0x37e2ba(0x306)]("|")[_0x37e2ba(0x291)](Number),
                _0x1a15c6 = Math[_0x37e2ba(0x1d9)](
                  _0x221e11 - _0x50ce60,
                  _0x1b8580 - _0x280dea
                ),
                _0x68a8aa = _0x1a15c6 * _0x1cdf1c,
                _0x1befb2 = new Date(
                  _0x34d53c[_0x37e2ba(0x389)]() - _0x68a8aa * 0xea60
                ),
                _0x598e85 = (_0x32e9b1) =>
                  String(_0x32e9b1)[_0x37e2ba(0x33d)](0x2, "0"),
                _0x39b885 = String(_0x1befb2["getMilliseconds"]())[
                  _0x37e2ba(0x33d)
                ](0x3, "0");
              return (
                _0x1befb2["getFullYear"]() +
                "-" +
                _0x598e85(_0x1befb2["getMonth"]() + 0x1) +
                "-" +
                _0x598e85(_0x1befb2[_0x37e2ba(0x1ac)]()) +
                "\x20" +
                (_0x598e85(_0x1befb2[_0x37e2ba(0x39c)]()) +
                  ":" +
                  _0x598e85(_0x1befb2["getMinutes"]()) +
                  ":" +
                  _0x598e85(_0x1befb2[_0x37e2ba(0x353)]()) +
                  "." +
                  _0x39b885)
              );
            } catch (_0x5e2429) {
              return (
                console[_0x37e2ba(0x1ba)](_0x37e2ba(0x251), _0x5e2429),
                _0x37e2ba(0x393)
              );
            }
          }
          function _0x252856(_0x594666) {
            const _0x41591c = _0x19df86,
              _0x4a519f = JSON["parse"](
                localStorage[_0x41591c(0x233)](_0x41591c(0x204)) || "[]"
              ),
              _0x33d8c1 = _0x4a519f[_0x594666],
              _0x2d0737 = document["querySelectorAll"](_0x41591c(0x395))[
                _0x594666
              ],
              _0x3ea049 = _0x2d0737[_0x41591c(0x2b8)]("td"),
              _0x27058b = [
                "spear",
                _0x41591c(0x3a1),
                "axe",
                _0x41591c(0x27a),
                "spy",
                _0x41591c(0x2ca),
                _0x41591c(0x378),
                "heavy",
                _0x41591c(0x255),
                "catapult",
                _0x41591c(0x1fb),
                "snob",
              ];
            _0x3ea049[_0x41591c(0x300)] =
              _0x41591c(0x391) +
              _0x27058b["map"]((_0x31e546) => {
                const _0x51c121 = _0x41591c,
                  _0x550c8b = _0x33d8c1[_0x51c121(0x246)][_0x31e546],
                  _0x28c210 =
                    _0x550c8b === _0x51c121(0x283)
                      ? _0x51c121(0x1c5)
                      : _0x550c8b || 0x0;
                return (
                  _0x51c121(0x2c0) +
                  _0x31e546 +
                  ".png\x22\x20width=\x2218\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20data-unit=\x22" +
                  _0x31e546 +
                  _0x51c121(0x352) +
                  _0x28c210 +
                  "\x22\x20style=\x22width:\x2050px;\x20background:\x20#2e2e2e;\x20border:\x20none;\x20color:\x20#ccc;\x20border-radius:\x204px;\x20padding:\x202px\x204px;\x20font-family:\x20\x27pf-videotext\x27;\x20text-align:\x20center;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                );
              })[_0x41591c(0x1e2)]("") +
              _0x41591c(0x384) +
              [
                "SEM\x20NT",
                "NT\x202",
                _0x41591c(0x38d),
                _0x41591c(0x28d),
                _0x41591c(0x287),
              ]
                [_0x41591c(0x291)](
                  (_0x12d3d0) =>
                    _0x41591c(0x1af) +
                    _0x12d3d0 +
                    "\x22\x20" +
                    (_0x33d8c1["modeloNT"] === _0x12d3d0 ? "selected" : "") +
                    ">" +
                    _0x12d3d0 +
                    _0x41591c(0x34b)
                )
                [_0x41591c(0x1e2)]("") +
              "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<b>Catapultas:</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<select\x20id=\x22editCatapultas\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
              [
                "Padrão",
                "main",
                _0x41591c(0x30c),
                _0x41591c(0x2bd),
                _0x41591c(0x22b),
                _0x41591c(0x2dd),
                _0x41591c(0x282),
                _0x41591c(0x1ef),
                _0x41591c(0x200),
                "statue",
                _0x41591c(0x30b),
                "wood",
                _0x41591c(0x1ad),
                _0x41591c(0x329),
                _0x41591c(0x39f),
                _0x41591c(0x365),
                _0x41591c(0x308),
              ]
                [_0x41591c(0x291)](
                  (_0x36c359) =>
                    _0x41591c(0x1af) +
                    _0x36c359 +
                    "\x22\x20" +
                    (_0x33d8c1[_0x41591c(0x2cb)] === _0x36c359
                      ? _0x41591c(0x223)
                      : "") +
                    ">" +
                    _0x36c359 +
                    "</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20"
                )
                [_0x41591c(0x1e2)]("") +
              _0x41591c(0x341) +
              (_0x33d8c1["baseHorario"] === _0x41591c(0x385)
                ? _0x41591c(0x223)
                : "") +
              ">Chegada</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<option\x20value=\x22send\x22\x20" +
              (_0x33d8c1[_0x41591c(0x20e)] === _0x41591c(0x2bf)
                ? "selected"
                : "") +
              ">Envio</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<b>Horário:</b>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<input\x20id=\x22editHorario\x22\x20type=\x22datetime-local\x22\x20value=\x22" +
              _0x33d8c1["horario"] +
              "\x22\x20style=\x22background:\x20#2e2e2e;\x20color:\x20#ccc;\x20border:\x20none;\x20border-radius:\x204px;\x20padding:\x202px\x206px;\x22\x20/>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20" +
              (_0x33d8c1[_0x41591c(0x303)] &&
              _0x33d8c1[_0x41591c(0x303)][_0x41591c(0x2a3)] > 0x0
                ? _0x41591c(0x230) +
                  (_0x33d8c1[_0x41591c(0x2f9)] === "unidades"
                    ? "selected"
                    : "") +
                  _0x41591c(0x1ab) +
                  (_0x33d8c1[_0x41591c(0x2f9)] === _0x41591c(0x37b)
                    ? _0x41591c(0x223)
                    : "") +
                  ">Percentual</option>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</select>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20style=\x22font-size:\x2013px;\x20color:\x20#00E5FF;\x20margin:\x208px\x200\x204px;\x22>Linhas\x20NT\x20programadas:</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
                  _0x33d8c1[_0x41591c(0x303)]
                    ["map"](
                      (_0x5d151d, _0x6b156e) =>
                        _0x41591c(0x2ae) +
                        (_0x6b156e + 0x2) +
                        _0x41591c(0x262) +
                        _0x27058b["map"](
                          (_0x4f4cb7) =>
                            _0x41591c(0x2e4) +
                            _0x4f4cb7 +
                            _0x41591c(0x2aa) +
                            _0x6b156e +
                            "\x22\x20data-unit=\x22" +
                            _0x4f4cb7 +
                            _0x41591c(0x352) +
                            (_0x5d151d[_0x4f4cb7] ?? 0x0) +
                            _0x41591c(0x34a)
                        )[_0x41591c(0x1e2)]("") +
                        _0x41591c(0x253)
                    )
                    [_0x41591c(0x1e2)]("") +
                  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20"
                : "") +
              _0x41591c(0x356) +
              _0x594666 +
              _0x41591c(0x1ca);
            const _0x3850e3 = document[_0x41591c(0x1b8)]("btnCancelar");
            _0x3850e3
              ? _0x3850e3["addEventListener"](_0x41591c(0x21d), (_0x5e7db5) => {
                  const _0x540c28 = _0x41591c;
                  _0x5e7db5[_0x540c28(0x39e)](), _0x2bcb01();
                })
              : console[_0x41591c(0x1ba)](_0x41591c(0x263));
          }
          function _0x457e5e(_0x3703b0) {
            const _0x37d692 = _0x19df86,
              _0x3787fe = JSON[_0x37d692(0x309)](
                localStorage[_0x37d692(0x233)]("TWAG_comandos") || "[]"
              ),
              _0x46c256 = _0x3787fe[_0x3703b0],
              _0x4b0517 = {};
            document[_0x37d692(0x220)](_0x37d692(0x215))[_0x37d692(0x25f)](
              (_0x1ea1fe) => {
                const _0x37d290 = _0x37d692,
                  _0x3604d7 = _0x1ea1fe[_0x37d290(0x2f6)][_0x37d290(0x2a2)],
                  _0x1c9bfb = (_0x1ea1fe["value"] || "")
                    [_0x37d290(0x2ad)]()
                    ["toLowerCase"]();
                if (_0x1c9bfb === _0x37d290(0x1dc))
                  _0x4b0517[_0x3604d7] = _0x37d290(0x283);
                else {
                  const _0x439667 = parseInt(_0x1c9bfb, 0xa);
                  !isNaN(_0x439667) &&
                    _0x439667 > 0x0 &&
                    (_0x4b0517[_0x3604d7] = _0x439667);
                }
              }
            ),
              (_0x46c256[_0x37d692(0x246)] = _0x4b0517),
              (_0x46c256["modeloNT"] = document[_0x37d692(0x1b8)](
                _0x37d692(0x304)
              )[_0x37d692(0x2c8)]),
              (_0x46c256[_0x37d692(0x2cb)] = document[_0x37d692(0x1b8)](
                _0x37d692(0x1cd)
              )[_0x37d692(0x2c8)]),
              (_0x46c256[_0x37d692(0x20e)] = document[_0x37d692(0x1b8)](
                _0x37d692(0x26b)
              )[_0x37d692(0x2c8)]),
              (_0x46c256[_0x37d692(0x39a)] = document[_0x37d692(0x1b8)](
                _0x37d692(0x1b2)
              )["value"]);
            const _0x49ea1 = {};
            document["querySelectorAll"](_0x37d692(0x28c))[_0x37d692(0x25f)](
              (_0x4a15fb) => {
                const _0x3f2ab3 = _0x37d692,
                  _0xf4f417 = _0x4a15fb["dataset"][_0x3f2ab3(0x226)],
                  _0x593b2a = _0x4a15fb[_0x3f2ab3(0x2f6)][_0x3f2ab3(0x2a2)],
                  _0x303de2 = _0x4a15fb[_0x3f2ab3(0x2c8)]
                    [_0x3f2ab3(0x2ad)]()
                    [_0x3f2ab3(0x295)]();
                if (!_0x49ea1[_0xf4f417]) _0x49ea1[_0xf4f417] = {};
                if (_0x303de2 === "max")
                  _0x49ea1[_0xf4f417][_0x593b2a] = _0x3f2ab3(0x283);
                else {
                  const _0x47e8f1 = parseInt(_0x303de2, 0xa);
                  !isNaN(_0x47e8f1) &&
                    (_0x49ea1[_0xf4f417][_0x593b2a] = _0x47e8f1);
                }
              }
            ),
              (_0x46c256[_0x37d692(0x303)] =
                Object[_0x37d692(0x38e)](_0x49ea1));
            const _0x46f68f = document[_0x37d692(0x1b8)](_0x37d692(0x273));
            _0x46f68f &&
              (_0x46c256[_0x37d692(0x2f9)] = _0x46f68f[_0x37d692(0x2c8)]),
              (_0x3787fe[_0x3703b0] = _0x46c256),
              localStorage[_0x37d692(0x29a)](
                _0x37d692(0x204),
                JSON[_0x37d692(0x35b)](_0x3787fe)
              ),
              _0x2bcb01();
          }
          function _0x5a9fb9() {
            const _0x305155 = _0x19df86,
              _0x156797 = document[_0x305155(0x220)](_0x305155(0x313));
            _0x156797[_0x305155(0x25f)]((_0x41f8b8) => {
              const _0x269183 = _0x305155,
                _0x1756af = _0x41f8b8[_0x269183(0x22a)],
                _0x14bd57 = parseInt(
                  _0x41f8b8[_0x269183(0x2f6)]["allCount"] || "0",
                  0xa
                ),
                _0xdfc423 = document[_0x269183(0x1b8)]("unit_" + _0x1756af),
                _0x2b9820 = document["querySelector"](
                  _0x269183(0x357) + _0x1756af + "\x22]"
                );
              _0xdfc423 &&
                _0x2b9820 &&
                _0x2b9820[_0x269183(0x367)](_0x269183(0x1ff), () => {
                  const _0x36fea2 = _0x269183;
                  _0x2b9820[_0x36fea2(0x27e)]
                    ? (_0xdfc423[_0x36fea2(0x2c8)] = _0x14bd57)
                    : (_0xdfc423["value"] = "");
                });
            });
          }
          function _0x455917() {
            const _0x2538f7 = _0x19df86,
              _0x1ff973 = Date[_0x2538f7(0x376)](),
              _0xa60960 = _0x3d21d5();
            _0xa60960[_0x2538f7(0x25f)]((_0x1076ac, _0x42e1f9) => {
              const _0x197622 = _0x2538f7;
              if (_0x1076ac[_0x197622(0x227)]) return;
              const _0x587cb2 = _0x5ad8f1(_0x1076ac["id"]);
              if (localStorage[_0x197622(0x233)](_0x587cb2)) return;
              const _0x54b612 =
                  new Date(_0x1076ac[_0x197622(0x370)])[_0x197622(0x389)]() -
                  _0x1ff973,
                _0x5639ff = !_0x1076ac[_0x197622(0x267)] && _0x54b612 <= 0x0,
                _0x5bae63 =
                  !_0x1076ac[_0x197622(0x267)] &&
                  _0x54b612 <= _0x647bb6 &&
                  _0x54b612 > 0x0,
                _0x3ac86c =
                  _0x1076ac[_0x197622(0x267)] &&
                  _0x1ff973 - new Date(_0x1076ac[_0x197622(0x370)]) <
                    0x5 * 0xea60 &&
                  !_0x2bc5f8[_0x197622(0x1d7)](_0x1076ac["id"]);
              _0x5639ff &&
                !_0x1076ac[_0x197622(0x2f4)] &&
                ((_0x1076ac[_0x197622(0x2f4)] = !![]),
                (_0xa60960[_0x42e1f9] = _0x1076ac),
                _0x4e2f77(_0xa60960));
              if (!(_0x5bae63 || _0x5639ff || _0x3ac86c)) return;
              localStorage["setItem"](_0x587cb2, _0x49721a);
              if (localStorage[_0x197622(0x233)](_0x587cb2) !== _0x49721a)
                return;
              let _0x5550d5 = _0x1076ac[_0x197622(0x2de)] || "";
              if (!_0x5550d5) {
                const _0x541934 =
                    _0x1076ac[_0x197622(0x36f)] ||
                    (game_data?.[_0x197622(0x2fd)]?.[_0x197622(0x369)]?.[
                      _0x1076ac[_0x197622(0x1f9)]
                    ] ??
                      0x0),
                  [_0x2fe591, _0x381f33] =
                    _0x1076ac[_0x197622(0x1f3)]["split"]("|");
                _0x5550d5 =
                  _0x197622(0x288) +
                  _0x541934 +
                  _0x197622(0x1f6) +
                  _0x2fe591 +
                  _0x197622(0x270) +
                  _0x381f33;
              }
              if (!_0x5550d5[_0x197622(0x396)](_0x197622(0x23d)))
                _0x5550d5 += _0x197622(0x284) + _0x1076ac["id"];
              if (
                _0x1076ac[_0x197622(0x2f4)] &&
                !_0x5550d5[_0x197622(0x396)]("sendNow=1")
              )
                _0x5550d5 += _0x197622(0x2c2);
              const _0x1385bd = _0x44b9f6(_0x5550d5, {
                active: ![],
                insert: !![],
              });
              if (!_0x1385bd) {
                localStorage[_0x197622(0x275)](_0x587cb2);
                return;
              }
              (_0x1385bd[_0x197622(0x2db)] = Date[_0x197622(0x376)]()),
                _0x2bc5f8[_0x197622(0x354)](_0x1076ac["id"], _0x1385bd),
                (_0x1076ac[_0x197622(0x267)] = !![]),
                _0x4e2f77(_0xa60960),
                console[_0x197622(0x1e8)](
                  _0x197622(0x34e) +
                    _0x1076ac["id"] +
                    (_0x1076ac["sendNow"] ? _0x197622(0x36c) : "")
                );
            }),
              setTimeout(_0x455917, _0x4d9fce);
          }
          if (!_0x387477) _0x455917();
          function _0x415d84(_0xdaf95c) {
            const _0x5b3bb4 = _0x19df86,
              _0x25792b = _0x2bc5f8[_0x5b3bb4(0x261)](_0xdaf95c);
            if (_0x25792b?.[_0x5b3bb4(0x23f)]) _0x25792b[_0x5b3bb4(0x23f)]();
            _0x2bc5f8[_0x5b3bb4(0x1b9)](_0xdaf95c),
              localStorage[_0x5b3bb4(0x275)](_0x5ad8f1(_0xdaf95c)),
              console[_0x5b3bb4(0x1e8)](_0x5b3bb4(0x266) + _0xdaf95c);
            if (typeof _0x8d46d3 === _0x5b3bb4(0x274)) _0x8d46d3();
            if (typeof _0x2bcb01 === _0x5b3bb4(0x274)) _0x2bcb01();
          }
          setInterval(() => {
            const _0x1342fb = _0x19df86,
              _0x305487 = 0x4a38,
              _0x4c7f92 = Date[_0x1342fb(0x376)]();
            _0x2bc5f8["forEach"]((_0x17d150, _0x5a283d) => {
              const _0x4a57e0 = _0x1342fb;
              if (_0x4c7f92 - (_0x17d150[_0x4a57e0(0x2db)] || 0x0) > _0x305487)
                _0x415d84(_0x5a283d);
            });
          }, 0x1388);
          function _0x39ed9c(_0x48b76c) {
            const _0x45f100 = _0x19df86,
              _0x354fb1 = _0x3d21d5(),
              _0x2bcd87 = _0x354fb1[_0x45f100(0x314)](
                (_0x1e1cee) => _0x1e1cee["id"] == _0x48b76c
              );
            _0x2bcd87 > -0x1 &&
              ((_0x354fb1[_0x2bcd87][_0x45f100(0x227)] = !![]),
              delete _0x354fb1[_0x2bcd87][_0x45f100(0x2f4)],
              _0x4e2f77(_0x354fb1));
            _0x167e88(_0x45f100(0x2ba) + _0x48b76c, Date[_0x45f100(0x376)]()),
              _0x167e88(_0x45f100(0x310), Date[_0x45f100(0x376)]());
            try {
              window[_0x45f100(0x2bc)]?.[_0x45f100(0x244)]?.();
            } catch {}
            _0x2bcb01?.();
          }
          setInterval(() => {
            const _0x3b7912 = _0x19df86,
              _0x4064b0 = Date[_0x3b7912(0x376)](),
              _0x499899 = _0x3d21d5(),
              _0xc9d1ca = _0x499899["find"]((_0x45cf6a) => {
                const _0x51b41b = _0x3b7912;
                if (
                  !_0x45cf6a["opened"] ||
                  _0x45cf6a[_0x51b41b(0x227)] ||
                  _0x45cf6a[_0x51b41b(0x2f4)]
                )
                  return ![];
                const _0x113628 =
                  new Date(_0x45cf6a[_0x51b41b(0x370)])[_0x51b41b(0x389)]() -
                  _0x4064b0;
                return _0x113628 >= 0x0 && _0x113628 <= _0x3148dd;
              });
            if (!_0xc9d1ca) return;
            (_0xc9d1ca[_0x3b7912(0x227)] = !![]), _0x4e2f77(_0x499899);
          }, _0x3148dd);
          async function _0x3b36cf(_0x238ca0) {
            const _0x1d64ad = _0x19df86;
            try {
              await _0x357606(_0x238ca0["origem"]),
                _0x3cd68f(_0x238ca0[_0x1d64ad(0x1f3)]),
                _0x48fee4(_0x238ca0["tropas"]),
                _0x5283b2(_0x238ca0[_0x1d64ad(0x2cb)]),
                _0x382801(
                  _0x1d64ad(0x2a4) +
                    (_0x238ca0[_0x1d64ad(0x20d)] === _0x1d64ad(0x217)
                      ? _0x1d64ad(0x217)
                      : _0x1d64ad(0x25d))
                ),
                await _0x32b4b6();
              const _0x2ea394 = document[_0x1d64ad(0x2b8)](_0x1d64ad(0x2a7));
              if (!_0x2ea394) {
                console["warn"](_0x1d64ad(0x340));
                return;
              }
              _0x2ea394[_0x1d64ad(0x21d)](),
                _0x3ce207(_0x238ca0["id"]),
                _0x3cbcf9(_0x238ca0["id"]),
                console[_0x1d64ad(0x1e8)](
                  _0x1d64ad(0x1f8) +
                    _0x238ca0["id"] +
                    _0x1d64ad(0x312) +
                    _0x238ca0[_0x1d64ad(0x1f9)] +
                    _0x1d64ad(0x22c) +
                    _0x238ca0["destino"]
                );
            } catch (_0x30b4d0) {
              console[_0x1d64ad(0x1ba)](
                "❌\x20Falha\x20ao\x20enviar\x20comando\x20" + _0x238ca0["id"],
                _0x30b4d0
              ),
                (_0x238ca0[_0x1d64ad(0x227)] = ![]);
            }
          }
          const _0x4ed0d9 = {};
          async function _0x2ea635(_0x50805d) {
            const _0x40343c = _0x19df86;
            if (_0x4ed0d9[_0x50805d]) return _0x4ed0d9[_0x50805d];
            try {
              const _0x3fef5a = await (
                  await fetch("/map/village.txt")
                )["text"](),
                [_0x428f5c, _0x56c538] = _0x50805d[_0x40343c(0x306)]("|"),
                _0x5eb1bc = _0x3fef5a[_0x40343c(0x306)]("\x0a")
                  [_0x40343c(0x291)]((_0x5dc380) =>
                    _0x5dc380[_0x40343c(0x306)](",")
                  )
                  ["find"](
                    (_0x294f07) =>
                      _0x294f07[0x2] === _0x428f5c &&
                      _0x294f07[0x3] === _0x56c538
                  ),
                _0x514378 = _0x5eb1bc ? +_0x5eb1bc[0x0] : 0x0;
              return (_0x4ed0d9[_0x50805d] = _0x514378), _0x514378;
            } catch (_0x3b4232) {
              return (
                console["error"](_0x40343c(0x36e), _0x50805d, _0x3b4232), 0x0
              );
            }
          }
          function _0x3ce207(_0x435a2f) {
            const _0x1157c9 = _0x19df86,
              _0x398f74 = _0x3d21d5(),
              _0x1539a3 = _0x398f74[_0x1157c9(0x291)]((_0x77a04) => {
                const _0x5ce2c3 = _0x1157c9;
                if (_0x77a04["id"] === _0x435a2f)
                  _0x77a04[_0x5ce2c3(0x227)] = !![];
                return _0x77a04;
              });
            _0x4e2f77(_0x1539a3);
          }
          function _0x3cbcf9(_0x4a75e6) {
            const _0x59a60e = _0x19df86,
              _0x472a91 = _0x3d21d5()[_0x59a60e(0x2ac)](
                (_0x58d7af) => _0x58d7af["id"] !== _0x4a75e6
              );
            _0x4e2f77(_0x472a91);
          }
          function _0x382801(_0x36e392) {
            const _0x321391 = _0x19df86,
              _0x4d7a9f = document[_0x321391(0x2b8)](_0x36e392);
            if (_0x4d7a9f) _0x4d7a9f[_0x321391(0x21d)]();
          }
          function _0x32b4b6() {
            return new Promise((_0x5c6d69) => setTimeout(_0x5c6d69, 0x12c));
          }
          async function _0x357606(_0xa1dc5c) {
            const _0x3e733f = _0x19df86;
            if (game_data["village"][_0x3e733f(0x21e)] === _0xa1dc5c) return;
            const _0x501acf =
              game_data[_0x3e733f(0x2fd)][_0x3e733f(0x369)]?.[_0xa1dc5c] ||
              game_data[_0x3e733f(0x2fd)]["id"];
            (window[_0x3e733f(0x307)][_0x3e733f(0x26e)] =
              _0x3e733f(0x288) + _0x501acf + _0x3e733f(0x27f)),
              await _0x32b4b6();
          }
          function _0x3cd68f(_0x34f571) {
            const _0x3df7ef = _0x19df86,
              _0x5231b0 = document[_0x3df7ef(0x2b8)](_0x3df7ef(0x2a6));
            if (_0x5231b0) _0x5231b0["value"] = _0x34f571;
          }
          function _0x48fee4(_0x301a04) {
            const _0x3dab62 = _0x19df86;
            Object[_0x3dab62(0x2a1)](_0x301a04)[_0x3dab62(0x25f)](
              ([_0x539765, _0x5aa901]) => {
                const _0x2cdd0e = _0x3dab62,
                  _0xf9b09 = document[_0x2cdd0e(0x2b8)](
                    "#unit_input_" + _0x539765
                  );
                if (!_0xf9b09) return;
                _0x5aa901 === _0x2cdd0e(0x283)
                  ? (_0xf9b09["value"] =
                      _0xf9b09[_0x2cdd0e(0x2f6)][_0x2cdd0e(0x1b3)] || "")
                  : (_0xf9b09[_0x2cdd0e(0x2c8)] = _0x5aa901);
              }
            );
          }
          function _0x5283b2(_0x21f7a9) {
            const _0x150d78 = _0x19df86;
            if (_0x21f7a9 === _0x150d78(0x2e9)) return;
            const _0xf0bb40 = document[_0x150d78(0x2b8)](_0x150d78(0x1f1));
            if (_0xf0bb40) _0xf0bb40[_0x150d78(0x2c8)] = _0x21f7a9;
          }
          window[_0x19df86(0x307)][_0x19df86(0x26e)][_0x19df86(0x396)](
            "screen=place"
          ) && setTimeout(_0x5a9fb9, 0x12c);
          (async function _0x2a67de() {
            const _0x1c7427 = _0x19df86,
              _0x1a08db = (_0x205246, _0x51cfca = 0x3c) =>
                new Promise((_0x38af02) => {
                  const _0x2aa3be = setInterval(() => {
                    const _0x1780d1 = document["querySelector"](_0x205246);
                    _0x1780d1 &&
                      (clearInterval(_0x2aa3be), _0x38af02(_0x1780d1));
                  }, _0x51cfca);
                }),
              _0x5e0f01 = sessionStorage[_0x1c7427(0x233)]("TWAG_currentCmdId"),
              _0x568e62 = !!_0x5e0f01,
              _0x5c853a = new URLSearchParams(location[_0x1c7427(0x2ec)]),
              _0x477a4b = _0x5c853a["get"](_0x1c7427(0x28b)),
              _0x31ad00 = _0x5c853a[_0x1c7427(0x261)](_0x1c7427(0x2f4)) === "1";
            if (!_0x568e62 || !_0x477a4b) {
              console[_0x1c7427(0x1e8)](_0x1c7427(0x24b));
              return;
            }
            const _0x17a7fd = _0x3d21d5(),
              _0x4b3812 = _0x17a7fd[_0x1c7427(0x33e)](
                (_0x6eeaed) => _0x6eeaed["id"] == _0x477a4b
              );
            if (!_0x4b3812) {
              console[_0x1c7427(0x1ba)](_0x1c7427(0x397), _0x477a4b);
              return;
            }
            if (_0x31ad00 && _0x4b3812[_0x1c7427(0x227)])
              (_0x4b3812[_0x1c7427(0x227)] = ![]), _0x4e2f77(_0x17a7fd);
            else {
              if (
                _0x4b3812[_0x1c7427(0x227)] &&
                !location[_0x1c7427(0x2ec)][_0x1c7427(0x396)]("try=confirm")
              )
                return;
            }
            if (
              !location[_0x1c7427(0x2ec)][_0x1c7427(0x396)](_0x1c7427(0x382))
            ) {
              console[_0x1c7427(0x1e8)](
                "[autoCommand]\x20Tela\x20de\x20place\x20detectada"
              ),
                await _0x1a08db(_0x1c7427(0x249));
              const [_0x428f31, _0x3ab601] =
                  _0x4b3812["destino"][_0x1c7427(0x306)]("|"),
                _0x509852 = document[_0x1c7427(0x1b8)](_0x1c7427(0x245));
              if (_0x509852) _0x509852[_0x1c7427(0x2c8)] = _0x428f31;
              const _0x28bc8b = document[_0x1c7427(0x1b8)]("inputy");
              if (_0x28bc8b) _0x28bc8b[_0x1c7427(0x2c8)] = _0x3ab601;
              const _0x28ba1a = document[_0x1c7427(0x2b8)](_0x1c7427(0x2a6));
              if (_0x28ba1a) _0x28ba1a[_0x1c7427(0x2c8)] = _0x4b3812["destino"];
              Object[_0x1c7427(0x2a1)](_0x4b3812[_0x1c7427(0x246)])[
                _0x1c7427(0x25f)
              ](([_0xc0832, _0x4512d5]) => {
                const _0x3d3e7e = _0x1c7427,
                  _0x3925e8 = document[_0x3d3e7e(0x1b8)](
                    "unit_input_" + _0xc0832
                  );
                if (!_0x3925e8) return;
                let _0x53dea8 = _0x4512d5;
                typeof _0x53dea8 === _0x3d3e7e(0x1ed) &&
                  _0x53dea8[_0x3d3e7e(0x295)]() !== _0x3d3e7e(0x283) &&
                  (_0x53dea8 = parseInt(_0x53dea8, 0xa) || 0x0),
                  typeof _0x53dea8 === _0x3d3e7e(0x1ed) &&
                    (_0x53dea8 =
                      _0x3925e8[_0x3d3e7e(0x2f6)]["allCount"] ||
                      _0x3925e8["getAttribute"]("data-all-count") ||
                      _0x3925e8[_0x3d3e7e(0x285)](_0x3d3e7e(0x366)) ||
                      ""),
                  (_0x3925e8[_0x3d3e7e(0x2c8)] = _0x53dea8),
                  _0x3925e8[_0x3d3e7e(0x1b4)](
                    new Event("input", { bubbles: !![] })
                  ),
                  _0x3925e8[_0x3d3e7e(0x1b4)](
                    new Event(_0x3d3e7e(0x1ff), { bubbles: !![] })
                  );
              });
              if (
                _0x4b3812[_0x1c7427(0x2cb)] &&
                _0x4b3812["alvoCatapultas"] !== _0x1c7427(0x2e9)
              ) {
                const _0xac36a4 = document["querySelector"](_0x1c7427(0x1f1));
                if (_0xac36a4)
                  _0xac36a4[_0x1c7427(0x2c8)] = _0x4b3812[_0x1c7427(0x2cb)];
              }
              const _0x430a62 = document[_0x1c7427(0x1b8)](_0x1c7427(0x37d));
              _0x430a62 &&
                !_0x430a62[_0x1c7427(0x36b)][_0x1c7427(0x396)]("cmdId=") &&
                (_0x430a62[_0x1c7427(0x36b)] +=
                  _0x1c7427(0x284) +
                  _0x4b3812["id"] +
                  (_0x31ad00 ? "&sendNow=1" : ""));
              document[_0x1c7427(0x2b8)](
                "#target_" +
                  (_0x4b3812[_0x1c7427(0x20d)] === _0x1c7427(0x217)
                    ? "support"
                    : _0x1c7427(0x25d))
              )?.[_0x1c7427(0x21d)](),
                console["log"](_0x1c7427(0x27c));
              return;
            }
            console[_0x1c7427(0x1e8)](_0x1c7427(0x318));
            const _0x53407a = document[_0x1c7427(0x2b8)](
              "form[action*=\x22action=command\x22]"
            );
            _0x53407a &&
              !_0x53407a[_0x1c7427(0x36b)][_0x1c7427(0x396)](
                _0x1c7427(0x23d)
              ) &&
              (_0x53407a[_0x1c7427(0x36b)] +=
                _0x1c7427(0x284) +
                _0x4b3812["id"] +
                (_0x31ad00 ? _0x1c7427(0x2c2) : ""));
            if (
              _0x4b3812[_0x1c7427(0x2cb)] &&
              _0x4b3812[_0x1c7427(0x2cb)] !== _0x1c7427(0x2e9)
            )
              try {
                const _0x1e6362 = await _0x1a08db(_0x1c7427(0x2a0), 0x12c);
                (_0x1e6362[_0x1c7427(0x2c8)] = _0x4b3812[_0x1c7427(0x2cb)]),
                  console[_0x1c7427(0x1e8)](
                    _0x1c7427(0x1f5),
                    _0x4b3812[_0x1c7427(0x2cb)]
                  );
              } catch {
                console[_0x1c7427(0x1ba)](_0x1c7427(0x299));
              }
            const _0x333ca3 = _0x4b3812[_0x1c7427(0x294)] || _0x1c7427(0x2ee),
              _0x14860a = parseInt(_0x333ca3["replace"](/\D/g, ""), 0xa) || 0x1,
              _0x5c9b02 = _0x4b3812[_0x1c7427(0x303)] || [];
            if (_0x14860a > 0x1) {
              console[_0x1c7427(0x1e8)](
                _0x1c7427(0x20a),
                _0x14860a,
                _0x1c7427(0x331)
              );
              const _0x8744d8 = await _0x1a08db(_0x1c7427(0x2a9), 0x1f4);
              for (let _0xdb8cbf = 0x1; _0xdb8cbf < _0x14860a; _0xdb8cbf++) {
                _0x8744d8[_0x1c7427(0x1b4)](
                  new MouseEvent(_0x1c7427(0x21d), {
                    bubbles: !![],
                    cancelable: !![],
                  })
                ),
                  console[_0x1c7427(0x1e8)](
                    _0x1c7427(0x336) + (_0xdb8cbf + 0x1) + _0x1c7427(0x364)
                  ),
                  await new Promise((_0x38aa72) =>
                    setTimeout(_0x38aa72, 0x12c)
                  );
              }
              console[_0x1c7427(0x1e8)](_0x1c7427(0x2e2)),
                _0x5c9b02[_0x1c7427(0x25f)]((_0x4f86a6, _0x1355c1) => {
                  const _0x537edd = _0x1355c1 + 0x2;
                  Object["entries"](_0x4f86a6)["forEach"](
                    ([_0x1c056c, _0x284e80]) => {
                      const _0x2c2b26 = _0x362b,
                        _0x1c3414 =
                          _0x2c2b26(0x209) +
                          _0x537edd +
                          "][" +
                          _0x1c056c +
                          _0x2c2b26(0x1ec),
                        _0xa92601 = document[_0x2c2b26(0x2b8)](_0x1c3414);
                      if (!_0xa92601) {
                        console[_0x2c2b26(0x1ba)](_0x2c2b26(0x26f), _0x1c3414);
                        return;
                      }
                      const _0x53d2aa =
                        typeof _0x284e80 === "string" &&
                        _0x284e80[_0x2c2b26(0x295)]() === _0x2c2b26(0x283)
                          ? _0xa92601[_0x2c2b26(0x285)](_0x2c2b26(0x286)) || ""
                          : _0x284e80;
                      (_0xa92601[_0x2c2b26(0x2c8)] = _0x53d2aa),
                        _0xa92601[_0x2c2b26(0x1b4)](
                          new Event("input", { bubbles: !![] })
                        ),
                        _0xa92601[_0x2c2b26(0x1b4)](
                          new Event(_0x2c2b26(0x1ff), { bubbles: !![] })
                        ),
                        console[_0x2c2b26(0x1e8)](
                          "[NT]\x20" +
                            _0x1c056c +
                            "=" +
                            _0x53d2aa +
                            "\x20na\x20linha\x20" +
                            _0x537edd
                        );
                    }
                  );
                }),
                console["log"](_0x1c7427(0x254));
            }
          })(),
            document["querySelectorAll"](".tab-btn")[_0x19df86(0x25f)](
              (_0x52186f) => {
                _0x52186f["addEventListener"]("click", () => {
                  const _0x30c63f = _0x362b,
                    _0x35d18e = _0x52186f[_0x30c63f(0x2f6)][_0x30c63f(0x2e3)];
                  document[_0x30c63f(0x220)](_0x30c63f(0x398))[
                    _0x30c63f(0x25f)
                  ]((_0x23e369) =>
                    _0x23e369[_0x30c63f(0x237)][_0x30c63f(0x3a0)](
                      _0x30c63f(0x372)
                    )
                  ),
                    _0x52186f[_0x30c63f(0x237)][_0x30c63f(0x29c)](
                      _0x30c63f(0x372)
                    ),
                    document[_0x30c63f(0x220)](_0x30c63f(0x330))[
                      _0x30c63f(0x25f)
                    ]((_0x196301) => {
                      const _0x51bcee = _0x30c63f;
                      _0x196301[_0x51bcee(0x237)]["remove"](_0x51bcee(0x372));
                    }),
                    document[_0x30c63f(0x1b8)](_0x30c63f(0x1c2) + _0x35d18e)[
                      _0x30c63f(0x237)
                    ][_0x30c63f(0x29c)](_0x30c63f(0x372)),
                    _0x35d18e === _0x30c63f(0x259) && _0x2bcb01();
                });
              }
            ),
            (window[_0x19df86(0x1f2)] = function (_0x256dba) {
              const _0x121056 = _0x19df86,
                _0x205bf7 = JSON[_0x121056(0x309)](
                  localStorage["getItem"]("TWAG_comandos") || "[]"
                ),
                _0x182101 = _0x205bf7[_0x256dba],
                _0xaf06be = {};
              document[_0x121056(0x220)](_0x121056(0x215))[_0x121056(0x25f)](
                (_0x42f05f) => {
                  const _0x3eb413 = _0x121056,
                    _0x4462b8 = _0x42f05f[_0x3eb413(0x2f6)]["unit"],
                    _0x107f53 = (_0x42f05f[_0x3eb413(0x2c8)] || "")
                      [_0x3eb413(0x2ad)]()
                      [_0x3eb413(0x295)]();
                  if (_0x107f53 === _0x3eb413(0x1dc))
                    _0xaf06be[_0x4462b8] = _0x3eb413(0x283);
                  else {
                    const _0xa4c7c5 = parseInt(_0x107f53, 0xa);
                    !isNaN(_0xa4c7c5) &&
                      _0xa4c7c5 > 0x0 &&
                      (_0xaf06be[_0x4462b8] = _0xa4c7c5);
                  }
                }
              ),
                (_0x182101[_0x121056(0x246)] = _0xaf06be),
                (_0x182101[_0x121056(0x294)] =
                  document[_0x121056(0x1b8)]("editModeloNT")["value"]),
                (_0x182101[_0x121056(0x2cb)] =
                  document[_0x121056(0x1b8)]("editCatapultas")[
                    _0x121056(0x2c8)
                  ]),
                (_0x182101["baseHorario"] = document["getElementById"](
                  _0x121056(0x26b)
                )[_0x121056(0x2c8)]),
                (_0x182101["horario"] = document[_0x121056(0x1b8)](
                  _0x121056(0x1b2)
                )[_0x121056(0x2c8)]);
              const _0x4410f8 = {};
              document[_0x121056(0x220)](_0x121056(0x28c))[_0x121056(0x25f)](
                (_0x194bc1) => {
                  const _0x29d876 = _0x121056,
                    _0xddfe38 = _0x194bc1[_0x29d876(0x2f6)]["ntline"],
                    _0x58413a = _0x194bc1[_0x29d876(0x2f6)][_0x29d876(0x2a2)],
                    _0x345a7f = _0x194bc1["value"]
                      [_0x29d876(0x2ad)]()
                      [_0x29d876(0x295)]();
                  if (!_0x4410f8[_0xddfe38]) _0x4410f8[_0xddfe38] = {};
                  if (_0x345a7f === "max")
                    _0x4410f8[_0xddfe38][_0x58413a] = _0x29d876(0x283);
                  else {
                    const _0x359931 = parseInt(_0x345a7f, 0xa);
                    !isNaN(_0x359931) &&
                      (_0x4410f8[_0xddfe38][_0x58413a] = _0x359931);
                  }
                }
              ),
                (_0x182101[_0x121056(0x303)] =
                  Object[_0x121056(0x38e)](_0x4410f8));
              const _0x5a56b8 = document[_0x121056(0x1b8)](_0x121056(0x273));
              _0x5a56b8 &&
                (_0x182101[_0x121056(0x2f9)] = _0x5a56b8[_0x121056(0x2c8)]),
                (_0x205bf7[_0x256dba] = _0x182101),
                localStorage[_0x121056(0x29a)](
                  _0x121056(0x204),
                  JSON[_0x121056(0x35b)](_0x205bf7)
                ),
                _0x2bcb01();
            });
          const _0x50157f = (_0x54c7fe) =>
              String(_0x54c7fe)[_0x19df86(0x33d)](0x2, "0"),
            _0x1aa69f = (_0x41195a) =>
              _0x41195a[_0x19df86(0x214)]() +
              "-" +
              _0x50157f(_0x41195a[_0x19df86(0x224)]() + 0x1) +
              "-" +
              _0x50157f(_0x41195a["getDate"]()) +
              "T" +
              (_0x50157f(_0x41195a[_0x19df86(0x39c)]()) +
                ":" +
                _0x50157f(_0x41195a[_0x19df86(0x345)]()) +
                ":" +
                _0x50157f(_0x41195a["getSeconds"]()) +
                ".") +
              String(_0x41195a["getMilliseconds"]())[_0x19df86(0x33d)](
                0x3,
                "0"
              );
          function _0x3bf819(_0x184d8a) {
            const _0x2ffe09 = _0x19df86;
            if (!_0x184d8a || typeof _0x184d8a !== _0x2ffe09(0x1ed))
              return console["warn"](_0x2ffe09(0x2e0), _0x184d8a), null;
            return new Date(_0x184d8a[_0x2ffe09(0x34d)]("\x20", "T"));
          }
          setInterval(_0x8d46d3, 0x3e8);
          function _0x8d46d3() {
            const _0x1efae0 = _0x19df86,
              _0x1702cd = _0x3d21d5(),
              _0x2edc35 = _0x1702cd["filter"](
                (_0x3f7717) => !_0x3f7717[_0x1efae0(0x227)]
              ),
              _0x39bc23 = _0x1702cd[_0x1efae0(0x2ac)](
                (_0x378792) => _0x378792[_0x1efae0(0x227)]
              ),
              _0x34ab29 =
                +localStorage[_0x1efae0(0x233)](_0x51c0f8["cmd"]) || 0x0,
              _0x5d0f16 =
                +localStorage[_0x1efae0(0x233)](_0x51c0f8[_0x1efae0(0x24d)]) ||
                0x0,
              _0x424025 =
                +localStorage[_0x1efae0(0x233)](_0x51c0f8[_0x1efae0(0x335)]) ||
                0x0,
              _0x2794c2 = _0x2edc35[_0x1efae0(0x2a3)]
                ? Math["min"](
                    ..._0x2edc35[_0x1efae0(0x291)]((_0x433d97) =>
                      new Date(_0x433d97[_0x1efae0(0x370)])[_0x1efae0(0x389)]()
                    )
                  )
                : null;
            (document[_0x1efae0(0x1b8)](_0x1efae0(0x38f))[_0x1efae0(0x1c4)] =
              _0x2794c2
                ? _0x2fbbc2(_0x2794c2 - Date[_0x1efae0(0x376)]())
                : "sem\x20comandos"),
              _0x32ad3e(_0x1efae0(0x375), _0x2edc35[_0x1efae0(0x2a3)]),
              _0x32ad3e(
                _0x1efae0(0x264),
                Math[_0x1efae0(0x1dc)](0x0, _0x39bc23["length"] - _0x34ab29)
              ),
              _0x32ad3e(
                _0x1efae0(0x23e),
                _0x2edc35[_0x1efae0(0x2ac)](
                  (_0x366d4f) =>
                    _0x366d4f[_0x1efae0(0x20d)] === _0x1efae0(0x25d)
                )["length"]
              ),
              _0x32ad3e(
                _0x1efae0(0x35d),
                Math[_0x1efae0(0x1dc)](
                  0x0,
                  _0x39bc23["filter"](
                    (_0x16fd06) =>
                      _0x16fd06[_0x1efae0(0x20d)] === _0x1efae0(0x25d)
                  )[_0x1efae0(0x2a3)] - _0x5d0f16
                )
              ),
              _0x32ad3e(
                _0x1efae0(0x235),
                _0x2edc35["filter"](
                  (_0x2056e2) => _0x2056e2["tipo"] === _0x1efae0(0x217)
                )[_0x1efae0(0x2a3)]
              ),
              _0x32ad3e(
                _0x1efae0(0x2c5),
                Math[_0x1efae0(0x1dc)](
                  0x0,
                  _0x39bc23[_0x1efae0(0x2ac)](
                    (_0x5f3125) =>
                      _0x5f3125[_0x1efae0(0x20d)] === _0x1efae0(0x217)
                  )[_0x1efae0(0x2a3)] - _0x424025
                )
              );
          }
          function _0x2fbbc2(_0x62c495) {
            const _0x317274 = _0x19df86;
            if (_0x62c495 < 0x0) return "—";
            const _0x1745b3 = Math[_0x317274(0x292)](_0x62c495 / 0x3e8) % 0x3c,
              _0x123551 = Math[_0x317274(0x292)](_0x62c495 / 0xea60) % 0x3c,
              _0x40605a = Math[_0x317274(0x292)](_0x62c495 / 0x36ee80);
            return (
              String(_0x40605a)["padStart"](0x2, "0") +
              ":" +
              String(_0x123551)["padStart"](0x2, "0") +
              ":" +
              String(_0x1745b3)[_0x317274(0x33d)](0x2, "0")
            );
          }
          function _0x32ad3e(_0x48f1fd, _0x3643e6) {
            const _0x16bd4f = _0x19df86;
            document[_0x16bd4f(0x220)](_0x48f1fd)[_0x16bd4f(0x25f)](
              (_0x19272b) => (_0x19272b["textContent"] = _0x3643e6)
            );
          }
          (document[_0x19df86(0x1b8)](_0x19df86(0x247))["onclick"] = () => {
            const _0x11e31f = _0x19df86,
              _0x2bda86 = _0x3d21d5()["filter"](
                (_0x3c2e9e) => !_0x3c2e9e[_0x11e31f(0x227)]
              );
            if (!_0x2bda86[_0x11e31f(0x2a3)]) {
              UI[_0x11e31f(0x2eb)](_0x11e31f(0x2b6));
              return;
            }
            const _0x2e46e4 = _0xd2276d(JSON[_0x11e31f(0x35b)](_0x2bda86));
            navigator[_0x11e31f(0x38b)]
              [_0x11e31f(0x1c6)](_0x2e46e4)
              ["then"](() =>
                UI["SuccessMessage"](
                  "📋\x20" + _0x2bda86["length"] + "\x20comando(s)\x20copiados!"
                )
              );
          }),
            (document[_0x19df86(0x1b8)]("twag_import")["onclick"] = () => {
              const _0x57b9ff = _0x19df86,
                _0x552065 = prompt(_0x57b9ff(0x1f0));
              if (!_0x552065) return;
              try {
                const _0x3bbef1 = _0x294ab3(_0x552065[_0x57b9ff(0x2ad)]()),
                  _0x2c2d53 = JSON[_0x57b9ff(0x309)](_0x3bbef1);
                if (!Array[_0x57b9ff(0x30f)](_0x2c2d53)) throw _0x57b9ff(0x2ce);
                const _0x2b7aff = _0x3d21d5(),
                  _0x3c2f21 = new Set(
                    _0x2b7aff["map"]((_0x202ad5) => _0x202ad5["id"])
                  ),
                  _0x1b959f = _0x2c2d53[_0x57b9ff(0x2ac)](
                    (_0x3d98a7) => !_0x3c2f21[_0x57b9ff(0x1d7)](_0x3d98a7["id"])
                  );
                if (!_0x1b959f[_0x57b9ff(0x2a3)]) {
                  UI[_0x57b9ff(0x2eb)](
                    "Nenhum\x20comando\x20novo\x20para\x20importar."
                  );
                  return;
                }
                _0x4e2f77(_0x2b7aff[_0x57b9ff(0x1de)](_0x1b959f)),
                  _0x8d46d3(),
                  _0x2bcb01?.(),
                  UI[_0x57b9ff(0x20f)](
                    "✅\x20" +
                      _0x1b959f[_0x57b9ff(0x2a3)] +
                      "\x20comando(s)\x20importados!"
                  );
              } catch (_0x4c70fd) {
                UI[_0x57b9ff(0x326)](_0x57b9ff(0x25c) + _0x4c70fd);
              }
            }),
            (document[_0x19df86(0x1b8)](_0x19df86(0x298))[_0x19df86(0x324)] =
              () => {
                const _0x124174 = _0x19df86,
                  _0x4520b6 = _0x3d21d5();
                localStorage["setItem"](
                  _0x51c0f8[_0x124174(0x37a)],
                  _0x4520b6[_0x124174(0x2ac)](
                    (_0x1f6bd1) => _0x1f6bd1["enviado"]
                  )[_0x124174(0x2a3)]
                ),
                  localStorage[_0x124174(0x29a)](
                    _0x51c0f8["atk"],
                    _0x4520b6[_0x124174(0x2ac)](
                      (_0x110061) =>
                        _0x110061[_0x124174(0x227)] &&
                        _0x110061[_0x124174(0x20d)] === _0x124174(0x25d)
                    )[_0x124174(0x2a3)]
                  ),
                  localStorage["setItem"](
                    _0x51c0f8[_0x124174(0x335)],
                    _0x4520b6[_0x124174(0x2ac)](
                      (_0x5cfae6) =>
                        _0x5cfae6["enviado"] &&
                        _0x5cfae6[_0x124174(0x20d)] === _0x124174(0x217)
                    )[_0x124174(0x2a3)]
                  ),
                  _0x8d46d3(),
                  UI[_0x124174(0x20f)](
                    "🔄\x20Contadores\x20visuais\x20zerados"
                  );
              });
          const _0x1904c6 = {
            confirmButton: null,
            duration: null,
            dateNow: null,
            offset: null,
            init: function () {
              const _0x15d1d0 = _0x19df86;
              $($(_0x15d1d0(0x2e5))["find"]("tbody")[0x0])[_0x15d1d0(0x222)](
                "<tr><td>Chegada:</td><td>\x20<input\x20type=\x22datetime-local\x22\x20id=\x22CStime\x22\x20step=\x22.001\x22>\x20</td></tr><tr>\x20<td>Offset:</td><td>\x20<input\x20type=\x22number\x22\x20id=\x22CSoffset\x22>\x20<button\x20type=\x22button\x22\x20id=\x22CSbutton\x22\x20class=\x22btn\x22>Confirmar</button>\x20</td></tr>"
              ),
                (this["confirmButton"] = $("#troop_confirm_submit")),
                (this["duration"] = $(_0x15d1d0(0x2e5))
                  [_0x15d1d0(0x33e)](_0x15d1d0(0x242))
                  ["next"]()
                  [_0x15d1d0(0x39b)]()
                  ["split"](":")
                  [_0x15d1d0(0x291)](Number)),
                (this[_0x15d1d0(0x2d9)] =
                  localStorage[_0x15d1d0(0x233)](_0x15d1d0(0x1bf)) || -0xfa),
                (this[_0x15d1d0(0x2c7)] = this[_0x15d1d0(0x20c)](new Date())),
                $("#CSoffset")[_0x15d1d0(0x355)](this[_0x15d1d0(0x2d9)]),
                $("#CStime")[_0x15d1d0(0x355)](this[_0x15d1d0(0x2c7)]),
                $("#CSbutton")[_0x15d1d0(0x21d)](function () {
                  const _0x1ce244 = _0x15d1d0;
                  var _0x3f3771 = Number(
                      $(_0x1ce244(0x1f4))[_0x1ce244(0x355)]()
                    ),
                    _0x15774a = _0x1904c6[_0x1ce244(0x32a)]();
                  localStorage["setItem"](_0x1ce244(0x1bf), _0x3f3771),
                    _0x1904c6[_0x1ce244(0x231)]["addClass"](_0x1ce244(0x23a)),
                    setTimeout(function () {
                      const _0x4a3c37 = _0x1ce244;
                      _0x1904c6[_0x4a3c37(0x231)]["click"]();
                    }, _0x15774a -
                      Timing["getCurrentServerTime"]() +
                      _0x3f3771),
                    (this[_0x1ce244(0x361)] = !![]);
                });
            },
            getAttackTime: function () {
              const _0x595c7f = _0x19df86;
              var _0x5ef9b6 = new Date(
                $(_0x595c7f(0x343))[_0x595c7f(0x355)]()["replace"]("T", "\x20")
              );
              return (
                _0x5ef9b6[_0x595c7f(0x210)](
                  _0x5ef9b6["getHours"]() - this["duration"][0x0]
                ),
                _0x5ef9b6[_0x595c7f(0x21f)](
                  _0x5ef9b6["getMinutes"]() - this["duration"][0x1]
                ),
                _0x5ef9b6[_0x595c7f(0x29f)](
                  _0x5ef9b6["getSeconds"]() - this["duration"][0x2]
                ),
                _0x5ef9b6
              );
            },
            convertToInput: function (_0x8a00e9) {
              const _0x38dd4e = _0x19df86;
              _0x8a00e9[_0x38dd4e(0x210)](
                _0x8a00e9["getHours"]() + this[_0x38dd4e(0x1e4)][0x0]
              ),
                _0x8a00e9[_0x38dd4e(0x21f)](
                  _0x8a00e9[_0x38dd4e(0x345)]() + this[_0x38dd4e(0x1e4)][0x1]
                ),
                _0x8a00e9[_0x38dd4e(0x29f)](
                  _0x8a00e9[_0x38dd4e(0x353)]() + this[_0x38dd4e(0x1e4)][0x2]
                );
              var _0x2b3038 = {
                y: _0x8a00e9[_0x38dd4e(0x214)](),
                m: _0x8a00e9[_0x38dd4e(0x224)]() + 0x1,
                d: _0x8a00e9["getDate"](),
                time: _0x8a00e9[_0x38dd4e(0x26a)]()[_0x38dd4e(0x306)](
                  "\x20"
                )[0x0],
                ms: _0x8a00e9[_0x38dd4e(0x358)](),
              };
              return (
                _0x2b3038["m"] < 0xa && (_0x2b3038["m"] = "0" + _0x2b3038["m"]),
                _0x2b3038["d"] < 0xa && (_0x2b3038["d"] = "0" + _0x2b3038["d"]),
                _0x2b3038["ms"] < 0x64 &&
                  ((_0x2b3038["ms"] = "0" + _0x2b3038["ms"]),
                  _0x2b3038["ms"] < 0xa &&
                    (_0x2b3038["ms"] = "0" + _0x2b3038["ms"])),
                _0x2b3038["y"] +
                  "-" +
                  _0x2b3038["m"] +
                  "-" +
                  _0x2b3038["d"] +
                  "T" +
                  _0x2b3038["time"] +
                  "." +
                  _0x2b3038["ms"]
              );
            },
            addGlobalStyle: function (_0x9577ef) {
              const _0x27f0dc = _0x19df86;
              var _0x509718, _0x1441d7;
              _0x509718 = document["getElementsByTagName"](
                _0x27f0dc(0x290)
              )[0x0];
              if (!_0x509718) return;
              (_0x1441d7 = document[_0x27f0dc(0x206)](_0x27f0dc(0x1b1))),
                (_0x1441d7["type"] = _0x27f0dc(0x2d3)),
                (_0x1441d7[_0x27f0dc(0x300)] = _0x9577ef),
                _0x509718[_0x27f0dc(0x37c)](_0x1441d7);
            },
          };
          _0x1904c6["addGlobalStyle"](_0x19df86(0x25a)),
            (function _0x2fe797() {
              const _0x32f306 = _0x19df86,
                _0x5c2d2d = new URLSearchParams(location[_0x32f306(0x2ec)]);
              if (
                _0x5c2d2d[_0x32f306(0x261)]("screen") !== "place" ||
                _0x5c2d2d[_0x32f306(0x261)](_0x32f306(0x2cc)) !== "confirm"
              )
                return;
              var _0x123735 = setInterval(function () {
                const _0x161bdc = _0x32f306;
                document[_0x161bdc(0x1b8)](_0x161bdc(0x37d)) &&
                  jQuery &&
                  (_0x1904c6[_0x161bdc(0x265)](), clearInterval(_0x123735));
              }, 0x1);
            })();
          async function _0x1caceb() {
            const _0x1aa5d3 = _0x19df86,
              _0x4ac14a = 0xc,
              _0x57720f = 0x23;
            let _0x3b465e = Infinity;
            for (let _0x41710c = 0x0; _0x41710c < _0x4ac14a; _0x41710c++) {
              const _0x50ae90 = performance[_0x1aa5d3(0x376)]();
              await fetch(
                "/game.php?ts=" + (Date[_0x1aa5d3(0x376)]() + _0x41710c),
                { method: "HEAD", cache: _0x1aa5d3(0x2c1) }
              ),
                (_0x3b465e = Math[_0x1aa5d3(0x280)](
                  _0x3b465e,
                  performance[_0x1aa5d3(0x376)]() - _0x50ae90
                )),
                await new Promise((_0x3694ef) =>
                  setTimeout(_0x3694ef, _0x57720f)
                );
            }
            const _0x4bb012 = _0x3b465e / 0x4,
              _0x3e9cab = performance[_0x1aa5d3(0x376)]();
            await new Promise((_0x158e5f) => setTimeout(_0x158e5f, 0x0));
            const _0x35961c = performance[_0x1aa5d3(0x376)]() - _0x3e9cab;
            return Math[_0x1aa5d3(0x37f)](_0x4bb012 + _0x35961c);
          }
          (async function _0x367b32() {
            const _0x2cb1ea = _0x19df86,
              _0x94d465 = +localStorage[_0x2cb1ea(0x233)](_0x2cb1ea(0x1bf));
            if (_0x94d465) return;
            const _0x588d0a = await _0x1caceb();
            localStorage["setItem"](_0x2cb1ea(0x1bf), _0x588d0a);
          })();
          async function _0xea9b03(_0x5db745 = 0x1d4c0) {
            const _0x1d35b5 = _0x19df86,
              _0x1b6574 = Number(
                localStorage[_0x1d35b5(0x233)](_0x1d35b5(0x1bf))
              ),
              _0x4f0bf1 = Number(
                localStorage[_0x1d35b5(0x233)](_0x1d35b5(0x338))
              ),
              _0xd631ed =
                !_0x4f0bf1 || Date[_0x1d35b5(0x376)]() - _0x4f0bf1 > _0x5db745,
              _0x19ecfe = !_0x1b6574 || _0xd631ed;
            if (_0x19ecfe) {
              const _0x30cc76 = await _0x1caceb();
              return (
                localStorage[_0x1d35b5(0x29a)](_0x1d35b5(0x1bf), _0x30cc76),
                localStorage[_0x1d35b5(0x29a)](
                  _0x1d35b5(0x338),
                  Date[_0x1d35b5(0x376)]()
                ),
                _0x30cc76
              );
            }
            return _0x1b6574;
          }
          _0xea9b03();
          async function _0x372122() {
            const _0x1fc6cd = _0x19df86,
              _0x1e1ccc = new URLSearchParams(location[_0x1fc6cd(0x2ec)]);
            if (
              _0x1e1ccc[_0x1fc6cd(0x261)]("screen") !== _0x1fc6cd(0x200) ||
              _0x1e1ccc[_0x1fc6cd(0x261)](_0x1fc6cd(0x2cc)) !== _0x1fc6cd(0x321)
            )
              return;
            const _0x131bb6 = sessionStorage[_0x1fc6cd(0x233)](
              _0x1fc6cd(0x1d8)
            );
            if (!_0x131bb6) return;
            const _0x27a62b = _0x3d21d5()[_0x1fc6cd(0x33e)](
              (_0x5997ea) => _0x5997ea["id"] == _0x131bb6
            );
            if (!_0x27a62b) return;
            if (_0x1e1ccc["get"](_0x1fc6cd(0x2f4)) === "1")
              return (
                $("#troop_confirm_submit")[_0x1fc6cd(0x21d)](),
                _0x39ed9c?.(_0x131bb6),
                setTimeout(() => window[_0x1fc6cd(0x23f)](), 0xc8)
              );
            await new Promise((_0x42ba0d) => {
              const _0x42dc2c = _0x1fc6cd,
                _0x385815 = () => document[_0x42dc2c(0x1b8)](_0x42dc2c(0x346));
              if (_0x385815()) return _0x42ba0d();
              new MutationObserver((_0x50c4ff, _0x57ca22) => {
                const _0x175341 = _0x42dc2c;
                _0x385815() && (_0x57ca22[_0x175341(0x351)](), _0x42ba0d());
              })[_0x42dc2c(0x1d1)](document[_0x42dc2c(0x39d)], {
                childList: !![],
                subtree: !![],
              });
            });
            const _0x362568 = (_0x1ecc9e) =>
                new Date(_0x1ecc9e[_0x1fc6cd(0x34d)]("\x20", "T")),
              _0xcc7e46 = (_0x41d95a) => {
                const _0x320383 = _0x1fc6cd,
                  _0x3e8ea5 = _0x41d95a[_0x320383(0x1da)]() * 0xea60;
                return new Date(_0x41d95a[_0x320383(0x389)]() - _0x3e8ea5)
                  [_0x320383(0x2b9)]()
                  [_0x320383(0x2c6)](0x0, 0x17);
              },
              _0x5f5635 = _0x1904c6[_0x1fc6cd(0x1e4)],
              _0x555c44 =
                (_0x5f5635[0x0] * 0xe10 +
                  _0x5f5635[0x1] * 0x3c +
                  _0x5f5635[0x2]) *
                0x3e8,
              _0x1816aa =
                _0x27a62b[_0x1fc6cd(0x20e)] === _0x1fc6cd(0x385)
                  ? _0x362568(
                      _0x27a62b[_0x1fc6cd(0x3a3)] || _0x27a62b[_0x1fc6cd(0x39a)]
                    )
                  : new Date(
                      _0x362568(_0x27a62b[_0x1fc6cd(0x370)])[
                        _0x1fc6cd(0x389)
                      ]() + _0x555c44
                    ),
              _0xf1cb = await _0xea9b03();
            $(_0x1fc6cd(0x343))["val"](_0xcc7e46(_0x1816aa)),
              $(_0x1fc6cd(0x1f4))[_0x1fc6cd(0x355)](_0xf1cb),
              $(_0x1fc6cd(0x276))["click"]();
          }
          _0x372122();
          async function _0x11e126() {
            const _0x5f9d60 = _0x19df86;
            if (_0x387477) return;
            const _0x1e272a = _0x3d21d5()[_0x5f9d60(0x2ac)](
              (_0x272ea7) =>
                !_0x272ea7[_0x5f9d60(0x227)] &&
                _0x272ea7[_0x5f9d60(0x267)] &&
                !_0x272ea7["sendNow"] &&
                new Date(_0x272ea7["horarioEnvio"])[_0x5f9d60(0x389)]() <=
                  Date["now"]()
            );
            if (_0x1e272a[_0x5f9d60(0x2a3)] === 0x0) return;
            console[_0x5f9d60(0x1e8)](
              _0x5f9d60(0x2e6) + _0x1e272a[_0x5f9d60(0x2a3)] + _0x5f9d60(0x277)
            );
            for (const _0x1dd947 of _0x1e272a) {
              try {
                await _0x3b36cf(_0x1dd947), _0x39ed9c(_0x1dd947["id"]);
                if (typeof _0x8d46d3 === _0x5f9d60(0x274)) _0x8d46d3();
                if (typeof _0x2bcb01 === _0x5f9d60(0x274)) _0x2bcb01();
                await sleep(0x1388);
              } catch (_0x2b8a7d) {
                console[_0x5f9d60(0x1ba)](
                  "❌\x20Erro\x20ao\x20retomar\x20comando:",
                  _0x1dd947,
                  _0x2b8a7d
                ),
                  (_0x1dd947[_0x5f9d60(0x267)] = ![]),
                  (_0x1dd947[_0x5f9d60(0x30a)] =
                    (_0x1dd947[_0x5f9d60(0x30a)] || 0x0) + 0x1),
                  _0x4e2f77(_0x3d21d5());
              }
            }
          }
        })();
    }
  })();
