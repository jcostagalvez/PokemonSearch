import Recipe from './model/pokemonsController';

const searchPokemon = async (name) => {
    const pokemon = new Recipe(name);
    const pokemonfound = await pokemon.getPokemon();
    return pokemonfound;
};

searchPokemon('pikachu');