const pokemonAPI = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/',);
    if (response.ok !== true) {
      throw new Error('Failed to get a pokemon.');
    }

    const pokemonResult = await response.json();
    const pokemonID = pokemonResult.results;
    const IDs = [];
    pokemonID.forEach(pokemon => {
      const url = pokemon.url.split('pokemon/')[1].replace('/', '');
      IDs.push(parseInt(url));
    });
    localStorage.setItem('pokemonAPI', pokemonID);
  } catch (error) {
    throw new Error(`Failed to get a new pokemon. Error => ${error}`);
  }
};

export default pokemonAPI;