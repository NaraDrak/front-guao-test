import LeftDraw from "./HeroInfo";
import RightDraw from "./InfoContactoCard";

export default function Hero() {
  return (
    <div className="w-full bg-contain bg-no-repeat bg-hero-pattern">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between">
        <LeftDraw />
        <RightDraw />
      </div>
    </div>
  );
}
