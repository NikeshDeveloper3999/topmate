import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function WorldClassExperience() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardBase =
    "relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-b from-[#0f0f0f] to-black p-5 sm:p-6 lg:p-8 shadow-xl min-h-[320px]";

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            A world-class experience
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-400">
            for your clients
          </h1>

          <p className="text-gray-500 mt-4 sm:mt-6 text-sm sm:text-base">
            We handle the friction so you can focus on the conversation.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className={cardBase}>
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 space-y-3">
              <div className="bg-white text-black px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow">
                Booking Confirmed 🚀
              </div>

              <div className="bg-gray-800 px-3 sm:px-4 py-2 rounded-xl text-xs text-gray-400">
                Meeting starting in 15m
              </div>
            </div>

            <div className="mt-28 sm:mt-32">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Instant WhatsApp Confirmation
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Your client gets a WhatsApp confirmation within seconds of
                booking.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className={cardBase}>
            <div className="flex items-center justify-center h-32 sm:h-40">
              <div className="bg-gray-800 rounded-2xl px-4 sm:px-6 py-5 sm:py-6 text-center shadow-lg">
                <p className="text-xs sm:text-sm text-gray-400">
                  10:30 - 11:00
                </p>

                <p className="mt-2 font-semibold text-sm sm:text-base">
                  1:1 Mentorship Session
                </p>

                <div className="flex justify-center gap-2 mt-3 text-xs text-gray-400">
                  <span className="bg-gray-700 px-2 py-1 rounded">Y</span>
                  <span className="bg-gray-700 px-2 py-1 rounded">U</span>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                Calendar Invite Auto-Sent
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Both creator and client receive a Google Calendar invite
                immediately.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className={cardBase}>
            <div className="relative flex items-center justify-center h-32 sm:h-40">
              {/* Glow */}
              <div className="absolute w-28 sm:w-40 h-28 sm:h-40 bg-white/10 blur-3xl rounded-full" />

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 bg-white text-black px-4 sm:px-6 py-3 sm:py-4 rounded-2xl flex items-center gap-2 sm:gap-3 shadow-xl"
              >
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />

                <span className="text-xs sm:text-sm">
                  24/7 Priority Support
                </span>
              </motion.div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                24/7 Support
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Our support team handles rescheduling, tech issues, and refunds.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}