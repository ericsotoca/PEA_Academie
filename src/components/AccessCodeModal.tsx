import React, { useState } from 'react';
import { X, KeyRound, CheckCircle2, AlertCircle, LogOut, ArrowRight } from 'lucide-react';
import { TierLevel } from '../types';
import { verifyAccessCode } from '../data/accessCodes';

interface AccessCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTier: TierLevel | 0;
  onUnlockTier: (tier: TierLevel, code: string) => void;
  onClearAccess: () => void;
}

export const AccessCodeModal: React.FC<AccessCodeModalProps> = ({
  isOpen,
  onClose,
  currentTier,
  onUnlockTier,
  onClearAccess,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const res = verifyAccessCode(inputCode);
    if (res.valid && res.tier > 0) {
      onUnlockTier(res.tier as TierLevel, inputCode.trim().toUpperCase());
      setSuccessMsg(`Félicitations ! Niveau ${res.tier} déverrouillé avec succès. Accès immédiat accordé.`);
      setTimeout(() => {
        onClose();
        setSuccessMsg(null);
        setInputCode('');
      }, 1500);
    } else {
      setErrorMsg(res.message || 'Code d\'accès incorrect. Veuillez vérifier le code saisi.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-stone-200 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-stone-900 text-base">
                Débloquer votre formation
              </h3>
              <p className="text-xs text-stone-500">
                Aucune création de compte : saisissez votre code d'accès
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

        {/* Current status if unlocked */}
        {currentTier > 0 && (
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2 text-emerald-900 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span>
                Statut : Niveau {currentTier} débloqué
              </span>
            </div>
            <button
              onClick={onClearAccess}
              className="text-stone-500 hover:text-rose-600 flex items-center space-x-1 font-semibold underline cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Déconnexion</span>
            </button>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-semibold text-stone-700 block mb-1">
              Code d'accès reçu par e-mail :
            </label>
            <input
              type="text"
              value={inputCode}
              onChange={(e) => setInputCode(e.target.value)}
              placeholder="COURTIER-P1, DCA-PEA ou LAZYWORLD"
              className="w-full uppercase font-mono tracking-wider text-center text-sm font-bold bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-stone-900 focus:bg-white focus:outline-blue-500 focus:border-blue-500 transition-colors"
              autoFocus
            />
          </div>

          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2 active:scale-98 cursor-pointer"
          >
            <span>Valider et ouvrir la formation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
