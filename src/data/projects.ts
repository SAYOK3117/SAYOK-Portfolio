export interface Project {
  id: string;
  title: string;
  subtitle: string;
  context: string;
  stack: string[];
  contributions: string[];
  flagship: boolean;
  /** Leave null until a real live/demo/GitHub URL is confirmed */
  url: string | null;
}

export const projects: Project[] = [
  {
    id: 'orca',
    title: 'ORCA',
    subtitle: 'Marine EcOsystem Reasoning with Collaborative Agents',
    context: 'Smart India Hackathon 2026 — Round 2 Ongoing',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'Agentic AI',
      'Leaflet',
    ],
    contributions: [
      'Frontend / UI / UX',
      '5-Agent Neural Brain',
      'Tactical Map',
      'Advisory Card',
      'Monitoring Interfaces',
      'Leaflet / OpenStreetMap geospatial visualization',
      'Explainable multi-agent workflow',
    ],
    flagship: true,
    url: null,
  },
  {
    id: 'traincontrol',
    title: 'TrainControl',
    subtitle: 'Intelligent Train Control System',
    context: 'College SIH Internal — August 2026',
    stack: ['Python', 'AI', 'Reinforcement Learning', 'Simulation'],
    contributions: [],
    flagship: false,
    url: null,
  },
  {
    id: 'nagrik-setu',
    title: 'Nagrik Setu',
    subtitle: 'AI-Based Grievance Chatbot',
    context: 'College SIH Internal — July 2026',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Leaflet', 'AI'],
    contributions: [],
    flagship: false,
    url: null,
  },
  {
    id: 'smartflow',
    title: 'SmartFlow',
    subtitle: 'AI Traffic System',
    context: 'Scaler School Project — February 2026',
    stack: ['Python', 'Flask', 'JavaScript', 'AI', 'Multi-Agent Systems'],
    contributions: [],
    flagship: false,
    url: null,
  },
  {
    id: 'ai-interviewer',
    title: 'AI Interviewer',
    subtitle: 'College Mini Project',
    context: 'College Mini Project — January 2026',
    stack: ['AI', 'JavaScript', 'Web Development', 'LLM Integration'],
    contributions: [],
    flagship: false,
    url: null,
  },
];
