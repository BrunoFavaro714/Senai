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

const navigateToVeiculo = (veiculo, navigation) => {
    navigation.navigate("Veiculo", {"veiculo":veiculo})
}

const atualDispo = (manu, tran) => {
    let dispo = {
        manutencao: '',
        transito: ''
    }

    if(manu){
        dispo.manutencao = `Sair de Manutenção`
    }else{
        dispo.manutencao = `Entrar em Manutenção`
    }

    if(tran){
        dispo.transito = `Sair de Transito`
    }else{
        dispo.transito = `Entrar em Transito`
    }

    return dispo
}

const alterarDispo = (placa, dispo) => {
    let body = {
        placa: placa,
        disponibilidade:{
            em_transito: dispo.em_transito,
            em_manutencao: dispo.em_manutencao
        }
    }    

    fetch('http://localhost:3000/put/frota', {
        'method': 'PUT',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(body)
    }).then(response => { return response.json() })
    .then(() => {
    })
}


module.exports = {
    logar,
    navigateToVeiculo,
    atualDispo,
    alterarDispo
}