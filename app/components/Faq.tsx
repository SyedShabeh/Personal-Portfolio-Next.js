"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "I provide web development, UI/UX design, and branding solutions.",
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary from 1 to 4 weeks depending on the complexity and scope.",
  },
  {
    question: "What technologies do you use?",
    answer: "I use HTML, CSS, JavaScript, Bootstrap, React, Tailwind, Next and more.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes! I offer 30 days of free support and additional maintenance packages.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div id="faq">
      <section className="max-w-7xl mx-auto py-12 px-4">
        {/* Top Heading */}
        <div className="text-center mb-10">
          <span className="bg-white text-blue-600 font-bold px-2 py-1">FAQ</span>
          <p className="main-font text-3xl md:text-4xl font-bold mt-2">Have any questions?</p>
        </div>

        {/* FAQ & Image Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Left: FAQ Dropdowns */}
          <div className="w-full md:w-1/2 space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded bg-transparent text-white cursor-pointer"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="mid-font font-semibold">{item.question}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="co-font mt-2">{item.answer}</p>
                )}
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/faq.png" alt="faq" className="w-full max-w-md" />
          </div>
        </div>
      </section>
    </div>
  );
}
