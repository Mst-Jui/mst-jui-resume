import Image from "next/image";
import Link from "next/link";


const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://mst-jui-resume.vercel.app/projects.json", {
    cache: "no-store",
  });
  const projects = await res.json();
  const project = projects.find((p) => p.id == id)
  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-emerald-500">Project Not Found</h2>
      </div>
    );
  }
  return (
    <div>
      <div className="max-w-5xl mx-auto px-8 py-12 bg-gray-100">

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={project.image}
            alt={project.name}
            width={1000}
            height={500}
            className="w-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-slate-800">
          {project.name}
        </h1>

        {/* Description */}
        <p className="text-slate-600 mt-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-6">
          <h2 className="font-medium text-emerald-600 mb-2">

            <p className="text-2xl font-semibold text-gray-800 mb-4">Technology Used:</p>
            <ul className="flex flex-wrap gap-6">
              {
                project.techStack?.map((m, index) => <li
                  key={index}
                  className="rounded-full py-2 px-3 bg-gray-200 text-gray-400 hover:bg-emerald-700 hover:text-white"
                >{m}</li>)
              }
            </ul>
          </h2>

        </div>

        {/* Links */}
        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="bg-emerald-700 text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-emerald-600 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300"
          >
            Live Project
          </a>

          <a
            href={project.githubClient}
            target="_blank"
            className="border bg-none bg-transparent border-emerald-700 text-emerald-700 px-10 py-4 rounded-full font-bold transition-all hover:text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-lg shadow-gray-300"
          >
            GitHub Repo
          </a>
        </div>

        {/* Challenges */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Challenges Faced
          </h2>
          <p className="text-slate-600">
            {project.challenges}
          </p>
        </div>

        {/* Future */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            Future Improvements
          </h2>
          <p className="text-slate-600">
            {project.futurePlans}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <Link href="/projects">
            <button className="px-5 py-2 border rounded-full border-slate-400 hover:bg-slate-100 transition">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;