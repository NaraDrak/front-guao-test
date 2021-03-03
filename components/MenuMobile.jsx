import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";

export default function MenuMobile() {
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
    <div className="flex flex-col justify-between items-center">
      <div>
        <div>
          <ul className="flex flex-col text-black text-center text-base">
            {titulo.map((nombre, index) => (
              <li key={index} className="sm:inline">
                <a href="#" className="p-3 mt-4 hover:text-blue-500">
                  {nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button className="btn-tel">
          <MdLocalPhone className="mx-4 w-6 h-6" />
          800 022 0581
        </button>
      </div>
      <div>
        <button className="btn-help ">¿Necesitas ayuda?</button>
      </div>
    </div>
  );
}
