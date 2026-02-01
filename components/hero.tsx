'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  buttonText: string;
  animation: 'fade' | 'slide' | 'zoom' | 'flip';
}

const slides: Slide[] = [
  {
    id: 1,
    image: '/hero/consultancy-1.png',
    title: 'Strategic Solutions for Global Connectivity',
    description: 'We craft advanced network strategies that drive measurable business growth and elevate your competitive edge.',
    buttonText: 'Consult Our Experts',
    animation: 'fade',
  },
  {
    id: 2,
    image: '/hero/consultancy-2.png',
    title: 'Future-Proof Your Digital Infrastructure',
    description: 'Leverage cutting-edge network technologies and expert guidance to stay ahead in a connected world.',
    buttonText: 'Explore Solutions',
    animation: 'slide',
  },
  {
    id: 3,
    image: '/hero/garden-1.png', // Reusing garden-1 as a temporary high-res placeholder or just using a solid color if better
    title: 'Empowering Business Through Connectivity',
    description: 'Transform your operations with seamless integration, high-performance networks, and expert support.',
    buttonText: 'Contact Us',
    animation: 'zoom',
  },
];

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };

  const getAnimationClasses = (animation: string) => {
    if (isAnimating) {
      switch (animation) {
        case 'fade':
          return 'opacity-0';
        case 'slide':
          return 'opacity-0 translate-x-full';
        case 'zoom':
          return 'opacity-0 scale-150';
        case 'flip':
          return 'opacity-0 scale-x-0';
        default:
          return 'opacity-0';
      }
    }
    switch (animation) {
      case 'fade':
        return 'opacity-100';
      case 'slide':
        return 'opacity-100 translate-x-0';
      case 'zoom':
        return 'opacity-100 scale-100';
      case 'flip':
        return 'opacity-100 scale-x-100';
      default:
        return 'opacity-100';
    }
  };

  const getImageAnimationClasses = (animation: string, isActive: boolean) => {
    if (!isActive) {
      switch (animation) {
        case 'fade':
          return 'opacity-0 scale-110';
        case 'slide':
          return 'opacity-0 -translate-x-full scale-110';
        case 'zoom':
          return 'opacity-0 scale-150';
        case 'flip':
          return 'opacity-0 scale-x-0';
        default:
          return 'opacity-0 scale-110';
      }
    }
    switch (animation) {
      case 'fade':
        return 'opacity-100 scale-100';
      case 'slide':
        return 'opacity-100 translate-x-0 scale-100';
      case 'zoom':
        return 'opacity-100 scale-100';
      case 'flip':
        return 'opacity-100 scale-x-100';
      default:
        return 'opacity-100 scale-100';
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden pt-16">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${getImageAnimationClasses(
                slide.animation,
                index === currentSlide
              )}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Content Carousel */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div
          className={`text-center space-y-4 max-w-3xl transition-all duration-700 ${getAnimationClasses(
            currentSlideData.animation
          )}`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight text-pretty">
            {currentSlideData.title}
          </h1>

          {/* <p className="text-lg md:text-xl text-gray-100 font-light leading-relaxed max-w-2xl mx-auto">
            {currentSlideData.description}
          </p> */}

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-semibold group text-sm px-6 py-4"
            >
              {currentSlideData.buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 font-semibold text-sm px-6 py-4 bg-transparent"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 500);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
