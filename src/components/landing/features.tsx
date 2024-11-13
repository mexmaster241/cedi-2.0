"use client";

import Image from "next/image";
import { animate, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { BsCreditCard2Front, BsBank2 } from "react-icons/bs";
import { SiVisa, SiMastercard } from "react-icons/si";
import { AnimatedList } from "@/components/ui/animated-list";
import { AnimatedBeam } from "@/components/ui/animated-beam";

const notifications = [
    {
      id: 1,
      type: "Transferencia recibida",
      amount: "MXN $2,500.00",
      name: "Juan Pérez",
      time: "Justo ahora"
    },
    {
      id: 2,
      type: "Cobro realizado",
      amount: "MXN $1,200.00",
      name: "María García",
      time: "Hace 2 minutos"
    },
    {
      id: 3,
      type: "Solicitud de cobro",
      amount: "MXN $3,750.00",
      name: "Carlos Rodríguez",
      time: "Hace 5 minutos"
    },
    {
      id: 4,
      type: "Transferencia recibida",
      amount: "MXN $850.00",
      name: "Ana López",
      time: "Hace 7 minutos"
    },
    {
      id: 5,
      type: "Cobro realizado",
      amount: "MXN $4,200.00",
      name: "Roberto Martínez",
      time: "Hace 10 minutos"
    },
    {
      id: 6,
      type: "Solicitud de cobro",
      amount: "MXN $1,800.00",
      name: "Laura Sánchez",
      time: "Hace 12 minutos"
    }
  ];
  

  const PaymentNotification = ({ type, amount, name, time }: { type: string, amount: string, name: string, time: string }) => {
    return (
      <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 shadow-sm">
        <div className="relative h-10 w-10 shrink-0">
          <Image
            src="/logo-cedi.PNG"
            alt="Logo"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-clash-display">{type}</p>
          <p className="text-xs font-clash-display text-muted-foreground">{amount} de {name}</p>
          <p className="text-xs font-clash-display text-muted-foreground/60">{time}</p>
        </div>
      </div>
    );
};

export default function Features() {
  return (
    <section className="container py-24">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-16">
        <h2 className="text-4xl font-clash-display leading-tight max-w-md">
          Todo lo que necesitas para tu negocio en un solo lugar
        </h2>
        
        <div className="flex flex-col items-start max-w-md gap-6">
          <p className="text-muted-foreground font-clash-display text-lg">
            Acepta pagos, realiza cobros y administra tus finanzas con nuestra plataforma integral diseñada para hacer crecer tu negocio.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-clash-display text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Comienza ahora
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex justify-start gap-8">
        {/* First card (notifications) */}
        <div className="w-[400px] h-[500px] rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6">
          <h3 className="font-clash-display text-lg mb-4">Recibe cobros de tu negocio</h3>
          <div className="h-[calc(100%-2rem)] overflow-hidden">
            <AnimatedList className="w-full" delay={2000}>
              {notifications.map((notification) => (
                <PaymentNotification
                  key={notification.id}
                  {...notification}
                />
              ))}
            </AnimatedList>
          </div>
        </div>

        {/* Second card (POS Terminal) - Updated styling */}
        <div className="w-[400px] h-[500px] rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6">
          <h3 className="font-clash-display text-lg mb-4">Acepta pagos presenciales</h3>
          <div className="h-[calc(100%-2rem)]">
            <CardSkeletonContainer className="bg-transparent">
              <Skeleton />
            </CardSkeletonContainer>
           
          </div>
        </div>

        {/* Third card (Bank Transfers) */}
        <div className="w-[400px] h-[500px] rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6"> 
          <h3 className="font-clash-display text-lg mb-4">Dispersa pagos a tus empleados</h3>
            <div className="relative h-[calc(100%-4rem)] w-full">
              <BankTransferAnimation />
            </div>
        </div>
      </div>
    </section>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [".circle-1", { scale, transform }, { duration: 0.8 }],
    [".circle-2", { scale, transform }, { duration: 0.8 }],
    [".circle-3", { scale, transform }, { duration: 0.8 }],
  ];

  useEffect(() => {
    animate(sequence, {
      duration: 0.8,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1,
    } as any);
  }, []);

  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-8 w-8 circle-1">
          <SiVisa className="h-4 w-4 text-[#1434CB]" />
        </Container>
        <Container className="h-16 w-16 circle-2">
          <BsCreditCard2Front className="h-8 w-8 text-muted-foreground" />
        </Container>
        <Container className="h-8 w-8 circle-3">
          <SiMastercard className="h-4 w-4 text-[#EB001B]" />
        </Container>
      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `rounded-full flex items-center justify-center bg-card/50
        shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
        `,
        className
      )}
    >
      {children}
    </div>
  );
};

const BankTransferAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bankRef = useRef<HTMLDivElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-full flex items-center justify-center">
      {/* Left Card */}
      <div 
        ref={leftCardRef}
        className="absolute left-8 top-1/2 -translate-y-1/2"
      >
        <Container className="h-12 w-12">
          <BsCreditCard2Front className="h-6 w-6 text-muted-foreground" />
        </Container>
      </div>

      {/* Center Bank Icon */}
      <div ref={bankRef}>
        <Container className="h-20 w-20">
          <BsBank2 className="h-10 w-10 text-muted-foreground" />
        </Container>
      </div>

      {/* Right Card */}
      <div 
        ref={rightCardRef}
        className="absolute right-8 top-1/2 -translate-y-1/2"
      >
        <Container className="h-12 w-12">
          <BsCreditCard2Front className="h-6 w-6 text-muted-foreground" />
        </Container>
      </div>

      {/* Animated Beams */}
      {containerRef.current && bankRef.current && leftCardRef.current && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={leftCardRef}
          toRef={bankRef}
          gradientStartColor="#22c55e"
          gradientStopColor="#4ade80"
          pathColor="#22c55e"
          pathWidth={2}
          delay={0}
        />
      )}
      {containerRef.current && bankRef.current && rightCardRef.current && (
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={bankRef}
          toRef={rightCardRef}
          gradientStartColor="#22c55e"
          gradientStopColor="#4ade80"
          pathColor="#22c55e"
          pathWidth={2}
          delay={2}
          reverse
        />
      )}
    </div>
  );
};