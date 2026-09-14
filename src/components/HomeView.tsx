import React from 'react';
import {
  Landmark,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  KeyRound,
  TrendingUp,
  Coins,
  Cpu
} from 'lucide-react';
import { TierLevel, OfferPlan } from '../types';
import { offerPlans } from '../data/offers';
import { module1Data } from '../data/module1';
import { module2Data } from '../data/module2';
import { module3Data } from '../data/module3';

interface HomeViewProps {
  currentTier: TierLevel | 0;
  onSelectOffer: (offer: OfferPlan) => void;
  onOpenAccessModal: () => void;
  onSelectModule: (moduleId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  currentTier,
  onSelectOffer,
  onOpenAccessModal,
  onSelectModule,
}) => {
  const modules = [module1Data, module2Data, module3Data];

  return (
    <div className="space-y-10 pb-16">
      {/* Benevolent Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50/80 via-white to-stone-50 p-6 sm:p-10 border border-blue-100 shadow-xs">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
            <span>Formation rigoureuse, éthique et accessible</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Prenez en main votre avenir grâce à la puissance des{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              ETF sur le PEA
            </span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Apprenez les bases indispensables de la bourse française et internationale. Découvrez les clés de l'investissement passif à long terme et construisez un patrimoine solide sans y passer plus d'une heure par an.
          </p>

          {/* Quick Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#pricing-offers"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center space-x-2 active:scale-98"
            >
              <span>Découvrir les 3 niveaux d'apprentissage</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenAccessModal}
              className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white border border-stone-200 hover:border-stone-300 text-stone-700 font-semibold text-sm transition-colors flex items-center justify-center space-x-2 cursor-pointer"
            >
              <KeyRound className="w-4 h-4 text-stone-500" />
              <span>J'ai déjà mon code d'accès</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Pedagogical Offer Cards */}
      <section id="pricing-offers" className="space-y-6">
        <div className="text-center space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            3 Offres Pédagogiques Claires & Transparentes
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            Paiement unique sans aucun abonnement récurrent ni frais cachés. Recevez immédiatement votre code d'accès par e-mail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {offerPlans.map((offer) => {
            const isUnlocked = currentTier >= offer.tier;
            const isPopular = offer.tier === 2;
            const isVip = offer.tier === 3;

            return (
              <div
                key={offer.id}
                className={`relative flex flex-col rounded-3xl p-6 transition-all duration-200 ${
                  isVip
                    ? 'bg-gradient-to-b from-indigo-50/60 via-white to-blue-50/40 border-2 border-indigo-300 shadow-md ring-2 ring-indigo-200/50'
                    : isPopular
                    ? 'bg-white border-2 border-blue-300 shadow-sm'
                    : 'bg-white border border-stone-200 shadow-xs'
                }`}
              >
                {/* Badge top */}
                {offer.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow-xs tracking-wider ${
                        isVip
                          ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white'
                          : isPopular
                          ? 'bg-blue-600 text-white'
                          : 'bg-stone-800 text-white'
                      }`}
                    >
                      {offer.badge}
                    </span>
                  </div>
                )}

                {/* Offer Header */}
                <div className="space-y-2 mt-2">
                  <h3 className="font-bold text-stone-900 text-lg">
                    {offer.name}
                  </h3>
                  <p className="text-xs text-stone-600 min-h-[32px] leading-relaxed">
                    {offer.shortDescription}
                  </p>
                </div>

                {/* Pricing */}
                <div className="my-5 py-3 border-y border-stone-100 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl font-black text-stone-900">
                      {offer.priceEur}
                    </span>
                    <span className="text-stone-500 text-lg font-bold ml-1">€</span>
                  </div>
                  <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-1 rounded-md">
                    Accès à vie
                  </span>
                </div>

                {/* Inclusions List */}
                <div className="space-y-2.5 flex-1 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                    Contenu inclus :
                  </span>
                  <ul className="space-y-2 text-xs text-stone-600">
                    {offer.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-tight text-stone-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action */}
                {isUnlocked ? (
                  <button
                    onClick={() => onSelectModule(`module-${offer.tier}`)}
                    className="w-full py-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs flex items-center justify-center space-x-1.5 hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Accéder au module (Débloqué)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => onSelectOffer(offer)}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-sm active:scale-98 cursor-pointer ${
                      isVip
                        ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white hover:from-indigo-600 hover:to-blue-700'
                        : isPopular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-stone-900 text-white hover:bg-stone-800'
                    }`}
                  >
                    <span>{offer.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Modules Curriculum Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-stone-900">
              Programme détaillé de la formation (3 Modules)
            </h2>
            <p className="text-xs text-stone-500">
              Cliquez sur un module pour consulter ses chapitres ou commencer à apprendre.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {modules.map((m, idx) => {
            const isUnlocked = currentTier >= m.tierRequired;

            return (
              <div
                key={m.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isUnlocked
                    ? 'bg-white border-stone-200 hover:border-blue-300 hover:shadow-xs'
                    : 'bg-stone-50/70 border-stone-200 opacity-90'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-700 text-xs font-bold font-mono">
                        NIVEAU {idx + 1}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">{m.duration}</span>
                      {!isUnlocked && (
                        <span className="text-[10px] font-semibold bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded-sm flex items-center space-x-1">
                          <Lock className="w-3 h-3" />
                          <span>Requis : Pack {m.tierRequired}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-stone-900 text-base sm:text-lg">{m.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed max-w-xl">{m.description}</p>
                  </div>

                  <div className="shrink-0">
                    {isUnlocked ? (
                      <button
                        onClick={() => onSelectModule(m.id)}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                      >
                        <span>Ouvrir la formation</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        onClick={onOpenAccessModal}
                        className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white border border-stone-300 hover:border-stone-400 text-stone-700 font-semibold text-xs flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                      >
                        <KeyRound className="w-3.5 h-3.5 text-blue-600" />
                        <span>Débloquer ce module</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Benevolent Reassurance Banner */}
      <section className="p-5 sm:p-6 rounded-3xl bg-stone-100/70 border border-stone-200/80 space-y-3">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <h3 className="font-bold text-stone-900 text-sm sm:text-base">
            Notre charte pédagogique & sécurité d'épargne
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-600">
          <div className="p-3 bg-white rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              1. Zéro spéculation risquée
            </span>
            Nous enseignons exclusivement l'investissement passif à long terme. Pas de day-trading ni de crypto-monnaies hautement spéculatives.
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              2. Frais minimisés à l'extrême
            </span>
            Le premier pilier du rendement est la chasse aux frais. Nous vous apprenons à éviter les intermédiaires financiers traditionnels abusifs.
          </div>
          <div className="p-3 bg-white rounded-xl border border-stone-200">
            <span className="font-bold text-stone-900 block mb-1">
              3. Indépendance absolue
            </span>
            Cette formation est 100% neutre et indépendante. Nous ne touchons aucune commission des courtiers en bourse ou des émetteurs d'ETF.
          </div>
        </div>
      </section>
    </div>
  );
};
