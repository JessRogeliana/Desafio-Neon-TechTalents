const {cliente} = require('../database/db');
module.exports = {
 async buscaId(req, res) {
  
  try {
      const cliente = await cliente.findByPk(req.params.id);
         if (cliente) {
         res.json({
         status: 200,
            data: {
                  "client_id": cliente.id,
                  "nome": cliente.nome,
                  "email": cliente.email,
                  }
                });
        } else {
          res.status(400).send(400)
               }
            } catch (error) {
          res.status(400).send(400)
            }
  
          }, 
        };