import Hero from "../components/Hero";
import CardSection from "../components/CardSection";
import BlogSection from "../components/BlogSection";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <>
      {/* estilizar este div, para que contenga los márgenes  de la página usando CSS o TW */}
      <Hero />
      <div className="mx-24">
        <CardSection />
      </div>

      <div className="bg-gray-100">
        <div className="mx-24">
          <BlogSection />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
