'use client';

import { useEffect, useRef, useState } from 'react';

interface StatItem {
  id: number;
  label: string;
  target: number;
  suffix?: string;
}

const stats: StatItem[] = [
  { id: 1, label: 'Projects Completed', target: 250, suffix: '+' },
  { id: 2, label: 'Client Satisfaction', target: 98, suffix: '%' },
  { id: 3, label: 'Fortune 500 Clients', target: 15, suffix: '+' },
  { id: 4, label: 'Years of Experience', target: 12 },
];

function CountupNumber({
  target,
  isVisible,
  suffix = '',
}: {
  target: number;
  isVisible: boolean;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / 2000, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isVisible, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground">
            Our Strategic Impact
          </h2>
          <p className="text-lg text-foreground/60">
            Delivering measurable results through expert infrastructure consultancy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group text-center space-y-3 p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/30 hover:bg-white/60 transition-all duration-500"
            >
              <div className="text-5xl md:text-6xl font-light text-primary font-serif group-hover:scale-110 transition-transform duration-500">
                <CountupNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  isVisible={isVisible}
                />
              </div>
              <p className="text-sm md:text-base text-foreground/70 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
