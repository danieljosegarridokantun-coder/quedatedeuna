"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LandingView } from "@/components/views/landing-view"
import { SpecificModulesView } from "@/components/views/specific-modules-view"
import { TransversalView } from "@/components/views/transversal-view"
import { CheckoutModal } from "@/components/checkout-modal"
import { DashboardView } from "@/components/views/dashboard-view" // Importamos el Dashboard

export default function Page() {
  const [view, setView] = useState("landing")
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [checkoutLabel, setCheckoutLabel] = useState("Plan Premium")

  function openCheckout(label: string) {
    setCheckoutLabel(label)
    setCheckoutOpen(true)
  }

  function handleEnter() {
    setCheckoutOpen(false)
    setView("dashboard")
  }

  // ¡Activamos la vista de Dashboard!
  if (view === "dashboard") {
    return <DashboardView onExit={() => setView("landing")} />
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader
        onNavigate={setView}
        onLogin={() => setView("dashboard")} // El botón "Entrar" ahora también lleva al dashboard
      />

      <main className="flex-1">
        {view === "landing" && (
          <LandingView onNavigate={setView} onCheckout={openCheckout} />
        )}
        {view === "specificos" && (
          <SpecificModulesView onCheckout={openCheckout} />
        )}
        {view === "transversales" && (
          <TransversalView onCheckout={openCheckout} />
        )}
      </main>

      <SiteFooter onNavigate={setView} />
      
      <CheckoutModal
        open={checkoutOpen}
        planLabel={checkoutLabel}
        onClose={() => setCheckoutOpen(false)}
        onEnter={handleEnter}
      />
    </div>
  )
}
