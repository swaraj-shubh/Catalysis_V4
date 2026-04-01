import Image from "next/image";

interface ArenaCardProps {
  arena: {
    name: string;
    type: string;
    image: string;
    color: string;
    detailsLink: string;
  };
}

export default function ArenaCard({ arena }: ArenaCardProps) {
  return (
    <div className="relative p-6 border-2 border-black rounded-[40px] bg-white flex flex-col items-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* The Actual Image */}
        <div className="relative w-40 h-40">
          <Image 
            src={arena.image} 
            alt={arena.name} 
            fill 
            className="object-contain"
          />
        </div>

        <h3 className="text-2xl mt-4 font-bold">{arena.name}</h3>
        <p className="text-sm font-medium text-gray-600">{arena.type}</p>
        
        <button className="w-full bg-red-500 mt-6 py-3 text-white rounded-xl font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          VIEW DETAILS
        </button>
    </div>
  );
}