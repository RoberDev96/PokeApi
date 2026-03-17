import React from "react";
// import './src/app.css'

export const botones = [
  { tipo: "normal", color: "bg-type-normal", id: 1 },
  { tipo: "fire", color: "bg-type-fire", id: 2 },
  { tipo: "water", color: "bg-type-water", id: 3 },
  { tipo: "electric", color: "bg-type-electric", id: 4 },
  { tipo: "grass", color: "bg-type-grass", id: 5 },
  { tipo: "ice", color: "bg-type-ice", id: 6 },
  { tipo: "fighting", color: "bg-type-fighting", id: 7 },
  { tipo: "poison", color: "bg-type-poison", id: 8 },
  { tipo: "ground", color: "bg-type-ground", id: 9 },
  { tipo: "flying", color: "bg-type-flying", id: 10 },
  { tipo: "psychic", color: "bg-type-psychic", id: 11 },
  { tipo: "bug", color: "bg-type-bug", id: 12 },
  { tipo: "rock", color: "bg-type-rock", id: 13 },
  { tipo: "ghost", color: "bg-type-ghost", id: 14 },
  { tipo: "dragon", color: "bg-type-dragon", id: 15 },
  { tipo: "dark", color: "bg-type-dark", id: 16 },
  { tipo: "steel", color: "bg-type-steel", id: 17 },
  { tipo: "fairy", color: "bg-type-fairy", id: 18 },
];


 

function Header(props) {
  return (
    <>
      <div
        className="contenedor h-150 min-w-75 flex flex-col bg-white
      border-0 rounded-2xl shadow-[0_0_3rem_rgba(0,0,0,0.25)]"
      >
       <div>
          <h1 className="mt-6 ml-3.5 font-Lato font-bold text-2xl">Pokedex</h1>
        </div>
        <div
          className="contenedor-botones grid grid-cols-2 overflow-y-auto justify-items-center
         gap-2.5 mt-8"
        >
          {botones.map((boton) => (
            <button
              key={boton.id}
               onClick={() => props.filtrar(boton.tipo)}
              className={`relative ${boton.color} h-12.5 w-32 rounded-2xl shadow-sm
    text-left p-1 text-amber-50 font-bold uppercase text-xs overflow-hidden`}
            >
              {/* Imagen de fondo con clases específicas */}
              <div
                className="absolute inset-0 bg-[url('/src/imagenes/pokeball.svg')] 
    bg-no-repeat bg-right bg-size-[70px_60px] opacity-50 mix-blend-overlay"
              ></div>

              {/* Contenido del botón */}
              <span className="relative z-10 flex justify-between items-center">
                {boton.tipo}
              </span>
            </button>
            ))}
        </div>
      </div>
    </>
  );
}

export default Header;
