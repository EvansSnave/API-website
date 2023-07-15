const commentCounter = (arr) => {
  const p = document.querySelector('.comments-number');
  const comments = document.querySelectorAll('.data-dom');
  p.innerHTML = '';
  if (arr[0].username === 'No one has commented yet') {
    p.innerHTML += 'Comments (0)';
  } else p.innerHTML += `Comments (${comments.length})`;
};

export default commentCounter;