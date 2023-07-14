const getComment = async (id) => {
  try {
    const appID = localStorage.getItem('appId');
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${id}`);
    const dataComment = await response.json();
    if (dataComment.error) return [{ creation_date: 'no data', username: 'no one has commented yet', comment: 'Be the first to comment!' }];
    if (response.ok !== true) throw new Error('Failed to make a new comment.');
    return dataComment;
  } catch (error) {
    throw new Error(`Failed to add a new comment. Error => ${error}`);
  }
};

export default getComment;