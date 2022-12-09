const inpUser = document.getElementById('username');
const inpPass = document.getElementById('password');
const btnLogin = document.getElementById('button');

const enter = (e) => {
    if(e.keyCode === 13){
        logar();
    }
}

const logar = () => {
    console.log(inpUser.value);
    let usuario = {
        "email": inpUser.value,
        "senha": inpPass.value
    }

    fetch('http://localhost:3000/reenyedito/login/usuario', {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.json() })
    .then(info => {
        if(info != undefined) {
            window.localStorage.setItem('usuario', JSON.stringify(info));
            window.location.href = '../pages/home.html';
        } else {
            alert('Erro no Login, username ou senha incorreta!');
            window.location.reload();
        }
    })
}