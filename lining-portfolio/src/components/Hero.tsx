import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-portfolio-gray px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="hidden lg:flex absolute -top-12 -left-8 gap-1">
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
            Hi, I'm Lining!
          </h1>
          <h3 className="text-lg sm:text-xl text-blue-700 mb-6">
            (but call me nicole)
          </h3>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            3rd year SWE student @ uo
          </p>

          <div className="flex gap-4">
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
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute -top-8 lg:-top-16 right-4 lg:right-8">
            <Image
              src="/hero-star.svg"
              alt=""
              width={200}
              height={200}
              className="w-20 h-20 lg:w-32 lg:h-32"
            />
          </div>

          <div className="hidden lg:flex absolute -bottom-8 right-12 gap-1">
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
            <span className="text-2xl">✦</span>
          </div>

          <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[600px] lg:h-[600px] flex items-center justify-center">
            <Image
              src="/hero-cat.svg"
              alt="Hand-drawn cat illustration waving"
              width={600}
              height={600}
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
