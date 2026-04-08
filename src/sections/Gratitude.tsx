import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Gratitude() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="gratitude" className="relative py-24 md:py-32 bg-[#faf7f2] border-t border-[#FFD700]/10">
      <div ref={sectionRef} className="max-w-4xl mx-auto px-6 text-center">
        
        {/* Bible Verse Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-heading italic font-light text-3xl md:text-4xl text-[#3A2465] leading-relaxed">
            "We give thanks to God always for all of you, making mention of you in our prayers."
          </p>
          <p className="font-ui text-sm tracking-widest text-[#b8922a] mt-6 uppercase">— 1 Thessalonians 1:2</p>
        </div>

        {/* Ornament */}
        <div className={`flex justify-center items-center gap-4 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent to-[#b8922a]" />
          <div className="w-2 h-2 rotate-45 bg-[#b8922a]" />
          <div className="w-24 h-[1px] bg-gradient-to-l from-transparent to-[#b8922a]" />
        </div>

        {/* Letter of Gratitude */}
        <div className={`space-y-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-4xl md:text-5xl text-[#1a1410] mb-8 font-light">With Our Deepest Gratitude</h2>
          
          <p className="font-body text-lg md:text-xl text-[#4a3d2e] leading-relaxed max-w-3xl mx-auto">
            To our beloved family and friends—words cannot express how profoundly honored we are to have you share in the most momentous day of our lives. 
          </p>
          
          <p className="font-body text-lg md:text-xl text-[#4a3d2e] leading-relaxed max-w-3xl mx-auto">
            Your love has shaped us, your wisdom has guided us, and your presence as we unite our lives under God's grace is the greatest blessing we could ever receive. We are surrounded by so much beauty, but it is your attendance that truly completes this celebration.
          </p>
          
          <p className="font-body text-lg md:text-xl text-[#4a3d2e] leading-relaxed max-w-3xl mx-auto">
            Thank you for traveling near and far, for your endless support, and for walking alongside us as we begin this beautiful, sacred journey together.
          </p>
        </div>

      </div>
    </section>
  );
}
