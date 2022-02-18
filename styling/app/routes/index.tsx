import { Link, useLoaderData } from 'remix';
import { links as ListLinks, List } from '~/components/List/List';
import { links as ListItemLinks, ListItem } from '~/components/List/ListItem';


export type PokemonIndex = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

// Without this, no styles are loaded, not even from imported components..
export function links() {
  return [
    ...ListLinks(), 
    ...ListItemLinks()
  ];
}


export const loader = async () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/');
};

export default function Index() {
  const pokemons = useLoaderData<PokemonIndex>();

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>PokédeXSD</h1>
      <List>
        {pokemons?.results.map((pokemon) => (
          <ListItem key={pokemon.name}>
            <Link to={'pokemon/' + pokemon.name}>{pokemon.name}</Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
