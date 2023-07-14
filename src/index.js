import appId from './modules/appID.js';
import './style.css';
import Pokemon from './modules/createPokemon.js';
import makeListPokemon from './modules/makePokemonList.js';
import likesStored from './modules/getLikes.js';
import homeCounter from './modules/homeCounter.js';
import commentButton from './modules/commentButton.js';

if (!localStorage.getItem('appId')) await appId();

const pokemonData = [];

const storage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < storage.length; i += 1) {
  const pokem = new Pokemon(i);
  const pokemon = pokem.data();
  likesStored();
  pokemonData.push(pokemon);
}

homeCounter(pokemonData);

makeListPokemon(pokemonData);

commentButton();