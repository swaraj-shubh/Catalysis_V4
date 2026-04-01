export default function CTA() {
  return (
    <section id="cta" className="relative pt-32 pb-0 bg-[#f5eaea]"> 
      <div className="w-full relative">

        <div className="absolute -top-12 left-0 right-0 h-20 bg-[#FF94a5] rounded-t-[3rem] border-t-2 border-x-2 border-black z-0" />
        
        <div className="absolute -top-8 left-0 right-0 h-20 bg-[#fc7d8d] rounded-t-[3rem] border-t-2 border-x-2 border-black z-10" />
        
        <div className="absolute -top-4 left-0 right-0 h-20 bg-[#e06675] rounded-t-[3rem] border-t-2 border-x-2 border-black z-20" />

        <div className="relative bg-[#dd273e] text-white py-20 px-6 rounded-t-[3rem] border-t-2 border-black flex flex-col items-center text-center z-30">
          
          <img src="/catalysis.png" alt="Catalysis" className="transition-transform hover:scale-105 w-48 mb-8" />

          <div className="mb-6">
            <img 
              src="/last/heading-phone.png" 
              alt="Ready to Be Part of Catalysis?" 
              className="block md:hidden max-w-full h-auto" 
            />
            <img 
              src="/last/heading.png" 
              alt="Ready to Be Part of Catalysis?" 
              className="hidden md:block max-w-full h-auto md:h-44" 
            />
          </div>

          <p className="mb-12 text-lg md:text-xl font-medium opacity-100 max-w-xl">
            Don't miss your chance to innovate, compete, and win.
          </p>

          <div className="relative group cursor-pointer transition-transform active:scale-95">
            <div className="absolute top-4 left-0 z-10">
              <img 
                src="/last/register-shadow.png" 
                alt="shadow" 
                className="h-16 md:h-20" 
              />
            </div>

            <div className="relative z-20 hover:-translate-y-1 transition-transform duration-200">
              <img 
                src="/last/register.png" 
                alt="Register Now" 
                className="h-16 md:h-20" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}