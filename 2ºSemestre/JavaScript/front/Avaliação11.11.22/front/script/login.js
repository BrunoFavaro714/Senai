const inpNome = document.querySelector('#nome');
const inpSenha = document.querySelector('#senha');
const btnLogin = document.querySelector('#btn_login');

const logar = () => {
    let usuario = {
        "nome": inpNome.value,
        "senha": inpSenha.value
    }

    fetch('http://10.87.207.2:3000/login', {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.json() })
    .then(info => {
        if(info[0] != undefined){
            window.localStorage.setItem('usuario', inpNome);
            window.location.href = './index.html';
        }else{
            alert('Erro no Login, usuario ou senha incorreta!')
            window.location.reload()
        }
    })

}