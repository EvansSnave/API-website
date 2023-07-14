import appId from './modules/appID';
import './style.css';
import Pokemon from './modules/createPokemon';
import makeListPokemon from './modules/makePokemonList';
import likesStored from './modules/getLikes';
import homeCounter from './modules/homeCounter';
import commentButton from './modules/commentButton';

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

commentButton();

