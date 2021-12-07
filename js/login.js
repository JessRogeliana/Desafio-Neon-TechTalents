/*MENSAGEM E VALIDAÇÃO CAMPOS*/ 

var camposReq = document.querySelectorAll('requisito');

function validaFormulario() {
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










/*

class Validator {
    //Constructor inicia as validações 
        constructor() {
          this.validations = [
            'data-min-length',
            'data-max-length',
            'data-required',
            'data-password-validate',
          ]
        }
    // inicia a validação de todos os campos
    validate(form) {
  
        // limpa todas as validações antigas
        let currentValidations = document.querySelectorAll('form .error-validation');
    
        if(currentValidations.length) {
          this.cleanValidations(currentValidations);
        }
    
        // pegar todos inputs
        let inputs = form.getElementsByTagName('input');
        // transformar HTMLCollection em arr, ele pega todos os imputs e converte em arrays
        let inputsArray = [...inputs];
    
        // loop nos inputs e validação mediante aos atributos encontrados
        inputsArray.forEach(function(input, obj) {
    
          // fazer validação de acordo com o atributo do input
          for(let i = 0; this.validations.length > i; i++) {
            if(input.getAttribute(this.validations[i]) != null) {
    
              // limpa string para saber o método
              let method = this.validations[i].replace("data-", "").replace("-", "");
    
              // valor do input
              let value = input.getAttribute(this.validations[i])
    
              // invoca o método
              this[method](input,value);
    
            }
          }
    
        }, this);
    
      }
    
      // método para validar se tem um mínimo de caracteres
      minlength(input, minValue) {
    
        let inputLength = input.value.length;
    
        let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
    
        if(inputLength < minValue) {
          this.printMessage(input, errorMessage);
        }
    
      }
    
      // método para validar se passou do máximo de caracteres
      maxlength(input, maxValue) {
    
        let inputLength = input.value.length;
    
        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;
    
        if(inputLength > maxValue) {
          this.printMessage(input, errorMessage);
        }
    
      }
    
      // método para validar strings que só contem letras
      onlyletters(input) {
    
        let re = /^[A-Za-z]+$/;;
    
        let inputValue = input.value;
    
        let errorMessage = `Este campo não aceita números nem caracteres especiais`;
    
        if(!re.test(inputValue)) {
          this.printMessage(input, errorMessage);
        }
    
      }
    
      // método para validar e-mail
      emailvalidate(input) {
        let re = /\S+@\S+\.\S+/;
    
        let email = input.value;
    
        let errorMessage = `Insira um e-mail no padrão matheus@email.com`;
    
        if(!re.test(email)) {
          this.printMessage(input, errorMessage);
        }
    
      }
    
      // verificar se um campo está igual o outro
      equal(input, inputName) {
    
        let inputToCompare = document.getElementsByName(inputName)[0];
    
        let errorMessage = `Este campo precisa estar igual ao ${inputName}`;
    
        if(input.value != inputToCompare.value) {
          this.printMessage(input, errorMessage);
        }
      }
      
      // método para exibir inputs que são necessários
      required(input) {
    
        let inputValue = input.value;
    
        if(inputValue === '') {
          let errorMessage = `Este campo é obrigatório`;
    
          this.printMessage(input, errorMessage);
        }
    
      }
    
      // validando o campo de senha
      passwordvalidate(input) {
    
        // explodir string em array
        let charArr = input.value.split("");
    
        let uppercases = 0;
        let numbers = 0;
    
        for(let i = 0; charArr.length > i; i++) {
          if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
            uppercases++;
          } else if(!isNaN(parseInt(charArr[i]))) {
            numbers++;
          }
        }
    
        if(uppercases === 0 || numbers === 0) {
          let errorMessage = `A senha precisa um caractere maiúsculo e um número`;
    
          this.printMessage(input, errorMessage);
        }
    
      }
    
      // método para imprimir mensagens de erro
      printMessage(input, msg) {
      
        // checa os erros presentes no input
        let errorsQty = input.parentNode.querySelector('.error-validation');
    
        // imprimir erro só se não tiver erros
        if(errorsQty === null) {
          let template = document.querySelector('.error-validation').cloneNode(true);
    
          template.textContent = msg;
      
          let inputParent = input.parentNode;
      
          template.classList.remove('template');
      
          inputParent.appendChild(template);
        }
    
      }
    
      // remove todas as validações para fazer a checagem novamente
      cleanValidations(validations) {
        validations.forEach(el => el.remove());
      }
    
    }
    
    let form = document.getElementById('register-form');
    let submit = document.getElementById('btn-submit');
    
    let validator = new Validator();
    
    // evento de envio do form, que valida os inputs
    submit.addEventListener('click', function(e) {
      e.preventDefault();
    
      validator.validate(form);
    });


*/