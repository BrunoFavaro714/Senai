const log = document.querySelector('.logar-container');
const reg = document.querySelector('.registrar-container');

const toggleModel = () => {
    reg.classList.toggle('model');
    log.classList.toggle('model');
}

const login = () => {

    fetch('http://localhost:3000/Login', {
        'method':postMessage,
        'headers':{
            'Content-Type':'aplication/json'
        },
        body: JSON.stringify(user)
    })
}