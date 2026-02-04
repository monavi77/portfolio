import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';
import { Footer } from './Footer';
import { useState } from 'react';

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 mt-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-[#C63B37]/10 rounded-full">
            <p className="text-[#C63B37] text-sm font-medium">Get In Touch</p>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#57352A] mb-6">
            Let's Build Something Thoughtful
          </h1>
          
          <p className="text-xl text-[#57352A]/70 max-w-2xl mx-auto">
            Open to collaborations, internships, and freelance work. Share your idea and I will get back to you soon.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[#57352A] mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C63B37]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#57352A]/60 mb-1">Email</p>
                    <a href="mailto:monakova1vika@gmail.com" className="text-[#57352A] hover:text-[#C63B37] transition-colors">
                      monakova1vika@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C63B37]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C63B37]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-[#57352A]/60 mb-1">Phone</p>
                    <a href="tel:+14389232406" className="text-[#57352A] hover:text-[#C63B37] transition-colors">
                      438-923-2406
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-[#57352A]/10">
                <h3 className="text-sm font-bold text-[#57352A] mb-4 uppercase tracking-wider">Find Me Online</h3>
                <div className="flex gap-3">
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
            </div>

            <div className="bg-gradient-to-br from-[#C63B37] to-[#a32e2b] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-3">Response Time</h3>
              <p className="text-white/80 mb-4">
                I typically respond within 24-48 hours. If your request is time-sensitive, please mention it in your message.
              </p>
              <p className="text-sm text-white/60">
                Current availability: Open to new opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#57352A] mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#57352A] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#F2EAE2] border border-[#57352A]/10 rounded-xl text-[#57352A] placeholder-[#57352A]/40 focus:outline-none focus:ring-2 focus:ring-[#C63B37] focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#57352A] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#F2EAE2] border border-[#57352A]/10 rounded-xl text-[#57352A] placeholder-[#57352A]/40 focus:outline-none focus:ring-2 focus:ring-[#C63B37] focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#57352A] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#F2EAE2] border border-[#57352A]/10 rounded-xl text-[#57352A] placeholder-[#57352A]/40 focus:outline-none focus:ring-2 focus:ring-[#C63B37] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project or role..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#C63B37] text-white rounded-full hover:bg-[#a32e2b] transition-colors font-semibold"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
