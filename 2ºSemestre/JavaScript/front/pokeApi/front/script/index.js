const searchBar = document.querySelector('#pokeSearch');

searchBar.addEventListener('keyup', () => {
    if(searchBar.value == ""){
        document.querySelector('#pokeDisplay').src = "";
        document.querySelector('#HP').innerHTML = "";
        document.querySelector('#Spe').innerHTML = "";
        document.querySelector('#Atk').innerHTML = "";
        document.querySelector('#Def').innerHTML = "";
        document.querySelector('#SpAtk').innerHTML = "";
        document.querySelector('#SpDef').innerHTML = "";
    }else{
        pokemon(searchBar.value);
    }
});

const pokemon = (poke) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then(response => {return response.json()})
    .then(pokemon => {
            document.querySelector('#pokeDisplay').src = pokemon.sprites.front_default;
            document.querySelector('#HP').innerHTML = pokemon.stats[0].base_stat;
            document.querySelector('#Spe').innerHTML = pokemon.stats[1].base_stat;
            document.querySelector('#Atk').innerHTML = pokemon.stats[2].base_stat;
            document.querySelector('#Def').innerHTML = pokemon.stats[3].base_stat;
            document.querySelector('#SpAtk').innerHTML = pokemon.stats[4].base_stat;
            document.querySelector('#SpDef').innerHTML = pokemon.stats[5].base_stat;
            searchBar.value = pokemon.forms[0].name;
    })
}