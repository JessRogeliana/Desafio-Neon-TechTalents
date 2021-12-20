const saldoPrincipal = document.getElementById('saldo-principal')
let listaExtrato = [] 

async function fetchSaldo () {
    const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
   const data =  await fetch(`http://localhost:5000/cliente/${userInfo.user.id}/lancamento`)
  .then(response => response.json())

  listaExtrato = data.data.Saldos
  let saldoTotal = 0
  listaExtrato.forEach(extrato => {
      saldoTotal += Number(extrato.valor)
  }) 
  saldoPrincipal.innerText= `R$ ${saldoTotal}`

}

fetchSaldo()