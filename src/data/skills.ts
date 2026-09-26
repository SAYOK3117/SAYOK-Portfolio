export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Flask'],
  },
  {
    category: 'AI / ML',
    skills: [
      'Agentic AI',
      'Multi-Agent Systems',
      'Reinforcement Learning',
      'LLM Integration',
      'Generative AI',
    ],
  },
  {
    category: 'Geospatial',
    skills: ['Leaflet', 'OpenStreetMap'],
  },
  {
    category: 'Foundations',
    skills: ['Data Structures & Algorithms (C++)'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'Vercel', 'Google Stitch', 'Antigravity IDE'],
  },
];
