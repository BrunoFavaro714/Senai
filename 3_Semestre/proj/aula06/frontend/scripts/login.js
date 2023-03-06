const inpEmail = document.querySelector('.inpEmail');
const inpSenha = document.querySelector('.inpSenha');

const enter = (e) => {
    if(e.KeyCode === 13){
        logar();
    }
}

const logar = () => {
    let usuario = {
        "email": inpEmail.value,
        "senha": inpSenha.value
    }

    fetch('http://localhost:3000/login', {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(usuario)
    }).then(response => { return response.json() })
    .then(info => {
        if(info.token !== undefined){
            window.localStorage.setItem('usuario', JSON.stringify(info))
            window.location.href = './home.html'
        }else{
            alert('Erro')
        }
    })
}