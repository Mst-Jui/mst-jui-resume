import React from 'react';
import { DiSnapSvg } from 'react-icons/di';

const ResumeButton = () => {
  return (
    <div className='max-w-7xl mx-auto bg-gray-100 pb-8 pt-8'>
      {/* title  */}
      <div className="text-center mb-16">
        <p className="text-emerald-600 text-3xl font-medium italic mb-2 mt-8">My Resume</p>
        <div className='flex justify-center w-full'>
          <h2 className="text-3xl max-w-2xl md:text-4xl font-bold text-[#1f2937]">
            A Brief Overview of My Professional Journey and Technical Expertise
          </h2>
        </div>
        <div className='flex justify-center w-full mt-4'>
          <p className='max-w-3xl text-center text-gray-600'>Focused on building scalable and user-centric web applications. This interactive resume showcases my technical expertise, professional journey, and the projects I’ve brought to life. Feel free to explore my work or download a copy for your records.</p>
        </div>
      </div>

      {/* main part  */}
      <div className="flex justify-center items-center flex-col md:flex-row gap-4 w-full">
        {/* Download Button */}
        <a
          href="/resume.pdf"
          download="Mst_Jui_Akter_Full_Stack_Developer_Resume.pdf"
          className="hover:scale-105 active:scale-95 shadow-gray-300 mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 bg-emerald-700 hover:bg-emerald-600  rounded-full  shadow-lg hover:shadow-purple-500/30 w-full md:w-fit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>

        {/* Optional: View Online Link */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full md:w-fit inline-flex items-center justify-center border bg-transparent border-emerald-700 text-emerald-700 px-6 py-3 rounded-full font-semibold hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300 transition-all text-sm gap-2"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default ResumeButton;