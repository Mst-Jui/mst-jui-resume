import { FaEnvelope, FaPhone, FaWhatsapp, FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <section className="max-w-6xl w-full mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 text-3xl font-medium italic mb-2">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let’s build something <span className="text-emerald-600">amazing</span> together
          </h2>
          <p className="mt-4 text-slate-500 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Email Card */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200 mb-6 group-hover:rotate-6 transition-transform">
                <FaEnvelope className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Email Me</h3>
              <p className="text-slate-500 mt-2 font-medium">contact.juiakter@gmail.com</p>
              {/* <a
                href="mailto:contact.juiakter@gmail.com"
                className="mt-6 inline-flex items-center gap-2 text-emerald-600 font-bold group-hover:gap-3 transition-all"
              >
                Send Message <FaArrowRight size={14} />
              </a> */}
            </div>
          </div>

          {/* Phone Card */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 mb-6 group-hover:rotate-6 transition-transform">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Call Me</h3>
              <p className="text-slate-500 mt-2 font-medium">+880 1612761084</p>
              {/* <a
                href="tel:+8801XXXXXXXXX"
                className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all"
              >
                Call Now <FaArrowRight size={14} />
              </a> */}
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-green-50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200 mb-6 group-hover:rotate-6 transition-transform">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">WhatsApp</h3>
              <p className="text-slate-500 mt-2 font-medium">+880 1612761084</p>
              {/* <a
                href="https://wa.me/8801XXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-green-600 font-bold group-hover:gap-3 transition-all"
              >
                Let's Chat <FaArrowRight size={14} />
              </a> */}
            </div>
          </div>

        </div>

        {/* Optional Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-medium">
            Typical response time: <span className="text-slate-600 font-bold">Within 2 hours</span>
          </p>
        </div>

      </section>
    </div>
  );
};

export default Contact;