'use client'

import { usePathname } from 'next/navigation';
import { NavbarComponent } from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const isLogin = pathname === '/login' || pathname === '/sign-up';

  if (isDashboard || isLogin) {
    return <>{children}</>;
  }

  return (
    <>
      <NavbarComponent />
      {children}
      <Footer />
    </>
  );
}