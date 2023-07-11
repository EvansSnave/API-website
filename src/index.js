import appId from './modules/appID';
import pokemonAPI from './modules/pokemonAPI';
import './style.css';
import Pokemon from './modules/createPokemon';
import makeListPokemon from './modules/makePokemonList';
import likesStored from './modules/getLikes';
import like from './modules/like';

if(!localStorage.getItem('appId')){
  appId();
}
const pokemonData = [];

// const storage = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 1; i < storage.length; i++) {
//   const pokem = new Pokemon(i);
//   const pokemon = await pokem.data();
//   like(pokemon);
//   await likesStored(pokemon.id);
//   pokemonData.push(pokemon);
// }
const pokem = new Pokemon(900);
const pokemon = await pokem.data();
like(pokemon);
await likesStored();
pokemonData.push(pokemon);


makeListPokemon(pokemonData);

