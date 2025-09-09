import React from "react";
import { projects } from "../assets/assert";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl border border-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>

        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden max-w-[500px] w-full shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-gray-500/20 text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <a
                      target="_blank"
                      href={project.demoUrl}
                      size={20}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      size={20}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center mx-auto group w-fit">
          <a
            className="cosmic-button flex items-center gap-2 hover:scale-none"
            href="https://book-my-show-delta-one.vercel.app/"
            target="_blank"
          >
            Check My GitHub{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
