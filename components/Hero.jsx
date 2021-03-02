import LeftDraw from "./HeroInfo";
import RightDraw from "./InfoContactoCard";

export default function Hero() {
  return (
    <div className="w-full bg-contain bg-no-repeat bg-hero-pattern ">
      <div className="md:flex-col lg:flex-row">
        <div className="flex flex-col  md:flex-row lg:flex-row justify-between">
          <div className="w-9/12 mt-20">
            <LeftDraw />
          </div>
          <RightDraw />
        </div>
      </div>
    </div>
  );
}
