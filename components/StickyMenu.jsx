import { useState } from "react";
import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const StickyMenu = () => {
  const [visible, setVisible] = useState(false);
  const titulo = [
    "DESARROLLO",
    "CONCEPTO",
    "PROMOCIONES",
    "CREDITO",
    "BLOG",
    "CONVENIO",
    "CONTACTO",
  ];
  const handleVisible = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };
  return (
    <>
      <div
        className="flex items-center justify-center flex-wrap p-6 bg-white lg:sticky top-0 z-40 "
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6 ml-6 border-2 border-black">
          <Image
            src="/logo-casas-ara@2x.png"
            alt="Picture of the author"
            width={140}
            height={70}
          />
        </div>
        <div className="md:hidden">
          <button onClick={handleVisible}>
            <GiHamburgerMenu className="w-10 h-10" />
          </button>
        </div>
        <div
          className={`w-full text-black block flex-grow md:flex md:items-center lg:w-auto ${
            visible ? "" : "hidden"
          }`}
        >
          adasd
          <div className="text-sm lg:flex-grow space-y-5">
            <ul className="MenuSectionContainer text-black text-center text-base">
              {titulo.map((nombre, index) => (
                <li key={index} className="sm:inline">
                  <a href="#" className="p-3 mt-4 hover:text-blue-500">
                    {nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col md:flex md:flex-row">
            <button className="btn-tel">
              <MdLocalPhone className="mx-4 w-6 h-6" />
              800 022 0581
            </button>
            <button className="btn-help ">¿Necesitas ayuda?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyMenu;
