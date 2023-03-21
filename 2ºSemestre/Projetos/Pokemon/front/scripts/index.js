var yourObjPoke = [{"vazio":"vazio"}];
var otherObjPoke = [{"vazio":"vazio"}];
var PokeLv = 100;

var combat = {
    party:[],
    enemy:[]
}

const load = () => {
    PokemonEscolhido();
    PokemonInimigo();
}
const toggleFight = () => {
    document.querySelector('.moves').classList.toggle('inv');
    document.querySelector('.log-text').classList.toggle('inv');
}


const useMove = (move) => {
    let eMove = Math.floor(Math.random()*4)

    console.log(combat.enemy[eMove]);

    if(yourObjPoke[0].stats.spe >= otherObjPoke[0].stats.spe) {
        yourTurn(combat.party[move]);
        setTimeout(() => {enemyTurn(combat.enemy[eMove])}, 1000);
    }else{
        enemyTurn(combat.enemy[eMove])
        setTimeout(() => {yourTurn(combat.party[move]);}, 1000);
    }
    

    
}

const iv = () => {
    return (Math.floor(Math.random() * 31)+1)
}
const ev = () => {
    return (Math.floor(Math.random() * 256))
}

const STAB = (move_type) => {
    if(move_type == yourObjPoke[0].type.tipo1 || move_type == yourObjPoke[0].type.tipo2){
        return 1.5;
    }else{
        return 1;
    }
}