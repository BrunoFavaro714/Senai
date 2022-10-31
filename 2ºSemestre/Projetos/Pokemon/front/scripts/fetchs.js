const PokemonEscolhido = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(resp => { return resp.json() })
    .then(pokemon => {
        document.querySelector('#suaSprite').src = pokemon.sprites.versions["generation-v"]["black-white"].animated.back_default;
    })

}
const PokemonInimigo = () => {
    let chosenPoke = Math.round(Math.random() * 152);

    fetch(`https://pokeapi.co/api/v2/pokemon/${chosenPoke}`)
    .then(resp => { return resp.json() })
    .then(pokemon => {
        document.querySelector('#outraSprite').src = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
    })
}

export {PokemonInimigo, PokemonEscolhido};
