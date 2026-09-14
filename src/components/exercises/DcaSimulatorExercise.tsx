import React, { useState } from 'react';
import { Sparkles, CheckCircle2, TrendingUp, Landmark, ShieldCheck, DollarSign } from 'lucide-react';

interface DcaSimulatorExerciseProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const DcaSimulatorExercise: React.FC<DcaSimulatorExerciseProps> = ({
  onComplete,
  isCompleted
}) => {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(150);
  const [durationYears, setDurationYears] = useState<number>(20);
  const [returnRate, setReturnRate] = useState<number>(8);

  // Compute final amount using standard future value of an ordinary annuity formula
  // FV = PMT * [ ((1 + r)^n - 1) / r ] * (1 + r) or similar, but with monthly compounding:
  const monthlyRate = returnRate / 100 / 12;
  const numMonths = durationYears * 12;
  
  let finalValue = 0;
  if (monthlyRate > 0) {
    finalValue = monthlyContribution * ((Math.pow(1 + monthlyRate, numMonths) - 1) / monthlyRate);
  } else {
    finalValue = monthlyContribution * numMonths;
  }

  const totalDeposits = monthlyContribution * numMonths;
  const totalInterests = Math.max(0, finalValue - totalDeposits);
  const interestRatio = finalValue > 0 ? totalInterests / finalValue : 0;

  // 4% Safe Withdrawal Rule for passive monthly income
  const annualPassiveRevenue = finalValue * 0.04;
  const monthlyPassiveRevenue = annualPassiveRevenue / 12;

  return (
    <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-6">
      {/* Exercise Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-[10px] font-extrabold uppercase tracking-wide border border-amber-200">
            <TrendingUp className="w-3 h-3 text-amber-600" />
            <span>Simulateur d'Épargne • Intérêts Composés</span>
          </div>
          <h3 className="text-lg font-bold text-stone-900">
            Simulateur DCA : Évaluez l'effet "Boule de Neige"
          </h3>
          <p className="text-xs text-stone-500 max-w-lg">
            Ajustez les curseurs ci-dessous pour projeter la croissance de votre épargne en investissant régulièrement dans des ETF diversifiés mondiaux.
          </p>
        </div>
      </div>

      {/* Sliders and Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-5">
          {/* Contribution slider */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200/80 shadow-3xs">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-stone-700">Versement mensuel :</label>
              <span className="text-base font-extrabold text-blue-600 font-mono">{monthlyContribution} € / mois</span>
            </div>
            <input
              type="range"
              min="20"
              max="1000"
              step="10"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(parseInt(e.target.value) || 20)}
              className="w-full h-1.5 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-stone-400 font-semibold font-mono">
              <span>20 €</span>
              <span>500 €</span>
              <span>1000 €</span>
            </div>
          </div>

          {/* Duration slider */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200/80 shadow-3xs">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-stone-700">Durée du placement :</label>
              <span className="text-base font-extrabold text-blue-600 font-mono">{durationYears} ans</span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={durationYears}
              onChange={(e) => setDurationYears(parseInt(e.target.value) || 5)}
              className="w-full h-1.5 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[10px] text-stone-400 font-semibold font-mono">
              <span>5 ans</span>
              <span>20 ans</span>
              <span>40 ans</span>
            </div>
          </div>

          {/* Return rate slider */}
          <div className="space-y-2 bg-white p-4 rounded-xl border border-stone-200/80 shadow-3xs">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-stone-700">Rendement annuel estimé :</label>
              <span className="text-base font-extrabold text-emerald-600 font-mono">{returnRate} % / an</span>
            </div>
            <input
              type="range"
              min="3"
              max="12"
              step="0.5"
              value={returnRate}
              onChange={(e) => setReturnRate(parseFloat(e.target.value) || 3)}
              className="w-full h-1.5 bg-stone-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-[10px] text-stone-400 font-semibold font-mono">
              <span>3 % (Prudent)</span>
              <span>8 % (Moyenne World)</span>
              <span>12 % (Optimiste US)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Outputs & Visualizer */}
        <div className="bg-white p-5 rounded-xl border border-stone-200 flex flex-col justify-between shadow-3xs space-y-4">
          <div className="space-y-4">
            <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-stone-500">
              Résultat de la Capitalisation
            </h4>

            {/* Main big number */}
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 text-center space-y-1">
              <span className="text-xs text-stone-500 font-medium block">Capital Final Projeté</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-800 font-mono tracking-tight">
                {Math.round(finalValue).toLocaleString('fr-FR')} €
              </span>
            </div>

            {/* Comparison bar */}
            <div className="space-y-1">
              <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${(1 - interestRatio) * 100}%` }}
                  className="bg-blue-600 h-full transition-all duration-200"
                  title={`Votre apport personnel: ${Math.round(totalDeposits).toLocaleString('fr-FR')} €`}
                />
                <div
                  style={{ width: `${interestRatio * 100}%` }}
                  className="bg-amber-400 h-full transition-all duration-200"
                  title={`Intérêts cumulés: ${Math.round(totalInterests).toLocaleString('fr-FR')} €`}
                />
              </div>
              <div className="flex justify-between text-[11px] font-semibold text-stone-500 font-sans pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-blue-600" />
                  <span>Versements : {Math.round(totalDeposits).toLocaleString('fr-FR')} € ({Math.round((1 - interestRatio)*100)}%)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-xs bg-amber-400" />
                  <span>Intérêts : {Math.round(totalInterests).toLocaleString('fr-FR')} € ({Math.round(interestRatio*100)}%)</span>
                </span>
              </div>
            </div>

            {/* Dividends output block (4% SWR rule) */}
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-start space-x-3 text-xs leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-stone-900 block mb-0.5">La Rente Passive Projetée :</span>
                En appliquant la règle des 4% de retrait annuel sécurisé, ce capital pourrait vous verser{' '}
                <strong className="text-stone-900 font-extrabold font-mono text-sm">
                  {Math.round(monthlyPassiveRevenue).toLocaleString('fr-FR')} € par mois
                </strong>{' '}
                à vie sans jamais entamer le capital de base !
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={onComplete}
              className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-white'}`} />
              <span>{isCompleted ? 'Simulation Enregistrée ✓' : 'Valider mon plan d\'épargne DCA'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
