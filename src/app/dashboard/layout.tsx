"use client"

import { BankingSidebar } from "@/components/components-banking-sidebar"
import { SidebarProvider } from "@/components/sidebar/SidebarContext"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <BankingSidebar>
          {children}
        </BankingSidebar>
      </div>
    </SidebarProvider>
  )
}