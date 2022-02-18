import { Link } from "remix";

export default function Index() {
  return (
    <div className="w-full bg-black flex justify-center items-center text-white">
      <div className="text-center">
        <h1 className="mb-4 text-7xl font-bold">Poké App</h1>
        <Link className="poke-button" to="/pokemons">
          Click here
        </Link>
      </div>
    </div>
  );
}
