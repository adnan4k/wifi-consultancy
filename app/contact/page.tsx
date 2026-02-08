import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';

export const metadata = {
  title: 'Contact Us | WiFi Consultancy',
  description: 'Get in touch with our team of experts for your business connectivity needs.',
};

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
