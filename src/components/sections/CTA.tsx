import Image from "next/image";

export default function CTA() {
  return (
    <section id="cta" className="relative pt-32 pb-0 bg-[#f5eaea]"> 
      <div className="w-full relative">

        <div className="absolute -top-12 left-0 right-0 h-20 bg-[#FF94a5] rounded-t-[3rem] border-t-2 border-x-2 border-black z-0" />
        
        <div className="absolute -top-8 left-0 right-0 h-20 bg-[#fc7d8d] rounded-t-[3rem] border-t-2 border-x-2 border-black z-10" />
        
        <div className="absolute -top-4 left-0 right-0 h-20 bg-[#e06675] rounded-t-[3rem] border-t-2 border-x-2 border-black z-20" />

        <div className="relative bg-[#dd273e] text-white py-20 px-6 rounded-t-[3rem] border-t-2 border-black flex flex-col items-center text-center z-30">
          
          <Image src="/catalysis.png" alt="Catalysis" width={192} height={80} className="transition-transform hover:scale-105 mb-8 w-auto h-auto" />

          <div className="mb-6">
            <Image 
              src="/last/heading-phone.png" 
              alt="Ready to Be Part of Catalysis?" 
              width={400}
              height={100}
              className="block md:hidden max-w-full h-auto" 
            />
            <Image 
              src="/last/heading.png" 
              alt="Ready to Be Part of Catalysis?" 
              width={600}
              height={176}
              className="hidden md:block max-w-full h-auto md:h-44 w-auto" 
            />
          </div>

          <p className="mb-12 text-lg md:text-xl font-medium opacity-100 max-w-xl">
            Don&apos;t miss your chance to innovate, compete, and win.
          </p>

          <div className="relative group cursor-pointer transition-transform active:scale-95">
            <div className="absolute top-4 left-0 z-10">
              <Image 
                src="/last/register-shadow.png" 
                alt="shadow" 
                width={240}
                height={80}
                className="h-16 md:h-20 w-auto" 
              />
            </div>

            <div className="relative z-20 hover:-translate-y-1 transition-transform duration-200">
              <Image 
                src="/last/register.png" 
                alt="Register Now" 
                width={240}
                height={80}
                className="h-16 md:h-20 w-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}