import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#FFEEF0]">
      <Container>


        <div className="rounded-3xl p-10 border border-[#2b1b1b]/20 bg-gradient-to-b from-[#f3f0ec] to-[#ead8c5] shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)]">

          <SectionHeader
            label="Gallery"
            title="Moments from the Past"
            subtitle="Explore a detailed look at our past events and experience the vibrant energy that truly defines Catalysis."
          />


          <div className="grid grid-cols-6 auto-rows-[120px] gap-4 mt-10">

            <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/1.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="col-span-1 row-span-2 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/2.jpg" alt="" fill className="object-cover" />
            </div>


            <div className="col-span-2 row-span-3 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/3.jpg" alt="" fill className="object-cover" />
            </div>


            <div className="col-span-1 row-span-2 rounded-xl border border-[#2b1b1b]/20 bg-gradient-to-b from-[#f3f0ec] to-[#ead8c5] shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)]"></div>


            <div className="col-span-1 row-span-2 rounded-xl border border-[#2b1b1b]/20 bg-gradient-to-b from-[#f3f0ec] to-[#ead8c5] shadow-[inset_0_2px_6px_rgba(0,0,0,0.05)]"></div>


            <div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/4.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/5.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="col-span-1 row-span-1 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/6.jpg" alt="" fill className="object-cover" />
            </div>


            <div className="col-span-3 row-span-1 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/7.jpg" alt="" fill className="object-cover" />
            </div>

            <div className="col-span-3 row-span-1 relative rounded-xl overflow-hidden border border-[#2b1b1b]/20">
              <Image src="/gallery/8.jpg" alt="" fill className="object-cover" />
            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}