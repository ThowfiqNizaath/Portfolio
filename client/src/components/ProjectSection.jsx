import React from "react";
import { projects } from "../assets/assert";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>

        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-nowrap gap-8 p-5 overflow-x-scroll snap-x scroll-none">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shrink-0 max-w-[700px] w-full shadow-xs card-hover snap-end md:snap-center"
            >
              <div className="group aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 z-40 "
                />
                {/* </div> */}

                <div className="group-hover:opacity-100 opacity-0 absolute p-6 inset-0 z-50 flex flex-col justify-around">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span className="text-xs px-2 py-1 md:px-5 md:py-2 md:text-sm font-medium border rounded-full bg-gray-500/20 text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="my-2">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-xs md:text-sm mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="">
                    <div className="flex items-center gap-10 justify-center">
                      <a
                        title="Open Live Link"
                        target="_blank"
                        href={project.demoUrl}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl"
                      >
                        <ExternalLink />
                      </a>
                      <a
                        href={project.githubUrl}
                        title="Sorce Code"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl"
                      >
                        <FaGithub />
                      </a>
                    </div>
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
