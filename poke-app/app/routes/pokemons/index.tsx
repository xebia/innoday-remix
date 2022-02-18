import { Form, Link, LoaderFunction, useLoaderData } from "remix";
import { getAllPokemons, getPokemonById } from "~/api/pokemons";
import { PokemonDetails } from "~/types";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonSearchId = url.searchParams.get("id");
  if (pokemonSearchId) {
    const pokemon: PokemonDetails = await getPokemonById(pokemonSearchId);
    return [pokemon];
  }
  const response = await getAllPokemons();
  return response;
};

export default function Index() {
  const pokemons = useLoaderData<PokemonDetails[]>();

  return (
    <div className="bg-gray-200 p-10 flex flex-col items-center min-w-min">
      <Form className="py-5">
        <input
          type="text"
          name="id"
          placeholder="type an id"
          className="border-2 rounded py-3 px-4 mr-2"
        />
        <button className="poke-button" type="submit">
          Search
        </button>
      </Form>

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
