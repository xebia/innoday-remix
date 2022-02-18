import type { LoaderFunction } from "remix";
import { useLoaderData } from "remix";

import { getPokemon } from "~/pokemon";

export const loader: LoaderFunction = async ({ params }) => {
  return getPokemon(params.slug || "");
};

export default function PokemonSlug() {
  const pokemon = useLoaderData();
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <dd>Weight: {pokemon.weight}</dd>
    </div>
  );
}
