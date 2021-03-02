import Card from "../components/Card";

const BlogSection = () => {
  return (
    <div className="bg-gray-100">
    <div className="sm:ml-11 sm:mr-11 md:ml-24 md:mr-32">
      <div className="flex md:mt-56">
        <div className=" md:items-center">
          <h1 className="text-blue-800 font-bold text-3xl mb-4 mt-16">
            Nuestro Blog ARA
          </h1>
          <a className="text-red-600 text-base text-bold" href="/about">
            Ver todos los articulos
          </a>
          <div className="flex flex-col justify-around md:flex-col lg:flex-row mt-4 gap-24">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default BlogSection;
