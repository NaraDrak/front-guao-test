import Card from "../components/Card";

const BlogSection = () => {
  return (
    <div className="w-full min-w-min">
      <div className=" md:items-center">
        <h1 className="text-blue-800 font-bold text-3xl pb-4">
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
  );
};
export default BlogSection;
