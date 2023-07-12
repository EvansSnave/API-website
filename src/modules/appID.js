const appId = async () => {
  try {
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          name: 'Pokemon APP',
        })
      }
    );

    if (response.ok !== true) throw new Error('Failed to create a new app.');

    const newAppResult = await response.text();

    localStorage.setItem('appId', newAppResult);
  } catch (error) {
    throw new Error(`Failed to create a new app. Error => ${error}`);
  }
};

export default appId;