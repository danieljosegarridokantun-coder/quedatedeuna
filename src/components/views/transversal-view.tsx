'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { transversalPlans } from "@/lib/academy-data"
import { Check, X, Crown } from "lucide-react"

// Mapeo de características para la tabla comparativa
const allFeatures = [
  { id: 'guias', text: 'Guías en PDF y Videotutoriales' },
  { id: 'ejercicios', text: 'Ejercicios interactivos en línea' },
  { id: 'simuladores_interactivos', text: 'Simuladores interactivos en línea' },
  { id: 'simuladores_imprimir', text: 'Simuladores para imprimir + Video explicación' },
  { id: 'packs_pdf', text: 'Packs de ejercicios en PDF + Explicación' },
  { id: 'clases_vivo', text: 'Clases en Vivo (Sáb y Dom) + Grabaciones' },
  { id: 'boveda', text: 'Bóveda de Textos con análisis en video' },
  { id: 'ranking', text: 'Ranking Competitivo en Vivo' },
]

const planFeatures: Record<string, Record<string, string | boolean>> = {
  basico: {
    simuladores_interactivos: '4',
    simuladores_imprimir: '2',
    packs_pdf: false,
    clases_vivo: false,
    boveda: true,
    ranking: false,
  },
  medio: {
    simuladores_interactivos: '8',
    simuladores_imprimir: '4',
    packs_pdf: '1 pack',
    clases_vivo: false,
    boveda: true,
    ranking: false,
  },
  premium: {
    simuladores_interactivos: '15',
    simuladores_imprimir: '10',
    packs_pdf: '2 packs',
    clases_vivo: true,
    boveda: true,
    ranking: true,
  },
}

export function TransversalView({ onCheckout }: { onCheckout: (plan: string) => void }) {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Asegura las Áreas Transversales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            El núcleo del EXANI-II. Elige el nivel de blindaje que te llevará
            a la victoria.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {transversalPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`flex flex-col ${plan.id === 'medio' ? 'border-primary shadow-lg shadow-primary/20' : ''} ${plan.id === 'premium' ? 'border-gold bg-gradient-to-b from-card to-card/95' : ''}`}>
              <CardHeader className="text-center">
                {plan.id === 'premium' && (
                  <div className="mb-2 flex justify-center">
                    <Crown className="h-8 w-8 text-gold" />
                  </div>
                )}
                <CardTitle className={`text-2xl font-bold tracking-tighter ${plan.id === 'premium' ? 'text-gold' : 'text-white'}`}>
                  {plan.name}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/MXN</span>
                </div>
                <CardDescription className="mt-1">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {allFeatures.map((feature) => {
                    const planFeatureValue = planFeatures[plan.id]?.[feature.id]

                    let displayValue: React.ReactNode = null
                    if (planFeatureValue === true) {
                      displayValue = <Check className="h-5 w-5 text-primary" />
                    } else if (planFeatureValue === false) {
                      displayValue = <X className="h-5 w-5 text-muted-foreground" />
                    } else if (planFeatureValue) {
                      displayValue = <span className="font-semibold text-white">{planFeatureValue}</span>
                    } else {
                      displayValue = <Check className="h-5 w-5 text-primary" />
                    }

                    return (
                      <li key={feature.id} className="flex items-center justify-between">
                        <span className="text-muted-foreground">{feature.text}</span>
                        {displayValue}
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className={`w-full ${plan.id === 'premium' ? 'bg-gold text-gold-foreground hover:bg-gold/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'}`}
                  variant={plan.id === 'medio' ? 'default' : plan.id === 'premium' ? 'default' : 'outline'}
                  onClick={() => onCheckout(plan.name)}
                >
                  {plan.id === 'premium' ? 'Obtener Blindaje Premium' : 'Seleccionar Plan'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
