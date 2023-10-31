async function call() {
  const poke = await fetch('https://pokeapi.co/api/v2/pokemon/61/');
  console.log(await poke.json());
}

call();
