'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">WiFi</div>
        
        <div className="hidden md:flex gap-8">
          <a href="#services" className="text-sm hover:text-primary transition-colors">Services</a>
          <a href="#stats" className="text-sm hover:text-primary transition-colors">Impact</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </div>

        <Button className="hidden md:block bg-primary hover:bg-primary/90 text-white">
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
            <a href="#services" className="block text-sm hover:text-primary transition-colors">Services</a>
            <a href="#stats" className="block text-sm hover:text-primary transition-colors">Impact</a>
            <a href="#contact" className="block text-sm hover:text-primary transition-colors">Contact</a>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
