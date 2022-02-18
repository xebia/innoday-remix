import { Link, useLoaderData } from "remix";
import { getAllPokemons } from "~/api/pokemons";
import { PokemonDetails } from "~/types";

export const loader = async () => {
  const response = await getAllPokemons();
  return response;
};

export default function Index() {
  const pokemons = useLoaderData<PokemonDetails[]>();

  return (
    <div className="bg-gray-200 h-full">
      <h1 className="text-5xl font-bold">Pokémons</h1>
      <div className="grid grid-cols-3 p-10 gap-10">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className="bg-white p-4 rounded-lg">
            <img src={pokemon.sprites.front_default} />
            <div className="block">{pokemon.name}</div>
            <Link className="block poke-button" to={`/pokemons/${pokemon.id}`}>
              details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
