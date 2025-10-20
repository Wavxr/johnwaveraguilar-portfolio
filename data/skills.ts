import { SkillsData, SkillCategoryType } from "../types/skills";

export const skillsData: SkillsData = [
  {
    category: SkillCategoryType.Languages,
    skills: [
      { name: "Java", logo: "java.png" },
      { name: "Python", logo: "python.png" },
      { name: "C++", logo: "cpp.png" },
      { name: "PHP", logo: "php.png" },
      { name: "JavaScript", logo: "javascript.png" },
      { name: "TypeScript", logo: "typescript.png" },
      { name: "SQL", logo: "sql.png" },
      { name: "HTML", logo: "html.png" },
      { name: "CSS", logo: "css.png" },
    ],
  },
  {
    category: SkillCategoryType.Frameworks,
    skills: [
      { name: "React", logo: "react.png" },
      { name: "React Native", logo: "reactnative.png" },
      { name: "Node.js", logo: "nodejs.png" },
      { name: "Next.js", logo: "nextjs.png" },
      { name: "Express", logo: "express.png" },
      { name: "FastAPI", logo: "fastapi.png" },
    ],
  },
  {
    category: SkillCategoryType.Tools,
    skills: [
      { name: "Git", logo: "git.png" },
      { name: "GitHub", logo: "github.png" },
      { name: "Firebase", logo: "firebase.png" },
      { name: "Supabase", logo: "supabase.png" },
      { name: "AWS", logo: "aws.png" },
    ],
  },
  {
    category: SkillCategoryType.Databases,
    skills: [
      { name: "PostgreSQL", logo: "postgresql.png" },
      { name: "MySQL", logo: "mysql.png" },
    ],
  },
  {
    category: SkillCategoryType.Methodologies,
    skills: [
      { name: "Agile", logo: "agile.png" },
      { name: "Scrum", logo: "scrum.png" },
      { name: "SDLC", logo: "sdlc.png" },
      { name: "RESTful API Design", logo: "restapi.png" },
      { name: "Object-Oriented Programming (OOP)", logo: "oop.png" },
    ],
  },
];
