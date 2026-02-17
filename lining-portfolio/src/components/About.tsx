"use client";
import Image from "next/image";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);
  const smoothRotate = useSpring(rotate, {
    stiffness: 50,
    damping: 20,
  });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="min-h-screen flex flex-col justify-center py-20 bg-[#e7e7e7]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Folder tab slides in from left */}
      <motion.div
        className="w-full px-32"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex gap-4 mb-0">
          <div
            className="w-[500px] h-[100px] bg-[#D9D9D9] rounded-t-[10px]"
            style={{
              clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)",
              boxShadow: "6px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex flex-col justify-center items-center h-full gap-2">
              <div className="w-60 h-0.5 bg-[#C6C6C6]" />
              <div className="w-60 h-0.5 bg-[#C6C6C6]" />
              <div className="w-60 h-0.5 bg-[#C6C6C6]" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main card slides up */}
      <motion.div
        className="bg-[#D9D9D9] w-full py-12 rounded-[10pt] -mt-px"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 80 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <div className="w-full px-30 py-15">
          <div className="bg-[#D9D9D9] rounded-bl-[70px] rounded-tr-[70px] border-[1.7px] border-black p-12 relative min-h-[700px]">
            {/* Title drops in */}
            <motion.h1
              className="font-bold mb-12"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ABOUT ME
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text slides in from left */}
              <motion.div
                className="space-y-6 max-w-[500px]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-[#0000FF] text-xl">Hello friend!</p>
                <p className="leading-relaxed text-justify">
                  Based in Ottawa, I'm currently studying{" "}
                  <span className="text-[#0000FF] font-semibold">
                    Software Engineering
                  </span>{" "}
                  with a passion for creative design.
                </p>
                <p className="leading-relaxed text-justify">
                  Outside of tech,{" "}
                  <span className="text-[#0000FF] font-semibold">
                    journalling
                  </span>{" "}
                  is my creative outlet that has shaped the way I think. I'm
                  always on the hunt for hidden stationery gems, ask me for recs
                  if you're cool 🫡
                </p>
              </motion.div>

              {/* Image slides in from right */}
              <motion.div
                className="relative flex flex-col items-center gap-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  className="absolute -left-20 top-1/3"
                  style={{ rotate: smoothRotate }}
                >
                  <span className="text-8xl text-[#0000FF]">✸</span>
                </motion.div>

                <div className="relative w-70 h-110 rounded-full overflow-hidden border-[1.7px] border-black">
                  <Image
                    src="/AboutMeProfilePhoto.png"
                    alt="Profile photo"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-base text-justify max-w-md">
                  Fun fact: I'm on the UOttawa Varsity fencing team! I love
                  lovee to fill my free time with physical activity.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
