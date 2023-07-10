const liking = (int, parent) => {
  const p = `<p>${int} likes</p>`;
  parent.innerHTML += p;
}

export default liking;