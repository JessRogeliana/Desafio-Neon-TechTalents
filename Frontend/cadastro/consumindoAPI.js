
async function cadastroUsuario(){
//event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
    
    console.log(name, email, password);
    console.log(JSON.stringify({name, email, password }))
 
    await fetch('http://localhost:5000/cadastro', 
  {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({name, email, password })
    }).then(response => response.json())
      .then(data => {
      console.log(data);
        //window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('usuario', JSON.stringify(data))
      });
}