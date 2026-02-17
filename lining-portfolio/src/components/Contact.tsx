"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#e7e7e7] flex justify-center px-6 md:px-12 py-20"
    >
      <div className="relative w-full max-w-4xl">
        {/* Envelope flap cutout */}
        <div
          className="relative mx-auto w-full h-[60px] md:h-[120px]"
          style={{
            backgroundColor: "#e7e7e7",
            // Adjusted clipPath for better mobile slope
            clipPath:
              "polygon(0 0, 35% 0, 50% 100%, 65% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* Envelope body */}
        <div className="relative w-full px-8 md:px-12 py-10 md:py-14 bg-[#2E36FF] min-h-[420px]">
          <h1 className="text-4xl md:text-6xl font-bold mb-10 text-black">
            CONTACT ME :D
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
            {/* Mascot - Smaller on mobile */}
            <div className="w-48 h-48 md:w-94 md:h-64 relative flex-shrink-0">
              <Image
                src="/mascot.svg"
                alt="Mascot"
                fill
                className="object-contain"
              />
            </div>

            {/* Email info - Centered on mobile, Right-aligned on desktop */}
            <div className="text-center md:text-right w-full">
              <a
                href="mailto:nicolea25418@gmail.com"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-black hover:underline transition-all block break-words"
              >
                nicolea25418@gmail.com
              </a>
              <p className="mt-4 md:mt-2 opacity-70 text-lg md:text-2xl leading-snug max-w-sm ml-auto">
                Feel free to contact me with any inquiries or questions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
