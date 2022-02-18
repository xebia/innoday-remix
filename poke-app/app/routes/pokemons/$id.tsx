import { useLoaderData } from "remix";
import { PokemonDetails } from "~/types";

export const loader = async ({ params }: { params: { id: string } }) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

  if (!result.ok) {
    throw new Response("Not Found", { status: 404 });
  }

  return result;
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
