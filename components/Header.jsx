import { useState } from "react";
import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
const StickyMenu = ({ cambiarVisible }) => {
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
    cambiarVisible();
  };

  return (
    <div className="sticky top-0 bg-white flex-wrap z-20 py-6">
      <div className="flex justify-between items-center px-10">
        <div className="flex items-center flex-shrink-0">
          <Image
            src="/logo-casas-ara@2x.png"
            alt="Picture of the author"
            width={157}
            height={70}
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handleVisible}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <GiHamburgerMenu color="black" />
          </button>
        </div>
        <div className="w-full flex-grow flex-wrap justify-center lg:flex lg:items-center lg:w-auto hidden">
          <ul className="text-black text-center text-base flex flex-grow justify-center">
            {titulo.map((nombre, index) => (
              <li key={index} className="">
                <a href="#" className="p-3 mt-4 hover:text-blue-500">
                  {nombre}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap">
            <button className="btn-tel mr-4">
              <MdLocalPhone className="mx-4 w-6 h-6" />
              800 022 0581
            </button>
            <button className="btn-help ">¿Necesitas ayuda?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyMenu;
