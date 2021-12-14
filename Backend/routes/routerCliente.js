const express = require('express');
const clienteController = require('../app/controllers/controllerCliente');
const clienteRouter = express.Router();

clienteRouter.get('/api/cliente/:id',clienteController.buscaId);


module.exports = clienteRouter