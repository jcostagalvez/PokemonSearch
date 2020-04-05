import llamada from './model/searchController';
import "../css/style.css";

const searchPokemon = async (name) => {
    const pokemon = new llamada(name);
    const pokemonfound = await pokemon.getPokemon();
    console.log(pokemonfound);
};

const pokemon = searchPokemon('pikachu');