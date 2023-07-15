const homeCounter = (arr) => {
  if (arr) {
    const amount = document.querySelector('.home__pokemon-amount');
    const cards = document.querySelectorAll('.list__pokemon');
    amount.textContent = `Pokemon (${cards.length})`;
  } else return;
};

export default homeCounter;