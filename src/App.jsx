import PokemonCard from "./components/pokemonCard"; 
import { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png",
  }

];

/*const pokemon = pokemonList[0];*/

function App() {

const [pokemonIndex, setpokemonIndex] = useState(0);

const pkmSuivant = () => {setpokemonIndex(pokemonIndex+ 1)}
const pkmPrecedent = () => {setpokemonIndex (pokemonIndex-1 )}

  return (
    
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <button 
        disabled={pokemonIndex === 0}
        onClick= {pkmPrecedent}>"précédent"</button> 
      <button 
        disabled={pokemonIndex >= pokemonList.length -1}
        onClick= {pkmSuivant}>"suivant"</button>
      
      <p>index :{pokemonIndex}</p>
    </div>
    
  
  );
}

export default App;





