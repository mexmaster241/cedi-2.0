'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import Image from 'next/image'

export function NavbarComponent() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-6">
        <div className="flex w-full justify-between items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/logotipo.png" alt="FinTech Co. Logo" width={120} height={40} />
            </Link>
            <nav className="flex items-center space-x-6 text-lg font-medium">
              <Link className="font-clash-display hover:bg-gray-100 rounded-md px-2 py-1" href="/products">Productos</Link>
              <Link className="font-clash-display hover:bg-gray-100 rounded-md px-2 py-1" href="/pricing">Precios</Link>
            </nav>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
                <div className="flex flex-col space-y-3">
                  <MobileLink href="/products" onOpenChange={() => {}}>
                    Products
                  </MobileLink>
                  <MobileLink href="/pricing" onOpenChange={() => {}}>
                    Pricing
                  </MobileLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div>
            <Link href="/dashboard">
              <Button className="hidden md:flex bg-cedi-beige text-cedi-black hover:bg-cedi-light-gray text-lg font-clash-display">Ingresa</Button>
            </Link>
            <Link href="/dashboard">
              <Button className="md:hidden bg-cedi-beige text-cedi-black hover:bg-cedi-light-gray text-lg font-clash-display">Ingresa</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

interface MobileLinkProps {
  href: string
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      onClick={() => {
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}