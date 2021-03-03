import Card from "../components/Card";
const CardSection = () => {
  return (
    <div className="w-full min-w-min my-28">
      <div className="">
        <div className="flex flex-col justify-around md:flex-col lg:flex-row mt-4 gap-24 ">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default CardSection;
