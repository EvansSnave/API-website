import appId from './modules/appID';
import pokemonAPI from './modules/pokemonAPI';
import './style.css';
import Pokemon from './modules/createPokemon';
import makeListPokemon from './modules/makePokemonList';
import likesStored from './modules/getLikes';
import liking from './modules/addLikes';

if(!localStorage.getItem('appId')){
  appId();
}

pokemonAPI();

const pokemonData = [];

for(let i = 1; i < 10; i++) {
  const pokem = new Pokemon(i);
  const pokemon = await pokem.data();
  const likes = await likesStored(pokemon.id);
  pokemonData.push(pokemon);
  setTimeout(() => {
    const iconContainer = document.querySelectorAll('.pokemon__icon-container')[i - 1];
    liking(likes, iconContainer);
  }, "2500");
}

makeListPokemon(pokemonData);

