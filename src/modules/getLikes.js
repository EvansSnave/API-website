const likesStored = async (id) => {
  try {
    const appID = localStorage.getItem('appId');
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);
    if (response.ok !== true) {
      throw new Error('Failed to get likes data.');
    }
    const likes = await response.json();
    const objectLikes = likes.filter( item => item.item_id === id);
    const liked = objectLikes[0].likes;
    console.log(liked)
    return liked;
  } catch (error) {
    throw new Error(`Failed to get likes data. Error => ${error}`);
  }
};

export default likesStored;