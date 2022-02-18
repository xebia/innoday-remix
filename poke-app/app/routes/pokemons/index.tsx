import { Link, useLoaderData } from "remix";
import { getAllPokemons } from "~/api/pokemons";
import { PokemonApi, PokemonDetails } from "~/types";

export const loader = async () => {
  const response = await getAllPokemons();
  return response;
};

export default function Index() {
  const pokemons = useLoaderData<PokemonDetails[]>();

  return (
    <div className="bg-gray-200 h-full">
      <h1>Pokemons</h1>
      <div className="grid grid-cols-3 p-10">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className="bg-white p-4 rounded-lg m-2 ">
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
