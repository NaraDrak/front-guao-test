import Image from "next/image";
import { footerLists } from "../PageData/data";
const Footer = () => {
  return (
    <div className="flex border-8 border-black text-white bg-gray-800 my-12 p-12">
      <div className="justify-center">
        <Image
          src="/whitelogo.png"
          alt="Picture of the author"
          width={144}
          height={80}
        />
      </div>
      <div className="flex">
        {footerLists.map((item, index) => {
          console.log(item);
          return (
            <div
              key={index}
              className="flex justify-around "
            >
              <h1 className="text-xl">{item.title}</h1>
              <ul className="flex flex-col">
                {item.label.map((item2, index) => {
                  return (
                    <li key={index} className="sm:inline-block">
                      <a href={item2.url} className="p-3 hover:text-black">
                        {item2.text}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
