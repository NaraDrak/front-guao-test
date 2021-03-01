import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";

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
        
          <div className="flex-col block flex-grow lg:flex  lg:flex-row justify-center">
            <button className="btn-tel">
            <MdLocalPhone className="mx-4 mt-1"/>
            800 022 0581</button>
            <button className="btn-help">¿Necesitas ayuda?</button>
          </div>
        
      </div>
    </div>
  );
};

export default StickyMenu;
