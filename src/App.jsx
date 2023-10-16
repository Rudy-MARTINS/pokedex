import PokemonCard from "./components/pokemonCard"; 
import NavBarr from "./components/NavBarr";
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

  return (
    <div>
      <NavBarr pokemonList={pokemonList} pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
    </div>
  );
}

export default App;



/*
<NavBarr pokemonList={pokemonList} pokemonIndex={pokemonIndex} setpokemonIndex={setpokemonIndex}/>*/


