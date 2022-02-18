import { Link, Links, Meta, Scripts, useCatch } from "remix";

export default function Error() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-full h-full bg-black flex justify-center items-center text-white">
          <div className="text-center">
            <h1 className="mb-4 text-7xl font-bold">
              Something went wrong :( <br />
              {caught.status} {caught.statusText}
            </h1>
            <Link className="poke-button" to="/">
              go to home
            </Link>
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
