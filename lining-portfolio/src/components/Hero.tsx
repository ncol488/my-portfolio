"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-portfolio-gray px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          {/* Stars fade in */}
          <motion.div
            className="hidden lg:flex absolute -top-12 -left-8 gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
          </motion.div>

          {/* Title slides in from left */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Hi, I'm Lining!
          </motion.h1>

          {/* Subtitle fades in with delay */}
          <motion.h3
            className="text-lg sm:text-xl text-blue-700 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          >
            (but call me nicole)
          </motion.h3>

          {/* Description fades in */}
          <motion.p
            className="text-base sm:text-lg text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            3rd year SWE student @ uo
          </motion.p>

          {/* Buttons pop in */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              CV
            </a>
            <a
              href="#"
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              in
            </a>
          </motion.div>
        </div>

        <div className="relative flex justify-center">
          {/* Star spins slowly */}
          <motion.div
            className="absolute -top-8 lg:-top-16 right-4 lg:right-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src="/hero-star.svg"
              alt=""
              width={200}
              height={200}
              className="w-20 h-20 lg:w-32 lg:h-32"
            />
          </motion.div>

          {/* Bottom stars fade in */}
          <motion.div
            className="hidden lg:flex absolute -bottom-8 right-12 gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
          </motion.div>

          {/* Cat floats up and down */}
          <motion.div
            className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: [0, -15, 0] }}
            transition={{
              opacity: { duration: 0.8 },
              y: {
                delay: 0.5,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/hero-cat.svg"
              alt="Hand-drawn cat illustration waving"
              width={600}
              height={600}
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
