import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Download, GraduationCap, MapPin } from 'lucide-react';
import { experiences, education } from '../assets/assert';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative snap-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Passionate MERN Full Stack & Freshworks App Developer with hands-on production experience in SaaS automation, serverless workflows, and modern web applications.
        </p>

        {/* Bio Card */}
        <div className="mb-16 border border-primary/40 rounded-2xl p-6 md:p-8 bg-card/60 backdrop-blur-sm shadow-sm shadow-primary/20">
          <div className="space-y-4 text-left">
            <h3 className="text-2xl font-bold text-foreground">
              Building Scalable SaaS & Full-Stack Solutions
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Junior MERN (MongoDB, Express.js, React, Node.js) Full Stack Developer and Freshworks App Developer intern with hands-on experience developing enterprise apps for Freshdesk, Freshservice, Freshsales, and Freshchat.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Proven track record writing serverless event handlers, multi-tenant Express/MongoDB middleware, integrating third-party REST and GraphQL APIs, and engineering clean, accessible user interfaces with React, Freshworks Crayons, and Tailwind CSS.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/14eaM5oNS2OngBf55-GNPVhWroJ39AB7_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium inline-flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <Briefcase className="w-7 h-7 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">Work Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 text-left rounded-2xl bg-white dark:bg-card border border-border/70 dark:border-border/60 hover:border-primary/50 shadow-sm transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-border/50">
                  <div className="flex items-center gap-4">
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-border"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {exp.company.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground flex flex-wrap md:flex-col md:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-primary border border-primary/40 dark:bg-primary/10 dark:border-transparent font-medium shadow-xs">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-sm md:text-base text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="flex items-center gap-3 mb-8 justify-center">
            <GraduationCap className="w-7 h-7 text-primary" />
            <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-card border border-border/70 dark:border-border/60 hover:border-primary/50 shadow-sm transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-primary border border-primary/40 dark:bg-primary/10 dark:border-transparent mb-3 shadow-xs">
                    {edu.period}
                  </span>
                  <h4 className="text-lg font-bold text-foreground mb-1">{edu.degree}</h4>
                  <p className="text-primary text-sm font-medium mb-3">{edu.institution}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
