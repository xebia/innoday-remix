import { createPokemon } from '../../../mock';
import { useLoaderData } from 'remix';

export const loader = async ({ params }: { params: { id: string } }) => {
  const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);

  if (!result.ok) {
    throw new Response('This Pokémon does not exist', { status: 404 });
  }

  return result;
};

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

export default function Pokemon() {
  const pokemon = useLoaderData<Pokemon>();

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />
    </div>
  );
}
