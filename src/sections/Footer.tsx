import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Instagram, Facebook, MessageCircle, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: MessageCircle, label: 'WhatsApp', href: '#' },
];

export default function Footer() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <footer className="relative py-20 bg-[#3A2465]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Cross Symbol */}
          <div className={`flex justify-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-20 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-[#FFD700]" />
              <div className="absolute top-1/3 left-0 w-full h-1 bg-[#FFD700]" />
            </div>
          </div>

          {/* Christian Slogan */}
          <div className={`mb-8 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-script text-2xl text-[#FFD700]">"What God has joined together, let no one separate"</p>
            <p className="font-body text-[#FFFFF0]/70 mt-2">— Mark 10:9</p>
          </div>

          {/* Bible Verse */}
          <div className={`mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <blockquote className="font-body text-xl text-[#FFFFF0]/80 italic max-w-2xl mx-auto leading-relaxed">
              "Love is patient, love is kind. It does not envy, it does not boast, it is not proud."
            </blockquote>
            <p className="font-heading text-[#FFD700] mt-4">— 1 Corinthians 13:4-8</p>
          </div>

          {/* Divider */}
          <div className={`w-48 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

          {/* Couple Names */}
          <div className={`mb-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-body text-[#FFFFF0]/70 text-sm uppercase tracking-widest mb-2">The Wedding of</p>
            <h3 className="font-heading font-light text-5xl md:text-6xl text-[#FFD700]">B. Jesu Raja</h3>
            <p className="font-heading italic text-3xl text-[#FFD700] my-2">&</p>
            <h3 className="font-heading font-light text-5xl md:text-6xl text-[#FFD700]">S. Lekshmi Kayathri</h3>
          </div>

          {/* Wedding Date */}
          <div className={`mb-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-heading text-2xl text-[#FFFFF0]/90">Monday, April 20, 2026</p>
            <p className="font-body text-[#FFD700] mt-2">Bethel Lutheran Church, Nagercoil</p>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center gap-6 mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center text-[#FFD700] hover:bg-[#FFD700] hover:text-[#3A2465] transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{ animationDelay: `${index * 200}ms` }}
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Christian Blessing */}
          <div className={`mb-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-body text-[#FFFFF0]/60 italic">
              "The Lord bless you and keep you;<br />
              The Lord make His face shine upon you<br />
              and be gracious to you."
            </p>
            <p className="font-body text-[#FFD700] mt-2">— Numbers 6:24-25</p>
          </div>

          {/* Copyright */}
          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-ui text-sm text-[#FFFFF0]/60 flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-[#FFD700] fill-[#FFD700]" /> for our special day
            </p>
            <p className="font-ui text-xs text-[#FFFFF0]/40 mt-2">
              © 2026 B. Jesu Raja & S. Lekshmi Kayathri. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Cross */}
      <div className="absolute bottom-8 right-8 opacity-10">
        <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
          <path d="M30 0V80M10 25H50" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>

      {/* Decorative Mandala */}
      <div className="absolute bottom-8 left-8 opacity-5">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="35" stroke="#FFD700" strokeWidth="1" />
          <circle cx="40" cy="40" r="25" stroke="#FFD700" strokeWidth="1" />
          <circle cx="40" cy="40" r="15" stroke="#FFD700" strokeWidth="1" />
          {[...Array(8)].map((_, i) => (
            <line key={i} x1="40" y1="5" x2="40" y2="75" stroke="#FFD700" strokeWidth="1" transform={`rotate(${i * 45} 40 40)`} />
          ))}
        </svg>
      </div>
    </footer>
  );
}
