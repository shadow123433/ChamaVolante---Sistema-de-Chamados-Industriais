import { Request, Response } from "express";
import { chamadoService } from "./chamado.service.js";

export class ChamadoController {
  async criar(req: Request, res: Response) {
    try {
      const { maquina } = req.body;

      const chamado = await chamadoService.criar(maquina);

      return res.status(201).json(chamado);
    } catch (error) {
      return res.status(400).json({
        message: error instanceof Error
          ? error.message
          : "Erro ao criar chamado"
      });
    }
  }

  async listarAbertos(_req: Request, res: Response) {
    try {
      const chamados = await chamadoService.listarAbertos();

      return res.status(200).json(chamados);
    } catch {
      return res.status(500).json({
        message: "Erro ao buscar chamados"
      });
    }
  }

  async historico(_req: Request, res: Response) {
    try {
      const chamados = await chamadoService.historico();

      return res.status(200).json(chamados);
    } catch {
      return res.status(500).json({
        message: "Erro ao buscar histórico"
      });
    }
  }

  async finalizar(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);

      const chamado = await chamadoService.finalizar(id);

      if (!chamado) {
        return res.status(404).json({
          message: "Chamado não encontrado"
        });
      }

      return res.status(200).json(chamado);
    } catch {
      return res.status(500).json({
        message: "Erro ao finalizar chamado"
      });
    }
  }
}

export const chamadoController = new ChamadoController();