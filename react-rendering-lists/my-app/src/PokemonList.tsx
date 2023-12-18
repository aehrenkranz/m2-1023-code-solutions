export default function PokemonList({ array }) {
  const listItems = array.map((pokemon) => (
    <li key={pokemon.number}>{pokemon.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
