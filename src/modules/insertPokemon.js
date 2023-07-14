import makeCard from './createLi.js';

const insert = (pokemon) => {
  const ul = document.querySelector('.home__list');
  ul.innerHTML += makeCard(pokemon);
};

export default insert;