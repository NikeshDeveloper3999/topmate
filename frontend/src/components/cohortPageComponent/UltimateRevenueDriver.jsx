import React from "react";
import { DollarSign, TrendingUp, Users, RefreshCcw } from "lucide-react";
import { motion } from "framer-motion";

const UltimateRevenueDriver = () => {

    const curriculum = [
        { title: "Session 01: Intro", status: "Uploaded" },
        { title: "Session 02: Strategy", status: "Syncing..." },
        { title: "Session 03: Pending", status: "Pending" },
    ];

    const totalRevenueDetails = [
        {
            name: "Rahul S.",
            time: "2m ago",
        },
        {
            name: "Sneha K.",
            time: "15m ago",
        },
        {
            name: "Amit P.",
            time: "1h ago",
        },
    ]
    return (
        <>
        <section className="bg-black text-white overflow-hidden">

  {/* SECTION 1 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">

    <div className="text-center mb-12 sm:mb-16">
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold">Why cohorts are the</h1>
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
        ultimate revenue driver
      </h1>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* LEFT */}
      <motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .8 }} className="space-y-6">

        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border border-gray-600 flex items-center justify-center">
          <DollarSign size={32} className="text-blue-300" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Premium Pricing
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Cohorts command 3–10× the price of a single webinar. Live sessions,
          a fixed group, and a clear start/end date let you charge ₹10,000–₹75,000 per person.
        </p>

      </motion.div>

      {/* RIGHT */}
      <motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: .8, delay: .2 }} className="relative flex justify-center">

        <div className="w-full max-w-sm border border-gray-800 rounded-3xl p-6 bg-[#111]">

          <div>
            <h3 className="text-gray-500 text-sm sm:text-lg">Total Revenue</h3>
            <h2 className="text-4xl sm:text-5xl font-bold">₹7,50,000</h2>
          </div>

          <div className="mt-10 space-y-3">
            {totalRevenueDetails.map((item, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl px-4 py-3 flex justify-between items-center">

                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gray-500" />

                  <div>
                    <h4 className="text-xs text-white">{item.name}</h4>
                    <p className="text-xs text-gray-400">{item.time}</p>
                  </div>
                </div>

                <span className="text-emerald-500 text-sm">₹25,000</span>

              </div>
            ))}
          </div>

        </div>

        <div className="absolute top-4 right-2 sm:right-0">
          <div className="bg-green-600 rounded-full px-4 py-1">
            <span className="text-black text-xs sm:text-sm font-medium">
              High Ticket
            </span>
          </div>
        </div>

      </motion.div>

    </div>
  </div>

  {/* SECTION 2 */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">

    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* CHART CARD */}
      <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} className="bg-[#141414] border border-gray-700/50 rounded-3xl p-6 sm:p-8">

        <div>
          <p className="text-gray-400 text-sm sm:text-base">
            Completion Rate
          </p>

          <h2 className="text-5xl sm:text-6xl font-bold mt-2">
            88.4%
          </h2>
        </div>

        <div className="flex gap-3 sm:gap-4 items-end h-40 mt-8">

          <div className="w-10 sm:w-12 h-10 bg-[#202020] rounded-lg" />
          <div className="w-10 sm:w-12 h-24 bg-[#202020] rounded-lg" />
          <div className="w-10 sm:w-12 h-14 bg-[#202020] rounded-lg" />
          <div className="w-10 sm:w-12 h-32 bg-[#202020] rounded-lg" />
          <div className="w-10 sm:w-12 h-28 bg-[#202020] rounded-lg" />

          <div className="w-10 sm:w-12 h-40 bg-[#61A5FA] rounded-lg relative">

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: .5, repeat: Infinity }}
              className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-white"
            />

          </div>

        </div>

        <div className="flex items-center gap-2 mt-6">
          <p className="text-gray-400 text-sm sm:text-base">
            vs 24% (Self-paced)
          </p>

          <TrendingUp size={18} className="text-green-500" />
        </div>

      </motion.div>

      {/* TEXT */}
      <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .8, delay: .2 }} className="space-y-6">

        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border border-gray-600 flex items-center justify-center">
          <TrendingUp size={32} className="text-blue-300" />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Higher Completion Rates
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          The shared start date and peer group create accountability.
          Cohort completion rates are 3× higher than self-paced formats.
        </p>

      </motion.div>

    </div>

  </div>

</section>
            
        </>
    )
}

export default UltimateRevenueDriver;