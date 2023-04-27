const log = document.querySelector('.logar-container');
const reg = document.querySelector('.registrar-container');

const toggleModel = () => {
    reg.classList.toggle('model');
    log.classList.toggle('model');
}

const login = () => {
    let user = {
        "email": log.querySelector('.email').value,
        "senha": md5(log.querySelector('.senha').value)
    }

    fetch('http://localhost:3000/Login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then(result => { return result.json() })
    .then(data => {
        if(data.token != undefined) {
            window.localStorage.setItem('usuario', JSON.stringify(data));
            window.location.href = './home.html';
        } else {
            alert('Erro no Login, username ou senha incorreta!');
            window.location.reload();
        }
    })
}

const registrar = () => {
    if(reg.querySelector('.senha').value == reg.querySelector('.confirSenha').value){
        let user = {
            "email": reg.querySelector('.email').value,
            "usuario": reg.querySelector('.nome').value,
            "senha": md5(reg.querySelector('.senha').value)
        }

        fetch('http://localhost:3000/post/usuario', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(returned => { return returned })
        .then(info => {

            fetch('http://localhost:3000/Login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }).then(result => { return result.json() })
            .then(data => {
                if(data.token != undefined) {
                    window.localStorage.setItem('usuario', JSON.stringify(data));
                    window.location.href = './home.html';
                } else {
                    alert('Erro no Login, username ou senha incorreta!');
                    window.location.reload();
                }
            })
            
        })
    }else{
        alert('Confirmação de Senha incorreta')
    }
}