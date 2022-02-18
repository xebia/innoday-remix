import { useLoaderData, json } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { StoreBlock, StoreBlockGrid } from "../components";

const GetStoresQuery = gql`
  query {
    storeCollection {
      items {
        slug
        name
        city
        image {
          url
          title
        }
      }
    }
  }
`;

interface Data {
  storeCollection: {
    items: {
      slug: string;
      name: string;
      city: string;
      image: {
        url: string;
        title: string;
      };
    }[];
  };
}

export let loader = async () => {
  const contentful = new GraphQLClient(
    "https://graphql.contentful.com/content/v1/spaces/tat9577n8aak",
    {
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  const { storeCollection } = await contentful.request<Data>(GetStoresQuery);

  return json({ storeCollection });
};

export default function Index() {
  let data: Data = useLoaderData();

  return (
    <StoreBlockGrid>
      {data.storeCollection.items.map((store) => (
        <StoreBlock store={store} key={store.slug} />
      ))}
    </StoreBlockGrid>
  );
}
