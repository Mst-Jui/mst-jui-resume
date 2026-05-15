import About from "@/components/homepage/About";
import Academics from "@/components/homepage/Academics";
import Banner from "@/components/homepage/Banner";
import Contact from "@/components/homepage/Contact";
import Projects from "@/components/homepage/Projects";
import Skills from "@/components/homepage/Skills";
import ResumeButton from "@/components/ResumeButton";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Academics />
      <ResumeButton />
    </div>
  );
}
