import type { LoaderFunction } from "remix";
import { Link, useLoaderData } from "remix";

import { getPokemon } from "~/pokemon";
import pokemonStyles from "~/styles/pokemon.css";

export const links = () => {
  return [{ rel: "stylesheet", href: pokemonStyles }];
};

export const loader: LoaderFunction = async ({ params }) => {
  return getPokemon(params.slug || "");
};

export default function PokemonSlug() {
  const pokemon = useLoaderData();
  return (
    <div>
      <div>
        <h1>{pokemon.name}</h1>
        <dd>Weight: {pokemon.weight}</dd>
      </div>

      <div>
        <Link to="/pokemons">back</Link>
      </div>
    </div>
  );
}
