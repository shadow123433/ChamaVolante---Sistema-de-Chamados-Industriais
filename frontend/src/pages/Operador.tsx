import { useEffect, useState } from "react";
import { api } from "../services/api";

export function Operador() {
  const [mensagem, setMensagem] = useState("");

  async function chamarVolante() {
    try {
      await api.post("/chamados", {
        maquina: "ROTOR COMPLETO"
      });

      setMensagem("🟡 Volante em ação");
    } catch {
      setMensagem("❌ Erro ao enviar chamado");
    }
  }

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        if (mensagem !== "🟡 Volante em ação") {
          return;
        }

        const response = await api.get("/chamados");

        const chamadoAberto = response.data.find(
          (chamado: any) =>
            chamado.maquina === "ROTOR COMPLETO"
        );

        if (!chamadoAberto) {
          setMensagem("✅ Operação finalizada");
        }
      } catch (error) {
        console.error(error);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [mensagem]);

  return (
    <div className="container">
      <h1>CHAMAVOLANTE</h1>

      <h2>ROTOR COMPLETO</h2>

      <button onClick={chamarVolante}>
        CHAMAR VOLANTE
      </button>

      {mensagem && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold"
          }}
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}