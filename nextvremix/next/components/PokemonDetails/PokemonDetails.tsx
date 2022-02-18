import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PokemonDetailsResponse } from "./types";

const fetchPokemonDetails = async (id: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const PokemonDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [pokemonData, setPokemonData] = useState<PokemonDetailsResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetchPokemonDetails(id as string)
        .then((data) => {
          setPokemonData(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Pokemon: {pokemonData?.name}</h1>
      <p>Height: {pokemonData?.height}</p>
      <Link href="/pokemons" passHref>
        <a>Back to all pokemons</a>
      </Link>
    </div>
  );
};
