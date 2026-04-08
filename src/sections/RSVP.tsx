import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Send, Check, Users, Calendar, Utensils, MessageSquare, Facebook, MessageCircle, Link2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const events = [
  { id: 'ceremony', label: 'Wedding Ceremony' },
  { id: 'reception', label: 'Reception' },
];

export default function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    events: [] as string[],
    dietary: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  const handleEventToggle = (eventId: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(eventId) ? prev.events.filter((e) => e !== eventId) : [...prev.events, eventId],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send email using mailto
    const subject = `Wedding RSVP from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Number of Guests: ${formData.guests}
Events Attending: ${formData.events.join(', ') || 'None selected'}
Dietary Requirements: ${formData.dietary || 'None'}
Message: ${formData.message || 'No message'}
    `;
    window.location.href = `mailto:jesuraja8220@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', guests: '1', events: [], dietary: '', message: '' });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = 'Join us in celebrating the wedding of B. Jesu Raja & S. Lekshmi Kayathri on April 20, 2026!';

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    copy: () => {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    },
  };

  return (
    <section id="rsvp" className="relative py-24 md:py-32 bg-[#3A2465]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
      </div>

      <div ref={sectionRef} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-[#FFD700] italic mb-4">"For I know the plans I have for you" — Jeremiah 29:11</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FFFFF0] mb-4">Join Our Celebration</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-6" />
          <p className="font-body text-xl text-[#FFFFF0]/70 italic">We would be honored by your presence</p>
        </div>

        {/* Share Buttons */}
        <div className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-body text-[#FFFFF0]/70 mr-2 flex items-center">Share this invitation:</p>
          <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition-transform">
            <MessageCircle className="w-5 h-5" />
          </a>
          <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition-transform">
            <Facebook className="w-5 h-5" />
          </a>
          <button onClick={shareLinks.copy} className="w-10 h-10 rounded-full bg-[#FFD700] flex items-center justify-center text-[#3A2465] hover:scale-110 transition-transform">
            <Link2 className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="gallery/our-photo-1.jpg" alt="Wedding invitation" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2465]/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-heading italic text-3xl text-[#FFD700] mb-2">Save the Date</p>
                <p className="font-heading text-xl text-[#FFFFF0]">April 20, 2026</p>
                <p className="font-body text-[#FFFFF0]/70 mt-1">Bethel Lutheran Church</p>
              </div>
            </div>
            <div className="absolute -inset-4 border-2 border-[#FFD700]/30 rounded-3xl -z-10" />
          </div>

          {/* Form Side */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-ui text-sm text-[#FFFFF0]/80 uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#FFD700]" />
                    Full Name(s)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white/10 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#FFFFF0] placeholder-[#FFFFF0]/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all"
                    placeholder="Your name(s)"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 font-ui text-sm text-[#FFFFF0]/80 uppercase tracking-wider">
                    <MessageSquare className="w-4 h-4 text-[#FFD700]" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/10 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#FFFFF0] placeholder-[#FFFFF0]/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-ui text-sm text-[#FFFFF0]/80 uppercase tracking-wider">
                  <Users className="w-4 h-4 text-[#FFD700]" />
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData((prev) => ({ ...prev, guests: e.target.value }))}
                  className="w-full bg-white/10 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#FFFFF0] focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num} className="bg-[#3A2465]">{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                  <option value="5+" className="bg-[#3A2465]">5+ Guests</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-ui text-sm text-[#FFFFF0]/80 uppercase tracking-wider">
                  <Calendar className="w-4 h-4 text-[#FFD700]" />
                  Events Attending
                </label>
                <div className="flex flex-wrap gap-2">
                  {events.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => handleEventToggle(event.id)}
                      className={`px-4 py-2 rounded-full font-ui text-sm transition-all duration-300 ${formData.events.includes(event.id) ? 'bg-[#FFD700] text-[#3A2465]' : 'bg-white/10 text-[#FFFFF0]/70 hover:bg-white/20 border border-[#FFD700]/30'
                        }`}
                    >
                      {event.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-ui text-sm text-[#FFFFF0]/80 uppercase tracking-wider">
                  <Utensils className="w-4 h-4 text-[#FFD700]" />
                  Dietary Preferences
                </label>
                <textarea
                  value={formData.dietary}
                  onChange={(e) => setFormData((prev) => ({ ...prev, dietary: e.target.value }))}
                  rows={2}
                  className="w-full bg-white/10 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#FFFFF0] placeholder-[#FFFFF0]/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all resize-none"
                  placeholder="Any dietary restrictions or allergies?"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-ui text-sm text-[#FFFFF0]/80 uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4 text-[#FFD700]" />
                  Message for the Couple
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  rows={3}
                  className="w-full bg-white/10 border border-[#FFD700]/30 rounded-lg px-4 py-3 text-[#FFFFF0] placeholder-[#FFFFF0]/40 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/20 outline-none transition-all resize-none"
                  placeholder="Share your wishes..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-[#3A2465] font-ui font-semibold uppercase tracking-wider py-4 rounded-lg flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#FFD700]/30 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? <><div className="w-5 h-5 border-2 border-[#3A2465] border-t-transparent rounded-full animate-spin" />Sending...</> : <><Send className="w-5 h-5" />Send RSVP</>}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-[#FFFFF0] border-2 border-[#FFD700] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#FFD700] flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-[#3A2465]" />
              </div>
              <h3 className="font-heading text-2xl text-[#3A2465] mb-2">Thank You!</h3>
              <p className="font-body text-[#2D2D2D]/70">Your RSVP has been received. We look forward to celebrating with you!</p>
              <p className="font-body text-[#3A2465] italic mt-4">"Love is patient, love is kind" — 1 Corinthians 13:4</p>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
