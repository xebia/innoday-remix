import { useLoaderData } from "remix";
import { getPokemonById } from "~/api/pokemons";
import { PokemonDetails } from "~/types";

export const loader = async ({ params }: { params: { id: string } }) => {
  const pokemon = await getPokemonById(params.id);
  return pokemon;
};

export default function Pokemon() {
  const pokemon = useLoaderData<PokemonDetails>();

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}
