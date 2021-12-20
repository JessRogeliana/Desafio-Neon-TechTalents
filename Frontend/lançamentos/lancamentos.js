const toastLive = document.getElementById('toast-error');
const formulario = document.getElementById('register-form');
const descricao = document.getElementById("description");
const valor = document.getElementById("amount");
const data = document.getElementById("date"); 

formulario.addEventListener('submit', validaFormulario);

async function criarLancamento(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data) 
  });
  return response.json();
}

function validaDescricao() {
	 "use strict";
  if ((descricao.toString().length > 3) ){
    return true;
  } else {
    showToast('Utilize mais caracteres!');
    return false;
  } 
}

function validaValor() {
	"use strict";
  if ((valor.toString().length > 0)) {
    return true;
  } else {
    showToast('O valor tem que ser maior que zero!');
    return false;
  }
} 

function validaData() {
	"use strict";
if (isNaN(data) === true){
  return true;
} else {
  showToast('Você só pode inserir números aqui!');
  return false;
}
}

function eEntrada (statusDeEntrada) {
  return statusDeEntrada.toLowerCase() === 'entrada'
}

async function validaFormulario(event) {
"use strict";
event.preventDefault();
	
  if (validaDescricao() && validaData() && validaValor()) {
    
    const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  
    const formData = new FormData(formulario)
      const data = criarLancamento('http://localhost:5000/lancamento/',{ "valor":eEntrada(formData.get('status')) ? Number(formData.get('amount')) :Number(formData.get('amount'))*-1 ,
      "data": formData.get('date').split('-').reverse().join('/'),
      "descripcao": formData.get('description'),
      "tipo": formData.get('status'),
      "id_cliente": userInfo.user.id } )
      if (data) window.location.assign('http://127.0.0.1:5500/Desafio-Neon-TechTalents/Frontend/meus%20lancamentos%20-%20Extrato/meusLancamentos.html')
  } 
}
/* Toast */
function showToast (mensagem) {
	"use strict";
  let toast = new bootstrap.Toast(toastLive);
  const toastBody = document.getElementById('toast-body');
  toastBody.innerText = mensagem;
  toast.show();
}

/*Chamadas*/
document.getElementById("description").addEventListener('focusout', validaDescricao);
document.getElementById("amount").addEventListener('focusout', validaValor);
document.getElementById("date").addEventListener('focusout', validaData);
