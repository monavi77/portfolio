import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#57352A] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start md:justify-items-end">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C63B37]">Viktoriia Monakova</h3>
            <p className="text-white/70">
              Creating meaningful digital experiences through thoughtful design and development.
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#projects" className="text-white/70 hover:text-[#C63B37] transition-colors">Work</a>
              <a href="#about" className="text-white/70 hover:text-[#C63B37] transition-colors">About</a>
              <a href="#contact" className="text-white/70 hover:text-[#C63B37] transition-colors">Contact</a>
              <a href="#resume" className="text-white/70 hover:text-[#C63B37] transition-colors">Resume</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-end text-right md:justify-self-end">
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4 justify-end">
              <a 
                href="https://github.com/monavi77" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C63B37] transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/movi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C63B37] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:monakova1vika@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C63B37] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} Viktoriia Monakova. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
