'use client';

import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-foreground text-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-light mb-2">
                Let's Connect
              </h3>
              <p className="text-background/70">
                Ready to transform your business? Get in touch with our team today.
              </p>
            </div>

            <form className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full bg-background/10 border border-background/20 rounded-lg px-4 py-2 text-background placeholder:text-background/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button className="w-full bg-background text-foreground hover:bg-background/90 font-semibold">
                Send Message
              </Button>
            </form>
          </div>

          {/* Quick Links & Contact */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Network Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Cybersecurity Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Cloud Integration
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Business Connectivity
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-background/60">
                © 2024 WiFi Consultancy. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Mail size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
