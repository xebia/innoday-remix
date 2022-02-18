import { Link } from "remix";

export default function Index() {
  return (
    <div className="w-full h-full bg-red-800 flex justify-center items-center text-white">
      <div className="text-center">
        <img
          src="https://user-images.githubusercontent.com/1771727/154697020-c14f2116-ea9a-4787-87a7-0c56f9bc5302.png"
          width={500}
        />
        <Link className="poke-button" to="/pokemons">
          Click here
        </Link>
      </div>
    </div>
  );
}
