import { useLoaderData } from "remix";
import { getPokemonById } from "~/api/pokemons";
import { PokemonDetails } from "~/types";

export const loader = async ({ params }: { params: { id: string } }) => {
  const pokemon = await getPokemonById(params.id);
  return pokemon;
};

export default function Pokemon() {
  const pokemon = useLoaderData<PokemonDetails>();

  return (
    <div className="bg-gray-200 h-full p-10 flex flex-col items-center min-w-min">
      <div className="bg-white rounded-xl flex flex-col p-10">
        <img src={pokemon.sprites.front_default} width="200" height="200" />
        <h1 className="font-bold">{pokemon.name}</h1>
        <hr />

        <h3 className="font-bold mt-10">Abilities</h3>
        <ul className="list-disc">
          {pokemon.abilities.map((item) => (
            <li>{item.ability.name}</li>
          ))}
        </ul>

        <h3 className="font-bold mt-10">Forms</h3>
        <hr />
        <ul className="list-disc">
          {pokemon.forms.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
