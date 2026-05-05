"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { FaFacebook, FaGithub, FaJs, FaLinkedin, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiNextdotjs } from 'react-icons/si';
// import { SwiperSlide } from 'swiper/react';

const Banner = () => {
  return (
    <div className="min-h-[95] overflow-x-hidden">

      <div className="bg-gray-100 max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        {/* Left Column (Left Side) */}
        <div className="relative p-2 text-center md:text-left flex flex-col justify-center min-h-[500px]">
          <div className="relative p-6 text-center md:text-left flex flex-col justify-center min-h-[400px]">

            <h1 className="text-3xl md:text-5xl font-black text-gray-600 leading-tight">
              I'm <br />
              <span className="text-emerald-700 italic">
                Full Stack Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-[#6b7280] text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              I build <span className="text-black font-semibold">responsive</span> and
              <span className="text-black font-semibold"> user-friendly</span> web applications using modern technologies,
              focusing on clean code and performance.
            </p>

            {/* Button */}
            <div className="mt-6">
              <Link href={"/projects"}>
              <button className="border bg-none bg-transparent border-emerald-700 text-emerald-700 px-10 py-4 rounded-full font-bold transition-all hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300">
                View Projects
              </button>
              </Link>

            </div>
          </div>




          {/* Stats or Tech Stack (Optional but attractive) */}
          <div className="mt-2 border-t border-gray-100 flex gap-8 justify-center md:justify-start">
            <div>
              <h4 className="text-2xl font-bold text-gray-800">30+</h4>
              <p className="text-sm text-gray-500">Projects Done</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-gray-800">10+</h4>
              <p className="text-sm text-gray-500">Tech Stack</p>
            </div>
          </div>
        </div>

        {/* Right Column (Right Side) */}
        <div className="relative p-6 rounded-lg shadow-md md:shadow-none md:bg-transparent flex flex-col items-center justify-center text-center">
          {/* Profile Picture with dotted circle background */}
          <div className="relative w-50 h-50 mb-6">
            <div className="absolute inset-0 rounded-full border-[10px] border-[#e1ebfa]"></div>
            {/* Replace /images/profile.png with your profile picture path */}
            <Image
              src="https://i.ibb.co/TDcjkcd0/Whats-App-Image-2026-03-08-at-22-26-28-removebg-preview.png"
              alt="Mst Jui Profile"
              width={200}
              height={200}
              className="rounded-full relative z-10 object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#1f2937]">Mst Jui</h2>
            <p className="text-xl font-medium text-[#4b5563] mt-2">Full Stack Developer</p>

            {/* Social Icons (Commented out as in the original code) */}
            <div className="mx-auto max-w-md mt-3 bg-transparent p-3 border-none">
              <Marquee gradient={false} speed={50} pauseOnHover={true}>
                <div className="flex items-center space-x-10 md:space-x-18 px-6">
                  <Link href={"https://github.com/Mst-Jui"}>
                    <FaGithub className="text-3xl md:text-5xl text-gray-500 hover:text-black transition-colors" />
                  </Link>
                  <Link href={"https://www.linkedin.com/in/mstjui/"}>
                    <FaLinkedin className="text-3xl md:text-5xl text-gray-500 hover:text-[#61dafb] transition-colors" />
                  </Link>
                  <Link href={"https://www.facebook.com/mst.jui.825437"}>
                    <FaFacebook className="text-3xl md:text-5xl text-gray-500 hover:text-[#38bdf8] transition-colors" />
                  </Link>

                </div>
              </Marquee>
            </div>
            {/* Download CV Button */}
            <button className="bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300">
              Resume
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;

// I build responsive and user-friendly web applications using modern technologies, focusing on clean code and performance.