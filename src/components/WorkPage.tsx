import { ProjectCard } from './ProjectCard';
import { projects } from '../data/projects';
import { Footer } from './Footer';

interface WorkPageProps {
  onProjectClick: (projectId: string) => void;
}

export function WorkPage({ onProjectClick }: WorkPageProps) {
  return (
    <div className="min-h-screen">
      <section
        className="py-12 md:py-20 mt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="hero-dots" aria-hidden="true">
          <span className="hero-dots-layer layer-one">.</span>
          <span className="hero-dots-layer layer-two">.</span>
          <span className="hero-dots-layer layer-three">.</span>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#57352A] mb-4">Work</h1>
            <p className="text-lg text-[#57352A]/70 max-w-2xl mx-auto">
              A card view of selected projects covering UX/UI, product design, and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                category={project.category}
                description={project.description}
                imageUrl={project.imageUrl}
                tags={project.tags}
                onClick={() => onProjectClick(project.id)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
