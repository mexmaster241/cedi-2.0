import Image from 'next/image'
import { LoginForm } from '@/components/auth/login-form'
import { DashboardPreview } from '@/components/auth/dashboard-preview'

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-1/2 bg-cedi-white p-10 flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="mb-8">
            <Image 
              src="/logotipo.png" 
              alt="cedi logo" 
              width={150} 
              height={50} 
            />
            <h1 className="text-3xl font-clash-display font-bold mt-6 mb-2">
              Bienvenido de vuelta
            </h1>
            <p className="text-gray-600 font-clash-display">
              Ingresa tus credenciales para acceder a tu cuenta
            </p>
          </div>
          <LoginForm />
        </div>
      </div>

      {/* Right side - Dashboard Preview */}
      <div className="w-1/2 bg-cedi-beige relative hidden md:block overflow-hidden">
        <DashboardPreview />
      </div>
    </div>
  )
}