const getComment = async (id) => {
  try {
    const appID = localStorage.getItem('appId');
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments?item_id=${id}`);
    const dataComment = await response.json();
    if (dataComment.error) {
      return [{
        creation_date: 'No data',
        username: 'No one has commented yet',
        comment: { value: 'Be the first one to comment' },
      }];
    }
    if (response.ok !== true) throw new Error('Failed to make a new comment.');
    return dataComment;
  } catch (error) {
    throw new Error(`Failed to add a new comment. Error => ${error}`);
  }
};

export default getComment;