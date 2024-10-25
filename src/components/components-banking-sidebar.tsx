"use client"

import * as React from "react"
import { CreditCard, DollarSign, FileText, HelpCircle, Home, PieChart, Settings, User, Users, Wallet } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { useSidebar } from "@/components/sidebar/SidebarContext";

// This is sample data for a banking app.
const data = {
  navMain: [
    {
      title: "Dashboard",
      icon: Home,
      url: "#",
    },
    {
      title: "Accounts",
      icon: DollarSign,
      url: "#",
      items: [
        {
          title: "Checking",
          url: "#",
        },
        {
          title: "Savings",
          url: "#",
        },
      ],
    },
    {
      title: "Cards",
      icon: CreditCard,
      url: "#",
      items: [
        {
          title: "Credit Cards",
          url: "#",
        },
        {
          title: "Debit Cards",
          url: "#",
        },
      ],
    },
    {
      title: "Transactions",
      icon: Wallet,
      url: "#",
      items: [
        {
          title: "Recent Transactions",
          url: "#",
        },
        {
          title: "Statements",
          url: "#",
        },
      ],
    },
    {
      title: "Transfers",
      icon: FileText,
      url: "#",
      items: [
        {
          title: "Between Accounts",
          url: "#",
        },
        {
          title: "To Someone Else",
          url: "#",
        },
      ],
    },
    {
      title: "Bill Pay",
      icon: FileText,
      url: "#",
      items: [
        {
          title: "Pay Bills",
          url: "#",
        },
        {
          title: "Manage Payees",
          url: "#",
        },
      ],
    },
    {
      title: "Investments",
      icon: PieChart,
      url: "#",
      items: [
        {
          title: "Portfolio",
          url: "#",
        },
        {
          title: "Trade",
          url: "#",
        },
      ],
    },
    {
      title: "Profile",
      icon: User,
      url: "#",
      items: [
        {
          title: "Personal Information",
          url: "#",
        },
        {
          title: "Security Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Support",
      icon: HelpCircle,
      url: "#",
    },
  ],
}

export function BankingSidebar() {
  const { selectedItem, setSelectedItem } = useSidebar();

  const renderContent = () => {
    switch (selectedItem) {
      case 'Dashboard':
        return (
          <>
            <BalanceCard balance={5240.50} />
            <QuickActions />
            <RecentTransactions transactions={[
              { title: 'Grocery Store', amount: -85.20, date: '2024-03-20' },
              { title: 'Electric Bill', amount: -120.00, date: '2024-03-19' },
              { title: 'Online Shopping', amount: -65.99, date: '2024-03-18' },
            ]} />
          </>
        );
      default:
        return <div>Select an item from the sidebar</div>;
    }
  };

  return (
    <SidebarProvider>
      <Sidebar collapsible="offcanvas">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#" className="flex items-center">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Users className="size-4" />
                  </div>
                  <div className="ml-3 flex flex-col gap-0.5 leading-none">
                    <span className="font-semibold">Cedi</span>
                    <span className="text-xs text-muted-foreground">Tu cuenta</span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href="#"
                      className="flex items-center font-medium"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedItem(item.title);
                      }}
                    >
                      {item.icon && <item.icon className="mr-3 h-4 w-4" />}
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a 
                              href="#" 
                              className="pl-10"
                              onClick={(e) => {
                                e.preventDefault();
                                setSelectedItem(subItem.title);
                              }}
                            >
                              {subItem.title}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mx-2 h-6" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>{selectedItem}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex-1 overflow-auto p-6">
          {renderContent()}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
