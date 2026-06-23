import React, { useState } from "react";
import { Gift, Repeat, Layers, Tags } from "lucide-react";
import WhiteCardDetails from "../ui/WhiteCardDetails";

const MakingMoneyFormWebinars = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-[#F7F7F2] text-black py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h1
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            mb-12
            sm:mb-16
            lg:mb-20
            max-w-5xl
            mx-auto
          "
        >
          Four ways to make money from one webinar
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          <WhiteCardDetails
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            index={0}
            title="Free Webinar + Backend Upsell"
            description="Run a free session, pitch your course or package at the end."
            pos="01"
            icon={
              <Gift
                size={40}
                strokeWidth={1}
                className="group-hover:scale-110 transition-all duration-500"
              />
            }
          />

          <WhiteCardDetails
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            index={1}
            title="Paid Attendance"
            description="Charge per seat. Cap registration to create scarcity and urgency."
            pos="02"
            icon={
              <Tags
                size={40}
                strokeWidth={1}
                className="group-hover:scale-110 transition-all duration-500"
              />
            }
          />

          <WhiteCardDetails
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            index={2}
            title="Replay Sales"
            description="Sell the recording to people who missed the live session — indefinitely."
            pos="03"
            icon={
              <Repeat
                size={40}
                strokeWidth={1}
                className="group-hover:scale-110 transition-all duration-500"
              />
            }
          />

          <WhiteCardDetails
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            index={3}
            title="Cohort Foundation"
            description="Use a webinar series as the backbone of a multi-week cohort."
            pos="04"
            icon={
              <Layers
                size={40}
                strokeWidth={1}
                className="group-hover:scale-110 transition-all duration-500"
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default MakingMoneyFormWebinars;