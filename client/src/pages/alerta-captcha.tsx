"use client";
import React, { useEffect, useState } from "react";

export default function AlertaCaptcha() {
  const [url, setUrl] = useState<string | null>(null);
  const [isSafe, setIsSafe] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const voltarUrl = params.get("voltar");

    if (
      voltarUrl &&
      voltarUrl.startsWith("https://") &&
      voltarUrl.includes("tribalwars")
    ) {
      setUrl(voltarUrl);
    } else {
      setIsSafe(false);
    }
  }, []);

  const handleClick = () => {
    if (url) {
      window.location.href = url;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#18181b",
        color: "#fff",
        padding: 24,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 16 }}>
        🚨 Verificação de Bot Detectada
      </h1>
      <p style={{ fontSize: 18, marginBottom: 32, maxWidth: 480 }}>
        Você foi redirecionado automaticamente por segurança. Quando tiver
        resolvido o CAPTCHA ou quiser voltar, clique no botão abaixo para
        retornar ao jogo.
      </p>

      {isSafe && url ? (
        <button
          onClick={handleClick}
          style={{
            padding: "16px 36px",
            fontSize: 20,
            borderRadius: 10,
            background: "#22c55e",
            color: "#fff",
            border: "none",
            boxShadow: "0 2px 16px #0006",
            cursor: "pointer",
          }}
        >
          Voltar para o jogo
        </button>
      ) : (
        <p style={{ color: "#f87171", fontWeight: "bold" }}>
          ⚠️ URL de retorno inválida ou ausente. Acesse o jogo manualmente.
        </p>
      )}
    </div>
  );
}
