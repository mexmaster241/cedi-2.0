import Image from "next/image";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { BankingSidebar } from "@/components/components-banking-sidebar";

const MOCK_TRANSACTIONS = [
  { title: 'Grocery Store', amount: -82.35, date: '2024-03-20' },
  { title: 'Salary Deposit', amount: 3500.00, date: '2024-03-19' },
  { title: 'Restaurant', amount: -45.80, date: '2024-03-18' },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <BankingSidebar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
      </main>
    </div>
  );
}
