import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import { Footer } from './Footer';

export function ProjectPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[#C63B37]/10 rounded-full">
              <p className="text-[#C63B37] text-sm">Case Study</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#57352A] mb-6">
              E-Commerce Platform Redesign
            </h1>
            <p className="text-xl text-[#57352A]/70 mb-8">
              A comprehensive redesign focused on improving user experience, 
              increasing conversion rates, and creating a mobile-first shopping experience.
            </p>

            {/* Project Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-[#C63B37]" size={20} />
                <div>
                  <p className="text-sm text-[#57352A]/60">Timeline</p>
                  <p className="font-medium text-[#57352A]">3 Months</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Tag className="text-[#C63B37]" size={20} />
                <div>
                  <p className="text-sm text-[#57352A]/60">Role</p>
                  <p className="font-medium text-[#57352A]">Lead Designer</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#57352A] text-white rounded-full hover:bg-[#57352A]/90 transition-colors"
              >
                <Github size={20} />
                <span>View on GitHub</span>
              </a>
              <a
                href="#live-demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#C63B37] text-[#C63B37] rounded-full hover:bg-[#C63B37] hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1622131815183-e7f8bbac9cd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY4ODM5NTA1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Project preview"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C63B37] rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>

        {/* Project Rationale */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Project Rationale</h2>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div>
                <h3 className="text-xl font-bold text-[#C63B37] mb-3">Challenge</h3>
                <p className="text-[#57352A]/70">
                  The existing platform had a 68% cart abandonment rate and poor mobile usability, 
                  resulting in lost revenue and frustrated customers.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C63B37] mb-3">Solution</h3>
                <p className="text-[#57352A]/70">
                  Designed a mobile-first experience with simplified checkout, improved navigation, 
                  and personalized product recommendations using AI.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#C63B37] mb-3">Impact</h3>
                <p className="text-[#57352A]/70">
                  Reduced cart abandonment by 32%, increased mobile conversions by 45%, 
                  and improved overall customer satisfaction scores by 28%.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#57352A] mb-3">Research & Discovery</h4>
                <p className="text-[#57352A]/70 mb-4">
                  We conducted extensive user research including 25+ user interviews, heatmap analysis, 
                  and competitive benchmarking to identify key pain points in the shopping journey.
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#57352A]/70">
                  <li>User interviews revealed confusion during checkout process</li>
                  <li>Mobile users struggled with small touch targets and poor readability</li>
                  <li>Product discovery was inefficient and overwhelming</li>
                  <li>Trust signals were lacking at critical conversion points</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#57352A] mb-3">Design Process</h4>
                <p className="text-[#57352A]/70">
                  Using insights from research, we adopted a user-centered design approach with iterative 
                  prototyping and testing. The design system was built to ensure consistency and scalability 
                  across all touchpoints.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#57352A] mb-3">Technical Approach</h4>
                <p className="text-[#57352A]/70">
                  Built with React and TypeScript for maintainability, integrated with headless CMS for 
                  content flexibility, and implemented progressive web app features for offline functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Visuals */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Visual Design</h2>
          
          {/* Full Width Image */}
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1695634184046-93d24e779ea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3Njg4MDgzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Design mockup"
              className="w-full h-auto"
            />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#57352A] mb-4">Color Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#C63B37] shadow-sm"></div>
                  <div>
                    <p className="font-medium text-[#57352A]">Primary Red</p>
                    <p className="text-sm text-[#57352A]/60">#C63B37</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#F2EAE2] border border-[#57352A]/10 shadow-sm"></div>
                  <div>
                    <p className="font-medium text-[#57352A]">Background Cream</p>
                    <p className="text-sm text-[#57352A]/60">#F2EAE2</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#57352A] shadow-sm"></div>
                  <div>
                    <p className="font-medium text-[#57352A]">Dark Brown</p>
                    <p className="text-sm text-[#57352A]/60">#57352A</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#57352A] mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full">React</span>
                <span className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full">TypeScript</span>
                <span className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full">Tailwind CSS</span>
                <span className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full">Figma</span>
                <span className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full">Node.js</span>
                <span className="px-4 py-2 bg-[#F2EAE2] text-[#57352A] rounded-full">GraphQL</span>
              </div>
            </div>
          </div>

          {/* Grid of Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbnxlbnwxfHx8fDE3Njg4MzkxOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Screen 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY4ODk0MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Screen 2"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3Njg4MTQ1MTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Screen 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#C63B37] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-3">Smart Product Recommendations</h3>
              <p className="text-[#57352A]/70">
                AI-powered recommendations based on browsing history, purchase patterns, and user preferences.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#C63B37] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-3">One-Click Checkout</h3>
              <p className="text-[#57352A]/70">
                Streamlined checkout process with saved payment methods and address auto-fill for faster purchases.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#C63B37] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-3">Responsive Design System</h3>
              <p className="text-[#57352A]/70">
                Fully responsive components optimized for mobile, tablet, and desktop experiences.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-[#C63B37] rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-[#57352A] mb-3">Real-time Inventory</h3>
              <p className="text-[#57352A]/70">
                Live stock updates and intelligent notifications for back-in-stock items and price drops.
              </p>
            </div>
          </div>
        </section>

        {/* Results & Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Results & Metrics</h2>
          <div className="bg-gradient-to-br from-[#C63B37] to-[#a32e2b] rounded-2xl p-8 md:p-12 text-white shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">45%</p>
                <p className="text-white/80">Increase in Mobile Conversions</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">32%</p>
                <p className="text-white/80">Reduction in Cart Abandonment</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">28%</p>
                <p className="text-white/80">Higher Customer Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2">2.3x</p>
                <p className="text-white/80">Faster Page Load Times</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#57352A] mb-8">Key Learnings</h2>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-[#C63B37] text-xl">•</span>
                <p className="text-[#57352A]/70">
                  <strong className="text-[#57352A]">Mobile-first is critical:</strong> Over 70% of users accessed the platform 
                  via mobile devices, making mobile optimization the top priority.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C63B37] text-xl">•</span>
                <p className="text-[#57352A]/70">
                  <strong className="text-[#57352A]">Simplicity wins:</strong> Reducing checkout steps from 5 to 3 had 
                  the single biggest impact on conversion rates.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C63B37] text-xl">•</span>
                <p className="text-[#57352A]/70">
                  <strong className="text-[#57352A]">Trust signals matter:</strong> Adding customer reviews, security badges, 
                  and clear return policies significantly improved purchase confidence.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C63B37] text-xl">•</span>
                <p className="text-[#57352A]/70">
                  <strong className="text-[#57352A]">Performance impacts perception:</strong> Users perceived the brand 
                  more positively after page load times were reduced by 60%.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="text-center">
          <button
            onClick={onBack}
            className="px-8 py-4 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors text-lg"
          >
            View More Projects
          </button>
        </section>
      </div>

      <Footer />
    </div>
  );
}
