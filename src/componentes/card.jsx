export default function Card({name,type1,type2,img,manejarClick}) {
  return (
    <div onClick={manejarClick}
      className={`pokemon m-3 h-25 w-35 rounded-2xl bg-type-${type1} flex justify-between items-center`}
    >
      <div
        className="identidad flex flex-col ml-1 gap-1.5 inset-0 bg-[url('/src/imagenes/pokeball.svg')] 
    bg-no-repeat bg-left bg-size-[60px_60px] opacity-50 mix-blend-overlay"
      >
        <div className="pokemon-contenedor">
          <p className={`font-Lato font-bold text-sm uppercase  text-white`}>
            {name}
          </p>
        </div>
        <div className="tipo flex flex-col gap-0.5">
          <div className="tipo1 flex flex-col gap-1">
            <span className="bg-gray-200 px-2 py-0.5 rounded-full text-xs capitalize w-fit">
              {type1}
            </span>

            {type2 && (
              <span className="bg-gray-200 px-2 py-0.5 rounded-full text-xs capitalize w-fit">
                {type2}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="foto-pokemon">
        <img className="h-15 w-15" src={img} alt={name} />
      </div>
    </div>
  );
}
