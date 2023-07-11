const like = async (id) => {
  try {
    const appID = 'nawHjvINeNbBM4D2gSEW';
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
    if (response.ok !== true) {
      throw new Error('Failed to like.');
    }
  } catch (error) {
    throw new Error(`Failed to like. Error => ${error}`);
  }
};

export default like;