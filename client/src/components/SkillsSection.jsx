import React, { useEffect, useState } from 'react'
import { categories, skills } from '../assets/assert.js'
import { cn } from '../lib/utils.js';

const SkillsSection = () => {
    const [category, setCategory] = useState("all")
    const [filterSkills, setFilterSkills] = useState(skills)
    const selectedCategorySkills = async() => {
        const filteredSkills = skills.filter(skill => skill.category === category || category === "all")
        setFilterSkills(filteredSkills)
    }

    useEffect(() => {
        selectedCategorySkills()
    },[category])
  return (
    <section id="skills" className="py-24 px-4 relative bg-secendary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                category === cat ? "bg-primary text-lg text-primary-foreground": "opacity-80"
              )}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
                {skill.icon && (
                  <skill.icon className={`w-10 h-10 ${skill.iconColor}`} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection