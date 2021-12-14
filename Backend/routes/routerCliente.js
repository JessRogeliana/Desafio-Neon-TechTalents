const express = require('express');
const controllerCliente = require('../app/controllers/controllerCliente');

const clienteRouter = express.Router();

clienteRouter.get("/cliente/:id", controllerCliente.buscaCliente)


module.exports = clienteRouter