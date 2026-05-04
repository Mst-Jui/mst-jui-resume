import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Projects = async () => {
  const res = await fetch("/projects.json",{
    cache: 'no-store',
  })
  const projects = await res.json()
  return (
    <div>


    <div>
      {
        projects.map(project =>{
          return <p key={project.id}>{project.name}</p>
        })
      }
    </div>

    </div>
  );
};

export default Projects;