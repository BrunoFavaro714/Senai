const inpEmail = document.querySelector('.inpEmail');
const inpSenha = document.querySelector('.inpSenha');

const enter = (e) => {
    console.log(e.keyCode);
    if(e.keyCode == 13){
        console.log("a");
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
    }).then(response => { 
        if(response.status != 404){
            return response.json()
        }else{
            alert('ERRO! Usuario ou Senha Incorretos')
        }
    })
    .then(info => {
        if(info !== undefined){
            window.localStorage.setItem('usuario', JSON.stringify(info))
            window.location.href = './home.html'
        }
    })
}