export enum SkillCategoryType {
  Languages = "Languages",
  Frameworks = "Frameworks",
  Tools = "Developer Tools / Cloud",
  Databases = "Databases",
  Methodologies = "Methodologies & Practices",
}

export interface Skill {
  name: string;
  logo: string;
}

export interface SkillCategory {
  category: SkillCategoryType;
  skills: Skill[];
}

export type SkillsData = SkillCategory[];
