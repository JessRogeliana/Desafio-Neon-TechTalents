var camposReq = document.querySelectorAll('requisito');

function validaFormulario(event) {
  event.preventDefault()
    let contador = 0
    for(var i = 0; i < camposReq.length; i++) {
        if (camposReq[i].value == '') {
            contador += 1;
        }
    }
    if (contador == 0 && validaUsuario() && validaSenha() && validaEmail() && validaConfSenha()) {
        let toastLive = document.getElementById('toast-confimacao');
        let toast = new bootstrap.Toast(toastLive);
        toast.show();
        limpaCampos();
    } else {
        let toastLive = document.getElementById('toast-erro');
        let toast = new bootstrap.Toast(toastLive);
        toast.show();
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
      return false

    return false;
  }
}


function validaSenha() {
  const senha = document.getElementById('password').value;
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
  const reSpaces = /^\S*$/;
  if (re.test(senha.value) && reSpaces.test(senha.value)) {
    return true;
  } else {
    let toastLive = document.getElementById('senha-erro');
    let toast = new bootstrap.Toast(toastLive);
    toast.show();
    return false;
  }
}

function validaConfSenha() {
  const senha = document.getElementById('confirPassword').value;
  const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
  const reSpaces = /^\S*$/;
  if (re.test(senha.value) && reSpaces.test(senha.value)) {
    return true;
  } else {
    let toastLive = document.getElementById('confirSenha-erro');
    let toast = new bootstrap.Toast(toastLive);
    toast.show();
    return false;
  }
}

var campos = document.querySelectorAll('requisito');

function limpaCampos() { 
    for(var i = 0; i < campos.length; i++) {
        campos[i].value = ''
    }
}

document.getElementById("name").addEventListener('focusout', validaUsuario);
document.getElementById("email").addEventListener('focusout', validaEmail);
document.getElementById("password").addEventListener('focusout', validaSenha);
document.getElementById("confirPassword").addEventListener('focusout', validaConfSenha); 
document.getElementById("btn-submit").addEventListener('click', validaFormulario);
