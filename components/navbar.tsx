'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary italic tracking-tight">WiFi Consultancy</div>

        <div className="hidden md:flex gap-8">
          <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="/#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
          <a href="/#process" className="text-sm font-medium hover:text-primary transition-colors">Our Process</a>
          <a href="/#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
          <a href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
        </div>

        <Button 
          className="hidden md:block bg-primary hover:bg-primary/90 text-white font-semibold px-6"
          onClick={() => window.location.href = '/contact'}
        >
          Get Started
        </Button>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-4">
            <a href="/" className="block text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="/#services" className="block text-sm font-medium hover:text-primary transition-colors">Our Services</a>
            <a href="/#projects" className="block text-sm font-medium hover:text-primary transition-colors">Projects</a>
            <a href="/#process" className="block text-sm font-medium hover:text-primary transition-colors">Process</a>
            <a href="/contact" className="block text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
