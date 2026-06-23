import React from "react";
import { motion } from "framer-motion";
import Image from "../../assets/person1.jpg";
import Image2 from "../../assets/person2.jpg";
import Image3 from "../../assets/person3.jpg";
const TopOfUseCases = ({
    theme = "light",
    badge,
    title,
    title2,
    title3,
    description,
    button1,
    button2,
    themeSet = "blue",
}) => {

    const isDark = theme === "dark";

    // Tailwind-safe theme colors
    const themeColors = {
        blue: {
            bg: "bg-blue-500",
            text: "text-blue-500",
        },
        pink: {
            bg: "bg-pink-500",
            text: "text-white",
            text2: "text-pink-500",
        },
        red: {
            bg: "bg-red-500",
            text: "text-red-500",
        },
        green: {
            bg: "bg-green-500",
            text: "text-green-500",
        },
        purple: {
            bg: "bg-purple-500",
            text: "text-purple-500",
        },
    };

    const colors = themeColors[themeSet] || themeColors.blue;

    // Parent animation
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    // Item animation
    const item = {
        hidden: { opacity: 0, y: 60 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

   return (
  <div className="min-h-screen w-full bg-black px-4 sm:px-6 lg:px-8 overflow-hidden">
    <motion.div variants={container} initial="hidden" animate="show" className="max-w-7xl mx-auto min-h-screen pt-24 sm:pt-28 lg:pt-32 flex flex-col items-center justify-center text-center gap-8 sm:gap-10">

      {/* Badge */}
      <motion.div variants={item}>
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
          <span className={`h-2 w-2 ${colors.bg} rounded-full`} />
          <span className="text-white/80 text-xs sm:text-sm font-medium uppercase">{badge}</span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.div variants={item} className="flex flex-col gap-2 leading-tight">
        <motion.h1 variants={item} className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold">
          {title}
        </motion.h1>

        <motion.p variants={item} className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold">
          {title2}
        </motion.p>

        <motion.p variants={item} className={`${colors.text} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-serif font-light italic`}>
          {title3}
        </motion.p>
      </motion.div>

      {/* Description */}
      <motion.div variants={item} className="w-full max-w-xs sm:max-w-2xl lg:max-w-4xl">
        <p className="text-white/50 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-light leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Buttons */}
      <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full">

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className={`flex items-center justify-center px-5 py-3 cursor-pointer ${colors.bg} rounded-xl w-full sm:w-auto`}>
          <span className="text-white text-base sm:text-lg font-medium">{button1}</span>
        </motion.button>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className="flex items-center justify-center px-5 py-3 cursor-pointer bg-white/10 hover:border hover:border-white/20 rounded-xl w-full sm:w-auto">
          <span className="text-white text-base sm:text-lg font-medium">{button2}</span>
        </motion.button>

      </motion.div>

      {/* Footer */}
      <motion.div variants={item} className={`flex flex-col sm:flex-row items-center justify-center gap-3 text-center text-xs sm:text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>

        <div className="flex -space-x-2">
          <img className={`w-8 h-8 rounded-full object-cover border ${isDark ? "border-black" : "border-white"}`} src={Image} alt="" />
          <img className={`w-8 h-8 rounded-full object-cover border ${isDark ? "border-black" : "border-white"}`} src={Image2} alt="" />
          <img className={`w-8 h-8 rounded-full object-cover border ${isDark ? "border-black" : "border-white"}`} src={Image3} alt="" />
        </div>

        <span>Trusted by 300K+ creators · 4.9 ★ rating</span>

      </motion.div>

    </motion.div>
  </div>
);
};

export default TopOfUseCases;