import insert from './insertPokemon';
import like from './like';
import liking from './addLikes';

const makeListPokemon = (array) => {
  let likes = [{item_id: 0,likes: 0,}];
  if(localStorage.getItem('likes')) {
    likes = JSON.parse(localStorage.getItem('likes'));
  }
  const arr = likes;
  array.forEach((pokemon, index) => {
    insert(pokemon);
    let obj = likes.find(object => object.item_id == pokemon.id);
    if (obj == undefined) obj = {item_id: pokemon.id, likes: 0,};
    const iconContainer = document.querySelectorAll('.pokemon__icon-container')[index];
    const lik = obj.likes;
    iconContainer.innerHTML += liking(lik);
  });

  array.forEach(pokemon => {
    const likeButton = document.getElementById(`heart${pokemon.id}`);
    likeButton.addEventListener('click', async() => {
      await like(pokemon.id);
    });  
  }) 
}

export default makeListPokemon;