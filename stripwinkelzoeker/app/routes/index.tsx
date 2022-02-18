import { useLoaderData, json, Link } from "remix";
import { GraphQLClient, gql } from "graphql-request";

const GetStoresQuery = gql`
  query {
    storeCollection {
      items {
        slug
        name
        city
      }
    }
  }
`;

interface Data {
  storeCollection: {
    items: {
      slug: string;
      name: string;
      description: string;
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
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Stripwinkelzoeker</h1>
      {data.storeCollection.items.map(({ slug, name }) => (
        <li key={slug}>
          <Link to={`/products/${slug}`} prefetch="intent">
            <a>{name}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}
