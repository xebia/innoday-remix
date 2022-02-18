import styled from "styled-components";
import { Link } from "remix";

const SiteTitle = styled(Link)`
  font-family: var(--font-title);
  color: white;
  font-style: italic;
  font-size: 1.4rem;
  margin: 0;
  font-weight: 300;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  strong {
    font-weight: bold;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const Logo = () => (
  <SiteTitle to="/">
    <strong>Strip</strong>winkelzoeker
  </SiteTitle>
);
