import { Link } from "remix";

export default function Index() {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center text-white">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold">
          This is my custom 404 page :){" "}
        </h1>
        <Link className="poke-button" to="/">
          go to home
        </Link>
      </div>
    </div>
  );
}
