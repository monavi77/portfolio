import { ArrowLeft, ExternalLink, Github, Calendar, Users, Monitor, Target, CheckCircle, TrendingUp, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';
import { useState, useEffect } from 'react';

interface CaseStudyPageProps {
  onBack: () => void;
}

export function CaseStudyPage({ onBack }: CaseStudyPageProps) {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    onBack();
  };
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem Statement' },
    { id: 'goals', label: 'Goals & Metrics' },
    { id: 'research', label: 'Research & Insights' },
    { id: 'userflow', label: 'User Flow & IA' },
    { id: 'ideation', label: 'Ideation & Wireframes' },
    { id: 'design', label: 'UI Design' },
    { id: 'testing', label: 'Testing & Iteration' },
    { id: 'solution', label: 'Final Solution' },
    { id: 'results', label: 'Results & Impact' },
    { id: 'reflection', label: 'Reflection' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Compact Back Button */}
      <div className="fixed top-[140px] left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md border border-[#57352A]/15 shadow-sm text-[#57352A] hover:text-[#C63B37] transition-colors text-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex gap-12">
          {/* Sidebar Navigation - Hidden on mobile, visible on large screens */}
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

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Hero / Overview Section */}
            <section id="overview" className="mb-20 scroll-mt-32">
              <div className="inline-block mb-6 px-4 py-2 bg-[#C63B37]/10 rounded-full">
                <p className="text-[#C63B37] text-sm font-medium">UX/UI Case Study</p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#57352A] mb-6">
                HealthTrack Mobile App
              </h1>
              
              <p className="text-xl md:text-2xl text-[#57352A]/70 mb-12 max-w-4xl">
                A comprehensive health and fitness tracking app designed to help users set goals, 
                track progress, and build lasting healthy habits through personalized insights and 
                community support.
              </p>

              {/* Project Meta Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Role</h3>
                  </div>
                  <p className="text-[#57352A]/70">Lead UX/UI Designer</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">Design System, Research</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Timeline</h3>
                  </div>
                  <p className="text-[#57352A]/70">4 Months</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">Feb - May 2025</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Monitor className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Platform</h3>
                  </div>
                  <p className="text-[#57352A]/70">iOS & Android</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">Native Mobile App</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-[#C63B37]" size={24} />
                    <h3 className="font-bold text-[#57352A]">Tools</h3>
                  </div>
                  <p className="text-[#57352A]/70">Figma, FigJam</p>
                  <p className="text-sm text-[#57352A]/50 mt-1">Maze, UserTesting</p>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200"
                    alt="HealthTrack app hero image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#C63B37] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#57352A] rounded-full opacity-10 blur-3xl"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                <a
                  href="https://github.com/yourusername/healthtrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#57352A] text-white rounded-full hover:bg-[#57352A]/90 transition-colors"
                >
                  <Github size={20} />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="https://healthtrack-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#C63B37] text-[#C63B37] rounded-full hover:bg-[#C63B37] hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>Live Prototype</span>
                </a>
              </div>
            </section>

            {/* Problem Statement */}
            <section id="problem" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">The Problem</h2>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#C63B37] mb-4">The Challenge</h3>
                  <p className="text-lg text-[#57352A]/80 leading-relaxed">
                    Many health and fitness apps fail to retain users beyond the first month. 
                    Users struggle with overwhelming data, lack of personalization, and no clear 
                    path to achieving their goals. Research shows that 73% of fitness app users 
                    abandon their apps within 30 days due to complexity and lack of motivation.
                  </p>
                </div>

                <div className="border-t border-[#57352A]/10 pt-8">
                  <h3 className="text-xl font-bold text-[#C63B37] mb-4">Target Users</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#57352A] mb-2">Health-Conscious Beginners</h4>
                        <p className="text-[#57352A]/70 text-sm">
                          Ages 25-40, new to fitness tracking, seeking guidance and simple tools 
                          to start their health journey without feeling overwhelmed.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💪</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#57352A] mb-2">Fitness Enthusiasts</h4>
                        <p className="text-[#57352A]/70 text-sm">
                          Ages 30-50, experienced with fitness but frustrated by apps that don't 
                          provide actionable insights or adapt to their changing needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Goals & Success Metrics */}
            <section id="goals" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Goals & Success Metrics</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center">
                      <Target className="text-[#C63B37]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#57352A]">Business Goals</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Increase 30-day retention rate to 60%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Achieve 4.5+ app store rating</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Drive 25% conversion to premium subscriptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Reduce support tickets by 40%</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center">
                      <Users className="text-[#C63B37]" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-[#57352A]">User Goals</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Easily track daily health metrics without friction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Get personalized insights and actionable recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Stay motivated through progress visualization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Connect with a supportive community</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Constraints */}
              <div className="mt-6 bg-[#57352A]/5 border border-[#57352A]/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-4">Project Constraints</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#57352A]/70">
                  <div>
                    <p className="font-bold text-[#57352A] mb-2">Timeline</p>
                    <p className="text-sm">4-month deadline for MVP launch aligned with Q2 marketing campaign</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#57352A] mb-2">Technical</p>
                    <p className="text-sm">Must integrate with existing wearable APIs (Apple Health, Google Fit)</p>
                  </div>
                  <div>
                    <p className="font-bold text-[#57352A] mb-2">Stakeholders</p>
                    <p className="text-sm">Balance needs of fitness coaches, nutritionists, and end users</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Research & Insights */}
            <section id="research" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Research & Insights</h2>
              
              {/* Research Methods */}
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-6">Research Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl mb-3">📊</div>
                    <h4 className="font-bold text-[#57352A] mb-2">User Surveys</h4>
                    <p className="text-[#57352A]/70 text-sm mb-2">Surveyed 250+ current fitness app users</p>
                    <p className="text-xs text-[#57352A]/50">Identified key pain points and desired features</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">💬</div>
                    <h4 className="font-bold text-[#57352A] mb-2">User Interviews</h4>
                    <p className="text-[#57352A]/70 text-sm mb-2">Conducted 18 in-depth interviews</p>
                    <p className="text-xs text-[#57352A]/50">Explored user behaviors and motivations</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-3">🔍</div>
                    <h4 className="font-bold text-[#57352A] mb-2">Competitive Analysis</h4>
                    <p className="text-[#57352A]/70 text-sm mb-2">Analyzed 8 competing apps</p>
                    <p className="text-xs text-[#57352A]/50">Identified market gaps and opportunities</p>
                  </div>
                </div>
              </div>

              {/* Key Findings */}
              <div className="bg-gradient-to-br from-[#C63B37] to-[#a32e2b] rounded-2xl p-8 md:p-12 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-8">Key Research Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Overwhelming Data Display</h4>
                        <p className="text-white/80 text-sm">
                          Users felt bombarded by metrics and charts without clear direction on what to focus on.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Lack of Personalization</h4>
                        <p className="text-white/80 text-sm">
                          Generic recommendations didn't account for individual fitness levels, preferences, or constraints.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Motivation Drop-Off</h4>
                        <p className="text-white/80 text-sm">
                          Without social features or streak tracking, users lost motivation after initial excitement wore off.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Complex Onboarding</h4>
                        <p className="text-white/80 text-sm">
                          Long setup processes caused 40% of users to abandon the app before completing onboarding.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* User Flow / Information Architecture */}
            <section id="userflow" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">User Flow & Information Architecture</h2>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-6">Primary User Flow</h3>
                <p className="text-[#57352A]/70 mb-8">
                  We mapped the core journey from onboarding to daily habit formation, focusing on reducing 
                  friction and highlighting quick wins to build user confidence.
                </p>
                
                {/* Flow Diagram */}
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden bg-[#F2EAE2] border border-[#57352A]/10">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200"
                      alt="User flow diagram"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Information Architecture */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#57352A] mb-6">Information Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="border-l-4 border-[#C63B37] pl-4">
                    <h4 className="font-bold text-[#57352A] mb-3">Dashboard</h4>
                    <ul className="space-y-2 text-sm text-[#57352A]/70">
                      <li>• Today's Summary</li>
                      <li>• Quick Actions</li>
                      <li>• Progress Ring</li>
                      <li>• Activity Feed</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-[#C63B37] pl-4">
                    <h4 className="font-bold text-[#57352A] mb-3">Track</h4>
                    <ul className="space-y-2 text-sm text-[#57352A]/70">
                      <li>• Log Activity</li>
                      <li>• Nutrition</li>
                      <li>• Sleep</li>
                      <li>• Water Intake</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-[#C63B37] pl-4">
                    <h4 className="font-bold text-[#57352A] mb-3">Insights</h4>
                    <ul className="space-y-2 text-sm text-[#57352A]/70">
                      <li>• Weekly Trends</li>
                      <li>• Achievements</li>
                      <li>• Recommendations</li>
                      <li>• Health Score</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-[#C63B37] pl-4">
                    <h4 className="font-bold text-[#57352A] mb-3">Community</h4>
                    <ul className="space-y-2 text-sm text-[#57352A]/70">
                      <li>• Challenges</li>
                      <li>• Friends</li>
                      <li>• Leaderboard</li>
                      <li>• Groups</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Ideation & Wireframes */}
            <section id="ideation" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Ideation & Wireframes</h2>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-4">Design Thinking Process</h3>
                <p className="text-[#57352A]/70 mb-8">
                  We ran multiple design sprint sessions with stakeholders and potential users, focusing on 
                  "How Might We" questions to generate diverse solutions. Key focus areas included simplifying 
                  data visualization, creating frictionless tracking, and building motivational features.
                </p>

                {/* Wireframe Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F2EAE2] border border-[#57352A]/10 mb-4">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800"
                        alt="Low fidelity wireframes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-[#57352A] mb-2">Early Sketches</h4>
                    <p className="text-sm text-[#57352A]/70">
                      Initial concepts exploring different dashboard layouts and navigation patterns.
                    </p>
                  </div>
                  <div>
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F2EAE2] border border-[#57352A]/10 mb-4">
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800"
                        alt="Medium fidelity wireframes"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-[#57352A] mb-2">Mid-Fidelity Wireframes</h4>
                    <p className="text-sm text-[#57352A]/70">
                      Refined layouts with clearer hierarchy and interaction patterns based on early feedback.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Design Decisions */}
              <div className="bg-[#57352A]/5 border border-[#57352A]/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-6">Key Design Decisions</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Lightbulb className="text-[#C63B37] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#57352A] mb-1">Progressive Disclosure</h4>
                      <p className="text-[#57352A]/70 text-sm">
                        Show only essential metrics on the main dashboard, with detailed views accessible via taps. 
                        This reduced cognitive load and improved completion of daily tasks.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lightbulb className="text-[#C63B37] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#57352A] mb-1">Bottom Navigation</h4>
                      <p className="text-[#57352A]/70 text-sm">
                        Placed primary actions (Dashboard, Track, Insights, Profile) in thumb-friendly bottom navigation 
                        for one-handed mobile use.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Lightbulb className="text-[#C63B37] flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-bold text-[#57352A] mb-1">Smart Defaults</h4>
                      <p className="text-[#57352A]/70 text-sm">
                        Pre-filled common activities and suggested goals based on user profile to minimize data entry 
                        and get users to value faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* UI Design */}
            <section id="design" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">UI Design</h2>
              
              {/* Final Screens */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-6">Final High-Fidelity Screens</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600"
                      alt="Dashboard screen"
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600"
                      alt="Activity tracking screen"
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600"
                      alt="Insights screen"
                      className="w-full aspect-[9/16] object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Design System */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Colors */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#57352A] mb-6">Color System</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-[#C63B37] shadow-md"></div>
                      <div>
                        <p className="font-bold text-[#57352A]">Primary - Energetic Red</p>
                        <p className="text-sm text-[#57352A]/60">#C63B37</p>
                        <p className="text-xs text-[#57352A]/50">CTAs, Active States, Alerts</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-[#F2EAE2] border border-[#57352A]/10 shadow-md"></div>
                      <div>
                        <p className="font-bold text-[#57352A]">Background - Warm Cream</p>
                        <p className="text-sm text-[#57352A]/60">#F2EAE2</p>
                        <p className="text-xs text-[#57352A]/50">Main Background, Cards</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-xl bg-[#57352A] shadow-md"></div>
                      <div>
                        <p className="font-bold text-[#57352A]">Text - Rich Brown</p>
                        <p className="text-sm text-[#57352A]/60">#57352A</p>
                        <p className="text-xs text-[#57352A]/50">Headers, Body Text, Icons</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#57352A] mb-6">Typography</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-3xl font-bold text-[#57352A] mb-2">Inter Bold</p>
                      <p className="text-sm text-[#57352A]/60">Headings, Emphasis</p>
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-[#57352A] mb-2">Inter Semibold</p>
                      <p className="text-sm text-[#57352A]/60">Subheadings, Labels</p>
                    </div>
                    <div>
                      <p className="text-base text-[#57352A] mb-2">Inter Regular</p>
                      <p className="text-sm text-[#57352A]/60">Body Text, Descriptions</p>
                    </div>
                  </div>
                </div>

                {/* Components */}
                <div className="bg-white rounded-2xl p-8 shadow-sm lg:col-span-2">
                  <h3 className="text-xl font-bold text-[#57352A] mb-6">Key Components</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <div className="mb-3 p-4 bg-[#F2EAE2] rounded-xl">
                        <div className="w-full h-12 bg-[#C63B37] rounded-full flex items-center justify-center text-white font-semibold">
                          Button
                        </div>
                      </div>
                      <p className="text-sm font-bold text-[#57352A]">Primary Button</p>
                    </div>
                    <div>
                      <div className="mb-3 p-4 bg-[#F2EAE2] rounded-xl">
                        <div className="w-full h-12 border-2 border-[#C63B37] rounded-full flex items-center justify-center text-[#C63B37] font-semibold">
                          Button
                        </div>
                      </div>
                      <p className="text-sm font-bold text-[#57352A]">Secondary Button</p>
                    </div>
                    <div>
                      <div className="mb-3 p-4 bg-[#F2EAE2] rounded-xl">
                        <div className="w-full h-12 bg-white rounded-xl border border-[#57352A]/10 flex items-center px-4 text-[#57352A]/50">
                          Input field
                        </div>
                      </div>
                      <p className="text-sm font-bold text-[#57352A]">Text Input</p>
                    </div>
                    <div>
                      <div className="mb-3 p-4 bg-[#F2EAE2] rounded-xl">
                        <div className="w-full h-12 bg-white rounded-xl shadow-sm flex items-center px-4">
                          <div className="w-8 h-8 rounded-full bg-[#C63B37]"></div>
                        </div>
                      </div>
                      <p className="text-sm font-bold text-[#57352A]">Card Component</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testing & Iteration */}
            <section id="testing" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Testing & Iteration</h2>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-[#57352A] mb-6">Usability Testing</h3>
                <p className="text-[#57352A]/70 mb-8">
                  Conducted three rounds of usability testing with 24 participants using Maze and moderated 
                  sessions. Each round focused on specific user flows and pain points identified in previous iterations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C63B37] mb-2">24</div>
                    <p className="text-[#57352A]/70">Participants</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C63B37] mb-2">3</div>
                    <p className="text-[#57352A]/70">Testing Rounds</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#C63B37] mb-2">89%</div>
                    <p className="text-[#57352A]/70">Task Success Rate</p>
                  </div>
                </div>

                <div className="border-t border-[#57352A]/10 pt-8">
                  <h4 className="font-bold text-[#57352A] mb-4">What Changed & Why</h4>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-l-4 border-[#C63B37] pl-4">
                        <h5 className="font-bold text-[#57352A] mb-2">Issue Identified</h5>
                        <p className="text-[#57352A]/70 text-sm">
                          Users struggled to find the "Log Activity" button, taking an average of 8.3 seconds 
                          to locate it during first-time use.
                        </p>
                      </div>
                      <div className="border-l-4 border-[#57352A]/30 pl-4">
                        <h5 className="font-bold text-[#57352A] mb-2">Solution Implemented</h5>
                        <p className="text-[#57352A]/70 text-sm">
                          Added a prominent floating action button (FAB) on the dashboard. Reduced discovery 
                          time to 2.1 seconds and increased daily logging by 34%.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-l-4 border-[#C63B37] pl-4">
                        <h5 className="font-bold text-[#57352A] mb-2">Issue Identified</h5>
                        <p className="text-[#57352A]/70 text-sm">
                          The onboarding process had a 35% drop-off rate at the goal-setting step due to 
                          unclear instructions and too many options.
                        </p>
                      </div>
                      <div className="border-l-4 border-[#57352A]/30 pl-4">
                        <h5 className="font-bold text-[#57352A] mb-2">Solution Implemented</h5>
                        <p className="text-[#57352A]/70 text-sm">
                          Simplified goal selection to 3 pre-defined templates with ability to customize later. 
                          Drop-off rate decreased to 12%.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border-l-4 border-[#C63B37] pl-4">
                        <h5 className="font-bold text-[#57352A] mb-2">Issue Identified</h5>
                        <p className="text-[#57352A]/70 text-sm">
                          Users wanted to see their progress trends but found the insights section too data-heavy 
                          and difficult to interpret.
                        </p>
                      </div>
                      <div className="border-l-4 border-[#57352A]/30 pl-4">
                        <h5 className="font-bold text-[#57352A] mb-2">Solution Implemented</h5>
                        <p className="text-[#57352A]/70 text-sm">
                          Redesigned insights with visual progress rings, simple week-over-week comparisons, and 
                          plain-language summaries. User satisfaction increased by 42%.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Solution */}
            <section id="solution" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Final Solution</h2>
              
              {/* Hero Screens */}
              <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1600"
                  alt="Final solution showcase"
                  className="w-full h-auto"
                />
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#C63B37]/10 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#57352A] mb-3">Smart Goal Setting</h3>
                  <p className="text-[#57352A]/70">
                    AI-powered goal recommendations based on user profile, fitness level, and historical data. 
                    Adaptive goals that evolve with user progress.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#C63B37]/10 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#57352A] mb-3">Quick Log</h3>
                  <p className="text-[#57352A]/70">
                    Log activities, meals, or water intake in under 5 seconds with smart suggestions and 
                    voice input support for hands-free tracking.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#C63B37]/10 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#57352A] mb-3">Visual Progress</h3>
                  <p className="text-[#57352A]/70">
                    Beautiful progress rings, streak tracking, and milestone celebrations keep users motivated 
                    and aware of their achievements.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#C63B37]/10 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#57352A] mb-3">Community Challenges</h3>
                  <p className="text-[#57352A]/70">
                    Join friends in weekly challenges, compete on leaderboards, and share achievements to 
                    stay accountable and motivated.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#C63B37]/10 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#57352A] mb-3">Wearable Integration</h3>
                  <p className="text-[#57352A]/70">
                    Seamless sync with Apple Health, Google Fit, Fitbit, and other popular wearables for 
                    automatic activity and health data tracking.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="w-14 h-14 bg-[#C63B37]/10 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#57352A] mb-3">Personalized Insights</h3>
                  <p className="text-[#57352A]/70">
                    Weekly reports with actionable recommendations, trend analysis, and tips tailored to your 
                    specific health journey and goals.
                  </p>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section id="results" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Results & Impact</h2>
              
              {/* Metrics Showcase */}
              <div className="bg-gradient-to-br from-[#C63B37] to-[#a32e2b] rounded-2xl p-8 md:p-12 text-white shadow-xl mb-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Post-Launch Metrics (6 Months)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">62%</p>
                    <p className="text-white/80">30-Day Retention Rate</p>
                    <p className="text-sm text-white/60 mt-2">vs 28% industry avg</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">4.7</p>
                    <p className="text-white/80">App Store Rating</p>
                    <p className="text-sm text-white/60 mt-2">2,340+ reviews</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">31%</p>
                    <p className="text-white/80">Premium Conversion</p>
                    <p className="text-sm text-white/60 mt-2">exceeded 25% goal</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <p className="text-5xl font-bold mb-2">-47%</p>
                    <p className="text-white/80">Support Tickets</p>
                    <p className="text-sm text-white/60 mt-2">improved UX clarity</p>
                  </div>
                </div>
              </div>

              {/* Qualitative Impact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#57352A] mb-6">User Feedback</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#C63B37] pl-4">
                      <p className="text-[#57352A]/70 italic mb-2">
                        "Finally, a health app that doesn't overwhelm me with data. I can actually stick to 
                        my goals now!"
                      </p>
                      <p className="text-sm text-[#57352A]/50">- Sarah M., Beta Tester</p>
                    </div>
                    <div className="border-l-4 border-[#C63B37] pl-4">
                      <p className="text-[#57352A]/70 italic mb-2">
                        "The community challenges keep me motivated. I've lost 15 lbs in 3 months and made 
                        great friends!"
                      </p>
                      <p className="text-sm text-[#57352A]/50">- Mike T., Premium User</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-[#57352A] mb-6">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Featured in App Store "Apps We Love" section</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">100K+ downloads in first 3 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Secured $2M Series A funding round</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="text-[#C63B37] flex-shrink-0 mt-1" size={20} />
                      <span className="text-[#57352A]/70">Partnerships with 3 major insurance providers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Reflection */}
            <section id="reflection" className="mb-20 scroll-mt-32">
              <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Reflection & Learnings</h2>
              
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-[#C63B37] mb-4">What I Learned</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Less is more:</strong> Users don't need to see 
                          every metric. Focusing on 3-4 key indicators dramatically improved engagement and 
                          reduced confusion.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Early, continuous testing:</strong> Testing 
                          low-fidelity wireframes saved weeks of iteration time and prevented major usability 
                          issues in high-fidelity designs.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Motivation is key:</strong> Technical features 
                          matter, but psychological elements like streaks, achievements, and social proof were 
                          crucial for long-term retention.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Design systems accelerate work:</strong> Investing 
                          time upfront in a solid component library paid dividends in consistency and development speed.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#C63B37] mb-4">What I'd Do Differently</h3>
                    <ul className="space-y-4">
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Involve developers earlier:</strong> Some design 
                          decisions required technical workarounds. Earlier collaboration would have led to more 
                          feasible solutions.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Test with diverse user groups:</strong> Initial 
                          testing skewed toward younger, tech-savvy users. Later testing revealed accessibility 
                          issues for older adults.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Plan for internationalization:</strong> Retrofitting 
                          the app for multiple languages was challenging. Should have designed with i18n in mind 
                          from the start.
                        </p>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-[#C63B37] text-xl flex-shrink-0">•</span>
                        <p className="text-[#57352A]/70">
                          <strong className="text-[#57352A]">Document design decisions:</strong> Better 
                          documentation of "why" behind decisions would have helped onboard new team members and 
                          prevent revisiting solved problems.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-[#57352A]/10 pt-8">
                  <h3 className="text-xl font-bold text-[#57352A] mb-4">Next Steps & Future Enhancements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-bold text-[#57352A] mb-2">Q3 2025</h4>
                      <ul className="space-y-2 text-sm text-[#57352A]/70">
                        <li>• AI-powered meal planning</li>
                        <li>• Integration with telehealth</li>
                        <li>• Advanced sleep tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#57352A] mb-2">Q4 2025</h4>
                      <ul className="space-y-2 text-sm text-[#57352A]/70">
                        <li>• Group coaching features</li>
                        <li>• Wearable app (Apple Watch)</li>
                        <li>• Nutrition barcode scanner</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#57352A] mb-2">2026</h4>
                      <ul className="space-y-2 text-sm text-[#57352A]/70">
                        <li>• Web platform launch</li>
                        <li>• Corporate wellness programs</li>
                        <li>• Predictive health insights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center">
              <div className="bg-gradient-to-br from-[#C63B37] to-[#a32e2b] rounded-2xl p-12 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Interested in this project?</h2>
                <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                  I'd love to discuss the design process, decisions, and learnings in more detail. 
                  Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={onBack}
                    className="px-8 py-4 bg-white text-[#C63B37] rounded-full hover:bg-white/90 transition-colors font-semibold"
                  >
                    View More Projects
                  </button>
                  <a
                    href="mailto:hello@yourname.com"
                    className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors font-semibold"
                  >
                    Get in Touch
                  </a>
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
