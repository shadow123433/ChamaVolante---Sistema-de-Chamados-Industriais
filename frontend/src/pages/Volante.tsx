import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Chamado {
  id: number;
  maquina: string;
  status: string;
}

export function Volante() {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  async function carregarChamados() {
    const response = await api.get("/chamados");

    setChamados(response.data);
  }

  async function finalizar(id: number) {
    await api.patch(`/chamados/${id}/finalizar`);

    carregarChamados();
  }

  useEffect(() => {
    carregarChamados();

    const interval = setInterval(carregarChamados, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1>CHAMADOS ABERTOS</h1>

      {chamados.map((chamado) => (
        <div key={chamado.id} className="card">
          <h3>{chamado.maquina}</h3>

          <button
            onClick={() => finalizar(chamado.id)}
          >
            FINALIZAR
          </button>
        </div>
      ))}
    </div>
  );
}