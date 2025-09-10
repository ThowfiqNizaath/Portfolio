import { Briefcase, Code, User } from 'lucide-react';
import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-1 relative snap-center">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6 border border-primary/80 p-5 shadow-sm shadow-primary">
            <h3 className="text-2xl text-center font-semibold">
              Passionate Full Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I am a passionate MERN stack developer with a strong focus on
              JavaScript, React, Node.js, and modern web technologies.
            </p>
            <p className="text-muted-foreground">
              I enjoy solving complex problems, exploring deep technical
              concepts, and building responsive, user-friendly applications.
              Constantly learning, I aim to create impactful digital solutions
              with clean, efficient code.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center gap-4 pt-4">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1ZFs2l0NjXJoXRXevBIv8SVjcLSxOIXyt/view?usp=sharing"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 hover:text-primary hover:scale-98"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    I work collaboratively at Stats Perform to ensure accuracy
                    and consistency in player tracking. Alongside this, I gained
                    experience in React development through an internship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
