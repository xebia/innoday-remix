import { Link, useLoaderData } from "remix";

import type { PokemonResponse } from "~/pokemon";
import { getPokemons } from "~/pokemon";

export const loader = async () => {
  return getPokemons();
};

export default function Pokemons() {
  const pokemonResponse = useLoaderData<PokemonResponse>();
  console.log(pokemonResponse);
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {pokemonResponse.results.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={pokemon.name}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
