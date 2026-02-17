import { Download, Mail, Phone, Linkedin, Github, Award, Briefcase, GraduationCap, Star, Users } from 'lucide-react';
import { Footer } from './Footer';

interface ResumePageProps {
  onBack: () => void;
}

export function ResumePage({ onBack }: ResumePageProps) {
  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-16">
        {/* Header */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#57352A] mb-4">Viktoriia Monakova</h1>
              <p className="text-xl text-[#C63B37] mb-4">Digital Designer & Developer</p>
              <p className="text-[#57352A]/70 leading-relaxed max-w-2xl">
              Creative and detail-oriented designer and developer with a strong
               focus on user-centered design, branding, and digital experiences.
               I combine visual creativity with technical problem-solving to deliver
               results-driven solutions. Highly adaptable and committed to exceeding expectations in fast-paced environments.
              </p>
            </div>
            <a
              href="/resume-branded.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors whitespace-nowrap"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap gap-4 md:gap-6 pt-6 border-t border-[#57352A]/10">
            <div className="flex items-center gap-2 text-[#57352A]/70">
              <Mail size={16} />
              <span className="text-sm">monakova1vika@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-[#57352A]/70">
              <Phone size={16} />
              <span className="text-sm">438-923-2406</span>
            </div>
            <a href="https://linkedin.com/in/movi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#57352A]/70 hover:text-[#C63B37] transition-colors">
              <Linkedin size={16} />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="https://github.com/monavi77" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#57352A]/70 hover:text-[#C63B37] transition-colors">
              <Github size={16} />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar - Left */}
          <div className="space-y-8 lg:order-1">
            {/* Skills */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#57352A] mb-6">Skills</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold text-[#C63B37] mb-3 uppercase tracking-wider">Design & Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">UI/UX Design</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Wireframing</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Prototyping</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Web Design</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Web Development</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">React</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">MySQL</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">WordPress</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#C63B37] mb-3 uppercase tracking-wider">Tools & Software</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Adobe Creative Suite</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Figma</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Canva</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">VS Code</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">GitHub</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">HTML/CSS</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">JavaScript</span>
                   
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#C63B37] mb-3 uppercase tracking-wider">Communication</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Marketing Content</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Technical Writing</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Professional Communication</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">SEO</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#C63B37] mb-3 uppercase tracking-wider">Customer Service</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Upselling</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Problem-Solving</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Team Collaboration</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#C63B37] mb-3 uppercase tracking-wider">Project Management</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Agile Methodologies</span>
                    <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Collaborative Workflows</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Languages */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#57352A] mb-6">Languages</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">English</span>
                <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Ukrainian</span>
                <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Polish</span>
                <span className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">Russian</span>
              </div>
            </section>

            {/* Certifications */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#57352A] mb-6">Certifications</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="text-[#C63B37] flex-shrink-0 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-[#57352A] text-sm">Marketing Certification</p>
                    <p className="text-xs text-[#57352A]/60">LinkedIn Learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="text-[#C63B37] flex-shrink-0 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-[#57352A] text-sm">Serve It Right</p>
                    <p className="text-xs text-[#57352A]/60">Certification</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Achievements */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#57352A] mb-6">Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="text-[#C63B37] flex-shrink-0 mt-1" size={16} />
                  <div>
                    <p className="font-bold text-[#57352A]">1st Place – Trap Shooting Championship</p>
                    <p className="text-sm text-[#57352A]/70">Kyiv, Ukraine • 2024</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Main Content - Right */}
          <div className="lg:col-span-2 space-y-8 lg:order-2">
            {/* Project Experience */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-[#C63B37]" size={24} />
                <h2 className="text-2xl font-bold text-[#57352A]">Project Experience</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Full-Stack Developer & Marketing Researcher</h3>
                      <p className="text-[#C63B37] font-medium">Scaffold — Mobile App for Trades Apprentices</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">Project</span>
                  </div>
                  <ul className="space-y-2 text-[#57352A]/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Matched users with eligible BC government grants using profile-based logic</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Streamlined profile creation with AI resume scanning and auto-built profiles</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Conducted market and user research to validate the problem and positioning</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#57352A]/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">UI/UX Designer</h3>
                      <p className="text-[#C63B37] font-medium">PocketGig — Gig Placement Mobile App</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">Project</span>
                  </div>
                  <ul className="space-y-2 text-[#57352A]/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Created user flows and wireframes for both job seekers and task assigners</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Enabled fast gig posting and discovery through iterative testing</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#57352A]/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Full-Stack Developer & Product Designer</h3>
                      <p className="text-[#C63B37] font-medium">DTRMN — AI-Powered Marketplace Website</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">Project</span>
                  </div>
                  <ul className="space-y-2 text-[#57352A]/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Built AI-powered virtual try-on flow from full-body uploads to final images</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Integrated a clothing store API to fetch and parse garment data accurately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="text-[#C63B37]" size={24} />
                <h2 className="text-2xl font-bold text-[#57352A]">Work Experience</h2>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Server</h3>
                      <p className="text-[#C63B37] font-medium">Aqua Restaurant, Executive Hotel (Burnaby)</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">2024 - Present</span>
                  </div>
                  <ul className="space-y-2 text-[#57352A]/70 text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Supported exceptional dining experiences, contributing to a 20% increase in repeat customers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Applied customer discovery skills to understand preferences and needs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#C63B37] mt-1">•</span>
                      <span>Enhanced sales through tailored recommendations and targeted solutions</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#57352A]/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Server & Bartender</h3>
                      <p className="text-[#C63B37] font-medium">Chit Chat Burger Bar (Vancouver)</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">2023 - 2024</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#57352A]/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Server & Hostess</h3>
                      <p className="text-[#C63B37] font-medium">DeDutch (New Westminster)</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">2023 - 2024</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#57352A]/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Banquet Server</h3>
                      <p className="text-[#C63B37] font-medium">Hotel Tatra (Zakopane, Poland)</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">2022 - 2023</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="text-[#C63B37]" size={24} />
                <h2 className="text-2xl font-bold text-[#57352A]">Education</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Diploma in Digital Design and Development (In Progress)</h3>
                      <p className="text-[#C63B37] font-medium">British Columbia Institute of Technology (BCIT)</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">In Progress</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#57352A]/10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#57352A]">Bachelor of Applied Physics (Uncompleted)</h3>
                      <p className="text-[#C63B37] font-medium">Taras Shevchenko National University of Kyiv (Ukraine)</p>
                    </div>
                    <span className="text-sm text-[#57352A]/60 whitespace-nowrap mt-1 sm:mt-0">Uncompleted</span>
                  </div>
                </div>
              </div>
            </section>


            {/* Volunteering */}
            <section className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-[#C63B37]" size={24} />
                <h2 className="text-2xl font-bold text-[#57352A]">Volunteering</h2>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-[#57352A]">Support Volunteer</h3>
                    <p className="text-[#C63B37] font-medium">GAMMA Martial Arts Competition (Kyiv, Ukraine)</p>
                  </div>
                </div>
                <ul className="space-y-2 text-[#57352A]/70 text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#C63B37] mt-1">•</span>
                    <span>Assisted international athletes with registration, directions, and logistics</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C63B37] mt-1">•</span>
                    <span>Supported fee collection and hospital visits during the event</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#C63B37] mt-1">•</span>
                    <span>Acted as a translator and guide to ensure a smooth athlete experience</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
