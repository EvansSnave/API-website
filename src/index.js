import appId from './modules/appID';
import pokemonAPI from './modules/pokemonAPI';
import './style.css';
import Pokemon from './modules/createPokemon';
import makeListPokemon from './modules/makePokemonList';

if(!localStorage.getItem('appId')){
  appId();
}

const pokemonData = [];

for(let i = 1; i < 10; i++) {
  const pokem = new Pokemon(i);
  const pokemon = await pokem.data();
  pokemonData.push(pokemon);
}

makeListPokemon(pokemonData);
