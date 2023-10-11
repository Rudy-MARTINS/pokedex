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

function PokemonCard() {

    const pokemon = pokemonList[0];

    if (pokemon.imgSrc != null) {
    return <figure>
    <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"/>
            <figcaption>"bulbasaur"</figcaption>
           </figure>        
    }
  
    else {
        return (<div><p>???</p><figcaption>"Mew"</figcaption></div>)  
  };
    
return (
      <figure>
       <img src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />;
       <figcaption>"bulbasaur"</figcaption>
      </figure>
      );
}
  
  export default PokemonCard;