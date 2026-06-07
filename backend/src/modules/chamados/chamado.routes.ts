import { Router } from "express";
import { chamadoController } from "./chamado.controller.js";

const router = Router();

router.post("/", chamadoController.criar.bind(chamadoController));

router.get(
  "/",
  chamadoController.listarAbertos.bind(chamadoController)
);

router.get(
  "/historico",
  chamadoController.historico.bind(chamadoController)
);

router.patch(
  "/:id/finalizar",
  chamadoController.finalizar.bind(chamadoController)
);

export default router;