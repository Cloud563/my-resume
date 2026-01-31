import { SkillCategory } from '../models/skills.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Технологии и инструменты',
    icon: 'fas fa-server',
    skills: [
      { name: 'SQL' },
      { name: 'API' },
      { name: 'Postman' },
      { name: 'Charles' },
      { name: 'Fiddler' },
      { name: 'GIT' },
      { name: 'Playwright' },
      { name: 'TypeScript' },
      { name: 'JSON' },
      { name: 'Android studio' },
      { name: 'QA' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: 'fas fa-users',
    skills: [
      { name: 'Проактивность' },
      { name: 'Самостоятельность' },
      { name: 'Адаптивность' },
      { name: 'Гибкость' },
      { name: 'Самообучаемость' },
    ],
  },
];
