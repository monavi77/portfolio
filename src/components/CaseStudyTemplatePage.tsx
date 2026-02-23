import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Footer } from './Footer';
import { projects } from '../data/projects';

interface CaseStudyTemplatePageProps {
  projectId: string | null;
}

export function CaseStudyTemplatePage({ projectId }: CaseStudyTemplatePageProps) {
  const project = projects.find((item) => item.id === projectId) || projects[0];

  return (
    <div className="min-h-screen">
      <div className="py-12 md:py-20 mt-12 px-4 sm:px-6 lg:px-8 relative">


        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>

            <div className="inline-block mt-2 mb-4 px-4 py-2 bg-[#C63B37]/10 rounded-full">
              <p className="text-[#C63B37] text-sm">Case Study</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#57352A] mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-[#57352A]/70 mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#C63B37]" size={20} />
                <div>
                  <p className="text-sm text-[#57352A]/60">Timeline</p>
                  <p className="font-medium text-[#57352A]">4-8 Weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="text-[#C63B37]" size={20} />
                <div>
                  <p className="text-sm text-[#57352A]/60">Role</p>
                  <p className="font-medium text-[#57352A]">Designer & Developer</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com/monavi77"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#57352A] text-white rounded-full hover:bg-[#57352A]/90 transition-colors"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
              <a
                href="#project-details"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#C63B37] text-[#C63B37] rounded-full hover:bg-[#C63B37] hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>See Details</span>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.imageUrl}
                alt={`${project.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C63B37] rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        <section id="project-details" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Project Overview</h2>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <p className="text-[#57352A]/70 mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
