import insert from './insertPokemon';
import pokemonAPI from './pokemonAPI';

const makeListPokemon = (array) => {
  array.forEach(pokemon => {
    insert(pokemon);
  });
}

export default makeListPokemon;