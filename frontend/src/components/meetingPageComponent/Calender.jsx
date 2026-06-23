import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Calendar() {
  const [selectedDay, setSelectedDay] = useState(21);
  const [selectedTime, setSelectedTime] = useState("09:30");
  const [confirmed, setConfirmed] = useState(false);

  const days = [
    14, 15, 16, 17, 18,
    19, 20, 21, 22, 23,
    24, 25, 26, 27, 28,
  ];

  const times = ["09:00", "09:30", "10:00"];

  function handleConfirm() {
    setConfirmed(true);
    setTimeout(() => setConfirmed(false), 3000);
  }

  return (
    <section className="relative bg-black overflow-hidden py-16 sm:py-24 px-4">
      
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto flex justify-center">

        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            w-full
            max-w-md
            bg-neutral-900
            border
            border-white/10
            rounded-3xl
            shadow-2xl
            p-4
            sm:p-6
            text-white
            relative
          "
        >

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-700 relative shrink-0">
                <span className="absolute bottom-1 right-1 w-3 h-3 bg-green-400 rounded-full border border-black" />
              </div>

              <div>
                <h2 className="font-semibold text-base sm:text-lg">
                  Design Review
                </h2>

                <p className="text-gray-400 text-sm">
                  with Alex Morgan
                </p>
              </div>
            </div>

            <div className="self-start sm:self-auto px-4 py-2 bg-white/10 rounded-full text-sm">
              $150
            </div>
          </div>

          {/* Meeting Info */}
          <div className="flex flex-wrap gap-3 mb-6 text-sm">
            <div className="px-3 py-2 bg-white/5 rounded-lg">
              30 min
            </div>

            <div className="px-3 py-2 bg-white/5 rounded-lg">
              Google Meet
            </div>
          </div>

          {/* Month */}
          <h3 className="text-center font-medium mb-4">
            October 2024
          </h3>

          {/* Week Days */}
          <div className="grid grid-cols-5 text-center text-gray-400 text-xs sm:text-sm mb-3">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>

          {/* Calendar */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 mb-6">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`h-10 sm:h-12 rounded-xl text-xs sm:text-sm transition-all duration-200 flex items-center justify-center ${
                  selectedDay === day
                    ? "bg-white text-black scale-105 shadow-lg"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {times.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`w-full py-3 rounded-xl border text-sm transition-all ${
                  selectedTime === time
                    ? "border-white bg-white/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleConfirm}
            className="
              w-full
              py-3
              sm:py-4
              bg-white
              text-black
              rounded-2xl
              font-medium
              text-sm
              sm:text-base
              hover:scale-[1.02]
              active:scale-[0.98]
              transition
            "
          >
            Confirm Booking ✓
          </button>

          {/* Popup */}
          <AnimatePresence>
            {confirmed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  bottom-4
                  sm:left-auto
                  sm:translate-x-0
                  sm:right-4
                  bg-neutral-800
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  shadow-xl
                "
              >
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-md">
                    ✓
                  </div>

                  <div>
                    <p className="text-gray-400 text-xs">
                      CONFIRMED
                    </p>

                    <p className="font-medium">
                      Sent!
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
}