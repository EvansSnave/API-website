const likesStored = async () => {
  try {
    const appID = 'nawHjvINeNbBM4D2gSEW';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);
    if (!response.ok) {
      throw new Error('Failed to get likes data.');
    }
    const arrLikes = [];
    if (response.body) {
      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let result = await reader.read();
      let chunk = decoder.decode(result.value || new Uint8Array(), { stream: !result.done });
      console.log(chunk)
      JSON.parse([chunk]).forEach(element => {
        arrLikes.push(element.likes)
      });
      while (!result.done) {
        result = await reader.read();
        chunk = decoder.decode(result.value || new Uint8Array(), { stream: !result.done });
      }
    }
    if (arrLikes.length === 0) {
      // Handle the case where there are no likes
      console.log('No likes available.');
      return;
    }
    localStorage.setItem('likes', arrLikes);
  } catch (error) {
    throw new Error(`Failed to get likes data. Error => ${error}`);
  }
};
export default likesStored;