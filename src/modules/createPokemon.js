class Pokemon {
  constructor(id) {
    this.id = id;
  }

  async data() {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}/`);
      if (!response.ok) throw new Error('Failed to create a new pokemon.');
      const pokemonData = await response.json();
      return pokemonData;
    } catch (error) {
      throw new Error(`Failed to create a new pokemon. Error => ${error}`);
    }
  }
}

export default Pokemon;
