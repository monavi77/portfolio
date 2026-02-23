import { useRef, useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { WorkPage } from './components/WorkPage';
import { ProjectPage } from './components/ProjectPage';
import { CaseStudyPage } from './components/CaseStudyPage';
import { CaseStudyTemplatePage } from './components/CaseStudyTemplatePage';
import { MagazinePage } from './components/MagazinePage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { ResumePage } from './components/ResumePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'work' | 'magazine' | 'about' | 'project' | 'casestudy' | 'casestudy-template' | 'contact' | 'resume'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const prevPageRef = useRef<typeof currentPage | null>(null);
  const prevScrollRef = useRef<number>(0);

  const rememberCurrent = () => {
    prevPageRef.current = currentPage;
    prevScrollRef.current = window.scrollY;
  };

  const handleBack = () => {
    if (!prevPageRef.current) {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = prevPageRef.current;
    const scroll = prevScrollRef.current;
    setCurrentPage(target);
    window.setTimeout(() => {
      window.scrollTo({ top: scroll, behavior: 'auto' });
    }, 0);
  };

  const handleProjectClick = (projectId: string) => {
    rememberCurrent();
    setSelectedProjectId(projectId);
    // Route to specific case study templates/pages by project id
    if (projectId === '4') {
      setCurrentPage('casestudy');
    } else if (projectId === '2') {
      setCurrentPage('magazine');
    } else if (projectId === 'scaffold' || projectId === '1' || projectId === '3') {
      setCurrentPage('casestudy-template');
    } else {
      setCurrentPage('project');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'work' | 'magazine' | 'about' | 'project' | 'casestudy' | 'casestudy-template' | 'contact' | 'resume') => {
    rememberCurrent();
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation
        onNavigate={handleNavigate}
        currentPage={currentPage}
        showBack={currentPage === 'project' || currentPage === 'casestudy' || currentPage === 'casestudy-template' || currentPage === 'magazine'}
        onBack={handleBack}
      />
      
      {currentPage === 'home' ? (
        <LandingPage onProjectClick={handleProjectClick} onContactNavigate={() => handleNavigate('contact')} />
      ) : currentPage === 'work' ? (
        <WorkPage onProjectClick={handleProjectClick} />
      ) : currentPage === 'magazine' ? (
        <MagazinePage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'about' ? (
        <AboutPage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'casestudy-template' ? (
        <CaseStudyTemplatePage projectId={selectedProjectId} />
      ) : currentPage === 'contact' ? (
        <ContactPage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'resume' ? (
        <ResumePage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'casestudy' ? (
        <CaseStudyPage />
      ) : (
        <ProjectPage />
      )}
    </div>
  );
}
