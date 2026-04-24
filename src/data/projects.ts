export interface ProjectCaseStudySection {
  id: string;
  label: string;
  title: string;
  body: string;
  bullets?: string[];
}

export interface ProjectCaseStudyMetaItem {
  label: string;
  value: string;
  detail: string;
}

export interface ProjectCaseStudy {
  summary?: string;
  role?: string;
  roleDetail?: string;
  timeline?: string;
  timelineDetail?: string;
  categoryDetail?: string;
  toolsLabel?: string;
  toolsDetail?: string;
  sections?: ProjectCaseStudySection[];
  meta?: ProjectCaseStudyMetaItem[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: ProjectCaseStudy;
  hidden?: boolean;
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
    description:
      'A mobile app and web supplement designed to support trades apprentices in BC by simplifying grant discovery, reducing profile setup friction, and connecting users to practical career and education resources.',
    imageUrl: scaffoldImg,
    tags: ['Mobile App', 'Web Development', 'UX Research'],
    liveUrl: 'https://scaffold-theta.vercel.app/',
    githubUrl: 'https://github.com/amolwalia/Scaffold',
    caseStudy: {
      summary:
        'Scaffold is a product concept built for trades apprentices in British Columbia who need a clearer path to funding and support. The project focused on making government grant discovery less overwhelming by guiding users through profile creation, matching them with relevant opportunities, and extending the experience through a web supplement with resources for education and career development.',
      role: 'Full-Stack Developer & Marketing Researcher',
      roleDetail: 'Research, UX thinking, product positioning, and implementation',
      timeline: 'Academic project',
      timelineDetail: 'End-to-end concept, validation, and case study execution',
      categoryDetail: 'Mobile-first product strategy with a supporting web experience',
      toolsLabel: 'Mobile App, Web Development, UX Research',
      toolsDetail: 'Research-led product design and implementation',
      sections: [
        {
          id: 'challenge',
          label: 'Challenge',
          title: 'The Challenge',
          body:
            'For many apprentices, support programs exist but the path to understanding them is fragmented. Eligibility rules can feel unclear, application instructions are spread across multiple sources, and the setup required before users see value creates early drop-off.',
          bullets: [
            'Grant information is distributed across different pages and systems.',
            'Users may not know which support applies to their apprenticeship stage.',
            'Manual profile creation adds friction before personalization appears.',
          ],
        },
        {
          id: 'approach',
          label: 'Approach',
          title: 'Approach',
          body:
            'The project combined market research and user-centered product thinking to reframe grant discovery as a guided experience instead of a directory. The solution focused on clear onboarding, profile-based matching, and faster access to relevant next steps.',
          bullets: [
            'Mapped the decision points apprentices face when searching for funding.',
            'Positioned the app around clarity, trust, and immediate relevance.',
            'Designed the experience to work well for users managing tasks on mobile.',
          ],
        },
        {
          id: 'solution',
          label: 'Solution',
          title: 'Solution',
          body:
            'Scaffold uses profile-based logic to connect users with relevant BC government grants and reduces setup friction with AI resume scanning that auto-builds portions of the profile. A companion web supplement extends the product with broader education and career resources.',
          bullets: [
            'Matched users with eligible BC government grants using profile data.',
            'Used AI resume scanning to streamline profile creation.',
            'Connected the mobile flow to a broader support ecosystem through the web supplement.',
          ],
        },
        {
          id: 'outcome',
          label: 'Outcome',
          title: 'Outcome',
          body:
            'The case study demonstrates how research, interface design, and implementation can make a public-facing process feel more approachable. Scaffold turned a bureaucratic experience into a clearer service flow and gave the project a stronger product narrative grounded in a real user need.',
          bullets: [
            'Validated the product direction through market and user research.',
            'Created a more accessible path to discovering relevant support.',
            'Showed how automation can remove repetitive setup work early in onboarding.',
          ],
        },
      ],
      meta: [
        {
          label: 'Primary Audience',
          value: 'BC trades apprentices',
          detail: 'People navigating school, work, and funding requirements',
        },
        {
          label: 'Core Workflow',
          value: 'Discover, match, apply',
          detail: 'Reduce the time it takes to reach relevant funding options',
        },
        {
          label: 'Key Differentiator',
          value: 'AI-assisted profile setup',
          detail: 'Gets users to personalized results faster',
        },
      ],
    },
  },
  {
    id: 'dtrmnd',
    title: ' DTRMND - AI-Powered Marketplace Website ',
    category: 'UX/UI Design',
    description:
      'A complete design of a fashion e-commerce platform focusing on mobile-first experience and conversion optimization. We reduced cart abandonment by 32% and increased mobile conversions by 45%.',
    imageUrl: ecommerceImg,
    tags: ['Figma', 'React', 'User Research'],
    liveUrl: 'https://dtrmnd2webdev.vercel.app/home',
    githubUrl: 'https://github.com/monavi77/dtrmnd2webdev',
  },
  {
    id: 'travel-magazine',
    title: 'What if You Could Travel in Movie: Travel Magazine',
    category: 'Print Design',
    description:
      'A travel magazine concept created for G Adventures featuring film-inspired locations across the west coast of the USA, designed as an editorial print piece in Adobe InDesign, Illustrator, and Photoshop.',
    imageUrl: magazineImg,
    tags: ['Print', 'Editorial', 'Layout'],
    caseStudy: {
      summary:
        'This travel magazine was created for G Adventures as an editorial concept focused on film-inspired destinations along the west coast of the United States. The project combined travel storytelling, cinematic references, and structured page design to create a print experience that feels both immersive and readable.',
      role: 'Editorial Designer',
      roleDetail: 'Concept development, layout design, and visual storytelling',
      timeline: 'Print design project',
      timelineDetail: 'Designed as a multi-page editorial magazine',
      categoryDetail: 'Travel editorial design for a branded publication concept',
      toolsLabel: 'InDesign, Illustrator, Photoshop',
      toolsDetail: 'Adobe workflow for layout, graphics, and image treatment',
      sections: [
        {
          id: 'challenge',
          label: 'Challenge',
          title: 'The Challenge',
          body:
            'The challenge was to create a travel magazine that felt cinematic without losing clarity. The layouts needed to support long-form storytelling, destination highlights, and branded travel content while staying visually cohesive from cover to final spread.',
          bullets: [
            'Balance editorial readability with a strong cinematic atmosphere.',
            'Create a layout system that supports multiple destination stories.',
            'Make the magazine feel branded for G Adventures rather than generic travel media.',
          ],
        },
        {
          id: 'approach',
          label: 'Approach',
          title: 'Approach',
          body:
            'The concept centered on destinations that feel connected to film and visual culture on the west coast of the USA. I developed the publication using a structured editorial system, combining strong imagery, pacing across spreads, and typography that supports both feature storytelling and travel information.',
          bullets: [
            'Built a consistent visual rhythm across spreads and section transitions.',
            'Used image-led composition to create a cinematic travel mood.',
            'Designed layouts to support both inspiration and practical destination reading.',
          ],
        },
        {
          id: 'solution',
          label: 'Solution',
          title: 'Solution',
          body:
            'The final magazine uses Adobe InDesign for page composition, Illustrator for supporting graphic elements, and Photoshop for image preparation and visual refinement. Together, these tools supported a polished editorial system that feels immersive, brand-aware, and intentionally paced.',
          bullets: [
            'Created the publication in InDesign for full editorial layout control.',
            'Used Illustrator for graphic support and design elements.',
            'Used Photoshop to refine imagery and maintain visual consistency.',
          ],
        },
        {
          id: 'outcome',
          label: 'Outcome',
          title: 'Outcome',
          body:
            'The result is a travel magazine concept that presents film-inspired west coast destinations through a clear editorial lens. It showcases my ability to combine storytelling, brand context, and print design craft in a single long-form piece.',
          bullets: [
            'Established a strong editorial identity for the magazine concept.',
            'Created a visually coherent multi-page print piece.',
            'Showed design fluency across layout, image treatment, and supporting graphics.',
          ],
        },
      ],
      meta: [
        {
          label: 'Client Concept',
          value: 'G Adventures',
          detail: 'Designed as a branded travel editorial concept',
        },
        {
          label: 'Focus',
          value: 'Film-inspired destinations',
          detail: 'West coast of the USA as the core travel theme',
        },
        {
          label: 'Tools',
          value: 'Adobe CC',
          detail: 'InDesign, Illustrator, and Photoshop',
        },
      ],
    },
  },
  {
    id: 'trapshool',
    title: 'TrapShool Website',
    category: 'Web Development',
    description:
      'An interactive analytics dashboard for personal finance tracking with data visualization and insights. Helps users make informed financial decisions with real-time data.',
    imageUrl: trapshoolImg,
    tags: ['React', 'TypeScript', 'Vercel'],
    liveUrl: 'https://shooting-fawn.vercel.app/',
    githubUrl: 'https://github.com/monavi77/shooting',
  },
  {
    id: '4',
    title: 'Template',
    category: 'Web Development',
    description:
      'An interactive analytics dashboard for personal finance tracking with data visualization and insights. Helps users make informed financial decisions with real-time data.',
    imageUrl: templateImg,
    tags: ['React', 'TypeScript', 'Vercel'],
    hidden: true,
  },
];

export const visibleProjects = projects.filter((project) => !project.hidden);
