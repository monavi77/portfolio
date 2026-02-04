import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { WorkPage } from './components/WorkPage';
import { ProjectPage } from './components/ProjectPage';
import { CaseStudyPage } from './components/CaseStudyPage';
import { ContactPage } from './components/ContactPage';
import { ResumePage } from './components/ResumePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'work' | 'project' | 'casestudy' | 'contact' | 'resume'>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    // For demo purposes, show case study for specific project, otherwise show regular project page
    if (projectId === 'healthtrack') {
      setCurrentPage('casestudy');
    } else {
      setCurrentPage('project');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: 'home' | 'work' | 'project' | 'casestudy' | 'contact' | 'resume') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <LandingPage onProjectClick={handleProjectClick} />
      ) : currentPage === 'work' ? (
        <WorkPage onProjectClick={handleProjectClick} />
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
