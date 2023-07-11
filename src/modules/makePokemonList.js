import insert from './insertPokemon';
import like from './like';
import liking from './addLikes';

const makeListPokemon = (array) => {
  let likes = '0,0,0,0,0,0,0,0,0,0,0';
  if(localStorage.getItem('likes')) {
    likes = localStorage.getItem('likes');
  }
  const arr = [...likes.split(',')];
  array.forEach((pokemon, index) => {
    insert(pokemon);
    const iconContainer = document.querySelectorAll('.pokemon__icon-container')[index];
    const lik = arr[pokemon.id-1];
    console.log(lik)
    iconContainer.innerHTML += liking(lik);
  });

  array.forEach(pokemon => {
    const likeButton = document.getElementById(`heart${pokemon.id}`);
    likeButton.addEventListener('click', async() => {
      console.log(likeButton)
      await like(pokemon.id);
    });  
  }) 
}

export default makeListPokemon;