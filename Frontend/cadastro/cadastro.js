const toastLive = document.getElementById('toast-error');
const formulario = document.getElementById('register-form')

formulario.addEventListener('submit', validaFormulario)

function showToast (mensagem) {
  let toast = new bootstrap.Toast(toastLive);
  const toastBody = document.getElementById('toast-body')
  toastBody.innerText = mensagem
  toast.show();
}

async function criarUsuario(url, data) {
  
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
    if ( validaUsuario() && validaEmail() && validaSenha() && validaConfSenha()) {
        const nome = document.getElementById("name")
        const password = document.getElementById("password")
        const email = document.getElementById("email")
        const data = await criarUsuario('http://localhost:5000/cadastro', {
          nome: nome.value, 
          password: password.value,
          email: email.value
        })

        if(data) window.location.assign('http://127.0.0.1:5500/Desafio-Neon-TechTalents/Frontend/index.html')
       
    } 
}

function validaUsuario() {
    const nome = document.getElementById('name').value;
    if (nome.toString().length > 3 && nome.toString().length < 16) {
      return true
    } else {
      let toastLive = document.getElementById('usuario-erro');
      let toast = new bootstrap.Toast(toastLive);
      toast.show();
      return false
    }
}

function validaEmail() {
  const email = document.querySelector('#email');
  const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;
  const ree = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}\.([a-zA-Z]){2,5}$/;
  const reSpaces = /^\S*$/;
  if (reSpaces.test(email.value) && (re.test(email.value) || ree.test(email.value))) {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
      return true;
      
  } else {
    let toastLive = document.getElementById('email-erro');
    let toast = new bootstrap.Toast(toastLive);
    toast.show();
    return false;
  }
}

function validaSenha() {
  const senha =new FormData(formulario);
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,16})(?=.*[!@#$%^&*])/;
  const reSpaces = /^\S*$/;
  if (re.test(senha.get('password')) && reSpaces.test(senha.get('password'))) {
    return true;
  } else {
    let toastLive = document.getElementById('senha-erro');
    let toast = new bootstrap.Toast(toastLive);
    toast.show();
    return false;
  }
}

function validaConfSenha() {
  const senha = document.getElementById('password').value;
  const senha2 = document.getElementById('confirPassword').value;
    if (senha == senha2) {
      return true;
    } else {
      let toastLive = document.getElementById('confirSenha-erro');
      let toast = new bootstrap.Toast(toastLive);
      toast.show();
      return false;
    }
}

document.getElementById("name").addEventListener('focusout', validaUsuario);
document.getElementById("email").addEventListener('focusout', validaEmail);
document.getElementById("password").addEventListener('focusout', validaSenha);
document.getElementById("confirPassword").addEventListener('focusout', validaConfSenha); 
document.getElementById("btn-submit").addEventListener('click', validaFormulario);
