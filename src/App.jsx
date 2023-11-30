import PokemonCard from "./components/pokemonCard"; 

function MyPokemonCard() {
  const pokemon = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
    },
  ];

  return (
    <div>
      <PokemonCard pokemon={pokemon}/>
     </div>
  );
}

export default MyPokemonCard;





