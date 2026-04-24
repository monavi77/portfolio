import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle, ExternalLink, Github, Lightbulb, Tag, Target } from 'lucide-react';
import { Footer } from './Footer';
import { projects, visibleProjects } from '../data/projects';

interface CaseStudyTemplatePageProps {
  projectId: string | null;
}

interface Section {
  id: string;
  label: string;
  title: string;
  body: string;
}

const defaultSections: Section[] = [
  {
    id: 'challenge',
    label: 'Challenge',
    title: 'The Challenge',
    body: 'The goal of this work was to solve a meaningful product problem while balancing usability, visual clarity, and practical implementation constraints.',
  },
  {
    id: 'approach',
    label: 'Approach',
    title: 'Approach',
    body: 'The process combined research, interface thinking, and iteration to turn broad project goals into a focused solution and a more usable final experience.',
  },
  {
    id: 'outcome',
    label: 'Outcome',
    title: 'Outcome',
    body: 'The result is a portfolio project structured as a case study, with room to expand later with deeper process notes, visuals, validation, and measurable impact.',
  },
];

export function CaseStudyTemplatePage({ projectId }: CaseStudyTemplatePageProps) {
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === projectId) || projects[0];
  const [activeSection, setActiveSection] = useState('overview');

  const sections = useMemo<Section[]>(
    () => [
      {
        id: 'overview',
        label: 'Overview',
        title: 'Project Overview',
        body: project.caseStudy?.summary || project.description,
      },
      ...(
        project.caseStudy?.sections?.map((section) => ({
          id: section.id,
          label: section.label,
          title: section.title,
          body: section.body,
        })) || defaultSections.map((section) => ({
          ...section,
          body:
            section.id === 'challenge'
              ? `${project.title} explores how a stronger user experience can make the core idea more accessible, useful, and engaging for the intended audience.`
              : section.id === 'approach'
                ? `The project was shaped through a combination of design exploration, product thinking, and implementation decisions centered around ${project.tags.join(', ')}.`
                : section.body,
        }))
      ),
    ],
    [project]
  );

  const sectionBullets = useMemo(
    () =>
      Object.fromEntries(
        (project.caseStudy?.sections || []).map((section) => [section.id, section.bullets || []])
      ),
    [project.caseStudy?.sections]
  );

  const metaItems = useMemo(
    () => project.caseStudy?.meta || [],
    [project.caseStudy?.meta]
  );

  const toolsLabel = project.caseStudy?.toolsLabel || project.tags.join(', ');

  const roleValue = project.caseStudy?.role || 'Designer & Developer';
  const roleDetail = project.caseStudy?.roleDetail || 'Product thinking and execution';
  const timelineValue = project.caseStudy?.timeline || '4-8 Weeks';
  const timelineDetail = project.caseStudy?.timelineDetail || 'Concept to portfolio case study';
  const categoryDetail = project.caseStudy?.categoryDetail || 'Portfolio project focus';
  const toolsDetail = project.caseStudy?.toolsDetail || 'Core skills used in the project';
  

  const nextProject = useMemo(() => {
    if (project.id === 'trapshool') {
      return visibleProjects.find((item) => item.id === 'scaffold') || visibleProjects[0];
    }

    const currentIndex = visibleProjects.findIndex((item) => item.id === project.id);
    if (currentIndex === -1) return visibleProjects[0];
    return visibleProjects[(currentIndex + 1) % visibleProjects.length];
  }, [project.id]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 100;
    const position = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: position, behavior: 'smooth' });
  };

  const handleNextProject = () => {
    if (nextProject.id === 'travel-magazine') {
      navigate('/work/travel-magazine');
      return;
    }

    navigate(`/work/${nextProject.id}`);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex gap-12">
          <aside className="hidden xl:block w-64 flex-shrink-0">
            <div className="sticky top-40">
              <h3 className="text-sm font-bold text-[#57352A] mb-4 uppercase tracking-wider">
                Contents
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors text-sm ${
                      activeSection === section.id
                        ? 'bg-[#C63B37] text-white font-medium'
                        : 'text-[#57352A]/70 hover:text-[#C63B37] hover:bg-white'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <section id="overview" className="mb-20 scroll-mt-32">
              <div className="inline-block mb-6 px-4 py-2 bg-[#C63B37]/10 rounded-full">
                <p className="text-[#C63B37] text-sm font-medium">Case Study</p>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#57352A] mb-6">
                {project.title}
              </h1>

              <p className="text-xl md:text-2xl text-[#57352A]/70 mb-12 max-w-4xl">
                {project.caseStudy?.summary || project.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Tag className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Role</h3>
                  </div>
                  <p className="text-[#57352A]/70">{roleValue}</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">{roleDetail}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Timeline</h3>
                  </div>
                  <p className="text-[#57352A]/70">{timelineValue}</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">{timelineDetail}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Category</h3>
                  </div>
                  <p className="text-[#57352A]/70">{project.category}</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">{categoryDetail}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Lightbulb className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Tools</h3>
                  </div>
                  <p className="text-[#57352A]/70">{toolsLabel}</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">{toolsDetail}</p>
                </div>
              </div>

              {metaItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {metaItems.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-[#57352A]/10 px-6 py-5">
                      <p className="text-sm uppercase tracking-[0.16em] text-[#57352A]/50 mb-2">{item.label}</p>
                      <p className="text-xl font-bold text-[#57352A]">{item.value}</p>
                      <p className="text-sm text-[#57352A]/60 mt-2">{item.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#C63B37] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#57352A] rounded-full opacity-10 blur-3xl"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#C63B37] text-[#C63B37] rounded-full hover:bg-[#C63B37] hover:text-white transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Link</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#57352A] text-white rounded-full hover:bg-[#57352A]/90 transition-colors"
                  >
                    <Github size={20} />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>
            </section>

            {sections.slice(1).map((section) => (
              <section key={section.id} id={section.id} className="mb-20 scroll-mt-32">
                <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">{section.title}</h2>
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                  <p className="text-lg text-[#57352A]/80 leading-relaxed mb-8">{section.body}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {(sectionBullets[section.id]?.length ? sectionBullets[section.id] : project.tags).map((item) => (
                      <div key={`${section.id}-${item}`} className="flex items-start gap-3">
                        <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                        <div>
                          <h3 className="font-bold text-[#57352A] mb-1">
                            {sectionBullets[section.id]?.length ? 'Key Point' : item}
                          </h3>
                          <p className="text-[#57352A]/70 text-sm">
                            {sectionBullets[section.id]?.length
                              ? item
                              : `This section can be expanded with project-specific decisions, process notes, and visuals related to ${item.toLowerCase()}.`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}

<section className="mb-8 " >
<div
  className="rounded-xl p-8 md:p-10 shadow-sm "
  style={{ backgroundColor: 'rgba(198, 59, 55, 0.10)' }}
>

  <p className="text-[#000000] text-sm uppercase tracking-[0.2em] mb-3">
          Next Project
        </p>
    <div className="flex items-stretch justify-between gap-8">
      <div className="flex-1 min-w-0">
        
        <h2 className="text-[#57352A] text-xl md:text-4xl font-bold mb-4">
          {nextProject.title}
        </h2>
        <p className="text-[#000000] mb-8">
          {nextProject.description}
        </p>
        <button
          onClick={handleNextProject}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#57352A] rounded-full hover:bg-white/90 transition-colors"
        >
          <span>Go to Next Project</span>
          <ArrowRight size={18} />
        </button>
      </div>

      <div className=" w-32 lg:w-48 flex-shrink-0">
        <div className="size-full rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={nextProject.imageUrl}
            alt={`${nextProject.title} preview`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </div>
  </div>
</section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
