const load = () => {
    PokemonEscolhido();
    PokemonInimigo();
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
        rngMove[i] = Math.round(Math.random() * moves.length);
    }

    console.log( rngMove)
}