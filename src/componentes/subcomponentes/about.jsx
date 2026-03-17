import Pokemones from "../pokemons";


function About(props) {
  return (
    <main className="flex flex-col p-5 gap-4">
      <div className="info">
        <div className="flex justify-between px-10 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] rounded-md">
          <div className="weight font-Lato text-gray-400">
            weight <br />
            <span className="font-Lato text-black">{props.weight}kg</span>
          </div>
          <div className="height text-gray-400">
            height <br />
            <span className="font-Lato text-black">{props.height}cm</span>
          </div>
        </div>

        </div>
    </main>
  );
}

export default About;