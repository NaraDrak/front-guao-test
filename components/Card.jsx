const Card = () => (
  <div class="grid grid-rows-2 border-2 border-black ">
    <div class="row-span-2 col-span-1 bg-red-200">
        <img src="/img-03.jpg"  alt=""/>
    </div>
    <div class="row-span-2 col-span-1 bg-red-200">
        <h1 className="m-2">Titulo que no alcanzo a ver</h1>
        <p className="m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatibus quaerat voluptatum possimus, hic quo natus accusamus molestiae non nemo vitae? Tempora fuga nulla, consectetur amet autem quis? Iusto, harum.</p>
        <a className="m-2" href="asda">Un link que no alcanzo a ver</a>
    </div>
  </div>
);
export default Card;
