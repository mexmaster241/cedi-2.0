import { Metadata } from 'next'
import { IconCheck, IconCreditCard, IconBuildingSkyscraper } from '@tabler/icons-react'
import Link from 'next/link'
import { FeaturesPrecios } from '@/components/precios/features-precios'

export const metadata: Metadata = {
  title: 'Precios | CEDI',
  description: 'Conoce nuestros planes y precios para encontrar la solución perfecta para tu empresa.',
}

export default function PreciosPage() {
  return (
    <div className="bg-cedi-beige">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-clash-display tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl text-center mb-16">
        Planes y Precios
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* POS Pricing Card */}
        <div className="rounded-2xl border border-gray-200 bg-white dark:bg-black dark:border-gray-800 p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cedi-black dark:bg-blue-900/30 p-3 rounded-lg">
              <IconCreditCard className="w-6 h-6 text-cedi-white" />
            </div>
            <h2 className="text-2xl font-clash-display">Punto de Venta</h2>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-clash-display">3.6%</span>
              <span className="text-gray-600 font-clash-display dark:text-gray-400">+ $5 MXN</span>
            </div>
            <p className="text-gray-600 font-clash-display dark:text-gray-400 mt-2">
              por transacción
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-600 font-clash-display dark:text-gray-300">
              <IconCheck className="w-5 h-5 text-green-500" />
              Terminal virtual incluida
            </li>
            <li className="flex items-center gap-3 text-gray-600 font-clash-display dark:text-gray-300">
              <IconCheck className="w-5 h-5 text-green-500" />
              Acepta todas las tarjetas
            </li>
            <li className="flex items-center gap-3 text-gray-600 font-clash-display dark:text-gray-300">
              <IconCheck className="w-5 h-5 text-green-500" />
              Pagos con código QR
            </li>
            <li className="flex items-center gap-3 text-gray-600 font-clash-display dark:text-gray-300">
              <IconCheck className="w-5 h-5 text-green-500" />
              Soporte 24/7
            </li>
          </ul>

          <Link 
            href="/sign-up"
            className="block w-full text-center bg-cedi-black hover:bg-cedi-black/80 text-cedi-white rounded-lg px-6 py-3 font-clash-display transition-colors"
          >
            Comenzar ahora
          </Link>
        </div>

        {/* Enterprise Card */}
        <div className="rounded-2xl border border-gray-200 bg-cedi-black p-8 shadow-lg hover:shadow-xl transition-shadow text-white">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-cedi-white p-3 rounded-lg backdrop-blur-sm">
              <IconBuildingSkyscraper className="w-6 h-6 text-cedi-black" />
            </div>
            <h2 className="text-2xl font-clash-display">Enterprise</h2>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-clash-display">Personalizado</span>
            </div>
            <p className="text-gray-300 font-clash-display mt-2">
              para grandes volúmenes
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-300 font-clash-display">
              <IconCheck className="w-5 h-5 text-green-400" />
              Tarifas personalizadas
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-clash-display">
              <IconCheck className="w-5 h-5 text-green-400" />
              API dedicada
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-clash-display">
              <IconCheck className="w-5 h-5 text-green-400" />
              Gerente de cuenta dedicado
            </li>
            <li className="flex items-center gap-3 text-gray-300 font-clash-display">
              <IconCheck className="w-5 h-5 text-green-400" />
              SLA personalizado
            </li>
          </ul>

          <Link 
            href="/contacto"
            className="block w-full text-center bg-white text-cedi-black hover:bg-cedi-beige rounded-lg px-6 py-3 font-clash-display transition-colors"
          >
            Contactar ventas
          </Link>
        </div>
        <FeaturesPrecios />
      </div>
      </div>
    </div>
  )
}