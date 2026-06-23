import { motion } from "framer-motion";
import {
  DollarSign,
  Calendar,
  Video,
  RefreshCw,
  Mic,
  Zap,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: DollarSign,
    title: "Set Your Rate",
    desc: "You choose the price. Per session, per hour, or per day.",
    highlight: "+$150.00",
    large: true,
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    desc: "Clients book themselves. No back-and-forth DMs.",
  },
  {
    icon: Video,
    title: "Free Zoom Pro",
    desc: "Zoom Pro included for every creator. No 40-minute cap.",
  },
  {
    icon: RefreshCw,
    title: "Calendar Sync",
    desc: "Google Calendar syncs in one click. Your availability is always accurate.",
  },
  {
    icon: Mic,
    title: "Meeting Recordings",
    desc: "Record every call with one click. Sell the replay later.",
  },
  {
    icon: Zap,
    title: "Instant Withdrawals",
    desc: "Withdraw after every session via Stripe / Razorpay.",
    highlight: "Instant",
    large: true,
  },
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className={`relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:border-neutral-600 ${
        feature.large ? "sm:col-span-2 lg:col-span-2" : ""
      }`}
    >
      {/* Spotlight */}
      <div
        className="hidden md:block pointer-events-none absolute -inset-px opacity-0 hover:opacity-100 transition"
        style={{
          background: `radial-gradient(
            500px circle at ${pos.x}px ${pos.y}px,
            rgba(255,255,255,0.08),
            transparent 40%
          )`,
        }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mb-4 sm:mb-6 w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center bg-neutral-900 border border-neutral-800"
      >
        <Icon size={18} className="text-neutral-300" />
      </motion.div>

      {/* Highlight Badge */}
      {feature.highlight && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-neutral-900 border border-neutral-700 text-green-400 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg">
          {feature.highlight}
        </div>
      )}

      <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
        {feature.title}
      </h3>

      <p className="text-sm text-neutral-400 leading-relaxed">
        {feature.desc}
      </p>
    </div>
  );
}

export default function FeaturesOfGrid() {
  return (
    <section className="bg-black text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            mb-12
            sm:mb-16
            lg:mb-20
            text-neutral-200
            leading-tight
            max-w-4xl
            mx-auto
          "
        >
          One link. Automated bookings. Instant payouts.
        </motion.h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}