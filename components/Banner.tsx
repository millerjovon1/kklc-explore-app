import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative h-[400px] md:h-[500px] w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/public/your-banner-image.jpg')" }}>
        <div className="flex flex-col justify-center items-center text-white h-full bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to KKLC Explore</h1>
          <p className="mt-4 text-lg md:text-xl">Explore Kugenuma Kaigan’s Coastal Charm</p>
        </div>
      </div>
    </div>
  );
}
