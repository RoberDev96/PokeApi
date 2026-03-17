import "./App.css";
import "tailwindcss";
import Header from "./componentes/header";
import Pokemones from "./componentes/pokemons";
import { useState } from "react";
import Targect from "./componentes/targect";

function App() {
    const [selectTipo, setSelectTipo] = useState(null);

  const handleFiltrar = (tipo) => {
    setSelectTipo(tipo);
  };
  return (
    <>
      <main className="main grid grid-cols-1 
      md:grid-cols-2 xl:grid-cols-3 m-1.5 align-middle gap-10">
        <Header filtrar={handleFiltrar} />
        <Pokemones tipoFiltro={selectTipo}/>
        <Targect/>
      </main>
    </>
  );
}

export default App;
