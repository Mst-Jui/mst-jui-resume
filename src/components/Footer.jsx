"use client"
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-300 border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand/About Section */}
          <div className="col-span-1">
            <Link
              className='font-bold text-2xl'
              href={"/"}>
              Mst. <span className='text-emerald-700'>Jui</span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Full Stack Developer specializing in building exceptional digital experiences.
              Let's connect and build something meaningful.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:text-center">
            <h4 className="text-sm uppercase tracking-widest font-bold text-slate-800 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li>
                <Link href="/about" className="pb-1 border-b-2 border-transparent hover:border-b-emerald-700 hover:text-emerald-700 transition duration-300">About Me
                </Link>
              </li>
              <li>
                <Link href="/skills" className="pb-1 border-b-2 border-transparent hover:border-b-emerald-700 hover:text-emerald-700 transition duration-300">Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="pb-1 border-b-2 border-transparent hover:border-b-emerald-700 hover:text-emerald-700 transition duration-300">Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="pb-1 border-b-2 border-transparent hover:border-b-emerald-700 hover:text-emerald-700 transition duration-300">Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1 md:text-right">
            <h4 className="text-sm uppercase tracking-widest font-bold text-slate-800 mb-6">
              Follow Me
            </h4>
            <div className="flex md:justify-end gap-4">
              <Link href="https://github.com/Mst-Jui" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                <FaGithub size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/mstjui/" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://www.facebook.com/mst.jui.825437" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white transition-all duration-300">
                <FaFacebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} <span className="font-bold text-slate-600">MST JUI</span>. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-600 transition"
          >
            Back to Top
            <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-emerald-50 transition">
              <FaArrowUp size={12} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;