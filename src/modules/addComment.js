const commentSent = async (object) => {
    try {
      if (object.name == '' || object.comment == '') return;
      const appID = localStorage.getItem('appId');
      const response = await fetch(
        `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          body: JSON.stringify({
            username: object.name,
            item_id: object.id,
            comment: object.comment,
          })
        }
      );
      if (response.ok !== true) throw new Error('Failed to make a new comment.');
    } catch (error) {
      throw new Error(`Failed to add a new comment. Error => ${error}`);
    }
  };
  
  export default commentSent;