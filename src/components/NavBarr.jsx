import React from "react";

function NavBarr({ pokemonList, pokemonIndex,setpokemonIndex }) {
  return (
    <div>
      <p>Index : {pokemonIndex}</p>
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => setpokemonIndex(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}










/*function NavBarr({pokemonList, pokemonIndex, setpokemonIndex }) {

const pkmSuivant = () => {setpokemonIndex(pokemonIndex+ 1)}
const pkmPrecedent = () => {setpokemonIndex (pokemonIndex-1 )}
   
return (
      <div>
      <button disabled={pokemonIndex === 0}
        onClick= {pkmPrecedent}>"précédent"</button> 
      <button 
        disabled={pokemonIndex >= pokemonList.length -1}
        onClick= {pkmSuivant}>"suivant"</button>
      
      <p>index :{pokemonIndex}</p>
      </div>
)      
};
*/
export default NavBarr;