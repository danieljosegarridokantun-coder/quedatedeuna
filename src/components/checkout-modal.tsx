import React from 'react';

interface CheckoutModalProps {
  open: boolean;
  planLabel: string;
  onClose: () => void;
  onEnter: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ open, planLabel, onClose, onEnter }) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-6 bg-card border rounded-lg shadow-xl animate-in fade-in-0 zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground">Checkout</h2>
          <p className="mt-2 text-muted-foreground">
            Estás a punto de adquirir el <span className="font-semibold text-primary">{planLabel}</span>.
          </p>
        </div>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              defaultValue="usuario@quedatedeuna.com"
              className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Tarjeta de Crédito (simulación)
            </label>
            <div className="mt-1 flex items-center rounded-md border border-input bg-background px-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-muted-foreground"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
              <input
                type="text"
                placeholder="4242 4242 4242 4242"
                className="flex-1 bg-transparent py-2 text-foreground placeholder-muted-foreground/50 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-muted-foreground">
                Expiración
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/YY"
                className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="block text-sm font-medium text-muted-foreground">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                placeholder="123"
                className="mt-1 block w-full rounded-md border-input bg-background px-3 py-2 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </form>

        <div className="mt-8">
          <button
            onClick={onEnter}
            className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2"
          >
            Pagar y Entrar al Curso
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Esto es una simulación. No se realizará ningún cargo real.
        </p>
      </div>
    </div>
  );
};