import { GetStaticPaths, GetStaticProps } from "next";
import { PokemonDetails } from "../../components/PokemonDetails/PokemonDetails";
import { PokemonDetailsResponse } from "../../components/PokemonDetails/types";

const PokemonDetailsPage = ({ data }: { data: PokemonDetailsResponse }) => (
  <PokemonDetails data={data} />
);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    {
      params: {
        id: "1",
      },
    },
    {
      params: {
        id: "2",
      },
    },
    {
      params: {
        id: "3",
      },
    },
    {
      params: {
        id: "4",
      },
    },
    {
      params: {
        id: "5",
      },
    },
    {
      params: {
        id: "6",
      },
    },
    {
      params: {
        id: "7",
      },
    },
    {
      params: {
        id: "8",
      },
    },
    {
      params: {
        id: "9",
      },
    },
    {
      params: {
        id: "10",
      },
    },
  ],
  fallback: "blocking",
});

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  let data: PokemonDetailsResponse | undefined;
  if (context.params?.id) {
    data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(
      (response) => response.json()
    );
  }

  return {
    props: {
      data,
    },
  };
};

export default PokemonDetailsPage;
