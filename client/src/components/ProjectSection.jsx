import React from "react";
import { projects } from "../assets/assert";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-1 border-black relative snap-center"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Project</span>
        </h2>

        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="flex flex-nowrap gap-8  overflow-x-scroll snap-x scroll-none w-full p-2">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group w-full max-w-[600px] border gradient-border flex-none md:h-90 rounded-2xl relative overflow-hidden snap-center"
            >
              <div className="w-full md:h-full bg-black/10 z-40">
                <img
                  src={project.image}
                  className="w-full h-auto md:h-full object-cover object-center transition-all duration-300"
                />
              </div>

              {/* Mobile */}
              <div className="md:hidden flex flex-col justify-around gap-3 py-3 px-2 overflow-hidden">
                <div className="flex flex-wrap gap-5">
                  {project.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="px-4 py-2 rounded-full border border-foreground text-xs"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="my-2">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs">{project.description}</p>
                </div>

                <div className="flex gap-5 justify-center ">
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

              {/* Desktop */}
              <div className="absolute p-5 flex flex-col justify-around gradient-border md:group-hover:inset-0 border-none transition-all duration-700 ">
                <div className="flex gap-5">
                  {project.tags.map((tag, index) => (
                    <p
                      key={index}
                      className="px-4 py-2 rounded-full border border-foreground backdrop-blur-2xl"
                    >
                      {tag}
                    </p>
                  ))}
                </div>
                <div className="my-2">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="">{project.description}</p>
                </div>

                <div className="flex gap-5 justify-center ">
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


// {/* <div
//               key={key}
//               className="group bg-card rounded-lg overflow-hidden shrink-0 max-w-[700px] w-full shadow-xs card-hover snap-end md:snap-center md:aspect-video relative"
//             >
//               {/* <div className="group aspect-video overflow-hidden relative w-full"> */}
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="h-full object-cover transition-all duration-500 group-hover:opacity-0 z-40 "
//                 />
//                 {/* </div> */}

//                 <div className=" md:group-hover:opacity-100 md:opacity-0 md:absolute px-6 md:inset-0 md:z-50 flex flex-col justify-around">
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag) => (
//                       <span className="text-xs px-2 py-1 md:px-5 md:py-2 md:text-sm font-medium border rounded-full bg-gray-500/20 text-muted-foreground">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="my-2">
//                     <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
//                     <p className="text-muted-foreground text-xs md:text-sm mb-4">
//                       {project.description}
//                     </p>
//                   </div>

//                   <div className="">
//                     <div className="flex items-center gap-10 justify-center">
//                       <a
//                         title="Open Live Link"
//                         target="_blank"
//                         href={project.demoUrl}
//                         className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl"
//                       >
//                         <ExternalLink />
//                       </a>
//                       <a
//                         href={project.githubUrl}
//                         title="Sorce Code"
//                         className="text-foreground/80 hover:text-primary transition-colors duration-300 text-2xl"
//                       >
//                         <FaGithub />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               {/* </div> */}
//             </div> */}
