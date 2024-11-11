'use client'

import { usePathname } from 'next/navigation';
import { NavbarComponent } from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <NavbarComponent />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}