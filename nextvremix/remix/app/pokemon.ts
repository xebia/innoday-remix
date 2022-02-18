export interface PokemonResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export const getPokemons = async (): Promise<PokemonResponse> => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );

    return await response.json() as Promise<PokemonResponse>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
