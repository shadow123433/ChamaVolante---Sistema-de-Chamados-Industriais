import { pool } from "../../database/connection.js";

export class ChamadoService {
  async criar(maquina: string) {
    if (!maquina) {
      throw new Error("Máquina é obrigatória");
    }

    if (maquina !== "ROTOR COMPLETO") {
      throw new Error("Máquina inválida");
    }

    const resultado = await pool.query(
      `
      INSERT INTO chamados (maquina)
      VALUES ($1)
      RETURNING *
      `,
      [maquina]
    );

    return resultado.rows[0];
  }

  async listarAbertos() {
    const resultado = await pool.query(
      `
      SELECT *
      FROM chamados
      WHERE status = 'ABERTO'
      ORDER BY created_at DESC
      `
    );

    return resultado.rows;
  }

  async historico() {
    const resultado = await pool.query(
      `
      SELECT *
      FROM chamados
      ORDER BY created_at DESC
      `
    );

    return resultado.rows;
  }

  async finalizar(id: number) {
    const resultado = await pool.query(
      `
      UPDATE chamados
      SET
        status = 'FECHADO',
        finalizado_em = CURRENT_TIMESTAMP
      WHERE id = $1
      RETURNING *
      `,
      [id]
    );

    return resultado.rows[0];
  }
}

export const chamadoService = new ChamadoService();