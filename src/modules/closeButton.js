const closeWindow = () => {
    const closeButtons = document.querySelectorAll('.close-button');
    const cards = document.querySelectorAll('.comment-window');
    closeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        cards[index].remove();
        document.body.style.overflow = 'scroll';
      })
    })
  }
  
  export default closeWindow;