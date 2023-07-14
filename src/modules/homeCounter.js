const homeCounter = (arr) => {
  const amount = document.querySelector('.home__pokemon-amount');
  amount.textContent = `Pokemon (${arr.length})`;
};

export default homeCounter;