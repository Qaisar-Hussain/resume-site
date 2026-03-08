"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, shopping cart, and payment integration.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/dp.jpeg",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Project Management App",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/dp.jpeg",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills with smooth animations.",
    technologies: ["Next.js", "Tailwind CSS", "React Icons", "TypeScript"],
    image: "/dp.jpeg",
    github: "#",
    live: "#"
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Full-featured task management system with drag-and-drop functionality and real-time sync.",
    technologies: ["React", "Redux", "Firebase", "Material-UI"],
    image: "/dp.jpeg",
    github: "#",
    live: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 text-lg mt-4">
            Showcase of my latest work and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden border border-slate-200 hover:shadow-xl transition duration-300 hover:border-sky-400"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-3 py-1 bg-sky-100 text-sky-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition duration-300"
                  >
                    <FaGithub size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold transition duration-300"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
