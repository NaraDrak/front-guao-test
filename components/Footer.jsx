import FooterFirstCol from "./FooterFirstCol";
import FooterSecondCol from "./FooterSecondCol";
import FooterThirdCol from "./FooterThirdCol";
import FooterListsForthCol from "./FooterFourthCol";
import FooterFivethCol from "./FooterFivethCol";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full min-w-min bg-footer">
      <div className="text-white ml-24 mr-32 p-8">
        <div className="flex justify-start flex-col md:justify-around lg:flex-row ">
          <FooterFirstCol />
          <FooterSecondCol />
          <FooterThirdCol />
          <FooterListsForthCol />
          <FooterFivethCol />
        </div>
      </div>
      <div className="flex justify-start flex-col md:justify-around md:flex-row lg:flex-row text-white p-6 border-t mx-16 border-white space-y-4">
        <button className="h-11 w-11 bg-whatsapp rounded-full">
          <FaWhatsapp color="white" className="h-11 w-11 " />
        </button>
        <a href="" className="hover:text-blue-500">
          Terminos y condiciones
        </a>
        <a href="" className="hover:text-blue-500">
          Políticas y condiciones
        </a>
        <a href="" className="hover:text-blue-500">
          Consorcio ARA S.A DE C.V
        </a>
        <button className="flex bg-red-500 text-white rounded-3xl px-4 py-2 items-center">
          <AiOutlineMessage color="white" className="mr-4" />
          Ayuda
        </button>
      </div>
    </div>
  );
};
export default Footer;
