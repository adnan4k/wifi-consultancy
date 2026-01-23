'use client';

import React from "react"

import { useEffect, useRef, useState } from 'react';
import { Zap, Target, Lightbulb, Rocket } from 'lucide-react';

interface ServiceCard {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategic Planning',
    description: 'Develop comprehensive business strategies aligned with your long-term vision and market positioning.',
  },
  {
    id: 2,
    icon: <Target className="w-8 h-8" />,
    title: 'Brand Optimization',
    description: 'Elevate your brand presence with data-driven insights and innovative positioning strategies.',
  },
  {
    id: 3,
    icon: <Rocket className="w-8 h-8" />,
    title: 'Growth Acceleration',
    description: 'Unlock sustainable growth through operational excellence and market expansion initiatives.',
  },
  {
    id: 4,
    icon: <Zap className="w-8 h-8" />,
    title: 'Digital Transformation',
    description: 'Navigate the digital landscape with cutting-edge solutions and technology integration strategies.',
  },
];

function ServiceCardComponent({
  card,
  isVisible,
}: {
  card: ServiceCard;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group relative bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8 transition-all duration-700 hover:bg-white/80 hover:shadow-2xl ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Glass morphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 space-y-4">
        <div className="text-primary transition-transform duration-500 group-hover:scale-110 group-hover:text-primary/80">
          {card.icon}
        </div>

        <h3 className="text-2xl font-semibold text-foreground">{card.title}</h3>

        <p className="text-foreground/70 leading-relaxed text-sm">
          {card.description}
        </p>

        <div className="pt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-0 group-hover:translate-x-2">
          <span className="text-sm font-semibold">Learn more</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    services.map(() => false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(
              entry.target.getAttribute('data-index') || '0'
            );
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[cardIndex] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => cards?.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-light text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={service.id} data-index={index}>
              <ServiceCardComponent
                card={service}
                isVisible={visibleCards[index]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
