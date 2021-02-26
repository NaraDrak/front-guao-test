import Image from 'next/image'
export default function HeroSection() {
    return (
        <div className="relative">
            <h1>OPCIONES DE CREDITO</h1>
      <Image
        src="/banner.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
        </div>
    )
}
