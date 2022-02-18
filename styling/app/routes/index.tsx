import { Link, useLoaderData } from 'remix';
import { createPokemonOverview } from '../../mock';

export type PokemonIndex = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

export const loader = async () => {
  return createPokemonOverview();
};

export default function Index() {
  const pokemons = useLoaderData<PokemonIndex>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>PokédeXSD</h1>
      <ul>
        {pokemons?.results.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={'pokemon/' + pokemon.name}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
