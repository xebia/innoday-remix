import { Link, MetaFunction } from "remix";

export let meta: MetaFunction = () => ({
  title: "Poke app title",
  description: "Poke app description!",
});

export default function Index() {
  return (
    <div className="bg-red-700 w-10 h-9">
      <h1>Poké App</h1>
      <Link className="poke-button" to="/game">
        start
      </Link>{" "}
    </div>
  );
}
