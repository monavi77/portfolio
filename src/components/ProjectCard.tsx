import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  onClick: () => void;
}

export function ProjectCard({ 
  title, 
  category, 
  description, 
  imageUrl, 
  tags,
  onClick 
}: ProjectCardProps) {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#57352A]/5">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 w-10 h-10 bg-[#C63B37] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="text-white" size={20} />
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-sm text-[#C63B37] mb-2">{category}</p>
        <h3 className="text-2xl font-bold text-[#57352A] mb-3">{title}</h3>
        <p className="text-[#57352A]/70 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-[#F2EAE2] text-[#57352A] text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
