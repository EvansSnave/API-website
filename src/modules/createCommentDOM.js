import xIcon from '../assets/xIcon.png';

const createComment = (card) => {
  const commentWindow = document.createElement('div');
  commentWindow.classList.add('comment-window');
  commentWindow.innerHTML = `
  <div class="images">
    <img class="pokemon-generated" src="${card.image}" alt="${card.name}">
    <img class="close-button" src="${xIcon}" alt="close-window">
  </div>
  <div class="info-container">
    <p class="pokemon-name">${card.name}</p>
    <ul class="list-info">
      <li class="weight">Weight: ${card.weight}</li>
      <li class="ability">Ability: ${card.ability}</li>
      <li class="type">Type: ${card.type}</li>
      <li class="move">Favourite move: ${card.move}</li>
    </ul>
  </div>
  <div class="comments-shown">
    <p class="comments-number"></p>
    <table class="comments-tables">
      <tbody class="comments-table"></tbody>
    </table>
  </div>
  <form class="comment-form" action="">
    <p class="add-comment">Add a comment</p>
    <div class="comment-data">
      <input type="text" placeholder="Your name" class="user-name" required>
      <textarea name="" class="comment" cols="30" rows="10" placeholder="Your insights" required></textarea>
      <button class="comment-button" type="submit">Comment</button>
    </div> 
  </form>
  `;
  document.body.appendChild(commentWindow);
};

export default createComment;