'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface ProcessStep {
  id: number;
  text: string;
  highlighted?: boolean;
  description?: string;
}

const processSteps: ProcessStep[] = [
  {
    id: 1,
    text: 'Understand your goals, values & uniqueness',
  },
  {
    id: 2,
    text: 'Craft your positioning and messaging',
  },
  {
    id: 3,
    text: 'Develop',
    highlighted: true,
    description:
      'We help you create authentic content, optimize your social and professional profiles, and establish a powerful online presence that reflects your values, voice, and vision—consistently.',
  },
  {
    id: 4,
    text: 'Launch your authentic personal brand',
  },
];

export function Process() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      {/* Purple accent stripe on left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text and Process */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="text-primary">Our Process,</span>{' '}
                <span className="text-foreground">Simplified</span>
              </h2>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div key={step.id} className="relative">
                  {step.highlighted ? (
                    <div className="bg-primary rounded-lg p-6 text-background relative">
                      <div className="space-y-2">
                        <div className="text-xl font-semibold">{step.text}</div>
                        {step.description && (
                          <p className="text-sm text-background/90 leading-relaxed">
                            {step.description}
                          </p>
                        )}
                      </div>
                      {/* Arrow icon */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-background" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="group relative bg-transparent rounded-lg p-6 transition-all duration-300 hover:bg-primary hover:text-background cursor-pointer pr-20">
                      <div className="text-lg font-medium text-foreground group-hover:text-background group-hover:font-semibold transition-all duration-300 whitespace-nowrap">
                        {step.text}
                      </div>
                      {/* Arrow icon - positioned like highlighted version */}
                      <div className="absolute right-6 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-background/20 transition-all duration-300">
                          <ArrowRight className="w-4 h-4 text-foreground/60 group-hover:text-background transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
              >
                Learn More
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder image - replace with actual image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="text-foreground/40 text-sm">Image Placeholder</div>
                  <div className="text-foreground/30 text-xs">
                    Add your team/process image here
                  </div>
                </div>
              </div>
              {/* Uncomment and use when you have an image */}
              <Image
                src="/meeting-background.jpg"
                alt="Our Process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
