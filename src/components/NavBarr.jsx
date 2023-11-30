function NavBarr({ pokemonList, pokemonIndex, setpokemonIndex }) {
  const handlePokemonSelection = (index) => {
    setpokemonIndex(index);
    const selectedPokemon = pokemonList[index];

    if (selectedPokemon.name === 'pikachu') {
      alert('pika pikachu !!!');
    }
  };

  return (
    <div>
      <p>Index : {pokemonIndex}</p>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => handlePokemonSelection(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBarr;
