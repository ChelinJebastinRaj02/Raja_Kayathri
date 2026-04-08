import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Gift, Heart, ExternalLink } from 'lucide-react';

const giftOptions = [
  {
    title: 'Honeymoon Fund',
    description: 'Help us create beautiful memories on our dream honeymoon',
    icon: Heart,
    link: '#',
  },
  {
    title: 'New Home Essentials',
    description: 'Contribute to building our home together in Christ',
    icon: Gift,
    link: '#',
  },
];

export default function GiftRegistry() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="relative py-24 md:py-32 bg-[#FFFFF0]">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23800020' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div ref={sectionRef} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-[#3A2465] italic mb-4">"Each of you should give what you have decided in your heart" — 2 Corinthians 9:7</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#3A2465] mb-4">Gift Registry</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-6" />
          <p className="font-body text-xl text-[#2D2D2D]/70 italic">Your presence is the greatest gift of all</p>
        </div>

        <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#FFD700]/30 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-center">
            <Gift className="w-16 h-16 text-[#FFD700] mx-auto mb-6" />
            <p className="font-body text-lg text-[#2D2D2D]/80 leading-relaxed mb-6">
              We are truly grateful for your love and support as we begin this new chapter of our lives together. 
              While your presence at our wedding is the most precious gift, if you wish to bless us further, 
              we have created options for your convenience.
            </p>
            <blockquote className="font-body text-[#2D2D2D]/70 italic border-l-4 border-[#FFD700] pl-6 text-left max-w-2xl mx-auto">
              "God loves a cheerful giver. Your blessings, prayers, and well-wishes mean more to us than any material gift."
            </blockquote>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {giftOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={option.title}
                href={option.link}
                className={`group bg-white rounded-xl p-6 border border-[#FFD700]/30 hover:border-[#FFD700] hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFD700] transition-colors">
                    <Icon className="w-7 h-7 text-[#3A2465]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-heading text-xl text-[#3A2465]">{option.title}</h4>
                      <ExternalLink className="w-4 h-4 text-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="font-body text-[#2D2D2D]/70">{option.description}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="font-script text-3xl text-[#3A2465]">With love and gratitude,</p>
          <p className="font-heading text-xl text-[#3A2465] mt-2">B. Jesu Raja & S. Lekshmi Kayathri</p>
          <p className="font-body text-[#2D2D2D]/60 mt-4 italic">"Where you go I will go, and where you stay I will stay" — Ruth 1:16</p>
        </div>
      </div>
    </section>
  );
}
