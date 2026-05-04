


import Image from "next/image";
import Link from "next/link";

const Projects = async () => {
  const res = await fetch("https://mst-jui-resume.vercel.app/projects.json", {
    cache: 'no-store',
  });
  const projects = await res.json();
  return (
    <div>
      {/* Heading  */}
      <div className="text-center my-15">
        <p className="text-emerald-600 text-3xl font-medium italic mb-2"> My Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2937]">
          Turning ideas into real applications!
        </h2>
      </div>

      {/* map  */}
      <div className="grid md:grid-cols-3 gap-8 px-6">
        {
          projects.map(project => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  width={500}
                  height={300}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition">
                  {project.name}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Button */}
                <Link href={`/projects/${project.id}`}>
                  <button className="mt-5 w-full bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold transition-all hover:bg-emerald-600 hover:text-white hover:scale-[1.02] active:scale-95">
                    View Details →
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Projects;