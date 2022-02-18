import { useLoaderData, json } from "remix";
import { GraphQLClient, gql } from "graphql-request";
import { PageTitle, StoreBlockGrid, StoreImage } from "../../components";

interface Data {
  slug: string;
  storeCollection: {
    items: {
      slug: string;
      name: string;
      address: string;
      postalCode: string;
      city: string;
      country: string;
      image: {
        url: string;
        title: string;
      };
    }[];
  };
}

interface LoaderData {
  params: { storeSlug: string };
}

export let loader = async ({ params }: LoaderData) => {
  const contentful = new GraphQLClient(
    "https://graphql.contentful.com/content/v1/spaces/tat9577n8aak",
    {
      headers: {
        authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    }
  );

  const GetStoresQuery = gql`
    query {
      storeCollection(where: { slug:"${params.storeSlug}" }, preview: false, limit: 1) {
        items {
          slug
          name
          address
          city
          postalCode
          country
          image {
            url
            title
          }
        }
      }
    }
  `;

  const { storeCollection } = await contentful.request<Data>(GetStoresQuery);

  return json({ storeCollection });
};

export default function Index() {
  let { storeCollection }: Data = useLoaderData();

  const store = storeCollection.items[0];

  return (
    <>
      <PageTitle>{store.name}</PageTitle>

      <div style={{ maxWidth: "400px" }}>
        <StoreImage store={store} />
      </div>

      <p>
        <address>
          {store.address}
          <br />
          {store.postalCode} {store.city}
          <br />
          {store.country}
        </address>
      </p>
    </>
  );
}
