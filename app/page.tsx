'use client';

import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Stats } from '@/components/stats';
import { Process } from '@/components/process';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <Process />
      <Footer />
    </div>
  );
}
