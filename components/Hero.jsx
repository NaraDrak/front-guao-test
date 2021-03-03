import LeftDraw from "./HeroInfo";
import RightDraw from "./InfoContactoCard";

export default function Hero() {
  return (
    <div className="bg-contain bg-no-repeat bg-hero-pattern">
      <div className="flex flex-col md:flex-row lg:flex-row lg:pr-0 pr-16">
        <LeftDraw />

        <RightDraw />
      </div>
    </div>
  );
}
