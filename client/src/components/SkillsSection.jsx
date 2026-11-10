import React, { useMemo, useState } from 'react'
import { categories, skills } from '../assets/assert.js'

const SkillsSection = () => {
  const [category, setCategory] = useState("all")

  const filterSkills = useMemo(() => {
    return skills.filter(skill => category === "all" || skill.category === category)
  }, [category])

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 snap-center"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Comprehensive stack across MERN web development, Freshworks platform APIs (FDK), serverless architecture, databases, and secure authentication.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat, index) => {
            const isActive = category === cat;
            return (
              <button
                key={index}
                onClick={() => setCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer capitalize ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(139,92,246,0.5)] scale-105"
                    : "bg-white border border-border/80 text-foreground hover:border-primary/50 dark:bg-card dark:text-muted-foreground shadow-xs"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filterSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-card p-5 rounded-xl border border-primary/40 dark:border-primary/40 shadow-[0_4px_16px_rgba(139,92,246,0.10)] dark:shadow-[0_4px_16px_rgba(139,92,246,0.15)] hover:border-primary hover:shadow-[0_8px_24px_rgba(139,92,246,0.20)] hover:-translate-y-0.5 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white text-primary border border-primary/30 dark:bg-primary/10 capitalize shadow-xs">
                  {skill.category}
                </span>
                {skill.icon && (
                  <skill.icon className={`w-7 h-7 md:w-8 md:h-8 ${skill.iconColor}`} />
                )}
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection
