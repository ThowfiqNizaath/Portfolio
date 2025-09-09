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
    <section
      id="skills"
      className="py-24 px-1 relative bg-secendary/30 snap-center"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="border border-primary mb-12 bg-primary/80">
          <select
            className="block ring-0 py-2 px-4 border-none w-full text-white"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} className="text-black" value={cat}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>
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