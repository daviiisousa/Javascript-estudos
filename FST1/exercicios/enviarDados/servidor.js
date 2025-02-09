const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (_req, res) => {
  res.send("Servidor rodando com CORS habilitado!");
});

app.post("/dados", (req, res) => {
  const dadosRecebidos = req.body; // Captura os dados do corpo da requisição

  if (!dadosRecebidos || Object.keys(dadosRecebidos).length === 0) {
    return res.status(400).json({ erro: "Nenhum dado enviado" });
  }

  console.log("Dados recebidos:", dadosRecebidos);

  res
    .status(201)
    .json({ mensagem: "Dados recebidos com sucesso", dados: dadosRecebidos });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
