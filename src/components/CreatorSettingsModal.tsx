import React, { useState } from 'react';
import {
  X,
  Settings,
  CreditCard,
  KeyRound,
  CheckCircle2,
  Save,
  Sparkles,
  Github,
  Lock,
  AlertCircle
} from 'lucide-react';
import { TierLevel } from '../types';
import {
  getStripePaymentLinks,
  saveStripePaymentLinks,
  getCustomCodes,
  saveCustomCodes
} from '../data/accessCodes';

interface CreatorSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTier: TierLevel | 0;
  onQuickSetTier: (tier: TierLevel | 0) => void;
}

export const CreatorSettingsModal: React.FC<CreatorSettingsModalProps> = ({
  isOpen,
  onClose,
  currentTier,
  onQuickSetTier,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('creator_authenticated') === 'true';
  });
  const [inputCode, setInputCode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState<'stripe' | 'codes' | 'github'>('stripe');
  const [stripeLinks, setStripeLinks] = useState(getStripePaymentLinks());
  const [customCodes, setCustomCodesState] = useState(getCustomCodes());
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleAuthenticate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = inputCode.trim();
    if (cleanCode.toLowerCase() === 'sotoca') {
      setIsAuthenticated(true);
      sessionStorage.setItem('creator_authenticated', 'true');
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const handleSaveStripe = (e: React.FormEvent) => {
    e.preventDefault();
    saveStripePaymentLinks(stripeLinks);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleRestoreDefaultStripe = () => {
    const defaults = {
      1: 'https://buy.stripe.com/bJebJ152Lga7gOM7Wu1B604',
      2: 'https://buy.stripe.com/8x2eVd1QzaPN1TS2Ca1B605',
      3: 'https://buy.stripe.com/14A3cv8eXbTRbusdgO1B606'
    };
    setStripeLinks(defaults);
    saveStripePaymentLinks(defaults);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleSaveCodes = (e: React.FormEvent) => {
    e.preventDefault();
    saveCustomCodes(customCodes);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl border border-stone-200 space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <Lock className="w-6 h-6" />
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-1">
            <h3 className="font-bold text-stone-900 text-lg">
              Accès réservé au créateur
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Veuillez saisir votre code d'accès administrateur pour modifier les liens Stripe de vente et les codes d'accès de formation.
            </p>
          </div>

          <form onSubmit={handleAuthenticate} className="space-y-3">
            <div>
              <input
                type="password"
                placeholder="Mot de passe créateur"
                value={inputCode}
                onChange={(e) => {
                  setInputCode(e.target.value);
                  if (authError) setAuthError(false);
                }}
                className={`w-full text-sm bg-stone-50 border rounded-xl p-3 text-stone-800 focus:outline-hidden focus:ring-2 focus:ring-blue-500/20 transition-all ${
                  authError ? 'border-red-300 bg-red-50/30 focus:border-red-500' : 'border-stone-200 focus:border-blue-500'
                }`}
                autoFocus
              />
              {authError && (
                <p className="text-[11px] text-red-600 font-medium mt-1.5 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>Code d'accès incorrect.</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs transition-colors shadow-sm cursor-pointer"
            >
              Déverrouiller le panneau
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-stone-200 space-y-5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-700">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                Panneau Créateur / Administration
              </h3>
              <p className="text-xs text-stone-500">
                Gestion des liens Stripe de paiement, codes d'accès et simulation de tests
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tier Tester (Instant evaluation for the creator) */}
        <div className="p-3.5 rounded-2xl bg-blue-50/50 border border-blue-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wide flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Simulateur d'accès instantané (Tests d'évaluation) :</span>
            </span>
            <span className="text-[11px] font-mono font-bold text-blue-700">
              Niveau actuel de l'utilisateur : {currentTier}
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => onQuickSetTier(1)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                currentTier === 1
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-blue-100'
              }`}
            >
              Niveau 1
            </button>
            <button
              onClick={() => onQuickSetTier(2)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                currentTier === 2
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-blue-100'
              }`}
            >
              Niveaux 1+2
            </button>
            <button
              onClick={() => onQuickSetTier(3)}
              className={`px-2 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                currentTier === 3
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white border-stone-200 text-stone-700 hover:bg-blue-100'
              }`}
            >
              Niveaux 1+2+3
            </button>
            <button
              onClick={() => onQuickSetTier(0)}
              className="px-2 py-1.5 rounded-lg text-xs font-semibold border border-stone-300 bg-white text-stone-500 hover:text-stone-800 cursor-pointer"
            >
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-stone-200 space-x-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('stripe')}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'stripe'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Liens Stripe (3 Offres)</span>
          </button>
          <button
            onClick={() => setActiveTab('codes')}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'codes'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Codes d'accès</span>
          </button>
          <button
            onClick={() => setActiveTab('github')}
            className={`pb-2 px-1 border-b-2 transition-colors flex items-center space-x-1.5 cursor-pointer ${
              activeTab === 'github'
                ? 'border-blue-600 text-blue-700'
                : 'border-transparent text-stone-400 hover:text-stone-700'
            }`}
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub Pages</span>
          </button>
        </div>

        {/* Tab 1: Stripe Configuration */}
        {activeTab === 'stripe' && (
          <form onSubmit={handleSaveStripe} className="space-y-4">
            <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl">
              Collez ici vos liens de paiement Stripe générés sur votre tableau de bord Stripe (menu <em>Paiements &gt; Liens de paiement</em>).
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Lien Stripe Niveau 1 : Fondations (19 €)
                </label>
                <input
                  type="url"
                  value={stripeLinks[1]}
                  onChange={(e) => setStripeLinks({ ...stripeLinks, 1: e.target.value })}
                  placeholder="https://buy.stripe.com/..."
                  className="w-full text-xs font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Lien Stripe Niveau 2 : Stratégies & Lazy Portefeuilles (49 €)
                </label>
                <input
                  type="url"
                  value={stripeLinks[2]}
                  onChange={(e) => setStripeLinks({ ...stripeLinks, 2: e.target.value })}
                  placeholder="https://buy.stripe.com/..."
                  className="w-full text-xs font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Lien Stripe Niveau 3 : Optimisation & Sélection ETF (99 €)
                </label>
                <input
                  type="url"
                  value={stripeLinks[3]}
                  onChange={(e) => setStripeLinks({ ...stripeLinks, 3: e.target.value })}
                  placeholder="https://buy.stripe.com/..."
                  className="w-full text-xs font-mono bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-stone-500">
                Sauvegardé localement dans votre navigateur
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleRestoreDefaultStripe}
                  className="px-3 py-2 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  Réinitialiser aux valeurs de démo
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Enregistrer</span>
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Tab 2: Access Codes */}
        {activeTab === 'codes' && (
          <form onSubmit={handleSaveCodes} className="space-y-4">
            <div className="text-xs text-stone-600 bg-stone-50 p-3 rounded-xl">
              Définissez les codes que vos clients utiliseront. Séparez les codes alternatifs par des virgules.
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Codes Niveau 1 (Séparés par des virgules) :
                </label>
                <input
                  type="text"
                  value={customCodes[1].join(', ')}
                  onChange={(e) =>
                    setCustomCodesState({
                      ...customCodes,
                      1: e.target.value.split(',').map((s) => s.trim())
                    })
                  }
                  className="w-full text-xs font-mono uppercase bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Codes Niveau 2 :
                </label>
                <input
                  type="text"
                  value={customCodes[2].join(', ')}
                  onChange={(e) =>
                    setCustomCodesState({
                      ...customCodes,
                      2: e.target.value.split(',').map((s) => s.trim())
                    })
                  }
                  className="w-full text-xs font-mono uppercase bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-700 block mb-1">
                  Codes Niveau 3 :
                </label>
                <input
                  type="text"
                  value={customCodes[3].join(', ')}
                  onChange={(e) =>
                    setCustomCodesState({
                      ...customCodes,
                      3: e.target.value.split(',').map((s) => s.trim())
                    })
                  }
                  className="w-full text-xs font-mono uppercase bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-stone-800"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-stone-500">
                Par défaut : COURTIER-P1, DCA-PEA, LAZYWORLD
              </span>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-colors cursor-pointer"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Enregistrer les codes</span>
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: GitHub Pages Deployment */}
        {activeTab === 'github' && (
          <div className="space-y-3 text-xs text-stone-700">
            <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <h4 className="font-bold text-stone-900 flex items-center space-x-1.5">
                <Github className="w-4 h-4 text-stone-800" />
                <span>Déploiement statique gratuit</span>
              </h4>
              <p className="leading-relaxed">
                Ce projet est conçu comme un site statique hébergeable à 100% gratuitement sur GitHub Pages. Les configurations d'intégration continue de déploiement automatique via GitHub Actions sont prêtes.
              </p>
            </div>

            <ol className="list-decimal list-inside space-y-2 pl-1 leading-relaxed">
              <li>Poussez votre dépôt sur GitHub.</li>
              <li>Allez dans <strong>Settings &gt; Pages</strong> de votre dépôt.</li>
              <li>Sélectionnez <strong>GitHub Actions</strong> comme source de build.</li>
              <li>Votre site de formation boursière sera en ligne gratuitement !</li>
            </ol>
          </div>
        )}

        {savedSuccess && (
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Modifications enregistrées avec succès !</span>
          </div>
        )}
      </div>
    </div>
  );
};
