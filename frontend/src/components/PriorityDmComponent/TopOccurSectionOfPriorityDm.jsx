import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowRight, DollarSign, MessageSquare, Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function TopOccurSectionOfPriorityDm() {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 3)
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    const variants = {
        initial: { opacity: 0, y: 40, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: -40, scale: 0.95 },
    }

   return (
  <div className="min-h-screen bg-[#f3f2ef] flex items-center justify-center px-4 sm:px-6 py-16 overflow-hidden">
    <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="space-y-6 text-center lg:text-left">

        <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm tracking-wide mx-auto lg:mx-0">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          ASYNC CONSULTING
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          Get Paid for Your Direct Messages
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
          Offer async services. Collect payments upfront. Deliver on your own timeline. No scheduling required.
        </p>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-medium">
            Enable Priority DM <ArrowRight size={18} />
          </motion.button>

          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: .95 }} className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl font-medium bg-white">
            <Play size={18} />
            How It Works
          </motion.button>
        </div>

        <div className="flex items-center justify-center lg:justify-start gap-4 text-gray-500">

          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="https://topmate.io/images/homepage/referral-experts/vani-gupta.jpg" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="https://topmate.io/images/homepage/referral-experts/vatsal-nahata.jpg" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src="https://topmate.io/images/homepage/referral-experts/aditi-paul.jpg" alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <p className="text-sm">
            <span className="font-semibold text-black">300K+</span> creators · Async by design · Keep 90%
          </p>

        </div>

      </motion.div>

      {/* RIGHT */}
      <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8 }} className="relative w-full max-w-2xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          <div className="h-14 px-4 flex items-center gap-3 border-b border-gray-200">

            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-200" />
              <div className="w-3 h-3 rounded-full bg-gray-200" />
            </div>

            <div className="flex-1 bg-gray-100 rounded-lg h-8 flex items-center px-3">
              <span className="text-xs sm:text-sm text-gray-500 truncate">
                topmate.io/priority-dm
              </span>
            </div>

          </div>

          <div className="p-6 sm:p-10 min-h-[420px] flex items-center justify-center">

            <AnimatePresence mode="wait">

              {index === 0 && (
                <motion.div key="card1" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: .6 }} className="w-full max-w-md bg-gray-200 rounded-3xl p-6">

                  <div className="w-10 h-10 rounded-full bg-gray-500 mb-5" />

                  <h1 className="font-semibold text-black">
                    Resume File Uploaded
                  </h1>

                  <p className="text-gray-500 mb-6">
                    $200 (claimed)
                  </p>

                  <button className="w-full h-11 bg-black text-white rounded-xl">
                    Send Message
                  </button>

                </motion.div>
              )}

              {index === 1 && (
                <motion.div key="card2" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: .6 }} className="w-full max-w-md bg-white rounded-3xl p-6 text-center">

                  <div className="flex flex-col items-center gap-5">

                    <div className="w-20 h-20 rounded-full bg-emerald-300/20 flex items-center justify-center">
                      <Check size={40} className="text-emerald-400" />
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold">
                      Response Delivery
                    </h1>

                    <div className="px-5 py-2 bg-black rounded-full text-white">
                      $ +1,350
                    </div>

                    <p className="text-gray-500 font-semibold">
                      Earning Credited
                    </p>

                  </div>

                </motion.div>
              )}

              {index === 2 && (
                <motion.div key="card3" variants={variants} initial="initial" animate="animate" exit="exit" transition={{ duration: .6 }} className="w-full max-w-md bg-white rounded-3xl shadow-lg p-6">

                  <div className="flex justify-between items-center mb-6">

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="" className="w-full h-full object-cover" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Tanush Patel
                        </h3>

                        <p className="text-sm text-gray-500">
                          @tanushpatel
                        </p>
                      </div>
                    </div>

                    <span className="text-sm text-gray-400">
                      10:30
                    </span>

                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    Hey Tanush, I'm facing an issue with my resume. Can you please review it and suggest improvements?
                  </p>

                  <div className="flex justify-end pt-6 mt-6 border-t border-gray-100">
                    <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                      Reply
                    </button>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: .6 }} className="absolute -left-3 sm:-left-6 top-1/2 bg-white shadow-lg rounded-xl p-3">
          <DollarSign className="text-blue-500" />
        </motion.div>

        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: .8 }} className="absolute -right-3 sm:-right-6 top-6 bg-white shadow-lg rounded-xl p-3">
          <MessageSquare className="text-gray-700" />
        </motion.div>

      </motion.div>

    </div>
  </div>
);
}