
import { FaCode, FaCss3Alt, FaGitAlt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiVercel,
  SiPostgresql,
  SiFramer,
  SiJavascript,
  SiGithub,
  SiBetterauth,
  SiPostman,
  SiShieldsdotio,
  SiAuth0
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';



const Skills = () => {
  return (
    <div className='container mx-auto bg-gray-100'>
      <section className="bg-gray-100 py-20 px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-600 text-3xl font-medium italic mb-2">My skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
            Skills That Power My Work!
          </h2>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* --- FRONTEND SECTION --- */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-2 border border-slate-300 rounded-full mb-10">
              <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                <span className="p-1 rounded-sm border border-slate-400">
                  <FaReact size={12} />
                </span>
                Frontend
              </span>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {/* React Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                  <FaReact size={32} className="text-[#61DAFB] group-hover:rotate-12 transition-transform duration-500" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">React JS</span>
              </div>

              {/* Next.js Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiNextdotjs size={32} className="text-black" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">Next JS</span>
              </div>

              {/* Tailwind Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiTailwindcss size={32} className="text-[#06B6D4]" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">Tailwind</span>
              </div>

              {/* JavaScript Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiJavascript size={32} className="text-[#F7DF1E]" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">JavaScript</span>
              </div>

              {/* Motion Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiFramer size={32} className="text-pink-500" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">Motion</span>
              </div>
            </div>
          </div>

          {/* --- BACKEND SECTION --- */}
          <div>
            <div className="inline-flex items-center gap-2 px-6 py-2 border border-slate-300 rounded-full mb-10">
              <span className="text-slate-500 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
                <span className="p-1 rounded-sm border border-slate-400">
                  <FaNodeJs size={12} />
                </span>
                Backend & Database
              </span>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {/* Node.js Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <FaNodeJs size={32} className="text-[#339933]" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">Node.js</span>
              </div>
              {/* Express.js Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiExpress size={32} className="text-[#000000]" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">Express.js</span>
              </div>

              {/* MongoDB Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiMongodb size={32} className="text-[#47A248]" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">MongoDB</span>
              </div>

              {/* BetterAuth Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 group-hover:shadow-md transition-all duration-500">
                  <SiBetterauth size={32} className="text-black group-hover:text-black transition-colors" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">BetterAuth</span>
              </div>

              {/* GitHub Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiGithub size={32} className="text-black" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">GitHub</span>
              </div>

              {/* Vercel Card */}
              <div className="group flex flex-col items-center justify-center p-6 bg-white border border-slate-200 rounded-[2rem] w-full sm:w-[160px] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 border border-slate-100 mb-4 group-hover:scale-110 transition-all duration-500">
                  <SiVercel size={32} className="text-black" />
                </div>
                <span className="text-slate-700 font-bold text-sm text-center group-hover:text-black">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className='text-3xl font-semibold text-gray-700 mb-6'>Technical Arsenal</h2>
        <div className="grid md:grid-cols-3 gap-8">

          {/* Frontend */}
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-5 text-emerald-600">
              Frontend
            </h3>

            <div className="space-y-4">

              <div>
                <div className="flex items-center gap-2">
                  <FaHtml5 className="text-orange-500" />
                  <p>HTML</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaCss3Alt className="text-blue-500" />
                  <p>CSS / Tailwind</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaJs className="text-yellow-400" />
                  <p>JavaScript</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-2 rounded w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <FaReact className="text-cyan-500" />
                  <p>React.js</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <SiNextdotjs className="text-black text-lg" />
                  <p>Next.js</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-gray-600 to-black h-2 rounded w-[90%]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Backend */}
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-5 text-emerald-600">
              Backend
            </h3>

            <div className="space-y-4">

              <div>
                <div className="flex items-center gap-2">
                  <FaNodeJs className="text-green-500" />
                  <p>Node.js</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded w-[80%]"></div>
                </div>
              </div>

               <div>
                <div className="flex items-center gap-2">
                  <SiExpress />
                  <p>Express.js</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-gray-400 to-gray-600 h-2 rounded w-[70%]"></div>
                </div>
              </div> 

              <div>
                <div className="flex items-center gap-2">
                  <SiMongodb className="text-green-600" />
                  <p>MongoDB</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <SiBetterauth style={{ color: "#000" }} className="text-lg" />
                  <p>Better Auth</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-[#6C5CE7] to-[#8E7CFF] h-2 rounded w-[70%]"></div>
                </div>
              </div>

            </div>
          </div>

          {/* Tools */}
          <div className="bg-white/70 backdrop-blur-md border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold mb-5 text-emerald-600">
              Tools
            </h3>

            <div className="space-y-4">

              <div>
                <div className="flex items-center gap-2">
                  <FaGitAlt className="text-orange-500" />
                  <p>Git & GitHub</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <VscVscode className="text-blue-500" />
                  <p>VS Code</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded w-[90%]"></div>
                </div>
              </div>
                    {/* Postman  */}
              <div>
                <div className="flex items-center gap-2">
                  <SiPostman className="text-orange-400" />
                  <p>Postman</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded">
                  <div className="bg-gradient-to-r from-orange-300 to-orange-500 h-2 rounded w-[75%]"></div>
                </div>
              </div>
              
             


            </div>
          </div>

        </div>
      </section>



    </div>
  );
};

export default Skills;



{/* Social Icons (Commented out as in the original code) */ }
{/* <div className="mx-auto max-w-md mt-4 bg-transparent p-4 border-none">
  <Marquee gradient={false} speed={50} pauseOnHover={true}>
    <div className="flex items-center space-x-12 md:space-x-20 px-8">
      <SiNextdotjs className="text-3xl md:text-5xl text-gray-500 hover:text-black transition-colors" />
      <FaReact className="text-3xl md:text-5xl text-gray-500 hover:text-blue-500 transition-colors" />
      <RiTailwindCssFill className="text-3xl md:text-5xl text-gray-500 hover:text-blue-500 transition-colors" />
      <FaJs className="text-3xl md:text-5xl text-gray-500 hover:text-[#f7df1e] transition-colors" />
      <SiMongodb className="text-3xl md:text-5xl text-gray-500 hover:text-[#47a248] transition-colors" />
    </div>
  </Marquee>
</div> */}








