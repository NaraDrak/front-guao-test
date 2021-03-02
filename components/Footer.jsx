import FooterFirstCol from "./FooterFirstCol";
import FooterSecondCol from "./FooterSecondCol";
import FooterThirdCol from "./FooterThirdCol";
import FooterListsForthCol from "./FooterFourthCol";
import FooterFivethCol from "./FooterFivethCol";

const Footer = () => {
  return (
    <div className="bg-footer">

    <div className="text-white ml-24 mr-32 p-8">
      <div className="flex flex-col justify-around md:flex-row lg:flex-row ">
        <FooterFirstCol />
        <FooterSecondCol />
        <FooterThirdCol />
        <FooterListsForthCol />
        <FooterFivethCol />
      </div>
    </div>

    </div>
  );
};
export default Footer;
