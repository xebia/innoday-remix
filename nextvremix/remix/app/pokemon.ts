export interface PokemonsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
}

export interface PokemonResponse {
  name: string;
  weight: number;
}

export interface PokemonResult {
  name: string;
  url: string;
}

export const getPokemons = async (limit = 10, offset = 0): Promise<PokemonsResponse> => {
  console.log("getPokemons called with", limit, offset)
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    return await response.json() as Promise<PokemonsResponse>;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPokemon = async (name: string): Promise<PokemonResponse> => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );

    return await response.json() as Promise<PokemonResponse>;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
