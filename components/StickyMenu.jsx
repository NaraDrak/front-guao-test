import Image from "next/image";

const StickyMenu = () => {
  const titulo = [
    "DESARROLLO",
    "CONCEPTO",
    "PROMOCIONES",
    "CREDITO",
    "BLOG",
    "CONVENIO",
    "CONTACTO",
  ];
  return (
    <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-white lg:sticky top-0 z-40">
      <div className="flex items-center flex-shrink-0 text-white mr-6 ml-6">
        <Image
          src="/logo-casas-ara@2x.png"
          alt="Picture of the author"
          width={140}
          height={70}
        />
      </div>
      <div className="block lg:hidden">
        {/* Quitar los comentarios para activar el boton de menu */}
     {/*  <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button> */}
      </div>
      <div className="w-full text-black block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <ul
            className="MenuSectionContainer text-black text-center text-base"
          >
            {titulo.map((nombre, index) => (
              <li key={index} className="sm:inline-block ">
                <a href="#" className="p-3 hover:text-blue-500">
                  {nombre}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
        
          <div className="w-full flex-col block flex-grow lg:flex lg:items-center lg:w-auto lg:flex-row justify-center">
            <button className="btn-tel">800 022 0581</button>
            <button className="btn-help">Necesitas ayuda?</button>
          </div>
        
      </div>
    </div>
  );
};

export default StickyMenu;
