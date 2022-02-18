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
    <div className="bg-gray-200 p-10 flex flex-col items-center min-w-min">
      <h1 className="text-5xl font-bold text-center mb-10">Pokémons</h1>
      <div className="grid grid-cols-3 gap-10">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="bg-white p-4 rounded-lg text-center flex flex-col min-w-[200px]"
          >
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
