import Image from "next/image";

export default function ArenaPageFooter() {
  return (
    <footer className="relative w-full mt-40">
      <div className="absolute left-1/2 top-[-55] -translate-x-1/2 z-20 w-[205px] h-[204px]">
        <Image
          src="/footer-pokeball.png" 
          alt="Pokeball footer"
          width={205}
          height={204}
          className="object-contain"
        />
      </div>

      <div className="relative top-5 w-full h-[54px] z-10">
        <Image
          src="/footer-line.png" 
          alt="Footer Line"
          fill
          className="object-center object-cover"
        />
      </div>

      <div className="bg-white w-full py-30 text-[22px] text-center">
        <p className="font-nunito font-medium">
          ©Copyright Catalysis 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
}