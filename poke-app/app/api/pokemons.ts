import { PokemonApi, PokemonDetails } from "~/types";

export const getAllPokemons = async () => {
  try {
    const pokemons: PokemonApi = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
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
