export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'healthtrack',
    title: 'HealthTrack Mobile App',
    category: 'UX/UI Case Study',
    description: 'A comprehensive health and fitness tracking app designed to help users set goals, track progress, and build lasting healthy habits. Features personalized insights, community challenges, and seamless wearable integration. Full case study available.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200',
    tags: ['Mobile', 'UX Research', 'Design System']
  },
  {
    id: '1',
    title: 'E-Commerce Platform Redesign',
    category: 'UX/UI Design',
    description: 'A complete redesign of a fashion e-commerce platform focusing on mobile-first experience and conversion optimization. We reduced cart abandonment by 32% and increased mobile conversions by 45%.',
    imageUrl: 'https://images.unsplash.com/photo-1622131815183-e7f8bbac9cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY4ODM5NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Figma', 'React', 'User Research']
  },
  {
    id: '2',
    title: 'Task Management Dashboard',
    category: 'Product Design',
    description: 'A comprehensive task management system designed for remote teams with real-time collaboration features. Built to enhance productivity and streamline workflow management.',
    imageUrl: 'https://images.unsplash.com/photo-1695634184046-93d24e779ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3Njg4MDgzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['UI/UX', 'Prototyping', 'Web App']
  },
  {
    id: '3',
    title: 'Financial Analytics Tool',
    category: 'Web Development',
    description: 'An interactive analytics dashboard for personal finance tracking with data visualization and insights. Helps users make informed financial decisions with real-time data.',
    imageUrl: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3Njg4MzkxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['React', 'TypeScript', 'D3.js']
  },
  {
    id: '4',
    title: 'Mobile Fitness App',
    category: 'App Design',
    description: 'A health and fitness tracking application with personalized workout plans and nutrition guidance. Designed to help users achieve their fitness goals with AI-powered recommendations.',
    imageUrl: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4ODk0MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'iOS', 'Health']
  },
  {
    id: '5',
    title: 'Brand Identity System',
    category: 'Branding',
    description: 'Complete brand identity development for a sustainable fashion startup including logo, colors, and guidelines. Created a cohesive visual language that resonates with eco-conscious consumers.',
    imageUrl: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3Njg4MTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Branding', 'Illustration', 'Print']
  },
  {
    id: '6',
    title: 'SaaS Platform Interface',
    category: 'UI Design',
    description: 'Modern interface design for a B2B SaaS platform focused on data management and team collaboration. Scalable design system built for enterprise-level applications.',
    imageUrl: 'https://images.unsplash.com/photo-1622131815183-e7f8bbac9cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY4ODM5NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['SaaS', 'Enterprise', 'Design System']
  }
];
