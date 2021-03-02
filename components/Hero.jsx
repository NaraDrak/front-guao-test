import LeftDraw from "./HeroInfo";
import RightDraw from "./InfoContactoCard";

export default function Hero() {
  return (
    <div className="w-full min-w-min bg-contain bg-no-repeat bg-hero-pattern ">
      <div className="md:flex-col lg:flex-row ml-24 mr-32">
        <div className="flex flex-col  md:flex-row lg:flex-row justify-between">
          <LeftDraw />
          <RightDraw />
        </div>
      </div>
    </div>
  );
}
