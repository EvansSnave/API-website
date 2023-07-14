import closeWindow from './closeButton.js';
import createComment from './createCommentDOM.js';
import Pokemon from './createPokemon.js';
import submit from './submitComment.js';
import loading from './loadComments.js';

const commentButton = () => {
  const buttons = document.querySelectorAll('.comments');
  buttons.forEach(async (button, index) => {
    const pokemon = new Pokemon(index + 1);
    const newPokemon = await pokemon.data();
    button.addEventListener('click', () => {
      const card = {
        image: newPokemon.sprites.front_default,
        name: newPokemon.name,
        weight: newPokemon.weight,
        ability: newPokemon.abilities[0].ability.name,
        type: newPokemon.types[0].type.name,
        move: newPokemon.moves[0].move.name,
        id: newPokemon.id,
      };
      createComment(card);
      closeWindow();
      submit(card.id);
      loading(card.id);
      document.body.style.overflow = 'hidden';
    });
  });
};

export default commentButton;