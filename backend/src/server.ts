import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    projeto: "ChamaVolante",
    status: "Online"
  });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});