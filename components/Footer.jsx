import FooterFirstCol from "./FooterFirstCol";
import FooterSecondCol from "./FooterSecondCol";
import FooterThirdCol from "./FooterThirdCol";
import FooterListsForthCol from "./FooterFourthCol";
import FooterFivethCol from "./FooterFivethCol";

const Footer = () => {
  return (
    <div className="bg-gray-800 mt-12 pt-7 text-white ">
      <div className="flex justify-around">
        <FooterFirstCol />
        <FooterSecondCol />
        <FooterThirdCol />
        <FooterListsForthCol />
        <FooterFivethCol />
      </div>
      <div className="flex">asdasd</div>
    </div>
  );
};
export default Footer;
