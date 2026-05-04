import About from "@/components/homepage/About";
import Academics from "@/components/homepage/Academics";
import Banner from "@/components/homepage/Banner";
import Projects from "@/components/homepage/projects";
import Skills from "@/components/homepage/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Academics />

    </div>
  );
}
