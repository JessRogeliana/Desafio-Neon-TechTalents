const express = require("express");

const lancamentoControllers = require("../app/controllers/controllerLancamento")



const routesLancamento = express.Router();

routesLancamento.get("/cliente/:id/lancamento",  lancamentoControllers.lancamentoCliente);

routesLancamento.post("/lancamento/",  lancamentoControllers.criandoLancamento);

routesLancamento.put("/lancamento/:id",  lancamentoControllers.atualizacaoLancamento);

routesLancamento.delete("/lancamento/:id",  lancamentoControllers.deletandoLancamento);

module.exports = routesLancamento