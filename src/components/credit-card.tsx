"use client"

import { useState } from "react"
import { Copy, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"


export function CreditCard() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const cardData = {
    number: "4539 1488 0343 6467",
    name: "JOHN DOE",
    expiry: "12/25",
    cvv: "123"
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-gradient-to-bl from-gray-500 via-gray to-black rounded-xl shadow-2xl p-8 text-white relative overflow-hidden h-56 flex flex-col justify-between">
        {/* Chip and Logo Section */}
        <div className="flex justify-between items-start">
          <div className="w-12 h-10 bg-yellow-500/80 rounded-md" /> {/* Chip */}
          <img 
            src="/logo-cedi-white.PNG" 
            alt="Cedi Logo" 
            className="w-16 h-16 object-contain opacity-80" 
          />
        </div>

        {/* Card Number */}
        <div className="mt-4">
          <p className="font-clash-display text-xl tracking-widest">
            {cardData.number.match(/.{1,4}/g)?.join(' ')}
          </p>
        </div>

        {/* Card Holder Info */}
        <div className="flex justify-between items-end mt-4">
          <div className="space-y-1">
            <p className="text-xs text-gray-300 uppercase">Card Holder</p>
            <p className="font-clash-display">{cardData.name}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-gray-300 uppercase">Expires</p>
            <p className="font-clash-display">{cardData.expiry}</p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-white/5 background-pattern opacity-20" />
        <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
