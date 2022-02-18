import { GetServerSideProps } from "next";
import { Pokemon, PokemonList } from "../../components/PokemonList/Pokemon";

const Pokemon = ({ data }: { data: Pokemon }) => <PokemonList data={data} />;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryParams = context.query;

  const limit = queryParams.limit ? parseInt(queryParams.limit as string) : 10;
  const offset = queryParams.offset
    ? parseInt(queryParams.offset as string)
    : 0;

  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((response) => response.json())
    .catch(() => {});

  return {
    props: {
      data,
    },
  };
};

export default Pokemon;
