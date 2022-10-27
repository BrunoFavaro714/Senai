const PokemonEscolhido = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(resp => { return resp.json() })
    .then(pokemon => {
        console.log(pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default);
        //document.querySelector('#suaSprite').src = pokemon.sprites.version[4].
    })

}
const PokemonInimigo = () => {
    let chosenPoke = Math.random() * 152;

    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPoke}`)
    .then(resp => { return resp.json() })
    .then(pokemon => {

    })
}

// export default {PokemonInimigo, PokemonEscolhido};
