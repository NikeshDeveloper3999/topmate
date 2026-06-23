import React, { useRef } from "react";
import { Play, Users, MessageSquare, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CohortLearningDesc() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 20%"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "95%"]);

  const steps = [
    { icon: <Users size={18} />, text: "Onboarding" },
    { icon: <Play size={18} />, text: "Live Sessions" },
    { icon: <MessageSquare size={18} />, text: "Community" },
    { icon: <Trophy size={18} />, text: "Graduation" }
  ];

  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8">
          <div className="px-4 py-2 rounded-full bg-gray-200 border border-gray-300 text-gray-700 w-fit">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide">Cohort Learning</p>
          </div>

          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Why cohorts outsell standalone webinars
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            A single webinar is one ticket. A cohort is a full program — same expertise, live sessions, and a fixed group moving together. That structure justifies premium pricing (₹10K–₹75K per person) and drives higher completion.
          </p>
        </div>

        <div ref={ref} className="w-full max-w-md lg:max-w-none lg:w-[380px] bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 relative">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="lg:absolute lg:-right-10 lg:-top-10 bg-black text-white rounded-xl p-4 sm:p-5 shadow-xl mb-8 lg:mb-0">
            <div className="flex items-center gap-2 text-xs text-gray-400 uppercase">
              <div className="h-2 w-2 bg-green-400 rounded-full"></div>
              Active Learning
            </div>
            <p className="text-base sm:text-lg font-bold">3x Higher</p>
            <p className="text-base sm:text-lg font-bold">Completion</p>
          </motion.div>

          <div className="relative flex flex-col gap-8 sm:gap-10 lg:gap-12">
            <div className="absolute left-6 top-2 bottom-2 w-[3px] bg-gray-200 rounded-full" />
            <motion.div style={{ height: lineHeight }} className="absolute left-6 top-2 w-[3px] bg-gray-500 rounded-full origin-top" />

            {steps.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="flex items-center gap-4 sm:gap-5">
                <div className="w-12 h-12 z-10 rounded-full bg-gray-100 flex items-center justify-center border shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-medium">{item.text}</h3>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}