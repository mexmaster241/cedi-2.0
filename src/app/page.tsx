import Link from 'next/link';
import Image from 'next/image';
import { NavbarComponent } from '@/components/landing/navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <NavbarComponent />
      <div className="container mx-auto pt-20">
        <div className="text-center space-y-8 p-8">
          {/* Logo Container */}
          <div className="mb-8">
            {/* Replace with your actual logo */}
            <div className="text-4xl font-bold text-primary mb-2">
              CEDI 2.0
            </div>
            <p className="text-muted-foreground">
              Your Modern Banking Solution
            </p>
          </div>

          {/* CTA Button */}
          <Link 
            href="/dashboard" 
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors duration-200"
          >
            Go to Dashboard
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
