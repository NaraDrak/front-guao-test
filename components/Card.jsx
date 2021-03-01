import Image from "next/image";
import { firstCardInfo } from "../PageData/data";

const Card = () => {
  return (
    <>
      {firstCardInfo.map((item, index) => {
        return (
          <div key={index} className="main-cardSection lg:block">
              <Image
                src={item.imgSource}
                alt="Picture of the author"
                width={500}
                height={300}
              />
          
            <p className="sm:mt-4">{item.title}</p>
            <p className="max-w-prose" >{item.text}</p>
            <a href={item.url} className="hover:text-blue-300">
              Mas información
            </a>
            </div>  
        );
      })}
    </>
  );
};
export default Card;
