import Image from "next/image";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export default function FooterFirstCol() {
  return (
    <div className="-ml-14">
      <Image
        src="/whitelogo.png"
        alt="Picture of the author"
        width={150}
        height={80}
      />
      <div className="flex py-9">
        <a href="">
          <FaFacebookSquare className="h-6 w-6 mx-2" />
        </a>
        <a href="">
          <FaYoutubeSquare className="h-6 w-6 mx-2" />
        </a>
        <a href="">
          <FaTwitterSquare className="h-6 w-6 mx-2" />
        </a>
      </div>
      <div className="iconContaiener"></div>
    </div>
  );
}
