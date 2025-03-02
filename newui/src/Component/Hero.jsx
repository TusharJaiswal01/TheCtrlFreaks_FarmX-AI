import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function AgricultureLanding() {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100 + "vw",
    y: Math.random() * 100 + "vh",
    duration: Math.random() * 7 + 3,
    size: Math.random() * 6 + 3 + "px",
  }));

  return (
    <div className="min-h-screen min-w-screen px-12 pr-10 bg-gradient-to-br from-green-900 to-emerald-800 py-6 flex gap-7 relative overflow-hidden">
      {/* 🍃 Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: particle.y, x: particle.x }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: ["-10vh", "110vh"],
            x: particle.x,
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bg-white rounded-full z-40"
          style={{
            width: particle.size,
            height: particle.size,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Left Section */}
      <div className="w-[28%] bg-white/20 backdrop-blur-lg rounded-3xl flex flex-col z-10 p-6 border border-green-300 shadow-lg">
        <div className="w-16 h-16">
          <img src="Star.jpg" alt="" className="rounded-full" />
        </div>

        <div className="mt-6 w-[90%] font-bold text-3xl text-green-100 leading-tight">
          Welcome to  FarmXAI 🌾
        </div>

        <div className="mt-4 text-green-100 text-[14px] leading-relaxed font-serif">
          Combining traditional wisdom with modern technology to revolutionize farming for the next generation.
        </div>

        {/* Left Bottom Card (First Step) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute left-4 bottom-4 w-72"
        >
          <div className="bg-white/20 backdrop-blur-lg border border-green-400 shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              FARMING INSIGHTS
            </span>
            <h2 className="text-lg font-bold text-green-900 mt-4">
              Smart Farming Techniques for Sustainable Growth
            </h2>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex items-center justify-between text-gray-800 text-sm">
              <span className="font-medium" >Explore More</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Section with Background */}
      <div className="w-full relative rounded-3xl bg-cover bg-center bg-no-repeat bg-[url('https://r2.starryai.com/results/1057602469/34b183b0-cc3b-49a7-8e17-a59fcf5e783b.webp')] before:absolute before:inset-0 before:bg-black/30 before:backdrop-blur-[1px]">
        <Navbar />

        {/* Middle Card (Second Step - Thoda Upar) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-28 left-8 w-80"
        >
          <div className="bg-white/50 backdrop-blur-lg border border-green-400 shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform mr-10">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              INNOVATION ZONE
            </span>
            <h2 className="text-lg font-bold text-green-900 mt-4">
              Eco-Friendly Techniques for Higher Yields
            </h2>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex items-center justify-between text-gray-800 text-sm">
              <span className="font-medium">Learn More</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </motion.div>

        {/* Top Right Card (Third Step - Aur Thoda Upar) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-48 left-80 w-80"
        >
          <div className="bg-white/20 backdrop-blur-lg border border-green-400 shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform ml-10">
            <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
              SMART SOLUTIONS
            </span>
            <h2 className="text-lg font-bold text-green-900 mt-4">
              AI Monitoring & Data-driven Farming
            </h2>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex items-center justify-between text-gray-800 text-sm">
              <span className="font-medium">Get Details</span>
              <span className="text-xl">→</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
