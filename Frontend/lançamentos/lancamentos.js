const toastLive = document.getElementById('toast-error');
const formulario = document.getElementById('register-form');
const descricao = document.getElementById("description");
const valor = document.getElementById("amount");
const data = document.getElementById("date"); 

formulario.addEventListener('btn-submit', validaFormulario);


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

function validaFormulario(event) {
"use strict";
event.preventDefault();
	
  if (validaDescricao() && validaData() && validaValor()) {
      formulario.reset();
      document.getElementById('link-meusLancamentos').click();
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
document.getElementById("btn-submit").addEventListener('click', validaFormulario);
document.getElementById("description").addEventListener('focusout', validaDescricao);
document.getElementById("amount").addEventListener('focusout', validaValor);
document.getElementById("date").addEventListener('focusout', validaData);
