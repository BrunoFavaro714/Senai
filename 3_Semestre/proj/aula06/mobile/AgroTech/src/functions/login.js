const logar = (email, senha, navigation) => {
    let usuario = {
        "email": email,
        "senha": senha
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
            console.log("ok");
            return(navigation.navigate("Home"))
        }
    })
}

module.exports = {
    logar
}