import { useLoaderData } from "remix";
import { PokemonApi, PokemonDetails } from "~/types";

export const loader = async () => {
  try {
    const pokemons: PokemonApi = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100"
    ).then((response) => response.json());

    const poke: PokemonDetails[] = await Promise.all(
      pokemons.results.map(async ({ url }) => {
        return await fetch(url).then((response) => response.json());
      })
    );

    return poke;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default function Index() {
  const pokemons = useLoaderData<PokemonDetails[]>();

  return (
    <div className="bg-gray-200 h-full">
      <h1>Game</h1>
      <div className="grid grid-cols-3 p-10">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name} className="bg-white p-4 rounded-lg m-2 ">
            <img src={pokemon.sprites.front_default} />
            <div>{pokemon.name}</div>
            <div>details</div>
          </div>
        ))}
      </div>
    </div>
  );
}
