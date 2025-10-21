import Image from "next/image"
import { skillsData } from "@/data/skills"

function Skills() {
  return (
    <section
      id="skills"
      className="py-12 px-4 bg-neutral-50"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-950 mb-2">
            Skills & Technologies
          </h2>
          <p className="text-sm text-neutral-600">
            Technologies and methodologies I use to build software solutions
          </p>
        </div>

        <div className="space-y-6">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg border border-neutral-200 p-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-neutral-950 mb-3">
                {category.category}
              </h3>

              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center gap-1.5 p-2 rounded-md border border-neutral-100 hover:border-neutral-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="relative w-8 h-8 flex items-center justify-center">
                      <Image
                        src={"/logo/" + skill.logo}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain group-hover:scale-110 transition-transform duration-200"
                      />
                    </div>
                    <span className="text-[10px] font-medium text-neutral-700 text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
