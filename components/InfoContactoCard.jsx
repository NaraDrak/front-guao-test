import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";


const InfoContacto = () => {
  return (
    <div>
      <div className="md:hidden flex justify-center mt-80 bg-black">
      <button className="md:hidden  bg-red-500 rounded-3xl text-white p-4">
        Dejanos tus datos ¡Nosotros te llamamos!
      </button>
      </div>
      <div className="main-container">
        <div className="space-y-8">
          <div className="flex ">
            <div className="title-card-contacto mt-2">
              INFORMACIÓN DE CONTACTO
            </div>
            <Image
              src="/ara-icon.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
          <p className="contact-message">
            ¿Tienes alguna duda? Nuestros asesores pueden ayudarte
          </p>
          <a className="e-mail" href="/">
            contacto@ara.com.mx
          </a>
          <h1 className="call-us">¡Llamanos Gratis!</h1>
          <div className="tel-info-card ">
            <MdLocalPhone color="#FFFFFF" className="mx-4 mt-1" />
            800 022 0581
          </div>
          <div className="monday-friday">
          <AiFillClockCircle className="mx-4 mt-1"/>
            Lunes a viernes 9:00 - 21:00</div>
          <div className="weekend">
          <AiFillClockCircle className="mx-4 mt-1"/>
          Fin de semana 10:00 - 18:00</div>
          <p className="abroad">En el extranjero</p>
          <div className="tel-abroad-card">
          <MdLocalPhone color="#000" className="mx-4 mt-1" />
          800 022 0581
          </div>
          <div className="flex justify-center">
            <button className="btn-info-request-contact">
              SOLICITAR INFORMACIÓN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoContacto;
