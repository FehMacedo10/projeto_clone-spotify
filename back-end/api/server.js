// API -> Aplication Programming Interface
// GET -> POST -> Enviar dados, GET -> Receber dados, PUT -> Atualizar dados, DELETE -> Deletar dados
// CRUD -> Create, Read, Update, Delete
// Endpoints -> São os caminhos que a API disponibiliza para acessar os recursos
// Middleware -> Funções que são executadas antes das rotas

import express from "express";
import cors from "cors";
import { db } from "./connect.js";


const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (request, response) => {
  response.send("Olá, mundo! Agora não preciso ficar atualizando!");
}) 

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
})  

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
})  

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
})