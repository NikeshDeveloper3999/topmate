import React from "react";
import { Tag, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const CohortStructures = () => {

  const cohortExamples = [
    {
      example: "Example 01",
      title: "Zero to Product Manager",
      price: "₹25,000/person · 30 seats",
      sessions: "6 weekly sessions",
      revenue: "₹7.5L / RUN",
    },
    {
      example: "Example 02",
      title: "Instagram Growth for Creators",
      price: "₹12,000/person · 50 seats",
      sessions: "4 weekly sessions",
      revenue: "₹6L / RUN",
    },
    {
      example: "Example 03",
      title: "Full-Stack Dev Bootcamp",
      price: "₹49,000/person · 20 seats",
      sessions: "8 weekly sessions",
      revenue: "₹9.8L / RUN",
    },
  ];

  return (
<section className="w-full min-h-screen bg-[#F3F3F1] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

  {/* Header */}
  <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black">High-converting cohort structures</h1>
    <p className="text-gray-500 text-base sm:text-lg mt-4 max-w-2xl mx-auto">See how top experts structure their multi-week programs for maximum impact.</p>
  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

    {cohortExamples.map((item, i) => (

      <motion.div
        key={i}
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: .6, delay: i * .15 }}
        viewport={{ once: true }}
        className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
      >

        <div>

          <div className="mb-5">
            <span className="bg-gray-100 text-gray-500 text-xs sm:text-sm px-4 py-2 rounded-full">{item.example}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-black mb-6 sm:mb-8">{item.title}</h3>

          <div className="flex flex-col gap-4 text-gray-600">

            <div className="flex items-center gap-3">
              <Tag size={18} />
              <p className="text-sm sm:text-base">{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <Calendar size={18} />
              <p className="text-sm sm:text-base">{item.sessions}</p>
            </div>

          </div>

        </div>

        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-gray-200 flex justify-between items-center gap-3">
          <p className="text-gray-400 tracking-wider text-xs sm:text-sm">REVENUE POTENTIAL:</p>
          <p className="text-green-600 font-semibold text-sm sm:text-base text-right">{item.revenue}</p>
        </div>

      </motion.div>

    ))}

  </div>

</section>)
};

export default CohortStructures;