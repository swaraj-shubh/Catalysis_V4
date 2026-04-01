import ArenaCard from "@/components/ui/arenacard";

export default function EventsPage() {

    const ARENAS_DATA = [
        { name: "PITCH ARENA", type: "STRATEGY BUILDER", image: "/pokemons/charizard.png", color: "#FFD1D1", detailsLink: "/events/pitch" },
        { name: "CODE BATTLE", type: "DEVELOPER EXTRA", image: "/pokemons/ivysaur.png", color: "#D1FFE9", detailsLink: "/events/code" },
        { name: "PITCH ARENA", type: "STRATEGY BUILDER", image: "/pokemons/charmander.png", color: "#FFD1D1", detailsLink: "/events/pitch" },
        { name: "CODE BATTLE", type: "DEVELOPER EXTRA", image: "/pokemons/venusaur.png", color: "#D1FFE9", detailsLink: "/events/code" },
        { name: "PITCH ARENA", type: "STRATEGY BUILDER", image: "/pokemons/wartortle.png", color: "#FFD1D1", detailsLink: "/events/pitch" },
        { name: "CODE BATTLE", type: "DEVELOPER EXTRA", image: "/pokemons/charmeleon.png", color: "#D1FFE9", detailsLink: "/events/code" },
        ];

  return (
    <main className="flex flex-col items-center pt-20 bg-white min-h-screen">
      <h1 className="
        font-gliker 
        font-semibold 
        text-[68px] 
        leading-[100%] 
        text-[#3A001D] 
        text-center 
        w-[984px] 
        h-[68px]
        [font-stretch:semi-expanded]
      ">
        Choose Your Arena
      </h1>

      <p className="
        font-medium
        text-[20px]
        leading-[100%]
        text-[#000000]
        text-center
        w-[984px]
        h-[54px]
        mt-4
      "
      style={{ fontFamily: 'Nunito, sans-serif' }}
      >
        Step into different battle zones, master your skills, and rise through the ranks. 
        Each event is a unique challenge — pick your path wisely.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-24 mt-20 px-6 max-w-7xl">
        {ARENAS_DATA.map((arena, index) => (
          <ArenaCard key={index} arena={arena} />
        ))}
      </div>
    </main>
  );
}