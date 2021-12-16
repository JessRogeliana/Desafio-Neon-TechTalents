const express = require('express'); //importacao do pacote
const app = express(); //instanciando express
const {connection} = require('./app/database/db');
const PORT = process.env.PORT || 8000;


// Middleware   
// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


app.use(require('./routes/routerCliente'))
app.use(require('./routes/routerLancamento'))



app.listen(PORT, function () {
  console.log(`successfully initialized http://localhost:${PORT}`);

  connection.sync({force: false}).then (() => {
      console.log("Successful Connection");
      });
});
