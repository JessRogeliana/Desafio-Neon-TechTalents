/*MENSAGEM E VALIDAÇÃO CAMPOS*/ 

const toastLive = document.getElementById('toast-error');
const formulario = document.getElementById('register-form')


formulario.addEventListener('submit', validaFormulario)

function showToast (mensagem) {
  let toast = new bootstrap.Toast(toastLive);
  const toastBody = document.getElementById('toast-body')
  toastBody.innerText = mensagem
  toast.show();
}

function validaFormulario(event) {

  event.preventDefault()   
    if ( validaUsuario() && validaSenha()) {
        formulario.reset();
    } 
}


function validaUsuario() {
  const formData = new FormData(formulario)
    
    if (formData.get('name').length > 3 && formData.get('name').length < 16) {
      return true
    } else {
      
      showToast('O nome de usuario precisa de 3 a 16 caracteres')
      return false
    }
} 

function validaSenha() {
  const formData = new FormData(formulario)
  const re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
  const reSpaces = /^\S*$/;
  if (re.test(formData.get('password')) && reSpaces.test(formData.get('password'))) {
    return true;
  } else {
    showToast('A senha tem que incluir maiusculas, minusculas, números e um simbolo')
    return false;
  }
}