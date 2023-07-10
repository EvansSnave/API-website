import insert from './insertPokemon';
import like from './like';

const makeListPokemon = (array) => {
  array.forEach(pokemon => {
    insert(pokemon);
  });
  array.forEach ((pokemon, index) => {
    const likeButton = document.querySelectorAll('.pokemon__heart-icon');
    likeButton[index].addEventListener('click', async () => {
      await like(pokemon);
    });  
  }) 
}

export default makeListPokemon;