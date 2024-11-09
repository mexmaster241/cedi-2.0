import Link from 'next/link';
import Image from 'next/image';
import { NavbarComponent } from '@/components/landing/navbar';
import Hero from '@/components/landing/hero';
import Features from '@/components/landing/features';
import FAQs from '@/components/landing/faqs';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-cedi-beige">
      <NavbarComponent />
      <div className="container mx-auto">
        <Hero />
        <Features />
        <FAQs />
      </div>
    </div>
  );
}
