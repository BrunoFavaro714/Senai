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

        choseMoves(pokemon.moves)

        let hp = (2 * pokemon.stats[0].base_stat)/100;

        document.querySelector('#yourHealth').max = hp+11;
        document.querySelector('#yourHealth').value = hp+11;
    })

}
const PokemonInimigo = () => {
    let chosenPoke = Math.round(Math.random() * 152);

    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPoke}`)
    .then(resp => { return resp.json() })
    .then(pokemon => {
        document.querySelector('#outraSprite').src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
        
        let hp = (2 * pokemon.stats[0].base_stat)/100;

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
            i++;
        })
    })
}



// const typeColor = (type) => {
//     if(type == 'bug'){
//         return('rgb(166, 185, 26)');
//     }else if(type == 'dark'){
//         return('rgb(112, 87, 70)');
//     }else if(type == 'dragon'){
//         return('rgb(111, 53, 252)');
//     }else if(type == 'electric'){
//         return('rgb(247, 208, 44)');
//     }else if(type == 'fairy'){
//         return('rgb(214, 133, 173)');
//     }else if(type == 'fight'){
//         return('rgb(194, 46, 40)');
//     }else if(type == 'fire'){
//         return('rgb(238, 129, 48)');
//     }else if(type == 'flying'){
//         return('rgb(169, 143, 243)');
//     }else if(type == 'ghost'){
//         return('rgb(115, 87, 151)');
//     }else if(type == 'grass'){
//         return('rgb(122, 199, 76)');
//     }else if(type == 'ground'){
//         return('rgb(226, 191, 101)');
//     }else if(type == 'ice'){
//         return('rgb(150, 217, 214)');
//     }else if(type == 'normal'){
//         return('rgb(168, 167, 122)');
//     }else if(type == 'poison'){
//         return('rgb(163, 62, 161)');
//     }else if(type == 'psychc'){
//         return('rgb(249, 85, 135)');
//     }else if(type == 'rock'){
//         return('rgb(182, 161, 54)');
//     }else if(type == 'steel'){
//         return('rgb(183, 183, 206)');
//     }else if(type == 'water'){
//         return('rgb(99, 144, 240)');
//     }
// }