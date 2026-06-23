import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const SuccessStorieOfCohort = () => {

  const testimonials = [
    {
      text: "I ran my first cohort — 6 sessions, 40 students, ₹18,000 per person. That was ₹7.2 lakhs in 6 weeks. The recordings became my evergreen course.",
      name: "Varun T.",
      role: "Product Management Coach",
      img: "https://i.pravatar.cc/100?img=12"
    },
    {
      text: "I was selling individual webinars for ₹999. After switching to a cohort model at ₹15,000, I made more revenue from 12 students than from 200 individual ticket purchasers.",
      name: "Shreya P.",
      role: "Growth Consultant",
      img: "https://i.pravatar.cc/100?img=22"
    },
    {
      text: "Cohorts changed my business. The peer accountability drives a 90%+ completion rate, and students are much more likely to upgrade to my high-ticket consulting.",
      name: "Rohit K.",
      role: "Finance Creator",
      img: "https://i.pravatar.cc/100?img=33"
    }
  ];

  const stats = [
    { value: "300k+", label: "CREATORS" },
    { value: "1M+", label: "BOOKINGS" },
    { value: "4.9", label: "AVG RATING", icon: true },
    { value: "90%", label: "REVENUE SHARE" },
  ];

  return (
  <section className="w-full min-h-screen bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

    {/* Badge */}
    <div className="flex justify-center mb-6">
      <div className="px-5 py-2 rounded-full border border-gray-700 text-xs sm:text-sm text-gray-400">
        SUCCESS STORIES
      </div>
    </div>

    {/* Title */}
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">From ₹999 webinars</span>
        <br />
        <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">to ₹7.2L cohorts</span>
      </h1>
    </div>

    {/* Testimonials */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-24">

      {testimonials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .6, delay: index * .15 }}
          viewport={{ once: true }}
          className="bg-[#0b0b0b] border border-gray-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
        >

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            “{item.text}”
          </p>

          <div className="border-t border-gray-800 mt-8 pt-6 flex items-center gap-4">
            <img src={item.img} alt={item.name} className="h-10 w-10 rounded-full object-cover" />

            <div>
              <p className="text-white font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          </div>

        </motion.div>
      ))}

    </div>

    {/* Stats */}
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: .8 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto bg-[#0b0b0b] border border-gray-800 rounded-3xl sm:rounded-[40px] lg:rounded-[50px] py-8 sm:py-10 lg:py-12"
    >

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">

            <div className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-bold">
              {item.value}
              {item.icon && <Star size={28} className="text-white fill-white sm:w-8 sm:h-8 lg:w-9 lg:h-9" />}
            </div>

            <p className="text-gray-500 text-xs sm:text-sm mt-2 tracking-widest">
              {item.label}
            </p>

          </div>
        ))}

      </div>

    </motion.div>

  </section>
);
}
export default SuccessStorieOfCohort;