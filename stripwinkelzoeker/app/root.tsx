import styled, { createGlobalStyle } from "styled-components";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { Container, Navigation } from "./components";

export const meta: MetaFunction = () => {
  return { title: "Stripwinkelzoeker Remix edition" };
};

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #004e98;
    --color-primary-dark: #003668;
    --color-primary-light: #3a6ea5;
    --color-light: #fcfcfc;
    --color-accent: #ff6700;
    --color-accent-dark: #c24e00;
    --color-white: #ffffff;
    --color-black: #333333;

    --font-title: "Poppins", sans-serif;
    --font-body: "Lora", sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Lora", sans-serif;
    font-weight: 300;
    color: var(--color-black);
    line-height: 1.5;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  section {
    margin: 2rem 0;
  }

  * {
    box-sizing: border-box;
  }

  input {
    font-family: "Poppins", sans-serif;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    line-height: 1.2;
  }

`;

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled(Container)`
  margin-bottom: 4rem;
`;

export default function App() {
  return (
    <html lang="en">
      <GlobalStyle />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&amp;family=Poppins:wght@300;500;600&amp;display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>
      <body>
        <LayoutContainer>
          <Navigation />
          <Main>
            <Outlet />
          </Main>
        </LayoutContainer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
