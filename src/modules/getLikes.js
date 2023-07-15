const likesStored = async () => {
  try {
    const appID = localStorage.getItem('appId');
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);
    if (!response.ok) throw new Error('Failed to get likes data.');
    const arrLikes = [];
    let data = await response.text();
    if (data === '') data = '{}';
    const parsedData = JSON.parse(data);
    if (parsedData && parsedData.length > 0) {
      parsedData.forEach((element) => {
        arrLikes.push(element);
      });
    }
    if (arrLikes.length === 0) return;
    localStorage.setItem('likes', JSON.stringify(arrLikes));
  } catch (error) {
    throw new Error(`Failed to get likes data. Error => ${error}`);
  }
};

export default likesStored;