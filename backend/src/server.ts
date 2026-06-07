import { app } from "./app.js";
import { pool } from "./database/connection.js";
import { env } from "./config/env.js";

async function startServer() {
  try {
    await pool.query("SELECT NOW()");

    console.log("✅ PostgreSQL conectado");

    app.listen(env.PORT, () => {
      console.log(
        `🚀 Servidor rodando em http://localhost:${env.PORT}`
      );
    });
  } catch (error) {
    console.error("❌ Erro ao conectar ao PostgreSQL");
    console.error(error);

    process.exit(1);
  }
}

startServer();