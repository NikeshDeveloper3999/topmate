import { motion } from "framer-motion";
import { Calendar, PlayCircle } from "lucide-react";

export default function FormSignUpToReplay() {
  const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }) };

  return (
    <section className="bg-[#f6f5f3] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight max-w-4xl mx-auto">
          From signup to replay, your attendees are taken care of
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 lg:mt-20">

          <motion.div custom={0} initial="hidden" animate="visible" variants={cardVariants} whileHover={{ y: -8 }} className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10 text-center flex flex-col justify-center items-center">
            <div className="flex h-40 sm:h-48 lg:h-52 justify-center items-center w-full mb-6 border-b border-gray-300">
              <div className="w-full max-w-[220px] h-28 sm:h-32 shadow-xl rounded-3xl flex flex-col gap-2 items-center justify-center">
                <div className="flex justify-start pl-6 gap-1 w-full"><div className="w-2 h-2 bg-gray-300 rounded-full"></div><div className="w-2 h-2 bg-gray-300 rounded-full"></div></div>
                <div className="flex justify-center items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="text-black text-sm">Workshop Invite</h1>
                    <p className="text-gray-500 text-xs sm:text-sm">zoom.us/j/123...</p>
                  </div>
                </div>
                <div className="w-32 sm:w-40 h-7 bg-green-100 rounded-lg text-green-500 flex justify-center items-center">
                  <h1 className="font-bold text-xs sm:text-sm">Add to Calendar</h1>
                </div>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Instant Calendar Invite</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Every registrant gets a Google Calendar invite with the Zoom link.</p>
          </motion.div>

          <motion.div custom={1} initial="hidden" animate="visible" variants={cardVariants} whileHover={{ y: -8 }} className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10 text-center flex flex-col justify-center items-center">
            <div className="flex h-40 sm:h-48 lg:h-52 flex-col justify-evenly items-center w-full mb-6 border-b border-gray-300">
              <div className="w-full max-w-[220px] h-14 flex justify-center items-center gap-2 shadow-xl rounded-2xl">
                <div className="h-7 w-7 rounded-sm bg-green-300"></div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-black text-sm font-bold">Workshop in 1 hour</h1>
                  <p className="text-gray-500 text-xs">Don't forget to join live</p>
                </div>
              </div>

              <div className="w-full max-w-[220px] h-14 flex justify-center items-center gap-2 shadow-xl rounded-2xl opacity-55">
                <div className="h-5 w-5 rounded-sm bg-blue-400"></div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="text-black text-sm font-bold">Workshop in 24 hour</h1>
                  <p className="text-gray-500 text-xs">See you tomorrow!</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Automated Reminders</h3>
            <p className="text-gray-500 text-sm leading-relaxed">WhatsApp + email reminders go out 24 hrs and 1 hr before the event.</p>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="visible" variants={cardVariants} whileHover={{ y: -8 }} className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 lg:p-10 text-center flex flex-col justify-center items-center md:col-span-2 xl:col-span-1">
            <div className="flex h-40 sm:h-48 lg:h-52 flex-col relative justify-between items-center w-full mb-6 border-b border-gray-300">
              <div className="h-36 sm:h-40 relative w-full max-w-[240px] bg-black/90 rounded-2xl flex justify-center items-center">
                <PlayCircle size={40} className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <div className="flex w-full justify-center items-center gap-1 absolute bottom-4 px-4">
                  <div className="h-1 w-[70%] relative bg-gray-400 rounded-full"><div className="h-1 w-[70%] absolute top-0 left-0 bg-white rounded-full"></div></div>
                  <p className="text-white text-xs sm:text-sm">1:24:05</p>
                </div>
              </div>

              <div className="h-7 w-28 absolute right-0 bottom-2 bg-black text-white rounded-lg flex justify-center items-center">
                <h1 className="text-[10px] font-bold">LIFETIME ACCESS</h1>
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Replay Access</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Attendees who purchase get a permanent link to watch the recording anytime.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}