const homeCounter = (arr) => {
  if (arr) {
    const amount = document.querySelector('.home__pokemon-amount');
    amount.textContent = `Pokemon (${arr.length})`;
  } else {
    // Do nothing
  }
};

export default homeCounter;