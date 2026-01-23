'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8Dfk_tZt13k?autoplay=1&mute=1&controls=0&loop=1&playlist=8Dfk_tZt13k&modestbranding=1&playsinline=1&showinfo=0&rel=0"
            title="Background video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div
          className={`text-center space-y-6 max-w-4xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-tight text-pretty">
            Transform Your Vision Into Strategy
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 font-light leading-relaxed max-w-3xl mx-auto">
            We craft strategic solutions that drive measurable business growth and elevate your competitive advantage
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold group text-base px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold text-base px-8 py-6 bg-transparent"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 z-10 animate-bounce"
          style={{
            opacity: 1 - scrollY / 300,
          }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
}
