import PropTypes from "prop-types";

function PokemonCard({ pokemon }) {
  console.log(pokemon);
  return (
    <div>
      {pokemon.map((poke) => (
        <figure key={poke.name}>
          <img src={poke.imgSrc} alt={poke.name} />
          <figcaption>{poke.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
PokemonCard.propTypes = {
  pokemon: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
      })
    ),
  ]).isRequired,
};


export default PokemonCard;
