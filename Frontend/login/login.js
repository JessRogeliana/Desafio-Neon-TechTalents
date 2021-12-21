 /*MENSAGEM E VALIDAÇÃO CAMPOS*/ 

const toastLiveUsuario = document.getElementById('toast-error-usuario');
const toastLiveSenha = document.getElementById('toast-error-senha');
const formulario = document.getElementById('register-form')


formulario.addEventListener('submit', validaFormulario)

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

async function login(url, data) { 
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


async function validaFormulario(event) {

  event.preventDefault()   
    if (validaUsuario() && validaSenha()) {
      const formData = new FormData(formulario)
      const data = await login('http://localhost:5000/login', {email:formData.get('name'), password:formData.get('password')})
      if(data.user){
        console.log(data)
        const jsonData = JSON.stringify(data)
        window.localStorage.setItem('userInfo', jsonData)
        window.location.assign('http://127.0.0.1:5500/Desafio-Neon-TechTalents/Frontend/saldo/saldo_index.html')
      } else showToastSenha(data.msg)
    } 
}


function validaUsuario() {
  const usuario = document.getElementById('name');
  const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  const ree = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}\.([a-zA-Z]){2,5}$/;
  const reSpaces = /^\S*$/;
    
  if (reSpaces.test(usuario.value) && (re.test(usuario.value) || ree.test(usuario.value))) {
    return true;
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
document.getElementById('name').addEventListener('focusout', validaUsuario);
document.getElementById('password').addEventListener('focusout', validaSenha);