import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Remix Pokemon test app</h1>

      <Link to="/pokemons">Pokemons</Link>
    </div>
  );
}
