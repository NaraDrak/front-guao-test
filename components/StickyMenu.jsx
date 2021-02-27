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
    <div className="Main-menu flex justify-around items-center border-4 border-gray-500">
      <div className="">
        <Image
          src="/logo-casas-ara@2x.png"
          alt="Picture of the author"
          width={140}
          height={70}
        />
      </div>
      <div>
        <ul className="MenusectionContainer text-gray-400 sm:self-center text-base">
          {titulo.map((nombre, index) => (
            <li key={index} className="sm:inline-block ">
              <a href="#" className="p-3 hover:text-black">
                {nombre}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div >
        <button className="btn-tel">800 022 0581</button>
        <button className="btn-help">Necesitas ayuda?</button>
      </div>
    </div>
  );
};

export default StickyMenu;
