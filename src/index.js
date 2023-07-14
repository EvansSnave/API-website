/* eslint-disable no-await-in-loop */
import appId from './modules/appID';
import './style.css';
import Pokemon from './modules/createPokemon';
import makeListPokemon from './modules/makePokemonList';
import likesStored from './modules/getLikes';
import homeCounter from './modules/homeCounter';

if(!localStorage.getItem('appId')) await appId();

const pokemonData = [];

const storage = [1,2,3,4,5,6,7,8,9,10];
for (let i = 1; i < storage.length; i++) {
  const pokem = new Pokemon(i);
  const pokemon = await pokem.data();
  await likesStored();
  pokemonData.push(pokemon);
}

homeCounter(pokemonData);

makeListPokemon(pokemonData);

