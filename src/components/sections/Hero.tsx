import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#FFEEF0] overflow-hidden flex flex-col items-center pt-12 pb-20"
    >

      <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-21 h-full bg-white z-0" />


      <div className="relative z-10 mt-3 mb-4">
        <Image 
          src="/Pokeball.png" 
          alt="pokeball" 
          width={80} 
          height={80} 
          className="drop-shadow-md"
        />
      </div>

  
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-black text-[#3b0a1e] leading-[1.1] tracking-tight">
          Where Ideas Ignite.<br />
          Innovation Accelerates.
        </h1>

        <p className="mt-6 text-[#3b0a1e] font-medium max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
          Join us for three electrifying days of hackathons, design battles, workshops, and competitions — all under one roof. Catalysis is where thinkers, creators, and innovators come to transform ideas into impact.
        </p>
      </div>


      <div className="relative w-full max-w-6xl mt-2 flex justify-center items-end h-[400px]">

        <div className="absolute left-10 bottom-4 z-20 transition-transform hover:-translate-y-2">
          <Image
            src="/hero-1.png"
            alt="Leaderboard"
            width={240}
            height={240}
            className="drop-shadow-xl"
          />
        </div>

        <div className="relative flex flex-col items-center z-30">
          
          <div className="absolute ml-1 -top-23 translate-y-6 z-40">
            <Image
              src="/hero-finger.png"
              alt="finger"
              width={160}
              height={160}
              className="pointer-events-none"
            />
          </div>

     
          <div className="relative">
             <Image
              src="/hero-3.png"
              alt="Register Card"
              width={320}
              height={320}
              className="drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="absolute right-10 bottom-10 z-20 transition-transform hover:-translate-y-2">
          <Image
            src="/hero-2.png"
            alt="Event Highlights"
            width={240}
            height={240}
            className="drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}