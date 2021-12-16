/*MENSAGEM E VALIDAÇÃO CAMPOS*/ 

const toastLiveUsuario = document.getElementById('toast-error-usuario');
const toastLiveSenha = document.getElementById('toast-error-senha');
const formulario = document.getElementById('register-form')


formulario.addEventListener('btn-submit', validaFormulario)

function showToastUsuario (mensagem) {
  let toast = new bootstrap.Toast(toastLiveUsuario);
  const toastBody = document.getElementById('toast-body-usuario')
  toastBody.innerText = mensagem
  toast.show();
}

function showToastSenha (mensagem) {
  let toast = new bootstrap.Toast(toastLiveSenha);
  const toastBody = document.getElementById('toast-body-senha')
  toastBody.innerText = mensagem
  toast.show();
}

function validaFormulario(event) {

  event.preventDefault()   
    if ( validaUsuario() && validaSenha()) {
        formulario.reset();
        document.getElementById('link-saldo').click();
    } 
}


function validaUsuario() {
  const formData = new FormData(formulario)
    
    if (formData.get('name').length > 3 && formData.get('name').length < 16) {
      return true
    } else {
      
      showToastUsuario('O nome de usuario precisa de 3 a 16 caracteres')
      return false
    }
} 

function validaSenha() {
  const formData = new FormData(formulario)
  const re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}$/;
  const reSpaces = /^\S*$/;
  if (re.test(formData.get('password')) && reSpaces.test(formData.get('password'))) {
    return true;
  } else {
    showToastSenha('A senha tem que incluir maiusculas, minusculas, números e um simbolo')
    return false;
  }
}

/*Chamadas*/
document.getElementById('btn-submit').addEventListener('click', validaFormulario);
document.getElementById('name').addEventListener('focusout', validaUsuario);
document.getElementById('password').addEventListener('focusout', validaSenha);