import { motion } from "framer-motion";
import {
  Calendar,
  Zap,
  Link2,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Set your rate",
    desc: "Pick your price per session. One rate or several — you're in control.",
    icon: Zap,
  },
  {
    step: "Step 02",
    title: "Sync your calendar",
    desc: "Connect Google Calendar once. Your real availability drives the booking page.",
    icon: Calendar,
  },
  {
    step: "Step 03",
    title: "Share your link",
    desc: "Send your personal booking link anywhere and let clients book instantly.",
    icon: Link2,
  },
  {
    step: "Step 04",
    title: "Get booked",
    desc: "Receive bookings automatically and get notified instantly.",
    icon: CheckCircle,
  },
];

function StepCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-neutral-800
        bg-neutral-950
        p-5
        sm:p-6
        lg:p-10
      "
    >
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          hover:opacity-100
          transition
          pointer-events-none
        "
        style={{
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%)",
        }}
      />

      {/* Icon */}
      <div className="flex items-center justify-center h-20 sm:h-24 lg:h-28 mb-6 sm:mb-8 lg:mb-10">
        <div
          className="
            w-14
            h-14
            sm:w-16
            sm:h-16
            rounded-full
            bg-neutral-900
            border
            border-neutral-700
            flex
            items-center
            justify-center
          "
        >
          <Icon
            className="text-white"
            size={24}
          />
        </div>
      </div>

      {/* Step Badge */}
      <div
        className="
          inline-block
          text-[10px]
          sm:text-xs
          text-neutral-400
          border
          border-neutral-700
          rounded-full
          px-3
          py-1
          mb-4
        "
      >
        {item.step}
      </div>

      {/* Title */}
      <h3
        className="
          text-lg
          sm:text-xl
          font-semibold
          text-white
          mb-3
        "
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="
          text-sm
          sm:text-base
          text-neutral-400
          leading-relaxed
          max-w-sm
        "
      >
        {item.desc}
      </p>

      {/* Background Number */}
      <div
        className="
          absolute
          right-2
          sm:right-4
          bottom-[-20px]
          sm:bottom-[-30px]
          rotate-12
          text-[100px]
          sm:text-[140px]
          lg:text-[200px]
          font-bold
          text-white/5
          select-none
          pointer-events-none
        "
      >
        {index + 1}
      </div>
    </motion.div>
  );
}

export default function HowItWorksSection() {
  return (
    <section
      className="
        bg-black
        text-white
        py-16
        sm:py-20
        lg:py-28
        px-4
        sm:px-6
        lg:px-8
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-semibold
            text-neutral-200
            mb-12
            sm:mb-16
            lg:mb-20
          "
        >
          How it works
        </motion.h2>

        {/* Cards */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-4
            sm:gap-6
            lg:gap-8
          "
        >
          {steps.map((item, i) => (
            <StepCard
              key={i}
              item={item}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}