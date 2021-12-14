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
        };