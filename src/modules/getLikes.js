const likesStored = async () => {
  try {
    const appID = 'przexBQiRGlYNq1fzKvK';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);
    if (response.ok !== true) {
      throw new Error('Failed to get likes data.');
    }
    const likes = await response.json();
    const arrLikes = [];
    likes.forEach(like => {
      arrLikes.push(like.likes);
    });
    localStorage.setItem('likes', arrLikes);
  } catch (error) {
    throw new Error(`Failed to get likes data. Error => ${error}`);
  }
};

export default likesStored;