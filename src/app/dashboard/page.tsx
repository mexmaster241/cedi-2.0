"use client"

import { BalanceCard } from "@/components/dashboard/BalanceCard"
import { TransferenciasLimite } from "@/components/dashboard/TransferenciasLimite"
import { MPOSLimit } from "@/components/dashboard/MPOSLimit"
import { EcommerceLimits } from "@/components/dashboard/EcommerceLimits"
import { QuickActions } from "@/components/dashboard/QuickActions"
import { RecentTransactions } from "@/components/dashboard/RecentTransactions"
import RevenueChart from "@/components/dashboard/RevenueChart"

export default function DashboardPage() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:max-w-2xl">
          <BalanceCard 
            balance={5240.50} 
            className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg" 
          />
          <TransferenciasLimite 
            transferenciasRecibidas={1500000} 
            className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
          />
          <MPOSLimit 
            currentAmount={1000000} 
            className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
          />
          <EcommerceLimits 
            currentAmount={1000000} 
            className="transform transition-all duration-200 hover:scale-105 hover:shadow-lg"
          />
        </div>
        <div className="flex-1 h-[400px] lg:h-[500px]">
          <RevenueChart className="w-full h-full" />
        </div>
      </div>
      <QuickActions />
      <RecentTransactions transactions={[
        { 
          producto: 'MPOS',
          tipo: 'Venta',
          estatus: 'Completado',
          monto: 85.20,
          date: '2024-03-20'
        },
        { 
          producto: 'Transferencias',
          tipo: 'Pago',
          estatus: 'Procesando',
          monto: -120.00,
          date: '2024-03-19'
        },
        { 
          producto: 'E-commerce',
          tipo: 'Venta Online',
          estatus: 'Completado',
          monto: 65.99,
          date: '2024-03-18'
        },
      ]} />
    </div>
  )
}
