const toastLive = document.getElementById('toast-error');
const formulario = document.getElementById('register-form');
var descricao = document.getElementById("description").value;
var valor = document.getElementById("amount").value;
var data = document.getElementById("date").value; 

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
    if (descricao && valor && data) {
        formulario.reset();
        document.getElementById('link-meusLancamentos').click()
    } else {
      showToast('Verifique novamente os campos preenchidos')
    }
}

/*Chamadas*/
document.getElementById('btn-submit').addEventListener('click', validaFormulario);