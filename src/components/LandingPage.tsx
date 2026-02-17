import { useEffect, useRef, useState } from 'react';
import { Hero } from './Hero';
import { ProjectsGrid } from './ProjectsGrid';
import { Footer } from './Footer';
import pattern from '../assets/pattern.png';
import logo from '../assets/logo-me.png';

interface LandingPageProps {
  onProjectClick: (projectId: string) => void;
  onContactNavigate: () => void;
}

export function LandingPage({ onProjectClick, onContactNavigate }: LandingPageProps) {
  const aboutRef = useRef<HTMLElement | null>(null);
  const [maskActive, setMaskActive] = useState(false);

  useEffect(() => {
    const section = aboutRef.current;
    if (!section) return undefined;

    const handleMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      section.style.setProperty('--mask-x', `${x}px`);
      section.style.setProperty('--mask-y', `${y}px`);
      section.style.setProperty('--cursor-x', `${x}px`);
      section.style.setProperty('--cursor-y', `${y}px`);
    };

    section.addEventListener('mousemove', handleMove);
    return () => section.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div>
      <Hero onContactNavigate={onContactNavigate} />
      <section
        id="about-me"
        ref={aboutRef}
        onMouseEnter={() => setMaskActive(true)}
        onMouseLeave={() => setMaskActive(false)}
        className={`min-h-screen flex items-center about-mask ${maskActive ? 'about-mask--active' : ''}`}
        style={{
          ['--pattern-image' as string]: `url(${pattern})`,
          ['--cursor-image' as string]: `url(${logo})`,
        }}
      >
        <div className={`about-cursor ${maskActive ? 'about-cursor--active' : ''}`} aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-10">Hi! My name is Viktoriia</h2>
          <p className="text-2xl text-[#57352A]/70 max-w-2xl mx-auto">
            I’m a digital designer and developer who’s genuinely curious about how people interact with digital products. I like asking why? — why a user clicks here, why something feels natural, or why a layout works or doesn’t. That curiosity drives both my design decisions and my code.
          </p>
          <div className="h-6" />
          <p className="text-2xl text-[#57352A]/70 max-w-2xl mx-auto">
            I enjoy creating interfaces, branding, and digital content, then translating those designs into responsive, functional experiences. For me, good design is about clarity, logic, and small thoughtful details that make a product feel easy and natural to use.
          </p>
        </div>
        <div className="about-mask__overlay" aria-hidden="true" />
      </section>
      <ProjectsGrid onProjectClick={onProjectClick} />
      <Footer />
    </div>
  );
}
