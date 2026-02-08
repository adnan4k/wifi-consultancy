import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Industries } from '@/components/industries';
import { CEOSection } from '@/components/ceo';
import { Stats } from '@/components/stats';
import { Process } from '@/components/process';
import { Testimonials } from '@/components/testimonials';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Industries />
      <CEOSection />
      <Stats />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}
