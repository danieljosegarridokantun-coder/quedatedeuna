"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

// Componente de la tarjeta de división estratégica
function StrategyCard({
  title,
  subtitle,
  onClick,
}: {
  title: string
  subtitle: string
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className="group relative flex cursor-pointer flex-col justify-between rounded-2xl border-2 border-border bg-card p-6 transition-all hover:border-primary/80 md:p-8"
    >
      <div>
        <h3 className="text-2xl font-bold tracking-tighter text-gold">{title}</h3>
        <p className="mt-2 text-lg text-muted-foreground">{subtitle}</p>
      </div>
      <div className="mt-8">
        <span className="text-lg font-semibold text-primary transition-colors group-hover:text-primary/80">
          Ver más →
        </span>
      </div>
    </div>
  )
}

// Vista principal del Landing Page
export function LandingView({
  onNavigate,
  onCheckout,
}: {
  onNavigate: (view: string) => void
  onCheckout: (plan: string) => void
}) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              El Blindaje Definitivo para tu EXANI-II
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Deja de estudiar a ciegas. Nuestra metodología de alto rendimiento te
              posiciona para competir por los puntajes más altos del examen de
              admisión.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                onClick={() => onCheckout("Premium")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Obtener Acceso Premium
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("specificos")}
              >
                Ver Módulos Específicos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de División Estratégica */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
              Elige tu Ruta de Preparación
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Optimiza tu estudio enfocándote en lo que más necesitas. Cada ruta
              está diseñada para maximizar tu puntaje.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <StrategyCard
              title="Módulos Específicos"
              subtitle="Domina los temas técnicos de tu carrera: Cálculo, Física, Premedicina y más."
              onClick={() => onNavigate("specificos")}
            />
            <StrategyCard
              title="Áreas Transversales"
              subtitle="Asegura el núcleo del examen: Pensamiento Matemático, Comprensión Lectora y Redacción."
              onClick={() => onNavigate("transversales")}
            />
          </div>
        </div>
      </section>
    </>
  )
}
