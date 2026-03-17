import { useEffect, useState } from "react";
import Card from "./card";
import { usePokemonStore } from "../assets/store/pokeZustand"
import Logo from "../imagenes/search.svg"

function Pokemones({ tipoFiltro }) {
  const { Poke, setselectPoke, setPoke } = usePokemonStore((state) => state);
  
  const [PokeFiltrados, setPokeFiltrados] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el input

  // Obtener todos los Pokémon
  const obtenerPoke = async () => {
    try {
      const nuevosPokemos = [];
      for (let i = 1; i <= 151; i++) {
        const peticionPoke = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${i}`,
        );
        const pokemonJson = await peticionPoke.json();
        nuevosPokemos.push(pokemonJson);
      }

      setPoke(nuevosPokemos);
      setPokeFiltrados(nuevosPokemos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerPoke();
  }, []);

  // EFECTO COMBINADO: Filtra por TIPO y por NOMBRE
  useEffect(() => {
    if (!Poke) return;

    let resultados = Poke;

    //  Filtrar por TIPO 
    if (tipoFiltro) {
      resultados = resultados.filter((pokemon) =>
        pokemon.types.some((tipoInfo) => tipoInfo.type.name === tipoFiltro)
      );
    }

    //Filtrar por NOMBRE
    if (searchTerm.trim() !== "") {
      resultados = resultados.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setPokeFiltrados(resultados);
    
    console.log(`Filtrados: ${resultados.length} resultados`);
  }, [tipoFiltro, searchTerm, Poke]); // Dependencias: tipo, búsqueda y lista completa

  return (
    <div
      className="pokedex h-150 min-w-75 flex flex-col bg-white
      border-0 rounded-2xl shadow-[0_0_3rem_rgba(0,0,0,0.25)]"
    >
      <div className="contenedor-Header bg flex flex-col justify-center h-25 px">
        <div className="contenedor-header-h1">
          <h1 className="text-[22px] md:text-[28px] font-Lato font-bold text-center text-type-water">
            Find your favorite
            <br />
            Pokémon here
          </h1>
        </div>
        
       
        <div className="contenedor-header-input flex justify-center align-middle h-7 w-full">
          <img
            src={Logo}
            className="busqueda-logo"
            alt="Search"
          />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} 
            className="flex h-7.5 w-min-50 border border-black rounded-sm px-2"
          />
        </div>
        
         </div>  
      
      <div className="contenedores mt-3.5 grid grid-cols-2 overflow-y-auto gap-0.5">
        {PokeFiltrados?.length > 0 ? (
          PokeFiltrados.map((item) => (
            <Card
              manejarClick={() => {
                setselectPoke(item.name);
              }}
              key={item.id}
              name={item.name}
              type1={item.types[0].type.name}
              type2={item.types[1]?.type.name}
              img={item.sprites.other["official-artwork"].front_default}
            />
          ))
        ) : (
          // Mensaje si no hay resultados
          <p className="col-span-2 text-center text-gray-500 mt-4">
            No Pokémon found
          </p>
        )}
      </div>
    </div>
  );
}

export default Pokemones;