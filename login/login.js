/*MENSAGEM E VALIDAÇÃO CAMPOS*/ 

var camposReq = document.querySelectorAll('requisito');

function validaFormulario(event) {
event.preventDefault()
  let contador = 0
  for(var i = 0; i < camposReq.length; i++) {
    if (camposReq[i].value == '') {
        contador += 1;
    }
    }
    if (contador == 0 && validaUsuario() && validaSenha()) {
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


var campos = document.querySelectorAll('requisito');

function limpaCampos() { 
    for(var i = 0; i < campos.length; i++) {
        campos[i].value = ''
    }
}


/* CHAMADAS */

document.getElementById("name").addEventListener('focusout', validaUsuario);
document.getElementById("password").addEventListener('focusout', validaSenha); 
document.getElementById("btn-submit").addEventListener('click', validaFormulario);


