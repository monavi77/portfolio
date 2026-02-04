import { Mail, Linkedin, Github, Download, Award, Briefcase, GraduationCap, Heart, Code, Palette, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Footer } from './Footer';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  const skills = [
    { category: 'Design & Development', items: ['UI/UX Design', 'Wireframing', 'Prototyping', 'Web Design', 'Web Development', 'React', 'Next.js', 'MySQL', 'WordPress'] },
    { category: 'Tools & Software', items: ['Adobe Creative Suite (PSD, AI, ID, AE)', 'Figma', 'Canva', 'VS Code', 'GitHub', 'HTML/CSS', 'JavaScript', 'C++'] },
    { category: 'Communication', items: ['Marketing Content Creation', 'Technical Writing', 'Professional Communication', 'English', 'Ukrainian', 'Polish', 'Russian'] },
    { category: 'Project Management', items: ['Agile Methodologies', 'Collaborative Workflows', 'Problem-Solving', 'Team Collaboration', 'Upselling', 'Customer Service'] },
  ];

  const projectExperience = [
    {
      title: 'Full-Stack Developer & Marketing Researcher',
      company: 'Scaffold — Mobile App for Trades Apprentices',
      period: 'Project',
      description: 'Simplified the grant application process for trades apprentices and built a web supplement to support the mobile app.',
      achievements: [
        'Matched users with eligible BC government grants using profile-based logic',
        'Streamlined profile creation with AI resume scanning to auto-build profiles',
        'Conducted market and user research to validate the problem and app positioning',
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'PocketGig — Gig Placement Mobile App',
      period: 'Project',
      description: 'Designed a gig marketplace app connecting people who need short-term help with workers seeking gigs.',
      achievements: [
        'Created user flows and wireframes for both job seekers and task assigners',
        'Enabled fast gig posting and discovery through iterative usability testing',
      ]
    },
    {
      title: 'Full-Stack Developer & Product Designer',
      company: 'DTRMN — AI-Powered Marketplace Website',
      period: 'Project',
      description: 'Built a marketplace experience with AI-powered virtual try-on and dynamic product presentation.',
      achievements: [
        'Implemented AI try-on flow from full-body uploads to final generated images',
        'Integrated a clothing store API to fetch and parse garment data accurately',
      ]
    },
  ];

  const workExperience = [
    {
      title: 'Server',
      company: 'Aqua Restaurant, Executive Hotel (Burnaby)',
      period: '2024 - Present',
      achievements: [
        'Cultivated exceptional dining experiences, contributing to a 20% increase in repeat customers',
        'Applied customer discovery skills to understand preferences and needs',
        'Enhanced sales through tailored recommendations and targeted solutions',
      ]
    },
    {
      title: 'Server & Bartender',
      company: 'Chit Chat Burger Bar (Vancouver)',
      period: '2023 - 2024',
      achievements: []
    },
    {
      title: 'Server & Hostess',
      company: 'DeDutch (New Westminster)',
      period: '2023 - 2024',
      achievements: []
    },
    {
      title: 'Banquet Server',
      company: 'Hotel Tatra (Zakopane, Poland)',
      period: '2022 - 2023',
      achievements: []
    },
  ];

  const education = [
    {
      degree: 'Diploma in Digital Design and Development (In Progress)',
      school: 'British Columbia Institute of Technology (BCIT)',
      period: 'In Progress',
      description: 'Focused on digital design, development, and product workflows.'
    },
    {
      degree: 'Bachelor of Applied Physics (Uncompleted)',
      school: 'Taras Shevchenko National University of Kyiv (Ukraine)',
      period: 'Uncompleted',
      description: 'Foundational training in analytical and technical problem solving.'
    },
  ];

  const certifications = [
    { title: 'Marketing Certification', issuer: 'LinkedIn Learning' },
    { title: 'Serve It Right', issuer: 'Certification' },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-[#C63B37]/10 rounded-full">
                <p className="text-[#C63B37] text-sm font-medium">About Me</p>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#57352A] mb-6">
                Hi, I'm Viktoriia Monakova
              </h1>
              
              <p className="text-xl text-[#57352A]/70 mb-6 leading-relaxed">
                Creative and detail-oriented digital designer with a background in hospitality, passionate about
                crafting user-centered visuals, branding materials, and engaging digital content.
              </p>
              
              <p className="text-lg text-[#57352A]/70 mb-8 leading-relaxed">
                I enjoy blending design and development to build clear, helpful experiences and bring ideas to life
                across web, mobile, and brand touchpoints.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:monakova1vika@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors"
                >
                  <Mail size={20} />
                  <span>Get In Touch</span>
                </a>
                <a
                  href="/resume-branded.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#57352A] text-[#57352A] rounded-full hover:bg-[#57352A] hover:text-white transition-colors"
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="/src/assets/me.png"
                  alt="Viktoriia Monakova portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#C63B37] rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#57352A] rounded-full opacity-10 blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-12 text-center">My Design Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#C63B37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#C63B37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-4">User-Focused</h3>
              <p className="text-[#57352A]/70">
                I start with real needs, shaping layouts and flows that remove friction and keep people moving.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#C63B37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="text-[#C63B37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-4">Brand-Driven</h3>
              <p className="text-[#57352A]/70">
                Visuals should feel intentional, consistent, and memorable across every touchpoint.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#C63B37]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="text-[#C63B37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-4">Build-Ready</h3>
              <p className="text-[#57352A]/70">
                I design with feasibility in mind, so handoff and implementation stay fast and accurate.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#C63B37] mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-[#57352A]/70 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#C63B37] rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Project Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-[#C63B37]" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#57352A]">Project Experience</h2>
          </div>
          
          <div className="space-y-8">
            {projectExperience.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#57352A] mb-2">{exp.title}</h3>
                    <p className="text-lg text-[#C63B37] font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <p className="text-[#57352A]/70 mb-4">{exp.description}</p>
                
                <div className="border-t border-[#57352A]/10 pt-4">
                  <p className="text-sm font-bold text-[#57352A] mb-3">Key Contributions:</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-[#57352A]/70 text-sm flex items-start gap-3">
                        <Award className="text-[#C63B37] flex-shrink-0 mt-0.5" size={16} />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="text-[#C63B37]" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#57352A]">Work Experience</h2>
          </div>
          
          <div className="space-y-8">
            {workExperience.map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#57352A] mb-2">{exp.title}</h3>
                    <p className="text-lg text-[#C63B37] font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {exp.achievements.length > 0 && (
                  <div className="border-t border-[#57352A]/10 pt-4">
                    <p className="text-sm font-bold text-[#57352A] mb-3">Highlights:</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-[#57352A]/70 text-sm flex items-start gap-3">
                          <Award className="text-[#C63B37] flex-shrink-0 mt-0.5" size={16} />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-[#C63B37]" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#57352A]">Education & Certifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[#57352A] mb-2">{edu.degree}</h3>
                <p className="text-lg text-[#C63B37] font-medium mb-2">{edu.school}</p>
                <p className="text-sm text-[#57352A]/60 mb-4">{edu.period}</p>
                <p className="text-[#57352A]/70 text-sm">{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div key={cert.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[#57352A] mb-1">{cert.title}</h3>
                <p className="text-sm text-[#57352A]/60">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Beyond Design */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Heart className="text-[#C63B37]" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-[#57352A]">Community & Volunteering</h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#C63B37] to-[#a32e2b] rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Support Volunteer</h3>
            <p className="text-lg text-white/90 mb-6">GAMMA Martial Arts Competition (Kyiv, Ukraine)</p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span>Assisted international athletes with registration, directions, and logistics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span>Supported fee collection and hospital visits during the event.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white">•</span>
                <span>Acted as a translator and guide to ensure a smooth experience for athletes.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-4">Let's Work Together</h2>
            <p className="text-xl text-[#57352A]/70 mb-8 max-w-2xl mx-auto">
              I'm open to collaborations, internships, and freelance opportunities. If you have a project or role
              in mind, I'd love to connect.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:monakova1vika@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors font-semibold"
              >
                <Mail size={20} />
                <span>monakova1vika@gmail.com</span>
              </a>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://linkedin.com/in/movi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#F2EAE2] rounded-full flex items-center justify-center text-[#57352A] hover:bg-[#C63B37] hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/monavi77"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#F2EAE2] rounded-full flex items-center justify-center text-[#57352A] hover:bg-[#C63B37] hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
