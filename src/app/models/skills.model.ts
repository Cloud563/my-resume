export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}
