const express = require('express');
const app = express();
const port = 8080; // Escolha a porta que desejar
const cors = require("cors");

app.use(cors());
app.use(express.json());

const crud = require("./crud.js");

app.post("/api/login", async (req, res) => {
    res.json(await crud.login(req.params.table, req.body));
});

app.get("/api/:table", async (req, res) => {
    res.json(await crud.get(req.params.table));
});

app.post("/api/:table", async (req, res) => {
    res.json(await crud.save(req.params.table, req.body.id, req.body));
});

app.get("/api/:table/:id", async (req, res) => {
    res.json(await crud.getID(req.params.table, req.params.id));
});

app.get("/api/:table/code/:code", async (req, res) => {
    res.json(await crud.getCode(req.params.table, req.params.code));
});

app.delete("/api/:table/:id", async (req, res) => {
    res.json(await crud.remove(req.params.table, req.params.id));
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});