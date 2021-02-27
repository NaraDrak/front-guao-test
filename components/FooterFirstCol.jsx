import Image from "next/image";

export default function FooterFirstCol() {
    return (
        
        <div className="primeraColumna">
          <Image
            className="m-3"
            src="/whitelogo.png"
            alt="Picture of the author"
            width={150}
            height={80}
          />
          <div className="iconContaiener">
            <Image
              className=""
              src="/facebook.svg"
              alt="Picture of the author"
              width={36}
              height={36}
            />
            <Image
              className=""
              src="/facebook.svg"
              alt="Picture of the author"
              width={36}
              height={36}
            />
            <Image
              className=""
              src="/facebook.svg"
              alt="Picture of the author"
              width={36}
              height={36}
            />
          </div>
        </div>
        )
}
