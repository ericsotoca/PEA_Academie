import React from 'react';
import { Landmark, KeyRound, Settings, CheckCircle2 } from 'lucide-react';
import { TierLevel } from '../types';

interface NavbarProps {
  currentTier: TierLevel | 0;
  onOpenAccessModal: () => void;
  onOpenSettingsModal: () => void;
  onNavigateHome: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTier,
  onOpenAccessModal,
  onOpenSettingsModal,
  onNavigateHome,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <button
          id="nav-brand-button"
          onClick={onNavigateHome}
          className="flex items-center space-x-2.5 text-left group focus:outline-hidden cursor-pointer"
          title="Retour à l'accueil"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Landmark className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-bold text-stone-900 tracking-tight text-base sm:text-lg">
                PEA Académie
              </span>
              <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700 tracking-wider">
                FR
              </span>
            </div>
            <p className="text-[11px] text-stone-500 leading-none">
              L'investissement boursier par les ETF
            </p>
          </div>
        </button>

        {/* Right action controls */}
        <div className="flex items-center space-x-2">
          {/* Access Code Button / Tier Badge */}
          {currentTier > 0 ? (
            <button
              id="nav-unlocked-tier-button"
              onClick={onOpenAccessModal}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{`Niveau ${currentTier} Actif`}</span>
            </button>
          ) : (
            <button
              id="nav-enter-code-button"
              onClick={onOpenAccessModal}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 text-white shadow-xs hover:bg-blue-700 transition-colors active:scale-95 cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5" />
              <span>Entrer un code</span>
            </button>
          )}

          {/* Creator settings button (gear) */}
          <button
            id="nav-creator-settings-button"
            onClick={onOpenSettingsModal}
            className="p-2 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-100 transition-colors cursor-pointer"
            title="Administration & Stripe"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
