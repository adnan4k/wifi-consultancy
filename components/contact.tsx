'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Ready to transform your business? Get in touch with our team today and let's discuss how we can help you achieve your goals.
          </p>
          <div className="w-12 h-1.5 bg-[#fbbf24] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6 bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Your Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">Project Details</label>
              <textarea
                placeholder="Tell us about your project, goals, and any specific requirements..."
                rows={5}
                className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
