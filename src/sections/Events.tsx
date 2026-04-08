import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Church, Wine, Star, Calendar, MapPin } from 'lucide-react';

const events = [
  {
    icon: Church,
    name: 'Holy Matrimony',
    subtitle: 'Wedding Ceremony',
    date: 'Monday, April 20, 2026',
    time: '4:30 PM – 5:30 PM',
    venue: 'Bethel Lutheran Church',
    address: 'Ganesapuram, Nagercoil',
    description: 'The sacred union in Christ',
    isMain: true,
    calendarDetails: {
      text: 'Holy Matrimony - B. Jesu Raja & S. Lekshmi Kayathri',
      dates: '20260420T163000/20260420T173000',
      details: 'Wedding Ceremony at Bethel Lutheran Church',
      location: 'Bethel Lutheran Church, Ganesapuram, Nagercoil',
    },
    mapLink: 'https://maps.app.goo.gl/H78419vD1QmwPdAk7?g_st=aw',
  },
  {
    icon: Wine,
    name: 'Wedding Reception',
    subtitle: 'Evening Celebration',
    date: 'Monday, April 20, 2026',
    time: '7:00 PM onwards',
    venue: 'G.S. Mahal',
    address: 'Meenakshipuram, Vadiveeswaram',
    description: 'Dinner, dancing, and celebration',
    isMain: false,
    calendarDetails: {
      text: 'Wedding Reception - B. Jesu Raja & S. Lekshmi Kayathri',
      dates: '20260420T190000/20260420T230000',
      details: 'Wedding Reception at G.S. Mahal',
      location: 'G.S. Mahal, Meenakshipuram, Vadiveeswaram',
    },
    mapLink: 'https://maps.app.goo.gl/GAPouT6fsLgRZN6B7?g_st=aw',
  },
];

function EventCard({ event, index }: { event: (typeof events)[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });
  const Icon = event.icon;

  const addToCalendar = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.calendarDetails.text)}&dates=${event.calendarDetails.dates}&details=${encodeURIComponent(event.calendarDetails.details)}&location=${encodeURIComponent(event.calendarDetails.location)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`relative h-full rounded-2xl p-8 transition-all duration-500 ${event.isMain ? 'bg-gradient-to-br from-[#FFD700]/20 to-[#FFD700]/5 border-2 border-[#FFD700]' : 'bg-white/10 border border-[#FFD700]/30 hover:border-[#FFD700]/60'} backdrop-blur-sm hover:scale-[1.02]`}
        style={{ boxShadow: event.isMain ? '0 0 30px rgba(255, 215, 0, 0.3)' : '0 10px 40px rgba(0, 0, 0, 0.2)' }}>
        
        {event.isMain && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-[#FFD700] text-[#3A2465] px-4 py-1 rounded-full font-ui text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Star className="w-3 h-3" />
              Main Event
            </div>
          </div>
        )}

        <div className="flex justify-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${event.isMain ? 'bg-[#FFD700] text-[#3A2465]' : 'bg-[#FFD700]/20 text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-[#3A2465]'}`}>
            <Icon className="w-7 h-7" />
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-heading text-2xl text-[#FFFFF0] mb-1">{event.name}</h3>
          {event.subtitle && <p className="font-heading italic text-xl text-[#FFD700] mb-3">{event.subtitle}</p>}
          
          <div className="space-y-2 mb-4">
            <p className="font-ui text-sm text-[#FFD700] font-semibold">{event.date}</p>
            <p className="font-ui text-sm text-[#FFFFF0]/80">{event.time}</p>
          </div>

          <div className="mb-4">
            <p className="font-heading text-[#FFFFF0]">{event.venue}</p>
            <p className="font-body text-[#FFFFF0]/70 text-sm">{event.address}</p>
          </div>

          <p className="font-body text-[#FFFFF0]/60 text-sm italic mb-6">{event.description}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            {event.mapLink && (
              <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className="bg-[#FFD700] hover:bg-[#FFD700]/80 text-[#3A2465] px-4 py-2 rounded-full font-ui text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300">
                <MapPin className="w-3 h-3" />
                View on Map
              </a>
            )}
            <button onClick={addToCalendar} className="bg-[#FFD700]/20 hover:bg-[#FFD700] text-[#FFD700] hover:text-[#3A2465] px-4 py-2 rounded-full font-ui text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-300">
              <Calendar className="w-3 h-3" />
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="events" className="relative py-24 md:py-32 bg-[#3A2465]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFD700' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-[#FFD700] italic mb-4">"This is the day the Lord has made" — Psalm 118:24</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FFFFF0] mb-4">Wedding Celebrations</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-6" />
          <p className="font-body text-xl text-[#FFFFF0]/70 italic">Join us in these sacred moments</p>
        </div>

        {/* Couple Details */}
        <div className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#FFD700]/20 mb-12 transition-all duration-1000 delay-200 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="font-heading italic text-2xl text-[#FFD700] mb-2">The Groom</p>
              <p className="font-heading text-xl text-[#FFFFF0]">B. Jesu Raja B.E.</p>
              <p className="font-body text-[#FFFFF0]/70 text-sm mt-2">S/o Mr. D.R. Bright & Mrs. R. Selvi Bright</p>
              <p className="font-body text-[#FFFFF0]/60 text-sm">Ganapathi Nagar, Chettikulam, Nagercoil</p>
            </div>
            <div>
              <p className="font-heading italic text-2xl text-[#FFD700] mb-2">The Bride</p>
              <p className="font-heading text-xl text-[#FFFFF0]">S. Lekshmi Kayathri B.Sc.</p>
              <p className="font-body text-[#FFFFF0]/70 text-sm mt-2">D/o Mr. C. Sivakumar & Mrs. S. Hema</p>
              <p className="font-body text-[#FFFFF0]/60 text-sm">Nandhavanam, Nagercoil</p>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <EventCard key={event.name} event={event} index={index} />
          ))}
        </div>

        {/* Best Compliments */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-500 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-[#FFFFF0]/70 italic">
            Best Compliments from<br />
            <span className="text-[#FFD700]">K. Sankaran B.E., B. Merlin Subha M.Sc., Princess S. Yodhini</span>
          </p>
          <p className="font-body text-[#FFFFF0]/70 italic mt-4">
            With Love from<br />
            <span className="text-[#FFD700]">S. Sneka B.Sc. & K. Dhanush</span>
          </p>
        </div>

        {/* Bible Verse */}
        <div className="mt-12 text-center">
          <blockquote className="font-body text-lg text-[#FFFFF0]/60 italic">
            "And now these three remain: faith, hope and love. But the greatest of these is love."
            <span className="block mt-2 text-[#FFD700]">— 1 Corinthians 13:13</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
