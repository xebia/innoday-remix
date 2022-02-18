import { Link, useLoaderData } from "remix";

import type { PokemonsResponse } from "~/pokemon";
import { getPokemons } from "~/pokemon";

export const loader = async () => {
  return getPokemons();
};

export default function Pokemons() {
  const pokemonResponse = useLoaderData<PokemonsResponse>();
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
