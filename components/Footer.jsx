import Image from "next/image";

const Footer = () => {
  return (
    <div class="grid grid-cols-5 gap-4 text-black">
      <div class="flex justify-center"> 
      <Image
            src="/logo.png"
            alt="Picture of the author"
            width={144}
            height={80}
          />
      </div>
      <div class="col-span-1 bg-black text-white">
          Consorcio ARA
      </div>
      <div class="col-span-2 ...">7</div>
    </div>
  );
};
export default Footer;
