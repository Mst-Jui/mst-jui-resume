import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = () => {
  return (
    <div>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My <span className="text-emerald-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <Image
              src="/project1.jpg"
              alt="Project 1"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                E-Commerce Website
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                A full-stack e-commerce platform with cart, payment and admin dashboard.
              </p>

              <Link
                href="/projects/ecommerce"
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700"
              >
                View More / Details
              </Link>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <Image
              src="/project2.jpg"
              alt="Project 2"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Portfolio Website
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                A modern responsive portfolio built with Next.js and Tailwind CSS.
              </p>

              <Link
                href="/projects/portfolio"
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700"
              >
                View More / Details
              </Link>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
            <Image
              src="/project3.jpg"
              alt="Project 3"
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Blog Platform
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                A blogging platform with authentication and markdown support.
              </p>

              <Link
                href="/projects/blog"
                className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700"
              >
                View More / Details
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Projects;