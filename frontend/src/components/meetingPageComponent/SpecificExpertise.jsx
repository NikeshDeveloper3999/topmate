import { motion } from "framer-motion";

export default function SpecificExpertise() {
  const cardBase =
    "relative overflow-hidden rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900 to-black shadow-xl min-h-[320px] sm:min-h-[340px] lg:h-80 p-5 sm:p-6 lg:p-8";

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Built for your
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-400">
            specific expertise
          </h1>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {/* Card 1 */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className={cardBase}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              USE CASE 01
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Career Coaching
            </h2>

            <p className="text-purple-400 mb-4">
              ₹2,000–₹8,000/session
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
              Résumé reviews, interview prep, career pivots — clients get
              clarity and next steps.
            </p>

            {/* Illustration */}
            <div className="absolute right-4 sm:right-8 top-4 sm:top-6 w-20 sm:w-24 h-28 sm:h-32 rounded-2xl bg-gray-800 shadow-lg">
              <div className="absolute top-3 left-2 right-2 h-3 rounded bg-gray-700"></div>
              <div className="absolute top-9 left-2 right-2 h-3 rounded bg-gray-700"></div>
              <div className="absolute top-[58px] left-2 right-2 h-4 rounded bg-gray-700"></div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 border-2 border-green-400 rounded-full flex items-center justify-center text-green-400">
                ✓
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className={cardBase}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              USE CASE 02
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Business Consulting
            </h2>

            <p className="text-purple-400 mb-4">
              ₹5,000–₹25,000/session
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
              Strategic advice, idea validation, process audits — paid
              outcomes, not free calls.
            </p>

            {/* Chart */}
            <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 flex items-end gap-2">
              <div className="w-4 h-10 bg-gray-700 rounded"></div>
              <div className="w-4 h-16 bg-gray-600 rounded"></div>
              <div className="w-4 h-12 bg-gray-700 rounded"></div>
              <div className="w-4 h-20 bg-white rounded"></div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className={cardBase}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              USE CASE 03
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Tech Mentorship
            </h2>

            <p className="text-purple-400 mb-4">
              ₹3,000–₹15,000/session
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
              Code reviews, architecture help, mock interviews — technical
              growth with accountability.
            </p>

            {/* Code Window */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-28 sm:w-36 lg:w-44 h-20 sm:h-24 lg:h-28 rounded-2xl bg-gray-800 shadow-lg p-3 sm:p-4">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                <div className="w-3 h-3 rounded-full bg-gray-600"></div>
              </div>

              <div className="text-blue-400 text-lg sm:text-xl">
                &lt;/&gt;
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className={cardBase}
          >
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              USE CASE 04
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Expert Ask-Me-Anything
            </h2>

            <p className="text-purple-400 mb-4">
              ₹1,500–₹10,000/session
            </p>

            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
              Short, high-value slots — clients book when they need your
              expertise most.
            </p>

            {/* Question Mark */}
            <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white text-black rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-xl">
                ?
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}