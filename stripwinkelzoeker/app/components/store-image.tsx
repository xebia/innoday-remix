import styled from "styled-components";

interface StoreImageProps {
  store: {
    name: string;
    image: {
      url: string;
      title: string;
    };
  };
  width?: number;
  height?: number;
}

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StoreImage = ({
  store,
  width = 400,
  height = 250,
}: StoreImageProps) => (
  <ResponsiveImage
    src={`${store.image.url}?fm=jpg&w=${width}&h=${height}&fit=fill&q=80`}
    width={width}
    height={height}
    alt={store.image.title}
    loading="lazy"
  />
);
