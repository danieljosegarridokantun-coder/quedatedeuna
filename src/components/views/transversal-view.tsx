// src/components/views/transversal-view.tsx
import React from 'react';
import { transversalPlans } from '@/lib/academy-data';

// Tipos para los datos de un plan
interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: readonly string[]; // Hacemos que las características sean de solo lectura
}

// Componente para el ícono de Check
const CheckIcon = () => (
  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Tipos para las props de PlanCard
interface PlanCardProps {
  plan: Plan;
  onCheckout: (planName: string) => void;
}

// Componente de Tarjeta para Plan Transversal
const PlanCard: React.FC<PlanCardProps> = ({ plan, onCheckout }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col h-full">
    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
    <p className="text-gray-400 mt-2 h-12">{plan.description}</p>
    <div className="mt-4">
      <span className="text-4xl font-extrabold text-white">${plan.price}</span>
      <span className="text-gray-400 ml-1">{plan.period}</span>
    </div>
    <ul className="mt-6 space-y-4">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <CheckIcon />
          <span className="ml-3 text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <div className="mt-auto pt-6">
      <button onClick={() => onCheckout(plan.name)} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105">
        Seleccionar Plan
      </button>
    </div>
  </div>
);

// Tipos para las props de TransversalView
interface TransversalViewProps {
  onCheckout: (planName: string) => void;
}

export const TransversalView: React.FC<TransversalViewProps> = ({ onCheckout }) => (
  <div className="container mx-auto px-4 py-12">
    <h2 className="text-4xl font-bold text-center mb-10">Planes de Suscripción</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {transversalPlans.map(plan => (
        <PlanCard key={plan.id} plan={plan as any} onCheckout={onCheckout} />
      ))}
    </div>
</div>
);
