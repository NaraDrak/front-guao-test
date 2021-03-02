import FooterFirstCol from "./FooterFirstCol";
import FooterSecondCol from "./FooterSecondCol";
import FooterThirdCol from "./FooterThirdCol";
import FooterListsForthCol from "./FooterFourthCol";
import FooterFivethCol from "./FooterFivethCol";

const Footer = () => {
  return (
    <div className="w-12/12 min-w-min bg-footer border-green-500 border-2">
      <div className="text-white ml-24 mr-32 p-8 ">
        <div className="flex justify-start flex-col md:justify-around md:flex-row lg:flex-row ">
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
