const commentCounter = (arr) => {
    const p = document.querySelector('.comments-number');
    p.innerHTML = '';
    if (arr[0].username == 'no one has commented yet') {
      p.innerHTML += 'Comments (0)';
    } else p.innerHTML += `Comments (${arr.length})`;
  }
  
  export default commentCounter;