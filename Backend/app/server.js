const express = require('express') //importacao do pacote
const app = express() //instanciando express
app.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
  res.send('Hello World')
})
app.listen(9120) //execucao do servidor