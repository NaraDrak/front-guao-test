import Image from "next/image";
import { TiArrowBack } from "react-icons/ti";

export default function HeroInfo() {
  return (
    <div className="w-9/12 min-w-min ml-24">
      <div className="flex items-center">
        <TiArrowBack color="#000" />
        <p className="back-to-credit mb-8">Regresar a creditos</p>
      </div>
      <h1 className="credit-options">Opciones de crédito</h1>
      <p className="invesion-p mb-16">Tu mejor inversión en casa ARA</p>
      <div>
        <Image
          src="/img-04.jpg"
          alt="Picture of the author"
          width={1000}
          height={500}
        />
      </div>
      <h1 className="ara-account">Cuenta con ARA</h1>
      <p className="text-base">
        Si necesitas un credito para comprar una casa o departamento pero no
        tienes acceso a infonavit o Fovissste, relajate. Cuenta con Ara. te
        ofrecemos un credito para financiar la compra de tu casa, si necesidad
        de ahorro ni comprobar ingresos. Cuenta con ara es nuestro programa de
        credito avalado por las instituciones financieras mas importantes del
        pais, la cual te permite adquirir una casa por un valor de hasta
        $2,000,000 pesos.
      </p>
      <button className="info-request">Solicitar información</button>
    </div>
  );
}
