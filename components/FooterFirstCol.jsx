import Image from "next/image";

export default function FooterFirstCol() {
  return (
    <div className="-ml-16">
      <Image
        src="/whitelogo.png"
        alt="Picture of the author"
        width={150}
        height={80}
      />
      <div className="iconContaiener">
        <Image
          src="/facebook.svg"
          alt="Picture of the author"
          width={36}
          height={36}
        />
        <Image
          src="/facebook.svg"
          alt="Picture of the author"
          width={36}
          height={36}
        />
        <Image
          src="/facebook.svg"
          alt="Picture of the author"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
}
