import LeftDraw from "./HeroInfo";
import RightDraw from "./InfoContactoCard";

export default function Hero() {
  return (
    <div className="bg-contain bg-no-repeat bg-hero-pattern md:flex-col lg:flex-row">
      <div className="flex flex-col  md:flex-row lg:flex-row justify-between">
        <LeftDraw />
        <RightDraw />
      </div>
    </div>
  );
}
