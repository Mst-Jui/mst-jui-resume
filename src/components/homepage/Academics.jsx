"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Academics = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className='container mx-auto bg-gray-100'>
      {/* Heading  */}
      <div className="text-center mb-12 pt-10 px-4">
        <p className="text-emerald-600 text-3xl sm:text-xl md:text-2xl font-medium italic mb-2">
          My Education
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          A quick overview of my academic journey, skills, and learning experiences.
        </p>
      </div>

      {/* Education  */}
      <section className="py-10 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16 uppercase tracking-widest">
            Academic Background & Qualifications
          </h2>

          <div className="relative border-l-2 border-slate-200 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:h-full md:before:w-0.5 md:before:bg-slate-200">

            {/* 1. SSC */}
            <div className="mb-12 flex justify-between items-center w-full md:flex-row">
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 absolute left-[-9px] md:left-1/2 md:-translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all ml-6 md:ml-0"
              >
                <span className='text-gray-400 font-normal border border-gray-300 px-3 py-1 rounded-full'>(2020 - 2021)</span>
                <h3 className="text-xl font-bold text-slate-800 py-3">SSC in SCIENCE</h3>
                <div>
                  <p className={`text-slate-500 mt-2 ${expandedId !== 'ssc' && "line-clamp-2"}`}>
                    Successfully completed my Secondary School Certificate (SSC) in Science, building a strong foundation in Mathematics, Physics, and Chemistry.
                  </p>
                  <button onClick={() => toggleExpand('ssc')} className="text-emerald-700 mt-2 text-sm font-medium hover:underline">
                    {expandedId === 'ssc' ? "See less" : "See more"}
                  </button> <br />
                  
                  {/* Next.js Link with target="_blank" */}
                  <Link href="https://kfgsc.edu.bd/#/home" target="_blank">
                    <button className="mt-5 border bg-none bg-transparent border-emerald-700 text-emerald-700 px-5 py-2 rounded-full font-bold transition-all hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300 flex items-center gap-2 justify-between">
                      ABOUT SCHOOL <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* 2. Development Journey */}
            <div className="mb-12 flex justify-between items-center w-full md:flex-row-reverse">
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 absolute left-[-9px] md:left-1/2 md:-translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all ml-6 md:ml-0"
              >
                <h3 className="text-xl font-bold text-slate-800 py-3">DEVELOPMENT JOURNEY</h3>
                <div>
                  <p className={`text-slate-500 mt-2 ${expandedId !== 'dev' && "line-clamp-2"}`}>
                    My development journey focuses on mastering JavaScript, React, and modern full-stack web technologies.
                  </p>
                  <button onClick={() => toggleExpand('dev')} className="text-emerald-700 mt-2 text-sm font-medium hover:underline">
                    {expandedId === 'dev' ? "See less" : "See more"}
                  </button> <br />
                </div>
              </motion.div>
            </div>
            
            {/* 3. HSC */}
            <div className="mb-12 flex justify-between items-center w-full md:flex-row">
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 absolute left-[-9px] md:left-1/2 md:-translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all ml-6 md:ml-0"
              >
                <span className='text-gray-400 font-normal border border-gray-300 px-3 py-1 rounded-full'>(2021 - 2023)</span>
                <h3 className="text-xl font-bold text-slate-800 py-3">HSC in HUMANITIES</h3>
                <div>
                  <p className={`text-slate-500 mt-2 ${expandedId !== 'hsc' && "line-clamp-2"}`}>
                    Completed my Higher Secondary Certificate (HSC) in Humanities, developing strong skills in communication and analytical understanding.
                  </p>
                  <button onClick={() => toggleExpand('hsc')} className="text-emerald-700 mt-2 text-sm font-medium hover:underline">
                    {expandedId === 'hsc' ? "See less" : "See more"}
                  </button> <br />
                  
                  <Link href="https://kfgsc.edu.bd/#/home" target="_blank">
                    <button className="mt-5 border bg-none bg-transparent border-emerald-700 text-emerald-700 px-5 py-2 rounded-full font-bold transition-all hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300 flex items-center gap-2 justify-between">
                      ABOUT COLLEGE <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* 4. BSS */}
            <div className="mb-12 flex justify-between items-center w-full md:flex-row-reverse">
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 absolute left-[-9px] md:left-1/2 md:-translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-purple-500 border-4 border-white shadow-sm"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-5/12 bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all ml-6 md:ml-0"
              >
                <span className='text-gray-400 font-normal border border-gray-300 px-3 py-1 rounded-full'>(2023 - Present)</span>
                <h3 className="text-xl font-bold text-slate-800 py-3">BSS (Honours) in ECONOMICS</h3>
                <div>
                  <p className={`text-slate-500 mt-2 ${expandedId !== 'bss' && "line-clamp-2"}`}>
                    Currently pursuing a Bachelor of Social Science (Honours) in Economics from Govt. Debendra College.
                  </p>
                  <button onClick={() => toggleExpand('bss')} className="text-emerald-700 mt-2 text-sm font-medium hover:underline">
                    {expandedId === 'bss' ? "See less" : "See more"}
                  </button> <br />
                  
                  <Link href="https://en.wikipedia.org/wiki/Government_Debendra_College" target="_blank">
                    <button className="mt-5 border bg-none bg-transparent border-emerald-700 text-emerald-700 px-5 py-2 rounded-full font-bold transition-all hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300 flex items-center gap-2 justify-between">
                      About University <IoIosArrowForward />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section >
    </div >
  );
};

export default Academics;