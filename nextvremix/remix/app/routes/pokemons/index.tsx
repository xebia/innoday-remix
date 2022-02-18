import { Link, LoaderFunction, useLoaderData, useSearchParams } from "remix";

import type { PokemonsResponse } from "~/pokemon";
import { getPokemons } from "~/pokemon";
import pokemonStyles from "~/styles/pokemon.css";
import React from "react";

export const links = () => {
  return [{ rel: "stylesheet", href: pokemonStyles }];
};

export let loader: LoaderFunction = async ({ request }) => {
  console.log(request);
  let url = new URL(request.url);
  let limit = Number.parseInt(url.searchParams.get("limit") || "10", 10);
  let offset = Number.parseInt(url.searchParams.get("offset") || "0", 10);
  return getPokemons(limit, offset);
};

export default function Pokemons() {
  const pokemonResponse = useLoaderData<PokemonsResponse>();
  const [searchParams, setSearchParams] = useSearchParams();
  let limit = Number.parseInt(searchParams.get("limit") || "10", 10);
  let offset = Number.parseInt(searchParams.get("offset") || "0", 10);

  const updateLimit: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    setSearchParams({ limit: event.target.value, offset: offset.toString() })
  }

  const computedOffset = offset - limit < 0 ? 0 : offset - limit;
  console.log("Limit and offset", limit, offset);
  return (
    <div>
      <h1>Pokemons</h1>
      <ul>
        {pokemonResponse.results.map(pokemon => (
          <li key={pokemon.name}>
            <Link to={pokemon.name}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>

      <div>
        <Link className={offset === 0 ? 'disabled button' : 'button'} to={{ pathname: '/pokemons', search: `limit=${limit}&offset=${computedOffset}` }}>previous</Link>
        <Link className={'button'} to={{ pathname: '/pokemons', search: `limit=${limit}&offset=${offset + limit}` }}>next</Link>
        <select value={limit} onChange={updateLimit}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
          <option value={40}>40</option>
        </select>
      </div>
    </div>
  );
}
