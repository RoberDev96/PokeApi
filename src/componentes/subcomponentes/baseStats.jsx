function Stats(props) {
  return (
    <main>
      <div className="stats flex flex-col justify-around gap-2.5 px-1.5 mt-7 ">
<div className="HP font-Lato px-2 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] 
rounded-md flex justify-between items-center"> HP <span className="h-2 w-28 ml-24 bg-gray-400">
    <div className={`h-2 bg-type-${props.bg}`}
    style={{width: `${(props.hp / 200)*100}%`}}></div></span><span>{props.hp}</span></div>

<div className="Attack font-Lato px-2 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] 
rounded-md flex justify-between items-center">Attack <span className="h-2 w-28 ml-18 bg-gray-400">
    <div className={`h-2 bg-type-${props.bg}`}
    style={{width: `${(props.attack / 200)*100}%`}}></div></span><span>{props.attack}</span></div>


<div className="Defensa font-Lato px-2 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] 
rounded-md flex justify-between items-center">Defensa <span className="h-2 w-28 ml-14 bg-gray-400">
    <div className={`h-2 bg-type-${props.bg}`}
    style={{width: `${(props.def / 200)*100}%`}}></div></span><span>{props.def}</span></div>


<div className="Special-Att font-Lato px-2 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] 
rounded-md flex justify-between items-center">Special-Attack <span className="h-2 w-28 ml-3 bg-gray-400">
    <div className={`h-2 w-[${props.special_Atk}%] bg-type-${props.bg}`}
    style={{width: `${(props.special_Atk / 200)*100}%`}}></div></span><span>{props.special_Atk}
    </span></div>


<div className="Special-Def font-Lato px-2 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] 
rounded-md flex justify-between items-center">Special-Defensa <span className="h-2 w-28 bg-gray-400">
    <div className={`h-2 w-[${props.special_def}%] bg-type-${props.bg}`}
    style={{width: `${(props.special_def / 200)*100}%`}}></div></span><span>{props.special_def}
    </span></div>


<div className="Speed font-Lato px-2 shadow-[-10px_20px_20px_-5px_rgba(156,163,175,0.3)] 
rounded-md flex justify-between items-center">Speed <span className="h-2 w-28 ml-18 bg-gray-400">
    <div className={`h-2 bg-type-${props.bg}`}
    style={{width: `${(props.speed / 200)*100}%`}}></div></span><span>{props.speed}</span></div>

      </div>
    </main>
  );
}

export default Stats;
