import { useEffect, useRef } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
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

function ProjectRoute() {
  const { id } = useParams();

  if (!id) return <Navigate to="/work" replace />;
  if (id === '2') return <Navigate to="/project/magazine" replace />;
  if (id === '4') return <CaseStudyPage />;
  if (id === 'scaffold' || id === '1' || id === '3') {
    return <CaseStudyTemplatePage projectId={id} />;
  }
  return <ProjectPage />;
}

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const prevScrollRef = useRef<number>(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  const handleBack = () => {
    navigate(-1);
    window.setTimeout(() => {
      window.scrollTo({ top: prevScrollRef.current, behavior: 'auto' });
    }, 0);
  };

  const handleNavigate = (page: 'home' | 'work' | 'about' | 'contact' | 'resume') => {
    prevScrollRef.current = window.scrollY;
    const map: Record<typeof page, string> = {
      home: '/',
      work: '/work',
      about: '/about',
      contact: '/contact',
      resume: '/resume'
    };
    navigate(map[page]);
  };

  const handleProjectClick = (projectId: string) => {
    prevScrollRef.current = window.scrollY;
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className="min-h-screen">
      <Navigation
        onNavigate={handleNavigate}
        currentPage={
          location.pathname.startsWith('/work')
            ? 'work'
            : location.pathname.startsWith('/about')
              ? 'about'
              : location.pathname.startsWith('/contact')
                ? 'contact'
                : location.pathname.startsWith('/resume')
                  ? 'resume'
                  : 'home'
        }
        showBack={location.pathname.startsWith('/projects') || location.pathname.startsWith('/project')}
        onBack={handleBack}
      />
      <Routes>
        <Route path="/" element={<LandingPage onProjectClick={handleProjectClick} onContactNavigate={() => handleNavigate('contact')} />} />
        <Route path="/work" element={<WorkPage onProjectClick={handleProjectClick} />} />
        <Route path="/about" element={<AboutPage onBack={() => handleNavigate('home')} />} />
        <Route path="/contact" element={<ContactPage onBack={() => handleNavigate('home')} />} />
        <Route path="/resume" element={<ResumePage onBack={() => handleNavigate('home')} />} />
        <Route path="/projects/:id" element={<ProjectRoute />} />
        <Route path="/project/magazine" element={<MagazinePage onBack={() => navigate(-1)} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
