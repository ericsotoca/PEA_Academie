import React, { useState } from 'react';
import { Sparkles, HelpCircle, CheckCircle2, RefreshCw, AlertTriangle, Info } from 'lucide-react';

interface PortfolioBuilderExerciseProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface EtfItem {
  id: string;
  name: string;
  isin: string;
  ter: number;
  region: string;
  historicalReturn: number;
}

const AVAILABLE_ETFS: EtfItem[] = [
  { id: 'world', name: 'iShares MSCI World Swap PEA', isin: 'IE0002XZ62T2', ter: 0.25, region: 'Global (Mondial)', historicalReturn: 8.5 },
  { id: 'sp500', name: 'BNP Paribas Easy S&P 500', isin: 'FR0011550185', ter: 0.15, region: 'États-Unis', historicalReturn: 10.2 },
  { id: 'stoxx600', name: 'Amundi PEA Europe Stoxx 600', isin: 'LU1681042609', ter: 0.18, region: 'Europe', historicalReturn: 6.8 },
  { id: 'emerging', name: 'Amundi PEA MSCI Emerging Markets', isin: 'FR0013412020', ter: 0.30, region: 'Pays Émergents', historicalReturn: 7.2 }
];

export const PortfolioBuilderExercise: React.FC<PortfolioBuilderExerciseProps> = ({
  onComplete,
  isCompleted
}) => {
  const [allocations, setAllocations] = useState<Record<string, number>>({
    world: 100,
    sp500: 0,
    stoxx600: 0,
    emerging: 0
  });

  const totalAlloc = AVAILABLE_ETFS.reduce((sum, etf) => sum + (allocations[etf.id] || 0), 0);

  const handleSliderChange = (id: string, value: number) => {
    setAllocations(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const resetAllocation = (preset: string) => {
    if (preset === 'lazy') {
      setAllocations({ world: 100, sp500: 0, stoxx600: 0, emerging: 0 });
    } else if (preset === 'growth') {
      setAllocations({ world: 0, sp500: 80, stoxx600: 0, emerging: 20 });
    } else if (preset === 'balanced') {
      setAllocations({ world: 70, sp500: 10, stoxx600: 10, emerging: 10 });
    }
  };

  // Weighted indicators
  const averageTer = totalAlloc > 0 
    ? AVAILABLE_ETFS.reduce((sum, etf) => {
        const val = allocations[etf.id] || 0;
        return sum + (val / 100) * etf.ter;
      }, 0)
    : 0;

  const averageReturn = totalAlloc > 0
    ? AVAILABLE_ETFS.reduce((sum, etf) => {
        const val = allocations[etf.id] || 0;
        return sum + (val / 100) * etf.historicalReturn;
      }, 0)
    : 0;

  const getAdvice = () => {
    if (totalAlloc !== 100) {
      return `L'allocation totale doit faire exactement 100%. Votre total actuel est de ${totalAlloc}%.`;
    }
    if (allocations.world === 100) {
      return "Excellent choix ! C'est la stratégie ultime du 'Lazy Investor' : simplicité maximale, diversification absolue (1400+ entreprises en une ligne) et frais réduits au minimum.";
    }
    if (allocations.sp500 > 70) {
      return "Votre portefeuille est très orienté vers les États-Unis. C'est performant (historiquement >10% par an), mais attention à la concentration géographique si le dollar baisse ou si la tech américaine fléchit.";
    }
    if (allocations.emerging > 30) {
      return "Une exposition de plus de 30% aux pays émergents comporte des risques de volatilité accrus. Idéal pour doper la performance sur 15+ ans, mais préparez-vous à de fortes vagues.";
    }
    if (allocations.world >= 70 && allocations.emerging >= 10 && allocations.emerging <= 20) {
      return "C'est l'allocation classique recommandée par de nombreux experts (ex: 85% Monde / 15% Émergents). Vous couvrez l'ensemble de la planète boursière de manière harmonieuse.";
    }
    return "Votre portefeuille est bien diversifié. Veillez à ce que vos choix correspondent à votre tolérance psychologique à la baisse.";
  };

  return (
    <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-6">
      {/* Exercise Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 text-[10px] font-extrabold uppercase tracking-wide border border-blue-200">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>Exercice Pratique • Atelier d'Allocation</span>
          </div>
          <h3 className="text-lg font-bold text-stone-900">
            Configurez votre Portefeuille d'ETF PEA
          </h3>
          <p className="text-xs text-stone-500 max-w-lg">
            Ajustez les curseurs ci-dessous pour répartir vos versements. L'outil calculera instantanément vos frais globaux et vous donnera une analyse éthique personnalisée.
          </p>
        </div>
      </div>

      {/* Preset Pickers */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">Modèles suggérés :</span>
        <button
          onClick={() => resetAllocation('lazy')}
          className="px-3 py-1 rounded-full bg-white border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold shadow-2xs cursor-pointer"
        >
          100% Lazy World
        </button>
        <button
          onClick={() => resetAllocation('balanced')}
          className="px-3 py-1 rounded-full bg-white border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold shadow-2xs cursor-pointer"
        >
          Classique Planétaire (70/10/10/10)
        </button>
        <button
          onClick={() => resetAllocation('growth')}
          className="px-3 py-1 rounded-full bg-white border border-stone-300 hover:border-stone-400 text-stone-700 text-xs font-semibold shadow-2xs cursor-pointer"
        >
          USA Dynamique (80% US / 20% Émergents)
        </button>
      </div>

      {/* Inputs & Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4">
          {AVAILABLE_ETFS.map((etf) => (
            <div key={etf.id} className="bg-white p-3.5 rounded-xl border border-stone-200/80 shadow-3xs space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-mono bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded-md font-bold">
                    ISIN: {etf.isin}
                  </span>
                  <h4 className="font-bold text-stone-900 text-xs sm:text-sm mt-1">{etf.name}</h4>
                  <p className="text-[11px] text-stone-500 font-medium">
                    {etf.region} • Frais de gestion : {etf.ter}%/an
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-extrabold text-blue-600 font-mono">
                    {allocations[etf.id]}%
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={allocations[etf.id]}
                  onChange={(e) => handleSliderChange(etf.id, parseInt(e.target.value) || 0)}
                  className="w-full h-1.5 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Visualizer & Dynamic Insights */}
        <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between shadow-3xs space-y-5">
          <div className="space-y-4">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-stone-500">
              Analyse du Portefeuille
            </h4>

            {/* Sum indicator bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span>Total Alloué :</span>
                <span className={totalAlloc === 100 ? 'text-emerald-600 font-bold' : 'text-rose-600 font-bold'}>
                  {totalAlloc} %
                </span>
              </div>
              <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden flex">
                {AVAILABLE_ETFS.map((etf, idx) => {
                  const val = (allocations[etf.id] || 0) as number;
                  if (val === 0) return null;
                  const colors = [
                    'bg-blue-600',
                    'bg-indigo-500',
                    'bg-emerald-500',
                    'bg-amber-500'
                  ];
                  return (
                    <div
                      key={etf.id}
                      style={{ width: `${(val / totalAlloc) * 100}%` }}
                      className={`${colors[idx % colors.length]} h-full transition-all duration-200`}
                      title={`${etf.name}: ${val}%`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Micro indicators grid */}
            {totalAlloc === 100 && (
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="text-[10px] text-stone-500 uppercase font-bold block">Frais Moyens Globaux</span>
                  <span className="text-base font-extrabold text-stone-900 font-mono">
                    {averageTer.toFixed(3)} % / an
                  </span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <span className="text-[10px] text-stone-500 uppercase font-bold block">Rendement Hist. Moyen</span>
                  <span className="text-base font-extrabold text-emerald-700 font-mono">
                    + {averageReturn.toFixed(1)} % / an
                  </span>
                </div>
              </div>
            )}

            {/* Advice box */}
            <div className={`p-3.5 rounded-lg border text-xs leading-relaxed flex items-start space-x-2.5 ${
              totalAlloc === 100
                ? 'bg-blue-50/50 border-blue-200 text-blue-900'
                : 'bg-rose-50 border-rose-200 text-rose-900'
            }`}>
              {totalAlloc === 100 ? (
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <p>{getAdvice()}</p>
            </div>
          </div>

          {/* Complete action */}
          <div>
            {totalAlloc === 100 ? (
              <button
                onClick={onComplete}
                className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                  isCompleted
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-white'}`} />
                <span>{isCompleted ? 'Allocation Validée ✓' : 'Valider mon allocation de Portefeuille'}</span>
              </button>
            ) : (
              <button
                disabled
                className="w-full py-3 rounded-xl bg-stone-100 text-stone-400 border border-stone-200 font-bold text-xs flex items-center justify-center cursor-not-allowed"
              >
                <span>Ajustez l'allocation à 100% pour valider</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
