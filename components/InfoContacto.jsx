import Image from "next/image";

const InfoContacto = () => {
    return(
  <div>
    <h1 className="title-card-contacto">INFORMACIÓN DE CONTACTO</h1>
    <p>¿Tienes alguna duda? Nuestros asesores pueden ayudarte</p>
    <a href="/">contacto@ara.com.mx</a>
    <h1 className="call-us">¡Llamanos Gratis!</h1>
    <div>
    <div>
        <button>800 022 0581</button>
        <button>Lunes a viernes 9:00 - 21:00</button>
        <button>Fin de semana 10:00 - 18:00</button>
        <p>En el extranjero</p>
        <button></button>
    </div>
    </div>
    </div>
    )
}
export default InfoContacto;
