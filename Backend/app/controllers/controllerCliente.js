const {cliente} = require('../database/db');



module.exports = {
 async buscaCliente(req, res) {
  
  try {
      const Cliente = await cliente.findByPk(req.params.id);
      console.log(Cliente)
         if (Cliente) {
         res.json({
         status: 200,
            data: Cliente
                });
        } else {
          res.json("400")
               }
            } catch (error) {
          res.json("400")
            }
  
          }, 

        async criarCliente(req, res) {
          try {
            if (
              req.body.nome &&
              req.body.email &&
              req.body.senha 
            ) {
              const criandoCliente = await cliente.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
              });
              res.status(201).json({
                message: "Cliente creado com sucesso!",
                status: 201,
                statusText: "Created",
                message: "Cliente creado com sucesso!",
                data: cliente,
              });
            } else {
              res.status(400).send({
                status: 400,
                statusText: "Bad Request",
                message: "Não cadastrado!",
              }),
                console.log("Não cadastrado!");
              return;
            }
          } catch (error) {
            res.status(400).send({
              status: 400,
              statusText: "Bad Request",
              message: "Falha no cadastro. Verifique os Dados!",
            }),
              console.log("Falha no cadastro. Verifique os Dados!");
          }
        }






      };