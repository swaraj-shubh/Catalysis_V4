import { Button } from "@/components/ui/button";

export default function CTA() {
  return (

    <section id="cta" className="relative pt-32 pb-0"> 
      <div className="w-full relative">
        
  
        <div className="absolute -top-12 left-0 right-0 h-20 bg-[#FF9494] rounded-t-[3rem] border-t-2 border-x-2 border-black z-0" />
        
    
        <div className="absolute -top-8 left-0 right-0 h-20 bg-[#FF7171] rounded-t-[3rem] border-t-2 border-x-2 border-black z-10" />
        

        <div className="absolute -top-4 left-0 right-0 h-20 bg-[#F54B4B] rounded-t-[3rem] border-t-2 border-x-2 border-black z-20" />

        <div className="relative bg-[#E3242B] text-white py-20 px-6 rounded-t-[3rem] border-t-2 border-black flex flex-col items-center text-center z-30">
          
          <img src="/catalysis.png" alt="Catalysis" className="w-48 mb-8" />

          <h2 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
            Ready to Be Part of <br /> Catalysis?
          </h2>

          <p className="mb-10 text-lg opacity-90 max-w-xl">
            Don't miss your chance to innovate, compete, and win.
          </p>

          <button className="hover:scale-105 active:scale-95 transition-transform duration-200">
            <img src="/register-now.png" alt="Register Now" className="h-16 md:h-20" />
          </button>
        </div>
      </div>
    </section>
  );
}