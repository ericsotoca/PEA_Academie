import React, { useState, useEffect } from 'react';
import {
  TierLevel,
  OfferPlan,
  UserAccessState
} from './types';
import {
  getUserAccessState,
  saveUserAccessState,
  getCompletedChapters,
  saveCompletedChapters,
  getCompletedChecklists,
  saveCompletedChecklists,
  getStripePaymentLinks
} from './data/accessCodes';
import { module1Data } from './data/module1';
import { module2Data } from './data/module2';
import { module3Data } from './data/module3';
import { Navbar } from './components/Navbar';
import { HomeView } from './components/HomeView';
import { ModuleView } from './components/ModuleView';
import { AccessCodeModal } from './components/AccessCodeModal';
import { StripeCheckoutModal } from './components/StripeCheckoutModal';
import { CreatorSettingsModal } from './components/CreatorSettingsModal';
import { BookOpen, Home, KeyRound, Sparkles, ShieldCheck, Landmark } from 'lucide-react';

export default function App() {
  const [accessState, setAccessState] = useState<UserAccessState>(getUserAccessState);
  const [completedChapters, setCompletedChapters] = useState<string[]>(getCompletedChapters);
  const [completedChecklists, setCompletedChecklists] = useState<string[]>(getCompletedChecklists);

  // View routing: 'home' | 'module-1' | 'module-2' | 'module-3'
  const [currentView, setCurrentView] = useState<string>('home');

  // Modals state
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);
  const [isCreatorModalOpen, setIsCreatorModalOpen] = useState(false);
  const [selectedOfferForCheckout, setSelectedOfferForCheckout] = useState<OfferPlan | null>(null);

  // Save states to localStorage on change
  useEffect(() => {
    saveUserAccessState(accessState);
  }, [accessState]);

  useEffect(() => {
    saveCompletedChapters(completedChapters);
  }, [completedChapters]);

  useEffect(() => {
    saveCompletedChecklists(completedChecklists);
  }, [completedChecklists]);

  // Handlers
  const handleUnlockTier = (tier: TierLevel, code: string) => {
    setAccessState({
      currentTier: tier,
      enteredCode: code,
      unlockedAt: new Date().toISOString()
    });
  };

  const handleClearAccess = () => {
    setAccessState({
      currentTier: 0,
      enteredCode: null,
      unlockedAt: null
    });
  };

  const handleQuickSetTier = (tier: TierLevel | 0) => {
    setAccessState({
      currentTier: tier,
      enteredCode: tier > 0 ? `DEMO-TIER-${tier}` : null,
      unlockedAt: tier > 0 ? new Date().toISOString() : null
    });
  };

  const handleToggleChapterComplete = (chapterId: string) => {
    setCompletedChapters((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const handleToggleChecklistItem = (itemId: string) => {
    setCompletedChecklists((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSelectOffer = (offer: OfferPlan) => {
    setSelectedOfferForCheckout(offer);
  };

  const handlePaymentSuccess = (tier: TierLevel, code: string) => {
    handleUnlockTier(tier, code);
    setCurrentView(`module-${tier}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get active module data if viewing a module
  const getActiveModule = () => {
    if (currentView === 'module-1') return module1Data;
    if (currentView === 'module-2') return module2Data;
    if (currentView === 'module-3') return module3Data;
    return null;
  };

  const activeModule = getActiveModule();
  const stripeLinks = getStripePaymentLinks();

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Navigation */}
      <Navbar
        currentTier={accessState.currentTier}
        onOpenAccessModal={() => setIsAccessModalOpen(true)}
        onOpenSettingsModal={() => setIsCreatorModalOpen(true)}
        onNavigateHome={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-24 sm:pb-16">
        {currentView === 'home' || !activeModule ? (
          <HomeView
            currentTier={accessState.currentTier}
            onSelectOffer={handleSelectOffer}
            onOpenAccessModal={() => setIsAccessModalOpen(true)}
            onSelectModule={(moduleId) => {
              setCurrentView(moduleId);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        ) : (
          <ModuleView
            module={activeModule}
            currentTier={accessState.currentTier}
            completedChapters={completedChapters}
            completedChecklists={completedChecklists}
            onToggleChapterComplete={handleToggleChapterComplete}
            onToggleChecklistItem={handleToggleChecklistItem}
            onBackToHome={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenAccessModal={() => setIsAccessModalOpen(true)}
          />
        )}
      </main>

      {/* Mobile Floating Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-stone-200 px-4 py-2 flex items-center justify-around sm:hidden z-40 shadow-lg">
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors cursor-pointer ${
            currentView === 'home' ? 'text-blue-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Accueil</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('module-1');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors cursor-pointer ${
            currentView === 'module-1' ? 'text-blue-600 font-bold' : 'text-stone-500'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Niveau 1</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('module-2');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors cursor-pointer ${
            currentView === 'module-2' ? 'text-blue-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Sparkles className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Niveau 2</span>
        </button>

        <button
          onClick={() => {
            setCurrentView('module-3');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center p-1.5 transition-colors cursor-pointer ${
            currentView === 'module-3' ? 'text-blue-600 font-bold' : 'text-stone-500'
          }`}
        >
          <Landmark className="w-5 h-5" />
          <span className="text-[10px] mt-0.5">Niveau 3</span>
        </button>

        <button
          onClick={() => setIsAccessModalOpen(true)}
          className="flex flex-col items-center p-1.5 text-stone-500 hover:text-stone-800 cursor-pointer"
        >
          <KeyRound className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] mt-0.5">Codes</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-white py-8 px-4 text-center text-xs text-stone-500 space-y-2">
        <div className="flex items-center justify-center space-x-1 font-semibold text-stone-700">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Plateforme d'investissement éthique et indépendante</span>
        </div>
        <p className="max-w-md mx-auto leading-relaxed">
          Prendre en main son avenir financier sereinement en évitant la spéculation et les frais abusifs des banques traditionnelles.
        </p>
        <div className="pt-2 text-[11px] text-stone-400 font-medium">
          © {new Date().getFullYear()} PEA Académie • Hébergement statique compatible GitHub Pages & Stripe
        </div>
      </footer>

      {/* Modals */}
      <AccessCodeModal
        isOpen={isAccessModalOpen}
        onClose={() => setIsAccessModalOpen(false)}
        currentTier={accessState.currentTier}
        onUnlockTier={handleUnlockTier}
        onClearAccess={handleClearAccess}
      />

      <StripeCheckoutModal
        isOpen={!!selectedOfferForCheckout}
        onClose={() => setSelectedOfferForCheckout(null)}
        offer={selectedOfferForCheckout}
        stripeUrl={selectedOfferForCheckout ? stripeLinks[selectedOfferForCheckout.tier] : ''}
        onPaymentSuccess={handlePaymentSuccess}
      />

      <CreatorSettingsModal
        isOpen={isCreatorModalOpen}
        onClose={() => setIsCreatorModalOpen(false)}
        currentTier={accessState.currentTier}
        onQuickSetTier={handleQuickSetTier}
      />
    </div>
  );
}
