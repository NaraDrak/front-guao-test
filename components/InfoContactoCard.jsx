import { MdLocalPhone } from "react-icons/md";


const InfoContacto = () => {
  return (
    <div className="main-container">
      <div className="space-y-8">
        <h1 className="title-card-contacto">INFORMACIÓN DE CONTACTO</h1>
        <p className="contact-message">¿Tienes alguna duda? Nuestros asesores pueden ayudarte</p>
        <a  className="e-mail" href="/">contacto@ara.com.mx</a>
        <h1 className="call-us">¡Llamanos Gratis!</h1>
        <div className="tel-info-card ">
        <MdLocalPhone color="#FFFFFF" className="mx-4 mt-1"/>
          800 022 0581</div>
        <div className="monday-friday">Lunes a viernes 9:00 - 21:00</div>
        <div className="weekend">Fin de semana 10:00 - 18:00</div>
        <p className="abroad">En el extranjero</p>
        <div className="tel-abroad-card">800 022 0581</div>
        <div className="flex justify-center">
        <button className="btn-info-request-contact">SOLICITAR INFORMACIÓN</button>
        </div>
      </div>
    </div>
  );
};
export default InfoContacto;
