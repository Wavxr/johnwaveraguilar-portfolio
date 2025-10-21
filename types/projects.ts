export type ProjectCategory = "swe-ml" | "university"

export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  thumbnail: string;
  imageFolder: string;
  imageCount: number;
  link?: string;
  github?: string;
}
