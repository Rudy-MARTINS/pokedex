function PokemonCard({pokemon}) {


    if (pokemon.imgSrc != null) {
      return <figure>
      <img src ={pokemon.imgSrc} alt ={pokemon.name}/> 
              <figcaption>{pokemon.name}</figcaption>
             </figure> 
                  
      }
    
      else {
          return (<div><p>???</p></div>)  
    }
    
  
}
  
  export default PokemonCard;