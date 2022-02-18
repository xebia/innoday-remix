import { Fragment } from "react";
import styles from "./Pokemon.module.css";

import Link from "next/link";
import { useRouter } from "next/router";

export interface Pokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

// function to get the pokemon id from the url https://pokeapi.co/api/v2/pokemon/1/
const getPokemonId = (url: string): string => {
  const id = url.split("/").slice(-2)[0];
  return id;
};

export const PokemonList = ({ data }: { data: Pokemon }) => {
  const router = useRouter();

  const limit = router.query.limit
    ? parseInt(router.query.limit as string)
    : 10;

  const offset = router.query.offset
    ? parseInt(router.query.offset as string)
    : 0;

  return (
    <div className={styles.flex}>
      <h1>All Pokemon</h1>
      <ul>
        {data?.results.map((pokemon) => (
          <Fragment key={pokemon.name}>
            {getPokemonId(pokemon.url) && (
              <li>
                <Link
                  passHref
                  href={`/pokemons/${getPokemonId(pokemon.url) as string}`}
                >
                  <a href={pokemon.url}>{pokemon.name}</a>
                </Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
      <div className={styles.row}>
        <Link
          href={{
            query: {
              limit,
              offset: offset - limit > 0 ? offset - limit : 0,
            },
          }}
          passHref
        >
          <a className={offset === 0 ? styles.disabled : ""}>Previous</a>
        </Link>
        <Link
          href={{
            query: {
              limit,
              offset: offset + limit,
            },
          }}
          passHref
        >
          <a>Next</a>
        </Link>
        <div className={styles.column}>
          <label htmlFor="limit">
            Limit:
            <select
              id="limit"
              value={limit}
              onChange={(event) =>
                router.push({
                  query: {
                    limit: event.target.value,
                    offset,
                  },
                })
              }
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};
