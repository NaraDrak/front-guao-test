export default function NewsLetter() {
  return (
    <div className="flex justify-between bg-gray-100 mt-28">
      <div className="flex flex-col  ml-24">
        <h1 className="text-3xl font-bold text-black mt-6">NewsLetter</h1>
        <p>Suscribete a nuestro NEWSLETTER para ser el primero en recibir nuestras novedades cada mes</p>
      </div>
      
      <div>
          <button className="mr-8" htmlFor="">Escribe tu Email</button>
      </div>
    </div>
  );
}
