import React from 'react';

interface SiteHeaderProps {
  onNavigate: (view: string) => void;
  onLogin: () => void;
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({ onNavigate, onLogin }) => (
  <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-border">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">
      <button onClick={() => onNavigate('landing')} className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
        <span className="font-bold text-lg">Quédate de Una</span>
      </button>
      <div className="flex items-center gap-4">
        <button onClick={() => onNavigate('specificos')} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Módulos Específicos
        </button>
        <button onClick={() => onNavigate('transversales')} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Planes Transversales
        </button>
        <button 
          onClick={onLogin}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          Login
        </button>
      </div>
    </div>
  </header>
);
