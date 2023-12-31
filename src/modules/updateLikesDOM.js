const updateLikes = (id) => {
  const likesForId = JSON.parse(localStorage.getItem('likes'));
  const itemId = likesForId.find((object) => object.item_id === id);
  const amountLikes = document.querySelectorAll('.likes')[id - 1];
  amountLikes.textContent = `${itemId.likes} likes`;
};

export default updateLikes;