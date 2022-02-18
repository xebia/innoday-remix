import { createPokemon } from '../../../mock';
import { useLoaderData } from 'remix';

export const loader = async ({ params }) => {
  return { ...createPokemon(), name: params.id };
};

export interface Pokemon {
  name: string;
}

export default function Pokemon() {
  const pokemon = useLoaderData<Pokemon>();

  return (
    <div>
      <h1>{pokemon.name}</h1>
    </div>
  );
}
