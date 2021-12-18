const { cliente } = require('../database/db');

module.exports = {

    async login(req, res) {

        let { email, senha } = req.body;

        cliente.findOne({
            where: {
                email: email,
                senha: senha
                
            }
        }).then(user => {
               try{
                   
               }
          /*  if (!user) {
                res.status(404).json({ msg: "E-mail não cadastrado!" });
            } else {
                res.status(401).json({ msg: "Senha invalida!" })
            }*/

            res.json({
                user:user,
              }) 

        }).catch(err => {
            res.status(500).json(err);
        })
    }
} 