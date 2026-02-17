import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

interface ProjectsGridProps {
  onProjectClick: (projectId: string) => void;
}

export function ProjectsGrid({ onProjectClick }: ProjectsGridProps) {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-[#57352A]/70 max-w-2xl mx-auto">
            A selection of projects showcasing design thinking, technical skills, 
            and creative problem-solving.
          </p>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image */}
                <div
                  className={`group cursor-pointer relative ${isEven ? '' : 'lg:col-start-2'}`}
                  onClick={() => onProjectClick(project.id)}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#57352A]/0 group-hover:bg-[#57352A]/10 transition-colors duration-300"></div>
                    <div className="absolute top-6 right-6 w-12 h-12 bg-[#C63B37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <ArrowUpRight className="text-white" size={24} />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <div className="inline-block mb-4 px-4 py-2 bg-[#C63B37]/10 rounded-full">
                    <p className="text-[#C63B37] text-sm font-medium">{project.category}</p>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-6">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-[#57352A]/70 mb-8 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white text-[#57352A] text-sm font-medium rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onProjectClick(project.id)}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors shadow-lg"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
