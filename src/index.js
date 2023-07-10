import appId from './modules/appID';
import pokemonAPI from './modules/pokemonAPI';
import './style.css';
import Pokemon from './modules/createPokemon';
import makeListPokemon from './modules/makePokemonList';
import likesStored from './modules/getLikes';

if(!localStorage.getItem('appId')){
  appId();
}

pokemonAPI();
const pokemonData = [];

const storage = localStorage.getItem('pokemonAPI')
const tJSON = [...storage.split(',')];
const slice = tJSON.slice(0, 9);
for (let i = 0; i < slice.length; i++) {
  const pokem = new Pokemon(~~slice[i]);
  const pokemon = await pokem.data();
  const likes = await likesStored(pokemon.id);
  pokemonData.push(pokemon);
}

makeListPokemon(pokemonData);

