import { Router } from "express";
import chamadoRoutes from "../modules/chamados/chamado.routes.js";

const router = Router();

router.use("/chamados", chamadoRoutes);

export default router;