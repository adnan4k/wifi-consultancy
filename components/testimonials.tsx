'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechFlow Solutions',
        content: 'WiFi Consultancy transformed our office network. The performance gains were immediate, and their security audit gave us peace of mind we never had before.',
        image: '/testimonials/sarah.png',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'CTO',
        company: 'Nexus Dynamics',
        content: 'Their strategic approach to network infrastructure is unparalleled. They didn\'t just fix our issues; they built a scalable solution for our future growth.',
        image: '/testimonials/michael.png',
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Operations Director',
        company: 'Global Connect Inc.',
        content: 'The 24/7 managed support has been a lifesaver. We haven\'t had a single minute of downtime since we started working with them.',
        image: '/testimonials/emily.png',
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground">Client Success Stories</h2>
                    <p className="text-foreground/60 mt-4 max-w-2xl mx-auto italic text-lg">
                        Empowering businesses through reliable and secure connectivity solutions.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto h-[350px] md:h-[250px] flex items-center justify-center">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${index === currentIndex ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                                }`}
                        >
                            <Card className="bg-white/50 backdrop-blur-md border-white/20 shadow-xl rounded-2xl overflow-hidden h-full">
                                <CardContent className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center h-full">
                                    <div className="flex-shrink-0 relative">
                                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 overflow-hidden relative border-2 border-white/50 shadow-sm">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-sm">
                                            <Quote className="text-primary w-4 h-4 fill-primary" />
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-center md:text-left">
                                        <p className="text-xl md:text-2xl font-serif italic text-foreground/80 leading-relaxed">
                                            "{testimonial.content}"
                                        </p>
                                        <div>
                                            <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                                            <p className="text-primary font-medium">{testimonial.role}, {testimonial.company}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-primary/30'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
