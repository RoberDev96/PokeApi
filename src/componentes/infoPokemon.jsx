
import { useState, useEffect, useCallback } from "react";
import About from "./subcomponentes/about";
import Stats from "./subcomponentes/baseStats";
// import Pokemones from "./pokemons";
import { usePokemonStore } from "../assets/store/pokeZustand";  

function InfoPokemon() {
  const { Poke, selectPoke } = usePokemonStore((state) => state);
  
  const [selectTab, setSelectTab] = useState("About");
  const [infoPoke, setInfoPoke] = useState(null);

  const handerclick = (tab) => {
    setSelectTab(tab);
  };

  const getPokemon = useCallback((name) => {
    try {
      return Poke?.find(pokemon => pokemon.name === name);
    } catch (error) {
      console.log(error);
    }
  }, [Poke]);

  const parametros = () => {
    switch (selectTab) {
      case "About":
        return <About weight = {infoPoke.weight}
                      height = {infoPoke.height}/>;
      case "Base Stats":
        return <Stats bg = {infoPoke.types[0]?.type.name}
                      hp = {infoPoke.stats[0].base_stat} 
                      attack = {infoPoke.stats[1].base_stat}
                      def = {infoPoke.stats[2].base_stat}
                      special_Atk = {infoPoke.stats[3].base_stat}
                      special_def = {infoPoke.stats[4].base_stat} 
                      speed = {infoPoke.stats[5].base_stat}/>;
            default:
        return <About />;
    }
  };

  useEffect(() => {
    if (selectPoke) {
      setInfoPoke(getPokemon(selectPoke));
    }
  }, [selectPoke, getPokemon]);

  if (!infoPoke) {
    return <div className="p-3 font-Lato font-bold">Seleccione un pokemon</div>; // O un componente de carga
  }

  return (
    <main className={`flex flex-col h-screen bg-type-${infoPoke.types[0]?.type.name}`}>
      <div className="contenedor-top flex justify-around mt-20">
        <div className="textPrincipal ml-5">
          <div>
            <p className="nombre text-2xl uppercase font-Lato font-bold text-white">
              {infoPoke?.name}
            </p>
          </div>
          <div>
            <div className="font-Lato text-l uppercase text-white">
              <span>{infoPoke.types[0]?.type.name}</span>
              {infoPoke.types[1] && (
                <span> {infoPoke.types[1].type.name}</span>
              )}
            </div>
          </div>
        </div>
        <div className="id font-Lato">
          <p className="text-white font-bold">#{infoPoke.id}</p>
        </div>
      </div>
      
      <div className="img flex justify-center w-full -mb-7 z-10 relative">
        <img
          className="h-40 w-40"
          src={infoPoke?.sprites?.front_default}
          alt={infoPoke?.name}
        />
      </div>
      
      <section className="attributes w-full flex-1 rounded-t-4xl bg-white shadow-[0_-10px_15px_-5px_rgba(0,0,0,0.2)]">
        <nav className="h-10 w-full mt-7 p-10 font-Lato text-gray-400 text-sm">
          <ul className="flex justify-between cursor-pointer">
            <li
              onClick={() => handerclick("About")}
              className={`${
                selectTab === "About"
                  ? "text-blue-600 font-bold border-b-2 border-blue-600 scale-100"
                  : ""
              }`}
            >
              About
            </li>
            <li
              onClick={() => handerclick("Base Stats")}
              className={`${
                selectTab === "Base Stats"
                  ? "text-blue-600 font-bold border-b-2 border-blue-600 scale-100"
                  : ""
              }`}
            >
              Base Stats
            </li>
           </ul>
        </nav>
        {parametros()}
      </section>
    </main>
  );
}

export default InfoPokemon;