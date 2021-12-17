const toastLive = document.getElementById('toast-error');
const formulario = document.getElementById('register-form');
var descricao = document.getElementById("description");
var valor = document.getElementById("amount");
var data = document.getElementById("date"); 

formulario.addEventListener('btn-submit', validaFormulario);


/* Toast*/ 
function showToast (mensagem) {
  let toast = new bootstrap.Toast(toastLive);
  const toastBody = document.getElementById('toast-body')
  toastBody.innerText = mensagem
  toast.show();
}

/* Validar Formulario*/ 
function validaFormulario(event) {

  event.preventDefault()   
    if (  (descricao.value.length >= 1) && (valor.value.length >= 1) && (data.value.length >= 1) ) {
        formulario.reset();
        document.getElementById('link-meusLancamentos').click();   
    } else {
      showToast('Verifique novamente os campos preenchidos')
    }
}

/*Chamadas*/
document.getElementById('btn-submit').addEventListener('click', validaFormulario);