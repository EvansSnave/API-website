import insert from './insertPokemon';
import like from './like';
import liking from './addLikes';

const makeListPokemon = (array) => {
  const likes = localStorage.getItem('likes');
  const arr = [...likes.split(',')];
  array.forEach(pokemon => {
    insert(pokemon);
    const iconContainer = document.querySelectorAll('.pokemon__icon-container')[pokemon.id-1];
    const lik = arr[pokemon.id-1];
    iconContainer.innerHTML += liking(lik);
  });

  array.forEach((pokemon, index) => {
    const likeButton = document.querySelectorAll('.pokemon__heart-icon');
    likeButton[index].addEventListener('click', async() => {
      await like(pokemon);
    });  
  }) 
}

export default makeListPokemon;