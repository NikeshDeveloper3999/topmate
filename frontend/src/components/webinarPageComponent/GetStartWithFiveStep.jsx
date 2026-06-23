import { Calendar, Repeat, Share2, Zap } from "lucide-react";
import BlackCardDetail from "../ui/BlackCardDetail";

const GetStartWithFiveStep = () => {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Get Started with
          </h1>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 mt-2">
            5 simple steps
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

          {/* STEP 01 */}
          <BlackCardDetail
            title="Create your event"
            step="STEP 01"
            description="Set the date, write the description, and choose live-only, replay-only, or both."
            pos="1"
            icon={
              <div className="h-14 w-32 bg-white/10 flex gap-2 justify-center items-center rounded-2xl">
                <Calendar size={26} className="text-white" />

                <div className="flex flex-col gap-2">
                  <div className="bg-white/15 h-2 w-12 rounded-full"></div>
                  <div className="bg-white/15 h-2 w-16 rounded-full"></div>
                </div>
              </div>
            }
          />

          {/* STEP 02 */}
          <BlackCardDetail
            title="Set your price"
            step="STEP 02"
            description="Charge for the live session, the replay, or both."
            pos="2"
            icon={
              <div className="flex flex-col gap-2 justify-center items-center">
                <div className="h-10 w-24 rounded-full bg-white text-black flex justify-center items-center">
                  <h1 className="font-bold">₹999</h1>
                </div>

                <div className="h-7 w-28 rounded-full border border-white/30 text-gray-400 flex justify-center items-center">
                  <h1 className="text-xs">Replay : ₹499</h1>
                </div>
              </div>
            }
          />

          {/* STEP 03 */}
          <BlackCardDetail
            title="Share your link"
            step="STEP 03"
            description="One registration link you can share anywhere."
            pos="3"
            icon={
              <div className="w-full max-w-[260px] flex flex-col gap-3 justify-center items-center">
                <div className="h-10 w-full rounded-2xl border border-white/35 bg-white/10 px-3 flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-white truncate">
                    topmate.io/tanush/w/1
                  </span>

                  <Share2 size={18} className="text-gray-400 shrink-0" />
                </div>

                <div className="flex gap-4">
                  {["IG", "LI", "TW"].map((item) => (
                    <div
                      key={item}
                      className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center text-xs font-bold text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          {/* STEP 04 */}
          <BlackCardDetail
            title="Go Live"
            step="STEP 04"
            description="Join on Zoom. Recording starts automatically and Topmate tracks attendance."
            pos="4"
            icon={
              <div className="flex flex-col items-center gap-2">
                <div className="h-14 w-14 rounded-full bg-[#E44A33] flex justify-center items-center">
                  <Zap size={28} className="text-white" />
                </div>

                <h1 className="text-gray-400 font-medium">
                  +2.4k
                </h1>
              </div>
            }
          />

          {/* STEP 05 */}
          <BlackCardDetail
            addativeClassName="md:col-span-2"
            title="Sell replays"
            step="STEP 05"
            description="The recording is automatically packaged and listed for sale after the event."
            pos="5"
            icon={
              <div className="relative flex flex-col justify-center items-center">
                <div className="h-10 w-10 rounded-2xl bg-gray-600"></div>

                <div className="h-11 w-11 rounded-2xl bg-gray-500 mt-1"></div>

                <div className="h-14 w-14 rounded-2xl bg-white flex justify-center items-center mt-1">
                  <Repeat size={26} className="text-black" />
                </div>

                <div className="absolute bottom-0 right-0 h-6 w-10 bg-green-500 rounded-lg flex justify-center items-center">
                  <span className="text-[10px] font-bold text-white">
                    Auto
                  </span>
                </div>
              </div>
            }
          />

        </div>
      </div>
    </section>
  );
};

export default GetStartWithFiveStep;