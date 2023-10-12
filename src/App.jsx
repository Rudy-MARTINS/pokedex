import PokemonCard from "./components/pokemonCard"; 

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

/*const pokemon = pokemonList[0];*/

function App() {
 
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]}/>
    </div>
  );
}

export default App;





