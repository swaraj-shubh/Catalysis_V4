import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { Button } from "@/components/ui/button";

export default function Events() {
  return (
    <section id="events" className="py-20 bg-[#FFEEF0]">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">


          <div>
            <SectionHeader
              label="Events"
              title="Discover and Explore Upcoming Events Near You"
              subtitle="Explore an extensive variety of events designed to inspire and engage innovators of all kinds, offering unique opportunities to learn, connect, and grow in your creative journey."
            />

            <Button className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl">
              VIEW ALL EVENTS
            </Button>
          </div>


          <div className="flex gap-6 justify-center items-center">


            <div className="relative">
              <Image
                src="/event-card-1.png"
                alt="Pitch Arena"
                width={260}
                height={360}
                className="object-contain hover:scale-105 transition"
              />
            </div>

       
            <div className="relative mt-6">
              <Image
                src="/event-card-2.png"
                alt="Typemaster"
                width={260}
                height={360}
                className="object-contain hover:scale-105 transition"
              />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}