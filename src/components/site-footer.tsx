import React from 'react';

interface SiteFooterProps {
  onNavigate: (view: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => (
  <footer className="bg-background text-foreground py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-xl font-bold">Quédate de Una</h3>
        <p className="text-muted-foreground">© 2024 - Todos los derechos reservados</p>
      </div>
      <div className="flex gap-6">
        <button onClick={() => onNavigate('specificos')} className="text-muted-foreground hover:text-foreground transition-colors">
          Módulos Específicos
        </button>
        <button onClick={() => onNavigate('transversales')} className="text-muted-foreground hover:text-foreground transition-colors">
          Planes Transversales
        </button>
        <button onClick={() => onNavigate('terminos')} className="text-muted-foreground hover:text-foreground transition-colors">
          Términos y Condiciones
        </button>
      </div>
    </div>
  </footer>
);
