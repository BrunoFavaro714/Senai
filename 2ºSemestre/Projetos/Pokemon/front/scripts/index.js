var yourObjPoke = [{"vazio":"vazio"}];
var otherObjPoke = [{"vazio":"vazio"}];
var PokeLv = 100;


const load = () => {
    PokemonEscolhido();
    PokemonInimigo();
}
const toggleFight = () => {
    document.querySelector('.moves').classList.toggle('inv');
    document.querySelector('.log-text').classList.toggle('inv');
}

const PokemonEscolhido = () => {
    let chosenPoke = Math.round(Math.random() * 151)+1;

    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPoke}`)
    .then(resp => { return resp.json() })
    .then(pokemon => {
        document.querySelector('#suaSprite').src = pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default;

        let nature = 1;

        let stats = pokemon.stats;

        let hp = ( ( ( 2 * stats[0].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + PokeLv + 10;
        let atk = ( ( ( ( 2 * stats[1].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100) + 5 ) * nature;
        let def = ( ( ( ( 2 * stats[2].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + 5 ) * nature;
        let sp_atk = ( ( ( ( 2 * stats[3].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + 5 ) * nature;
        let sp_def = ( ( ( ( 2 * stats[4].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + 5 ) * nature;
        let spe = ( ( ( ( 2 * stats[5].base_stat + iv() + (ev()/4)) * PokeLv ) / 100 ) + 5 ) * nature;

        let types;

        if(pokemon.types.length > 1){
            types = {
                'tipo1':pokemon.types[0].type.name,
                'tipo2':pokemon.types[1].type.name
            }
        }else{
            types = {
                'tipo1':pokemon.types[0].type.name
            }
        }


        if(yourObjPoke[0].vazio == 'vazio'){
            yourObjPoke = [{
                "name": pokemon.name,
                "lv": PokeLv,
                "stats": {
                    "hp": Math.round(hp),
                    "atk": Math.round(atk),
                    "def": Math.round(def),
                    "sp_atk": Math.round(sp_atk),
                    "sp_def": Math.round(sp_def),
                    "spe": Math.round(spe)
                },
                "type":types
            }]
        }else{
            yourObjPoke.push({
                "name": pokemon.name,
                "lv": 100,
                "stats": {
                    "hp": Math.round(hp),
                    "atk": Math.round(atk),
                    "def": Math.round(def),
                    "sp_atk": Math.round(sp_atk),
                    "sp_def": Math.round(sp_def),
                    "spe": Math.round(spe)
                },
                "type":types
            }) 
        }
        
        console.log(yourObjPoke);
        
        
        choseMoves(pokemon.moves);

        document.querySelector('.yourPokeName').innerHTML = yourObjPoke[0].name;
        document.querySelector('.yourPokeLv').innerHTML += yourObjPoke[0].lv;

        document.querySelector('#yourHealth').max = hp;
        document.querySelector('#yourHealth').value = hp;
    })

}
const PokemonInimigo = () => {
    let chosenPoke = Math.round(Math.random() * 152);

    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPoke}`)
    .then(resp => { return resp.json() })
    .then(pokemon => {
        document.querySelector('#outraSprite').src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;

        let nature = 1;

        let stats = pokemon.stats;

        let hp = ( ( ( 2 * stats[0].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + PokeLv + 10;
        let atk = ( ( ( ( 2 * stats[1].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100) + 5 ) * nature;
        let def = ( ( ( ( 2 * stats[2].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + 5 ) * nature;
        let sp_atk = ( ( ( ( 2 * stats[3].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + 5 ) * nature;
        let sp_def = ( ( ( ( 2 * stats[4].base_stat + iv() + (ev()/4) ) * PokeLv ) / 100 ) + 5 ) * nature;
        let spe = ( ( ( ( 2 * stats[5].base_stat + iv() + (ev()/4)) * PokeLv ) / 100 ) + 5 ) * nature;

        let types;

        if(pokemon.types.length > 1){
            types = {
                'tipo1':pokemon.types[0].type.name,
                'tipo2':pokemon.types[1].type.name
            }
        }else{
            types = {
                'tipo1':pokemon.types[0].type.name
            }
        }

        if(otherObjPoke[0].vazio == 'vazio'){
            otherObjPoke = [{
                "name": pokemon.name,
                "lv": PokeLv,
                "stats": {
                    "hp": Math.round(hp),
                    "atk": Math.round(atk),
                    "def": Math.round(def),
                    "sp_atk": Math.round(sp_atk),
                    "sp_def": Math.round(sp_def),
                    "spe": Math.round(spe)
                },
                "type":types
            }]
        }else{
            otherObjPoke.push({
                "name": pokemon.name,
                "lv": 100,
                "stats": {
                    "hp": Math.round(hp),
                    "atk": Math.round(atk),
                    "def": Math.round(def),
                    "sp_atk": Math.round(sp_atk),
                    "sp_def": Math.round(sp_def),
                    "spe": Math.round(spe)
                },
                "type":types
            }) 
        }
        
        console.log(otherObjPoke);

        document.querySelector('.otherPokeName').innerHTML = otherObjPoke[0].name;
        document.querySelector('.otherPokeLv').innerHTML += otherObjPoke[0].lv;

        document.querySelector('#otherHealth').max = hp+11;
        document.querySelector('#otherHealth').value = hp+11;
    })
}

const choseMoves = (moves) => {
    let rngMove =[];

    for(let i = 0; i < 4; i++){
        rngMove[i] = Math.round(Math.random() * moves.length)+1;
    }

    console.log(rngMove)

    let moveSet = document.querySelector(".moves").querySelectorAll('button')
    let i = 0;
    
    rngMove.forEach(move => {
        fetch(`https://pokeapi.co/api/v2/move/${move}`)
        .then(res => { return res.json() })
        .then(desc => {
            moveSet[i].innerHTML = (desc.name).toUpperCase();
            moveSet[i].addEventListener('click', () => {useMove(desc)});
            i++;
            console.log(desc.id);
        })
    })
}

const useMove = (move) => {
    let otherHealth = document.querySelector("#otherHealth");

    let damage = 0;

    if(move.damage_class.name == 'physical') {
        damage = ( ( ( ( 2*PokeLv/5 +2 ) * move.power * yourObjPoke[0].stats.atk/otherObjPoke[0].stats.def ) / 50 + 2 ));
    }else if(move.damage_class.name == 'special'){
        damage = ( ( ( ( 2*PokeLv/5 +2 ) * move.power * yourObjPoke[0].stats.sp_atk/otherObjPoke[0].stats.sp_def ) / 50 + 2 ));
    }else{
        console.log('status')
    }
    
    otherHealth.value = otherHealth.value - Math.round(damage);
}



const iv = () => {
    return (Math.floor(Math.random() * 31)+1)
}
const ev = () => {
    return (Math.floor(Math.random() * 256))
}

const STAB = () => {
    
}