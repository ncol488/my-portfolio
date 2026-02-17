import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <Image
            src="/logo-cat.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-16 h-16"
          />
        </a>

        {/* Navigation Links */}
        <div
          className="hidden md:flex gap-8 items-center text-xl font-semibold"
          style={{
            letterSpacing: "-0.09em",
            fontSize: "1.2rem",
            fontWeight: "100",
          }}
        >
          <a href="#home" className="text-blue-700 hover:underline transition">
            HOME
          </a>
          <a href="#about" className="hover:text-blue-700 transition">
            ABOUT ME
          </a>
          <a href="#projects" className="hover:text-blue-700 transition">
            PROJECTS
          </a>
          <a href="#contact" className="hover:text-blue-700 transition">
            CONTACT
          </a>
        </div>

        {/* Mobile menu button (optional) */}
        <button className="md:hidden">
          <span className="text-2xl">☰</span>
        </button>
      </div>
    </nav>
  );
}
