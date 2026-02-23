import { ArrowLeft, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import logo from '../assets/logo.svg';

interface NavigationProps {
  onNavigate: (page: 'home' | 'work' | 'magazine' | 'about' | 'project' | 'contact' | 'resume') => void;
  currentPage: 'home' | 'work' | 'magazine' | 'about' | 'project' | 'contact' | 'resume' | 'casestudy';
  showBack?: boolean;
  onBack?: () => void;
}

export function Navigation({ onNavigate, currentPage, showBack = false, onBack }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = navRef.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.1) * 1;
    const rotateY = (0.1 - x) * 1;
    element.style.setProperty('--glass-rotate-x', `${rotateX}deg`);
    element.style.setProperty('--glass-rotate-y', `${rotateY}deg`);
    element.style.setProperty('--glass-light-x', `${x * 100}%`);
    element.style.setProperty('--glass-light-y', `${y * 100}%`);
    element.style.setProperty('--glass-scale', `1.01`);
    element.style.setProperty('--glass-z', `3px`);
  };

  const handlePointerLeave = () => {
    const element = navRef.current;
    if (!element) return;
    element.style.setProperty('--glass-rotate-x', `0deg`);
    element.style.setProperty('--glass-rotate-y', `0deg`);
    element.style.setProperty('--glass-light-x', `50%`);
    element.style.setProperty('--glass-light-y', `50%`);
    element.style.setProperty('--glass-scale', `1`);
    element.style.setProperty('--glass-z', `0px`);
  };

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        {showBack && (
          <button
            onClick={onBack}
            className="glass-tilt nav-back-button h-16 w-16 flex items-center justify-center rounded-full text-[#C63B37] hover:text-[#a32e2b] transition-colors"
            aria-label="Back to projects"
          >
            <ArrowLeft size={24} />
          </button>
        )}
      <div
        ref={navRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className={`glass-tilt rounded-[50px] shadow-lg px-4 sm:px-6 lg:px-8 ${showBack ? 'max-w-6xl' : 'max-w-7xl'} w-full`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 text-xl font-bold text-[#C63B37] hover:opacity-80 transition-opacity"
          >
            <img src={logo} alt="Viktoriia Monakova logo" className="h-14 w-14" />
            <span>Viktoriia Monakova</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate('home')}
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-[#C63B37]' 
                  : 'text-[#57352A] hover:text-[#C63B37]'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('work')}
              className={`transition-colors ${
                currentPage === 'work' 
                  ? 'text-[#C63B37]' 
                  : 'text-[#57352A] hover:text-[#C63B37]'
              }`}
            >
              Work
            </button>
            <button 
              onClick={() => onNavigate('about')}
              className={`transition-colors ${
                currentPage === 'about' 
                  ? 'text-[#C63B37]' 
                  : 'text-[#57352A] hover:text-[#C63B37]'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`transition-colors ${
                currentPage === 'contact' 
                  ? 'text-[#C63B37]' 
                  : 'text-[#57352A] hover:text-[#C63B37]'
              }`}
            >
              Contact
            </button>
            <button 
              onClick={() => onNavigate('resume')}
              className="px-6 py-2 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#57352A] p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#57352A]/10 rounded-b-[50px]">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  onNavigate('home');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === 'home' 
                    ? 'text-[#C63B37]' 
                    : 'text-[#57352A] hover:text-[#C63B37]'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate('work');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === 'work' 
                    ? 'text-[#C63B37]' 
                    : 'text-[#57352A] hover:text-[#C63B37]'
                }`}
              >
                Work
              </button>
              <button 
                onClick={() => {
                  onNavigate('about');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === 'about' 
                    ? 'text-[#C63B37]' 
                    : 'text-[#57352A] hover:text-[#C63B37]'
                }`}
              >
                About
              </button>
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setIsMenuOpen(false);
                }}
                className={`text-left transition-colors ${
                  currentPage === 'contact' 
                    ? 'text-[#C63B37]' 
                    : 'text-[#57352A] hover:text-[#C63B37]'
                }`}
              >
                Contact
              </button>
              <button 
                onClick={() => {
                  onNavigate('resume');
                  setIsMenuOpen(false);
                }}
                className="px-6 py-2 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors text-center"
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}
