import { useState } from "react"; 

function NavBarr({pokemonList, pokemonIndex, setpokemonIndex }) {

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



export default NavBarr;