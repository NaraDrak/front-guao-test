import Image from "next/image";

const StickyMenu = () => {
  const titulo = ["DESARROLLO", "CONCEPTO", "PROMOCIONES", "CREDITO", "BLOG", "CONVENIO", "CONTACTO"];

  return(
    <div className="bg-white">
      <div className="container border-2">
        <div className="sm:flex space-x-16 items-center border-2">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={144}
            height={80}
          />
          <ul className="text-gray-400 sm:self-center text-base">
            {titulo.map((nombre, index) => (
              <li key={index} className="sm:inline-block">
                <a href="#" className="p-3 hover:text-black">
                  {nombre}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-2 border-gray-300 rounded-lg mt-2 mb-2 w-32">
            <p className="ml-1">800 022 0581</p>
          </div>
          <div className="flex items-center">
            <button className="btn-help">¿Necesitas asesoria?</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyMenu;
