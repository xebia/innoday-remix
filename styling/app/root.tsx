import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from 'remix';
import type { MetaFunction } from 'remix';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export function CatchBoundary() {
  const caught = useCatch();
  console.log(caught);
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{caught.data || caught.statusText}</h1>
        <img src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148231-games-news-pokemon-go-for-apple-watch-dies-on-1-july-image1-gi8phcra7e-jpg.webp?v1" />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
