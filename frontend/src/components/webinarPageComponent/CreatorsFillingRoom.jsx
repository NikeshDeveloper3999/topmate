import { MessageSquare, Star } from "lucide-react";

export default function CreatorsFillingRoom() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">

        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 border border-neutral-800 px-4 py-2 rounded-full text-xs tracking-widest text-neutral-400">
            <MessageSquare size={14} className="text-blue-400" />
            SUCCESS STORIES
          </div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 sm:mb-16 lg:mb-20">
          <span className="text-white">Creators already</span><br />
          <span className="bg-gradient-to-b from-white to-neutral-500 bg-clip-text text-transparent">filling their rooms</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 text-left">

          <div className="border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 transition">
            <p className="text-neutral-300 leading-relaxed mb-8 italic">“I ran a ₹999 resume review webinar for 250 people. After the event I sold the recording for another 6 months. That one 90-minute session made ₹4.5 lakhs.”</p>
            <div>
              <p className="font-semibold text-white">Ananya D., HR & Career Expert</p>
              <p className="text-emerald-400 text-sm mt-2 tracking-wide">₹4.5L REVENUE</p>
            </div>
          </div>

          <div className="border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 transition">
            <p className="text-neutral-300 leading-relaxed mb-8 italic">“I do one paid webinar every two weeks. Each fills 300–500 seats. Topmate handles registrations, payments, reminders, and replay sales. I just show up and talk.”</p>
            <div>
              <p className="font-semibold text-white">Rohit K., Personal Finance Creator, 85K followers</p>
              <p className="text-emerald-400 text-sm mt-2 tracking-wide">500+ SEATS/SESSION</p>
            </div>
          </div>

          <div className="border border-neutral-800 rounded-3xl p-6 sm:p-8 hover:border-neutral-700 transition md:col-span-2 xl:col-span-1">
            <p className="text-neutral-300 leading-relaxed mb-8 italic">“I was using Zoom + Google Forms + a payment link + manual emails. Topmate replaced all of that with one link.”</p>
            <div>
              <p className="font-semibold text-white">Devika R., Full-Stack Developer & Educator</p>
              <p className="text-emerald-400 text-sm mt-2 tracking-wide">ALL-IN-ONE</p>
            </div>
          </div>

        </div>

        <div className="pt-16 sm:pt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">300k+</h1>
              <p className="text-neutral-400 text-sm sm:text-lg lg:text-xl mt-2">Creators</p>
            </div>

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">1M+</h1>
              <p className="text-neutral-400 text-sm sm:text-lg lg:text-xl mt-2">Total Attendees</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center items-center gap-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">4.9</span>
                <Star size={28} fill="white" className="sm:w-9 sm:h-9 lg:w-12 lg:h-12" />
              </div>
              <p className="text-neutral-400 text-sm sm:text-lg lg:text-xl mt-2">Avg Rating</p>
            </div>

            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">90%</h1>
              <p className="text-neutral-400 text-sm sm:text-lg lg:text-xl mt-2">Revenue Share</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}