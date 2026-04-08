import { useState, useRef, useEffect } from 'react';
import { Music, Pause, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio(import.meta.env.BASE_URL + 'pavazha_malli.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (!isPlaying && audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('wheel', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
          }).catch(() => {
            // Autoplay was prevented - keep listeners active to try again
          });
        }
      }
    };

    // Add event listeners for various interactions to trigger music when the browser allows it
    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('wheel', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('wheel', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {
          // Auto-play blocked, user needs to interact
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:block bg-[#3A2465] text-[#FFFFF0] px-4 py-2 rounded-lg text-sm font-ui shadow-lg">
          Click for romantic music
        </div>
      )}

      {/* Volume Button */}
      <button
        onClick={toggleMute}
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying
            ? 'bg-[#FFD700] text-[#3A2465]'
            : 'bg-[#3A2465]/80 text-[#FFD700]'
        } hover:scale-110 shadow-lg`}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying
            ? 'bg-[#FFD700] text-[#3A2465]'
            : 'bg-[#3A2465]/80 text-[#FFD700]'
        } hover:scale-110 shadow-xl border-2 border-[#FFD700]/50`}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Music className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
