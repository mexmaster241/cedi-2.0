import Link from 'next/link'

export default function Hero() {
  return (
    <div className=" container mx-auto">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-clash-display tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Centraliza tu dinero  
            </h1>
            
            <p className="mt-6 text-xl font-clash-display text-gray-600 dark:text-gray-300">
              Con cedi puedes centralizar tu dinero en un solo lugar y tener un mejor control de las finanzas de tu empresa.
            </p>

            <div className="mt-10 flex gap-4">
              <Link 
                href="/dashboard" 
                className="rounded-md bg-cedi-black px-6 py-3 text-base font-clash-display text-white shadow-sm hover:bg-cedi-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
               Comienza
              </Link>
              
              <Link 
                href="/learn-more"
                className="rounded-md border border-cedi-black px-6 py-3 text-base font-clash-display text-cedi-black shadow-sm hover:bg-cedi-black/10 dark:hover:bg-gray-800"
              >
                Pónte en contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}