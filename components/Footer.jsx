import FooterFirstCol from "./FooterFirstCol";
import FooterSecondCol from "./FooterSecondCol";
import FooterThirdCol from "./FooterThirdCol";
import FooterListsForthCol from "./FooterFourthCol";
import FooterFivethCol from "./FooterFivethCol";

const Footer = () => {
  return (
    <div className="bg-footer text-white ">
      <div className="flex flex-col justify-around ml-8 md:flex-row lg:flex-row ">
        <FooterFirstCol />
        <FooterSecondCol />
        <FooterThirdCol />
        <FooterListsForthCol />
        <FooterFivethCol />
      </div>
    </div>
  );
};
export default Footer;
