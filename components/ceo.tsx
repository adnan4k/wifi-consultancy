'use client';

import Image from 'next/image';
import { Quote } from 'lucide-react';

export function CEOSection() {
    return (
        <section className="relative py-24 overflow-hidden bg-background">
            {/* Decorative background accent */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image with creative layout */}
                    <div className="relative group">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/dr.jpg"
                                alt="Dr Tasfaye Alamu, CEO"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />

                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-sm font-medium tracking-wider uppercase opacity-90">Founder & CEO</p>
                                <h3 className="text-2xl font-serif">Dr Tasfaye Alamu</h3>
                            </div>
                        </div>


                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Leadership Vision
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground leading-tight">
                            Driving Digital <br />
                            <span className="text-primary italic">Transformation</span>
                        </h2>

                        <div className="relative">
                            <Quote className="absolute -top-4 -left-6 w-8 h-8 text-primary/20 transform -scale-x-100" />
                            <p className="text-lg text-foreground/80 leading-relaxed italic relative z-10 pl-2">
                                "We don't just build networks; we build the backbone of modern enterprise. My vision has always been to bridge the gap between complex technology and strategic business goals, ensuring our clients are not just connected, but competitive."
                            </p>
                        </div>

                        <div className="space-y-4 text-foreground/70">
                            <p>
                                With over 15 years of experience in network infrastructure and strategic consulting, Dr Tasfaye Alamu has led WiFi Consultancy to become a trusted partner for Fortune 500 companies worldwide. His unique approach combines deep technical expertise with a keen understanding of business dynamics.
                            </p>
                        </div>

                        <div className="pt-4 flex items-center gap-6">
                            {/* Signature effect */}
                            <div className="font-handwriting text-3xl text-primary/80 opacity-80" style={{ fontFamily: 'cursive' }}>
                                Dr Tasfaye Alamu
                            </div>

                            <div className="h-px bg-border flex-1" />

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
