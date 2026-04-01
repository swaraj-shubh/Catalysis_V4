import Image from "next/image";

interface EventCardProps {
  event: {
    name: string;
    type: string;
    image: string;
    color: string;
    top?: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="
      relative 
      w-[279px] 
      h-[420px] 
      flex 
      flex-col 
      items-center 
      justify-end 
      transition-transform 
      duration-300 
      ease-out 
      hover:-translate-y-3
    ">
      <div className={`absolute ${event.top || "top-[-50px]"} z-10 w-[229px] h-[207px]`}>
        <Image
          src={event.image}
          alt={event.name}
          width={229}
          height={207}
          className="object-contain"
          priority
        />
      </div>

      <div className="
        w-[279px] 
        h-[337px] 
        bg-linear-to-t from-[#FFE296] to-[#FFFFFF]
        border-[3px] 
        border-black 
        rounded-[40px] 
        flex flex-col 
        items-center 
        pt-24 
        px-4 
        pb-6
      ">
        <h3 className="font-nunito text-[22px] font-extrabold text-black uppercase leading-tight">
          {event.name}
        </h3>
        <p className="font-nunito text-[12px] font-semibold text-gray-400 mb-4 uppercase tracking-wider">
          {event.type}
        </p>

        <div className="grid grid-cols-2 gap-2 w-full mb-6">
          <div className="bg-[#FFD9C3] rounded-full py-2 px-1 text-[13px] text-center font-nunito font-medium border border-[2px] border-[#FBB993]">Strategy Builder</div>
          <div className="bg-[#E6DBED] rounded-full py-2 px-1 text-[13px] text-center font-nunito font-medium border border-[2px] border-[#CCB8E6]">Idea Master</div>
          <div className="bg-[#CEF2FF] rounded-full py-2 px-1 text-[13px] text-center font-nunito font-medium border border-[2px] border-[#A6E0F4]">Idea Master</div>
          <div className="bg-[#D6EBDC] rounded-full py-2 px-1 text-[13px] text-center font-nunito font-medium border border-[2px] border-[#ADD6B8]">Pitch Pro</div>
        </div>
        
        <button className="
          w-[254px]
          h-[44px] 
          bg-[#DD273E] 
          text-white 
          font-nunito
          font-bold 
          rounded-2xl 
          border-2 
          border-black 
          flex
          items-center
          justify-center
          transition-all
          duration-100
          active:scale-95
          active:shadow-none
        ">
          VIEW DETAILS
        </button>
      </div>
    </div>
  );
}