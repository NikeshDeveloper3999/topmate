import React from "react";
import { MessageSquare, Bell, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

const CommunityAccess = () => {

  const recordings = [
    { title: "Session 01", duration: "45:00" },
    { title: "Session 02", duration: "52:10" }
  ];

  return (
    <section className="w-full min-h-screen bg-[#F3F3F1] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-black">Community and access built in</h1>
        <p className="text-gray-500 text-base sm:text-lg mt-4">Keep students engaged and give them one place for everything.</p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

        {/* Card 1 */}
        <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .6 }} viewport={{ once: true }} className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

          <div className="flex justify-center p-6 sm:p-8 lg:pt-12 lg:pb-10">
            <div className="w-full max-w-xs bg-[#F7F7F7] rounded-3xl border border-gray-200 p-5 sm:p-6">

              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-8 bg-gray-300 rounded-full" />
                <p className="font-medium text-gray-700">Cohort Group</p>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-green-100 text-green-700 text-sm px-4 py-2 rounded-xl w-fit">Welcome everyone! 🚀</div>
                <div className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-xl w-fit self-end">Excited to start!</div>
              </div>

              <div className="mt-5 bg-black text-white text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                <MessageSquare size={16} />
                <span>New message</span>
              </div>

            </div>
          </div>

          <div className="border-t border-gray-200 p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Group WhatsApp / Community</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Add a cohort community so students stay connected and engaged between live sessions.</p>
          </div>

        </motion.div>

        {/* Card 2 */}
        <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} viewport={{ once: true }} className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

          <div className="flex justify-center p-6 sm:p-8 lg:pt-14 lg:pb-12">
            <div className="bg-[#F7F7F7] border border-gray-200 rounded-3xl px-6 sm:px-10 py-8 text-center w-full max-w-xs">

              <p className="text-xs text-gray-500 mb-3">NEXT SESSION</p>

              <div className="flex items-center justify-center gap-2 mb-2">
                <Bell size={18} className="text-yellow-500" />
                <h4 className="font-semibold text-base sm:text-lg">Starting in 1 hour</h4>
              </div>

              <p className="text-gray-500 text-sm mb-4">Module 3: Growth</p>
              <p className="text-green-600 text-sm">● WhatsApp + Email Sent</p>

            </div>
          </div>

          <div className="border-t border-gray-200 p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Automated Session Reminders</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Every student gets a WhatsApp + email reminder before each live session.</p>
          </div>

        </motion.div>

        {/* Card 3 */}
        <motion.div initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: .8 }} viewport={{ once: true }} className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

          <div className="flex justify-center p-6 sm:p-8 lg:pt-14 lg:pb-12 relative">

            <div className="bg-black rounded-3xl p-5 sm:p-6 w-full max-w-xs">
              {recordings.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-[#111] p-4 rounded-xl mb-3">
                  <PlayCircle size={20} className="text-blue-400 shrink-0" />
                  <div>
                    <p className="text-white text-sm">{item.title}</p>
                    <p className="text-gray-400 text-xs">{item.duration}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute right-4 top-8 w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full" />
            <div className="absolute right-2 top-24 w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full" />
            <div className="absolute right-4 bottom-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full" />

          </div>

          <div className="border-t border-gray-200 p-6 sm:p-8 text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Recording Access</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Past session recordings are available to enrolled students anytime — no manual links.</p>
          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default CommunityAccess;