import HomeComponent from "@/components/Home";
import About from "@/components/About";

import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <HomeComponent />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
