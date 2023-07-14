/* eslint-disable import/extensions, import/no-unresolved, import/no-absolute-path */
import heart from '/src/assets/heart.png';

const makeCard = (pokemon) => {
    return `
    <li class="list__pokemon">
                    <img class="pokemon__image" src="${pokemon.sprites.front_default}" alt="${pokemon.name} image">
                    <div class="pokemon__info-container">
                        <p>${pokemon.name}</p>
                        <div class="pokemon__icon-container">
                            <img class="pokemon__heart-icon" id="heart${pokemon.id}" src="${heart}" alt="like icon">
                        </div>
                    </div>
                    <button class="pokemon__button comments">Comments</button>
                </li>
  `
}

export default makeCard;