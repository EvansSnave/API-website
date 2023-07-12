import likesStored from './getLikes';

const like = async (id) => {
  try {
    const appID = localStorage.getItem('appId');
    const response = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: 'Pokemon like',
          item_id: id,
        })
      }
    );
    await likesStored();
    const likesForId = JSON.parse(localStorage.getItem('likes'));
    const itemId = likesForId.find(object => object.item_id == id)
    const amountLikes = document.querySelectorAll('.likes')[id-1];
    amountLikes.textContent = `${itemId.likes} likes`;
    if (response.ok !== true) throw new Error('Failed to like.');
  } catch (error) {
    throw new Error(`Failed to like. Error => ${error}`);
  }
};

export default like;