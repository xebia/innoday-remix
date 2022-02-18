import { Outlet } from "remix";

export default function Pokemons() {
  return (
    <div className="bg-blue-800 h-full">
      <div className="flex p-3 justify-center">
        <img
          src="https://user-images.githubusercontent.com/1771727/154697020-c14f2116-ea9a-4787-87a7-0c56f9bc5302.png"
          width={120}
        />
      </div>
      <Outlet />
    </div>
  );
}
