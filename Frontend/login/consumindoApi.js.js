async function  envioLogin(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

await fetch('http://localhost:5000/login', 
  {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({name, password })
    }).then(response => response.json())
      .then(data => {
      console.log(data);
       // window.localStorage.setItem('token', data.token);
        window.localStorage.setItem('usuario', JSON.stringify(data))
        if(data){
          window.location.href = "http://127.0.0.1:5501/page-home/index.html"
        } else {
          window.location.href = "#"
        }
    });
}
