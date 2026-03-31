"use client";

import Container from "@/components/common/Container";
import SectionHeader from "@/components/common/SectionHeader";
import { useState } from "react";

const qna = [
  {
    question: "Is there a participation fee?",
    answer:
      "No, there is absolutely no fee required to participate in this event or activity. You can join freely without any cost or hidden charges involved.",
  },
  {
    question: "Can I join multiple events?",
    answer: "Yes, you can participate in multiple events.",
  },
  {
    question: "Will certificates be provided?",
    answer: "Yes, all participants will receive certificates.",
  },
  {
    question: "How do I register?",
    answer: "You can register using the register button on the homepage.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 bg-[#FFEEF0]">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <SectionHeader
              label="FAQs"
              title="Frequently Asked Questions"
              subtitle="Don't hesitate to reach out with any questions you might have, whether they're big or small. We're always ready and eager to assist you with anything you need."
            />

            <div className="mt-6 border border-black/30 rounded-2xl p-4 flex items-center justify-between bg-white">
              <input
                placeholder="Type message..."
                className="bg-transparent outline-none w-full text-sm"
              />

              <button className="ml-4 bg-red-500 text-white text-xs px-4 py-2 rounded-lg hover:bg-red-600">
                SEND MESSAGE
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            {qna.map((item, i) => {
              const isOpen = openIndex === i;

              return (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden border ${
                    isOpen
                      ? "bg-red-500 text-white"
                      : "bg-[#f1f1f1] text-black"
                  }`}
                >
                  <div
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : i)
                    }
                    className="flex justify-between items-center px-4 py-3 cursor-pointer font-medium"
                  >
                    <span>{item.question}</span>
                    <span>{isOpen ? "−" : "+"}</span>
                  </div>

                  {isOpen && (
                    <div className="bg-white text-black px-4 py-3 text-sm">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </div>
      </Container>
    </section>
  );
}