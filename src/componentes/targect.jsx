import React from "react";
import InfoPokemon from "./infoPokemon";

function Targect() {
  return (
    <>
      <div className="pokedex h-150 min-w-75 flex flex-col bg-white
         border-0 rounded-2xl shadow-[0_0_3rem_rgba(0,0,0,0.25)]">
          <InfoPokemon/>
         </div>
    </>
  );
}

export default Targect;
