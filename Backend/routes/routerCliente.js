const express = require('express');
const controllerCliente = require('../app/controllers/controllerCliente');

const clienteRouter = express.Router();

clienteRouter.get("/cliente/:id", controllerCliente.buscaCliente)
clienteRouter.post("/cliente/", controllerCliente.criarCliente)


module.exports = clienteRouter

