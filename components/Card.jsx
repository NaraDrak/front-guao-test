import Image from "next/image";
import { firstCardInfo } from "../PageData/data";

const Card = () => {
  return (
    <div className="w-12/12 min-w-min">
      {firstCardInfo.map((item, index) => {
        return (
          <div
            key={index}
            className="main-cardSection lg:block border-gray-300 border-2"
          >
            <Image
              src={item.imgSource}
              alt="Picture of the author"
              width={500}
              height={300}
            />
            <div className="p-4">
              <p className="sm:mt-4 text-red-500 text-lg font-bold">
                {item.title}
              </p>
              <p className="">{item.text}</p>
              <a
                href={item.url}
                className="hover:text-blue-300 text-red-300 text-lg font-bold "
              >
                Mas información
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
