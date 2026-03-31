import Image from "next/image";
import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#FFEEF0]">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <SectionHeader
              label="About Us"
              title="What is Catalysis?"
              subtitle="Catalysis is not just an event — it's a platform designed to spark innovation."
            />

            <p className="text-gray-700 max-w-lg mt-4">
              Over the course of three days, participants will engage in multiple
              events ranging from technical challenges to creative competitions.
            </p>

            <p className="text-gray-700 max-w-lg mt-4">
              Catalysis offers something for everyone. It’s a space to learn,
              compete, collaborate, and grow.
            </p>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/about-chart.png"
              alt="about diagram"
              width={500}
              height={400}
              className="object-contain"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}