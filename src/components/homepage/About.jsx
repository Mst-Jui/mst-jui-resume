"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiNextdotjs } from 'react-icons/si';



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const About = () => {
  return (
    <div className='container mx-auto'>
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-3xl font-medium italic mb-2">About me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
              Things you should know before starting!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: Image/Graphic Area */}
            <div className="flex flex-col items-center p-6 max-w-sm mx-auto border border-gray-100 p-10 rounded-lg">
              {/* Profile Image Card */}
              <div className="w-full bg-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
                <Image
                  width={200}
                  height={200}
                  src="https://i.ibb.co/HTZV50r0/Gemini-Generated-Image-ls7zbbls7zbbls7z-removebg-preview.png"
                  alt="Mst Jui"
                  className="w-full h-auto object-cover aspect-square"
                />
              </div>

              {/* Name and Tagline */}
              <div className="text-center mt-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
                  Mst Jui
                </h2>
                <p className="text-gray-400 font-medium tracking-widest mt-2 uppercase text-sm">
                  Happy Coding! |
                </p>
              </div>

              {/* Download CV Button */}
              <button className="flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white w-full py-4 rounded-full mt-8 font-bold text-lg transition-all shadow-md active:scale-95">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download CV
              </button>
            </div>

            {/* Right: Content Area */}
            <div className="space-y-6">
              {/* Stats Card Section */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-b pb-12">

                {/* Card 1: Projects (Your Strength) */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-gray-800">30+</h3>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Academic Projects</p>
                  </div>
                </div>

                {/* Card 2: Skill Growth (Instead of Experience) */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-gray-800">100%</h3>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Dedication & Learning</p>
                  </div>
                </div>

                {/* Card 3: Modern Tech (Showcasing your Stack) */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center md:items-start">
                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black text-gray-800">10+</h3>
                    <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Modern Tech Tools</p>
                  </div>
                </div>

              </div>

              {/* Description Text */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 space-y-6">

                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  <span className="block text-3xl md:text-5xl font-bold text-emerald-600 mb-2">
                    Hello!
                  </span>

                  I am <span className="font-semibold text-gray-900">Mst Jui</span> — a passionate
                  <span className="text-emerald-600 font-semibold"> Full Stack Developer</span>.

                  <br /><br />

                  My programming journey is driven by solving real-world problems using modern technologies
                  like <span className="font-medium text-gray-800">MERN Stack</span> and
                  <span className="font-medium text-gray-800"> Next.js</span>.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  I enjoy both the logic-heavy backend and the creative frontend. From building
                  <span className="text-emerald-600 font-medium"> secure authentication</span> systems
                  to crafting <span className="text-emerald-600 font-medium"> interactive UI</span>,
                  I focus on performance and clean, maintainable code.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  Beyond coding, I’m a curious tech explorer and design enthusiast who loves discovering
                  tools that push the boundaries of the web.
                </p>

              </div>

              {/* info  */}

              <div className="py-5 max-w-2xl">
                {/* Personal Info Grid Container */}
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden p-6 md:p-8 space-y-5">

                  {/* Row Wrapper Function - UI ke clean rakhar jonno */}
                  {[
                    { label: "Name", value: "Mst Jui", icon: "👤" },
                    { label: "Nationality", value: "Bangladeshi", icon: "🇧🇩" },
                    { label: "Phone", value: "(+880) 1612761084", icon: "📞" },
                    { label: "Education", value: "BSS (Honours)", icon: "🎓" },
                    { label: "Freelance", value: "Available", icon: "💼", status: true },
                    { label: "Language", value: "Bangla / English", icon: "🌐" }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[110px_20px_1fr] md:grid-cols-[150px_30px_1fr] items-center group transition-all duration-200"
                    >
                      {/* Label Part */}
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 group-hover:text-emerald-500 transition-colors">
                          {item.icon}
                        </span>
                        <span className="text-gray-500 font-semibold text-sm uppercase tracking-wider">
                          {item.label}
                        </span>
                      </div>

                      {/* Separator */}
                      <span className="text-gray-300 text-center font-bold">:</span>

                      {/* Value Part */}
                      <span className={`text-lg font-bold tracking-tight ${item.status ? 'text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full w-fit' : 'text-gray-800'
                        }`}>
                        {item.value}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <Link href={"https://www.linkedin.com/in/mstjui/"}>
                  <button className="bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300">
                    LinkedIn
                  </button>
                </Link>
                <Link href={" https://github.com/Mst-Jui"}>
                  <button className="border bg-none bg-transparent border-emerald-700 text-emerald-700 px-10 py-4 rounded-full font-bold transition-all hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300">
                    GitHub
                  </button>
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;








    
