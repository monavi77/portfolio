import { useState } from 'react';
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

  const handleProjectClick = (projectId: string) => {
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
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <LandingPage onProjectClick={handleProjectClick} onContactNavigate={() => handleNavigate('contact')} />
      ) : currentPage === 'work' ? (
        <WorkPage onProjectClick={handleProjectClick} />
      ) : currentPage === 'magazine' ? (
        <MagazinePage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'about' ? (
        <AboutPage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'casestudy-template' ? (
        <CaseStudyTemplatePage projectId={selectedProjectId} onBack={() => handleNavigate('home')} />
      ) : currentPage === 'contact' ? (
        <ContactPage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'resume' ? (
        <ResumePage onBack={() => handleNavigate('home')} />
      ) : currentPage === 'casestudy' ? (
        <CaseStudyPage onBack={() => handleNavigate('home')} />
      ) : (
        <ProjectPage onBack={() => handleNavigate('home')} />
      )}
    </div>
  );
}
