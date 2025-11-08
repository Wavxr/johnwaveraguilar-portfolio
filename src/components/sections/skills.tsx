"use client"

import { useState } from "react"
import Image from "next/image"
import { skillsData } from "@/data/skills"
import { SkillCategoryType } from "@/types/skills"

function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillCategoryType | "all">("all")

  // Flatten all skills with their category
  const allSkills = skillsData.flatMap((category) =>
    category.skills.map((skill) => ({
      ...skill,
      category: category.category,
    }))
  )

  const filteredSkills = activeFilter === "all" 
    ? allSkills 
    : allSkills.filter((skill) => skill.category === activeFilter)

  return (
    <section id="skills" className="pt-18 px-4 bg-neutral-50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-2">
            Skills & Technologies
          </h2>
          <p className="text-sm text-neutral-600 mb-6">
            Technologies and methodologies I use to build software solutions
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100"
              }`}
            >
              All
            </button>
            {skillsData.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveFilter(category.category)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeFilter === category.category
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-700 border border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>

        {/* Tag Cloud Layout */}
        <div className="min-h-[300px]">
          <div className="flex flex-wrap justify-center gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={`${skill.category}-${skill.name}`}
                className="group inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-neutral-200 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="relative w-5 h-5 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={"/logo/" + skill.logo}
                    alt={skill.name}
                    width={20}
                    height={20}
                    className="object-contain group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-xs font-semibold text-neutral-700 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
