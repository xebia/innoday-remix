import Link from "next/link";
import { PokemonDetailsResponse } from "./types";

export const PokemonDetails = ({ data }: { data: PokemonDetailsResponse }) => (
  <div>
    <h1>Pokemon: {data?.name}</h1>
    <p>Height: {data?.height}</p>
    <Link href="/pokemons" passHref>
      <a>Back to all pokemons</a>
    </Link>
  </div>
);
