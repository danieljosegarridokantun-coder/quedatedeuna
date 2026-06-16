// src/components/views/landing-view.tsx
import React from 'react';

// Definimos los tipos para las props del componente
interface LandingViewProps {
  onNavigate: (view: 'specificos' | 'transversales') => void;
  onCheckout: (planId: string) => void; // Aunque no se use aquí, es bueno tenerlo tipado
}

export const LandingView: React.FC<LandingViewProps> = ({ onNavigate, onCheckout }) => (
  <div className="text-center py-20">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
      Quédate de Una
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      Tu plataforma #1 para la preparación de exámenes de admisión a ingeniería y medicina. Domina los temas clave y asegura tu lugar.
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <button onClick={() => onNavigate('specificos')} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
        Ver Módulos Específicos
      </button>
      <button onClick={() => onNavigate('transversales')} className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg">
        Ver Planes Transversales
      </button>
    </div>
  </div>
);
