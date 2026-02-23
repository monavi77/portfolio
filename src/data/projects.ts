export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

import scaffoldImg from '../assets/scaffold2.png';
import ecommerceImg from '../assets/Container.png';
import magazineImg from '../assets/Container2.png';
import trapshoolImg from '../assets/Container1.png';
import templateImg from '../assets/logo-me.png';

export const projects: Project[] = [
  {
    id: 'scaffold',
    title: 'Founding the Future: How a New App Is Supporting Trades Apprentices in BC',
    category: 'Full-Stack Development & UX Research',
    description: 'A new mobile app and web supplement designed to support trades apprentices in BC by streamlining the grant application process and providing a comprehensive resource for their education and career development. Full case study available.',
    imageUrl: scaffoldImg,
    tags: ['Mobile App', 'Web Development', 'UX Research']
  },
  {
    id: '1',
    title: 'E-Commerce Platform ',
    category: 'UX/UI Design',
    description: 'A complete design of a fashion e-commerce platform focusing on mobile-first experience and conversion optimization. We reduced cart abandonment by 32% and increased mobile conversions by 45%.',
    imageUrl: ecommerceImg,
    tags: ['Figma', 'React', 'User Research']
  },
  {
    id: '2',
    title: 'What if You Could Travel in Movie: Travel Magazine',
    category: 'Print Design',
    description: 'A cinematic travel magazine concept that blends editorial storytelling with immersive visual layouts inspired by film stills and narrative pacing.',
    imageUrl: magazineImg,
    tags: ['Print', 'Editorial', 'Layout']
  },
  {
    id: '3',
    title: 'TrapShool Website',
    category: 'Web Development',
    description: 'An interactive analytics dashboard for personal finance tracking with data visualization and insights. Helps users make informed financial decisions with real-time data.',
    imageUrl: trapshoolImg,
    tags: ['React', 'TypeScript', 'Vercel']
  },
  {
    id: '4',
    title: 'Template',
    category: 'Web Development',
    description: 'An interactive analytics dashboard for personal finance tracking with data visualization and insights. Helps users make informed financial decisions with real-time data.',
    imageUrl: templateImg,
    tags: ['React', 'TypeScript', 'Vercel']
  },
  // {
  //   id: '4',
  //   title: 'Mobile Fitness App',
  //   category: 'App Design',
  //   description: 'A health and fitness tracking application with personalized workout plans and nutrition guidance. Designed to help users achieve their fitness goals with AI-powered recommendations.',
  //   imageUrl: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4ODk0MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  //   tags: ['Mobile', 'iOS', 'Health']
  // },
  // {
  //   id: '5',
  //   title: 'Brand Identity System',
  //   category: 'Branding',
  //   description: 'Complete brand identity development for a sustainable fashion startup including logo, colors, and guidelines. Created a cohesive visual language that resonates with eco-conscious consumers.',
  //   imageUrl: 'https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3Njg4MTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  //   tags: ['Branding', 'Illustration', 'Print']
  // },
  // {
  //   id: '6',
  //   title: 'SaaS Platform Interface',
  //   category: 'UI Design',
  //   description: 'Modern interface design for a B2B SaaS platform focused on data management and team collaboration. Scalable design system built for enterprise-level applications.',
  //   imageUrl: 'https://images.unsplash.com/photo-1622131815183-e7f8bbac9cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY4ODM5NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  //   tags: ['SaaS', 'Enterprise', 'Design System']
  // }
];
