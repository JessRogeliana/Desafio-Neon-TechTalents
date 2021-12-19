const express = require('express');
const controllerLogin = require('../app/controllers/controllerLogin');
const loginRouter = express.Router()


loginRouter.post("/cadastro", controllerLogin.register)
loginRouter.post("/login", controllerLogin.login)



module.exports = loginRouter