import { ArrowDown } from 'lucide-react';
import posterLight from '../assets/buil-poster-lightning.png';
import posterDark from '../assets/buil-poster-not-lightning.png';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative hero-stage">
      <div className="hero-poster" aria-hidden="true">
        <img src={posterLight} alt="" className="hero-poster__img hero-poster__img--light" />
        <img src={posterDark} alt="" className="hero-poster__img hero-poster__img--dark" />
      </div>
      <div className="hero-dots" aria-hidden="true">
        <span className="hero-dots-layer layer-one">.</span>
        <span className="hero-dots-layer layer-two">.</span>
        <span className="hero-dots-layer layer-three">.</span>
      </div>
      <div className="hero-container">
        <div className="hero-pill">
          <div className="inline-block px-4 py-2 bg-[#C63B37]/10 rounded-full">
            <p className="text-[#C63B37] text-sm">Digital Designer & Developer</p>
          </div>
        </div>
        {/* <div className="relative z-10 max-w-5xl text-left hero-content">
          <p className="text-lg sm:text-xl text-[#57352A]/80 mb-12 max-w-2xl hero-copy">
            I design and build beautiful, functional digital products that solve real problems 
            and delight users.
          </p>
        </div> */}

        <div className="hero-actions">
          <div className="flex flex-col sm:flex-row gap-4 justify-start items-start">
            <a 
              href="#projects" 
              className="glass-button glass-button-red w-full sm:w-auto px-8 py-4 font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="glass-button glass-button-white w-full sm:w-auto px-8 py-4 font-medium"
            >
              Get in Touch
            </a>
          </div>
          <a href="#about-me" className="hero-arrow animate-bounce">
            <ArrowDown className="text-white" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
