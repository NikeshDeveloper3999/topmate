import React from "react";
import { motion } from "framer-motion";

import img1 from "../../assets/person1.jpg";
import img2 from "../../assets/person2.jpg";
import img3 from "../../assets/person3.jpg";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const TopOfProductFeatures = ({
  theam = "light",
  badge,
  title,
  description,
  button1,
  button2,
}) => {
  const isDark = theam === "dark";

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className={`w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 ${
        isDark ? "bg-black text-white" : "bg-[#F7F7F2] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Badge */}
        <motion.div
          variants={item}
          className={`inline-flex items-center px-4 py-2 mb-6 text-xs sm:text-sm rounded-full border ${isDark? "bg-white/10 border-white/20": "bg-black/10 border-black/20"}`}>
          {badge}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semiboldleading-tighttracking-tight">
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className={`mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed ${ isDark ? "text-gray-400" : "text-gray-600"}`}>
          {description}
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className=" mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            className={`w-full sm:w-auto px-8 py-4 rounded-full font-medium shadow-lg hover:scale-105 transition-all duration-300 ${
              isDark
                ? "bg-white text-black hover:shadow-white/30"
                : "bg-black text-white hover:shadow-black/30"
            }`}
          >
            {button1}
          </button>

          <button
            className={`w-full sm:w-auto px-8 py-4 rounded-full font-medium border transition-all duration-300 ${
              isDark
                ? "border-white/30 hover:border-white"
                : "border-black/30 hover:border-black"
            }`}
          >
            {button2}
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={item}
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs sm:text-sm ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <div className="flex -space-x-2">
            {[img1, img2, img3].map((src, index) => (
              <img
                key={index}
                src={src}
                alt="Creator"
                loading="lazy"
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 ${
                  isDark ? "border-black" : "border-white"
                }`}
              />
            ))}
          </div>

          <span className="text-center">
            Trusted by 300K+ creators · 4.9 ★ rating
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TopOfProductFeatures;