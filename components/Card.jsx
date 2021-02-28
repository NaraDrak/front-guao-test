import Image from "next/image";
import { firstCardInfo } from "../PageData/data";

const Card = () => {
  return (
    <div>
      {firstCardInfo.map((item, index) => {
        return (
          <div className="main-cardSection">
            <div key={index}>
              <Image
                className="relative"
                src={item.imgSource}
                alt="Picture of the author"
                width={400}
                height={250}
              />
              <div>
                <p>{item.title}</p>
                <p>{item.text}</p>
                <a href={item.url} className="hover:text-blue-300">
                  Mas información
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
