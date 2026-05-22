import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Lightbulb, Tag, Target } from 'lucide-react';
import { Footer } from './Footer';
import { projects } from '../data/projects';

interface MagazinePageProps {
  onBack: () => void;
}

const pageModules = (import.meta as any).glob('../assets/magazine/travel-magazine_Page_*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const extractPageNumber = (path: string) => {
  const match = path.match(/_Page_(\d+)\.png$/i);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
};

const allPages = Object.entries(pageModules)
  .sort(([a], [b]) => extractPageNumber(a) - extractPageNumber(b))
  .map(([, src]) => src);

export function MagazinePage({ onBack }: MagazinePageProps) {
  const navigate = useNavigate();
  const [pageIndex, setPageIndex] = useState(1);
  const [framePage, setFramePage] = useState(1);
  const [isReady, setIsReady] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const bookRef = useRef(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const turnLoadedRef = useRef(false);
  const layoutModeRef = useRef<'single' | 'double'>('single');

  const magazineProject = projects.find((item) => item.id === 'travel-magazine') || projects[0];
  const nextProject = useMemo(() => {
    const currentIndex = projects.findIndex((item) => item.id === 'travel-magazine');
    if (currentIndex === -1) return projects[0];
    return projects[(currentIndex + 1) % projects.length];
  }, []);

  const sections = useMemo(
    () => [
      { id: 'overview', label: 'Overview' },
      { id: 'preview', label: 'Preview' },
      { id: 'details', label: 'Project Details' },
      { id: 'next-project', label: 'Next Project' },
    ],
    []
  );

  const totalPages = allPages.length;
  const isCover = pageIndex === 1;
  const isBackCover = pageIndex === totalPages;
  const canNext = pageIndex < totalPages;
  const canPrev = pageIndex > 1;

  const progressText = useMemo(() => {
    if (isCover) return `Cover • Page 1 of ${totalPages}`;
    if (isBackCover) return `Back Cover • Page ${totalPages} of ${totalPages}`;
    const left = pageIndex % 2 === 0 ? pageIndex : pageIndex - 1;
    const right = Math.min(left + 1, totalPages);
    return `Page ${left}-${right} of ${totalPages}`;
  }, [pageIndex, totalPages, isCover, isBackCover]);

  const getLayout = (page: number) => {
    const isMobile = window.innerWidth < 768;
    const pageWidth = Math.min(420, Math.max(240, Math.floor(window.innerWidth * (isMobile ? 0.72 : 0.32))));
    const pageHeight = Math.round(pageWidth / 0.715);
    const display: 'single' | 'double' = isMobile ? 'single' : 'double';

    return {
      display,
      pageWidth,
      width: display === 'single' ? pageWidth : pageWidth * 2,
      height: pageHeight,
    };
  };

  const applyFrameLayout = (page: number) => {
    if (!frameRef.current) return;

    const layout = getLayout(page);
    const isMobile = layout.display === 'single';
    const isFirst = page === 1;
    const isLast = page === totalPages;

    frameRef.current.style.height = `${layout.height}px`;

    if (isMobile) {
      frameRef.current.style.width = `${layout.pageWidth}px`;
      frameRef.current.style.justifyContent = 'center';
      return;
    }

    if (isFirst) {
      frameRef.current.style.width = `${layout.pageWidth}px`;
      frameRef.current.style.justifyContent = 'flex-end';
      return;
    }

    if (isLast) {
      frameRef.current.style.width = `${layout.pageWidth}px`;
      frameRef.current.style.justifyContent = 'flex-start';
      return;
    }

    frameRef.current.style.width = `${layout.width}px`;
    frameRef.current.style.justifyContent = 'center';
  };

  useEffect(() => {
    if (!bookRef.current || turnLoadedRef.current) return;

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(script);
      });

    const initTurn = () => {
      const $ = (window as any).jQuery;
      if (!$ || !bookRef.current) return;
      const version = $.fn?.jquery || '';
      if (version.startsWith('4.')) {
        console.error('turn.js is not compatible with jQuery 4.x. Please use jQuery 3.7.x.');
        return;
      }
      if (!$.fn?.turn) return;

      const applyLayout = (page: number) => {
        const layout = getLayout(page);
        const hasTurn = !!$(bookRef.current).data('turn');

        if (hasTurn && layoutModeRef.current !== layout.display) {
          $(bookRef.current).turn('display', layout.display);
          layoutModeRef.current = layout.display;
        } else if (!hasTurn) {
          layoutModeRef.current = layout.display;
        }

        if (hasTurn) {
          $(bookRef.current).turn('size', layout.width, layout.height);
        }

        applyFrameLayout(page);

        return layout;
      };

      if (bookRef.current.children.length === 0) return;

      const initialLayout = getLayout(1);
      layoutModeRef.current = initialLayout.display;

      $(bookRef.current).turn({
        width: initialLayout.width,
        height: initialLayout.height,
        autoCenter: true,
        display: initialLayout.display,
        duration: 900,
        gradients: true,
        elevation: 50,
        page: 1,
        when: {
          turning: (_e: Event, page: number) => {
            setFramePage(page);
            applyFrameLayout(page);
          },
          turned: (_e: Event, page: number) => {
            setPageIndex(page);
            setFramePage(page);
            applyLayout(page);
          },
        },
      });

      setIsReady(true);
      turnLoadedRef.current = true;
    };

    loadScript('/jquery.min.js')
      .then(() => loadScript('/turn.js'))
      .then(initTurn)
      .catch(() => {});

    const handleResize = () => {
      const $ = (window as any).jQuery;
      if (!$ || !bookRef.current) return;
      const currentPage = $(bookRef.current).turn('page');
      const layout = getLayout(currentPage);

      if (layoutModeRef.current !== layout.display) {
        $(bookRef.current).turn('display', layout.display);
        layoutModeRef.current = layout.display;
      }

      $(bookRef.current).turn('size', layout.width, layout.height);
      applyFrameLayout(framePage || currentPage);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      const $ = (window as any).jQuery;
      if ($ && bookRef.current && $(bookRef.current).data('turn')) {
        $(bookRef.current).turn('destroy');
      }
    };
  }, [framePage, totalPages]);

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
      <section className="py-12 md:py-20 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
              <section id="overview" className="mb-16 scroll-mt-32">
                <div className="inline-block mb-6 px-4 py-2 bg-[#C63B37]/10 rounded-full">
                  <p className="text-[#C63B37] text-sm font-medium">Print Design</p>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-4">
                  {magazineProject.title}
                </h1>
                <p className="text-lg text-[#57352A]/70 max-w-4xl mb-12">
                  This travel magazine was created for G Adventures and focuses on film-inspired locations across the west coast of the USA. The project was designed in Adobe InDesign, Illustrator, and Photoshop as an editorial print piece, so there is no website or GitHub link for this work.
                </p>
              </section>

              <section id="preview" className="mb-16 scroll-mt-32">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#57352A] mb-4">
                    Interactive Magazine Preview
                  </h2>
                  <p className="text-lg text-[#57352A]/70 max-w-2xl mx-auto">
                    Click or drag to flip pages.
                  </p>
                </div>

                <div className="magazine-interactive">
                  <div className="magazine-turn">
                    <div
                      ref={frameRef}
                      className="magazine-turn__frame"
                      style={{ justifyContent: framePage === 1 ? 'flex-end' : framePage === totalPages ? 'flex-start' : 'center' }}
                    >
                      <div className="magazine-turn__book" ref={bookRef}>
                        {allPages.map((src, index) => {
                          const isHard = index === 0 || index === totalPages - 1;
                          return (
                            <div
                              key={src}
                              className={`magazine-turn__page ${isHard ? 'hard' : ''}`}
                              style={{ backgroundImage: `url(${src})` }}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center gap-4">
                  <div className="text-sm text-[#57352A]/60">{progressText}</div>
                  <div className="magazine-turn__controls">
                    <button
                      type="button"
                      className="glass-button glass-button-white px-6 py-2"
                      onClick={() => (window as any).jQuery?.(bookRef.current).turn('previous')}
                      disabled={!canPrev || !isReady}
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="glass-button px-6 py-2"
                      onClick={() => (window as any).jQuery?.(bookRef.current).turn('next')}
                      disabled={!canNext || !isReady}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </section>

              <section id="details" className="mb-16 scroll-mt-32">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Tag className="text-[#C63B37]" size={24} />
                      <h3 className="font-bold text-[#57352A]">Role</h3>
                    </div>
                    <p className="text-[#57352A]/70">{magazineProject.caseStudy?.role || 'Editorial Designer'}</p>
                    <p className="text-sm text-[#57352A]/50 mt-1">
                      {magazineProject.caseStudy?.roleDetail || 'Editorial layout and visual storytelling'}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="text-[#C63B37]" size={24} />
                      <h3 className="font-bold text-[#57352A]">Format</h3>
                    </div>
                    <p className="text-[#57352A]/70">{magazineProject.caseStudy?.timeline || 'Print design project'}</p>
                    <p className="text-sm text-[#57352A]/50 mt-1">
                      {magazineProject.caseStudy?.timelineDetail || 'Editorial publication concept'}
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="text-[#C63B37]" size={24} />
                      <h3 className="font-bold text-[#57352A]">Client</h3>
                    </div>
                    <p className="text-[#57352A]/70">G Adventures</p>
                    <p className="text-sm text-[#57352A]/50 mt-1">Travel editorial concept</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Lightbulb className="text-[#C63B37]" size={24} />
                      <h3 className="font-bold text-[#57352A]">Tools</h3>
                    </div>
                    <p className="text-[#57352A]/70">{magazineProject.caseStudy?.toolsLabel || 'InDesign, Illustrator, Photoshop'}</p>
                    <p className="text-sm text-[#57352A]/50 mt-1">
                      {magazineProject.caseStudy?.toolsDetail || 'Adobe editorial workflow'}
                    </p>
                  </div>
                </div>

                {magazineProject.caseStudy?.meta && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    {magazineProject.caseStudy.meta.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-[#57352A]/10 px-6 py-5">
                        <p className="text-sm uppercase tracking-[0.16em] text-[#57352A]/50 mb-2">{item.label}</p>
                        <p className="text-xl font-bold text-[#57352A]">{item.value}</p>
                        <p className="text-sm text-[#57352A]/60 mt-2">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#57352A] mb-4">Project Overview</h2>
                    <p className="text-[#57352A]/75 leading-relaxed">
                      {magazineProject.caseStudy?.summary || magazineProject.description}
                    </p>
                  </div>

                  {magazineProject.caseStudy?.sections?.map((section) => (
                    <div key={section.id} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#57352A] mb-4">{section.title}</h2>
                      <p className="text-[#57352A]/75 leading-relaxed mb-6">{section.body}</p>
                      {section.bullets && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {section.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-3">
                              <span className="text-[#C63B37] mt-1">•</span>
                              <p className="text-[#57352A]/70">{bullet}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section id="next-project" className="mb-8 scroll-mt-32">
                <div
                  className="rounded-xl p-8 md:p-10 shadow-sm"
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

                    <div className="w-32 lg:w-48 flex-shrink-0">
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
      </section>
      <Footer />
    </div>
  );
}
