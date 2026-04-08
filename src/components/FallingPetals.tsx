import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'rose' | 'lily';
}

export default function FallingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate petals
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 6,
          size: 12 + Math.random() * 16,
          type: Math.random() > 0.5 ? 'rose' : 'lily',
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          {petal.type === 'rose' ? (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-60"
            >
              <path
                d="M12 2C12 2 8 4 8 8C8 10 9 12 12 14C15 12 16 10 16 8C16 4 12 2 12 2Z"
                fill="#DC143C"
              />
              <path
                d="M12 14C12 14 6 16 6 20C6 22 8 24 12 24C16 24 18 22 18 20C18 16 12 14 12 14Z"
                fill="#B22222"
              />
              <path
                d="M12 8C12 8 10 9 10 11C10 12 11 13 12 14C13 13 14 12 14 11C14 9 12 8 12 8Z"
                fill="#FF6B6B"
              />
            </svg>
          ) : (
            <svg
              width={petal.size}
              height={petal.size}
              viewBox="0 0 24 24"
              fill="none"
              className="opacity-60"
            >
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                fill="#FFFFF0"
                transform="rotate(0 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                fill="#FFFFF0"
                transform="rotate(72 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                fill="#FFFFF0"
                transform="rotate(144 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                fill="#FFFFF0"
                transform="rotate(216 12 12)"
              />
              <ellipse
                cx="12"
                cy="12"
                rx="6"
                ry="10"
                fill="#FFFFF0"
                transform="rotate(288 12 12)"
              />
              <circle cx="12" cy="12" r="3" fill="#FFD700" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
