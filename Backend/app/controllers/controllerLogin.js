const { cliente } = require ('../database/db');
const bcrypt = require ('bcrypt');
const configLogin = require ('../../config/configLogin');
require('dotenv').config();

module.exports = {
  async login(req, res) {
  
      let {email, password} = req.body;
  
        cliente.findOne({
          where: {
            email: email
          }
        }).then (user =>{
          
          if(!user) {
            res.status(404).json({msg: "Users invalid"});
          } else {
  
            if (bcrypt.compareSync(password, user.password)) {
  

                res.json({
                    user:user,
                  })

  
            } else {
              res.status(401).json({msg: "Password Errors"})
            }
  
          }
  
        }).catch(err => {
          res.status(500).json(err);
        })
    },
    
    
    async register (req, res, next) {
              try {
                const hash = await bcrypt.hash(req.body.password, 10);
                const Usuario = await cliente.create({
                  nome: req.body.nome,
                  email:req.body.email,
                  password:  hash,
                }).then(user =>{

                    res.json({
                        msg: ("Usuario Criado"),
                        status:200
                    });
  
                });
                
              } catch (err) {
                next(new Error(err));
              }
          }
  
      };