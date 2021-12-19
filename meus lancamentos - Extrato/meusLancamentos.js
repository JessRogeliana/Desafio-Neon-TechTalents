fetch(`http://localhost:5000/cliente/1/lancamento`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json'   
      },
    }).then(response => response.json())
    .then(data => mostrarData(data))
    .catch((error) => console.log("Erro:" + error))
    const mostrarData = (data) => {
  //let dataComplete = data.data.Saldos;
    console.log(data.data.Saldos) 
}
  const saldo = data.data.Saldos[0]
  const saldoTotal = saldo.reduce((sum, value) => (typeof value.valor == "number" ? sum + value.valor : sum), 0);
  console.log(saldoTotal);
// document.getElementById("saldo").innerHTML = "R$  " + saldoTotal; 

