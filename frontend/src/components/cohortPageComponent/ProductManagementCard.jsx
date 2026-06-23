import { motion } from "framer-motion";
import { Users, BookOpen, PlayCircle } from "lucide-react";

export default function ProductManagementCard() {
  return (
    <section className="bg-[#f5f5f5] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center items-center">

        <div className="relative w-full max-w-sm sm:max-w-md">

          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="hidden sm:flex absolute -left-10 lg:-left-16 top-12 bg-black text-white px-4 py-3 rounded-xl shadow-xl items-center gap-3 z-10">
            <Users size={18} />
            <div>
              <p className="text-xs text-neutral-400">ENROLLED</p>
              <p className="font-semibold">32 / 40</p>
            </div>
          </motion.div>

          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="hidden sm:flex absolute -right-10 lg:-right-16 bottom-24 bg-black text-white px-4 py-3 rounded-xl shadow-xl items-center gap-3 z-10">
            <BookOpen size={18} />
            <div>
              <p className="text-xs text-neutral-400">RESOURCE</p>
              <p className="font-semibold">PDF Guide</p>
            </div>
          </motion.div>

          <div className="bg-neutral-800 text-white rounded-3xl p-5 sm:p-6 shadow-2xl w-full">

            <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
              <div className="h-10 w-10 rounded-full border border-gray-400 relative shrink-0">
                <div className="absolute h-2 w-2 bg-green-300 bottom-0 right-0 rounded-full"></div>
              </div>

              <div className="flex-1">
                <h2 className="text-lg sm:text-xl font-semibold">Product Management</h2>
                <p className="text-sm text-neutral-400">with Nikesh.P</p>
              </div>

              <div className="bg-neutral-700 px-3 py-1 rounded-full text-sm w-fit">
                ₹18,000
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6 text-xs">
              <div className="bg-neutral-700 px-3 py-1 rounded-lg">8 Weeks</div>
              <div className="bg-neutral-700 px-3 py-1 rounded-lg">40 Seats</div>
              <div className="bg-neutral-700 px-3 py-1 rounded-lg">Live Zoom</div>
            </div>

            <p className="text-xs text-neutral-400 mb-3 tracking-wider">UPCOMING SESSIONS</p>

            <div className="space-y-3">
              <div className="bg-neutral-700/60 p-4 rounded-xl flex justify-between items-center gap-3">
                <div>
                  <p className="font-medium text-sm sm:text-base">Introduction to PM</p>
                  <p className="text-xs text-neutral-400">Oct 21 • 19:00</p>
                </div>
                <PlayCircle className="text-emerald-400 shrink-0" />
              </div>

              <div className="bg-neutral-700/40 p-4 rounded-xl">
                <p className="font-medium text-sm sm:text-base">Product Strategy</p>
                <p className="text-xs text-neutral-400">Oct 28 • 19:00</p>
              </div>

              <div className="bg-neutral-700/40 p-4 rounded-xl">
                <p className="font-medium text-sm sm:text-base">Metrics & Analytics</p>
                <p className="text-xs text-neutral-400">Nov 04 • 19:00</p>
              </div>
            </div>

            <button className="mt-6 w-full bg-white text-black py-3 sm:py-4 rounded-2xl font-semibold shadow-md hover:scale-[1.02] transition">
              Join Cohort Program ✓
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}