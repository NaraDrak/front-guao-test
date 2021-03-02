import { FiSend } from "react-icons/fi";

export default function NewsLetter() {
  return (
    <div className="w-full bg-gray-100 mt-48 flex justify-center lg:inline-block">
      <div className="md:ml-24 md:mr-32 md:flex md:justify-between">
        <div className="flex flex-col justify-center -mb-25 md:mb-10 mt-6">
          <div className="text-3xl font-bold text-black mb-4">NewsLetter</div>
          <div>
            Suscribete a nuestro NEWSLETTER para ser el
            <div>primero en recibir nuestras novedades cada mes</div>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <button className="flex mr-8 border-2 h-7 border-red-600 " htmlFor="">
            <input type="text" placeholder="Escribe tu Email" />
            <FiSend color="#fff" className="bg-red-600 h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
