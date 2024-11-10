import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-cedi-dark-gray text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logotipo-white.png"
              alt="Cedi"
              width={120}
              height={40}
              className="mb-4"
            />
            <p className="text-gray-400 font-clash-display mt-4 max-w-sm">
              Centraliza tu dinero en un solo lugar y ten un mejor control de las finanzas de tu empresa.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-clash-display text-lg mb-4">Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-clash-display">
                  Transferencias
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-clash-display">
                  MiPOS
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-clash-display">
                  E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-clash-display text-lg mb-4">Compañía</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-clash-display">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-clash-display">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white font-clash-display">
                  Soporte
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-clash-display text-sm">
              © 2024 Cedi. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white font-clash-display text-sm">
                Términos y condiciones
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white font-clash-display text-sm">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}