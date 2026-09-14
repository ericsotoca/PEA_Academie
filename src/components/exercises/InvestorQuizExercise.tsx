import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ShieldAlert, Award, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';

interface InvestorQuizExerciseProps {
  onComplete: () => void;
  isCompleted: boolean;
}

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
    explanation: string;
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Quel est votre horizon d\'investissement en bourse ?',
    options: [
      { text: 'Moins de 3 ans', score: 1, explanation: 'Horizon trop court. La bourse est très risquée sur de si courtes périodes.' },
      { text: 'Entre 3 et 7 ans', score: 2, explanation: 'Horizon moyen. Convient pour un portefeuille équilibré modéré.' },
      { text: 'Plus de 8 ans', score: 3, explanation: 'Idéal ! Vous pouvez absorber les cycles boursiers et viser un profil dynamique.' }
    ]
  },
  {
    id: 2,
    text: 'Si votre portefeuille d\'ETF chute de 25% en un mois à cause d\'une crise internationale, que faites-vous ?',
    options: [
      { text: 'Je panique et je vends tout pour limiter mes pertes', score: 1, explanation: 'Erreur fatale. Vous matérialisez vos pertes virtuelles au pire moment.' },
      { text: 'Je ne touche à rien et j\'attends que la tempête passe', score: 2, explanation: 'Bonne réaction passive. Vous respectez votre plan à long terme.' },
      { text: 'J\'en profite pour investir plus d\'argent car les actions sont bradées', score: 3, explanation: 'Réaction d\'élite. Vous profitez des soldes pour doper vos futurs intérêts.' }
    ]
  },
  {
    id: 3,
    text: 'Avez-vous constitué une épargne de précaution disponible (Livret A, LDDS) ?',
    options: [
      { text: 'Non, j\'investis tout mon argent disponible en bourse', score: 1, explanation: 'Très dangereux en cas de coup dur de la vie (perte d\'emploi, voiture en panne).' },
      { text: 'Oui, j\'ai l\'équivalent de 1 à 2 mois de dépenses de côté', score: 2, explanation: 'Un peu juste mais c\'est un bon début.' },
      { text: 'Oui, j\'ai de côté entre 3 et 6 mois de dépenses courantes sécurisées', score: 3, explanation: 'Parfait. Vous pouvez investir en bourse l\'esprit totalement libre et serein.' }
    ]
  },
  {
    id: 4,
    text: 'Comment décririez-vous vos connaissances sur le PEA et les ETF ?',
    options: [
      { text: 'Je débute complètement et je découvre le fonctionnement', score: 1, explanation: 'Restez sur de la simplicité absolue avec un seul ETF global.' },
      { text: 'J\'ai des bases théoriques mais je n\'ai jamais investi d\'argent réel', score: 2, explanation: 'Le passage à l\'acte avec de petites sommes régulières est votre prochaine étape.' },
      { text: 'Je comprends bien les concepts et je veux optimiser ma stratégie', score: 3, explanation: 'Vous êtes prêt à affiner votre allocation d\'ETF de manière autonome.' }
    ]
  }
];

export const InvestorQuizExercise: React.FC<InvestorQuizExerciseProps> = ({
  onComplete,
  isCompleted
}) => {
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const handleSelectOption = (score: number) => {
    const updatedAnswers = [...answers, score];
    setAnswers(updatedAnswers);

    if (currentQIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQIndex(0);
    setAnswers([]);
    setQuizFinished(false);
  };

  const totalScore = answers.reduce((sum, val) => sum + val, 0);

  const getProfile = () => {
    if (totalScore <= 6) {
      return {
        title: 'Profil Modéré / Prudent',
        description: 'Vous êtes sensible au risque ou votre horizon de temps est modéré. Privilégiez une épargne de précaution solide et une allocation d\'ETF très large et tranquille.',
        recommendation: '90% Amundi MSCI World ou Europe Stoxx 600, et 10% d\'obligations ou fonds euros.'
      };
    } else if (totalScore <= 9) {
      return {
        title: 'Profil Équilibré',
        description: 'Vous comprenez la volatilité boursière et possédez un horizon de placement de moyen à long terme. Vous cherchez le parfait ratio entre sécurité globale et croissance de l\'épargne.',
        recommendation: '85% ETF MSCI World (Mondial) et 15% ETF MSCI Emerging Markets (Émergents).'
      };
    } else {
      return {
        title: 'Profil Dynamique / Offensif',
        description: 'Investisseur d\'élite ! Vous disposez d\'un horizon de placement lointain (8 ans et plus), d\'une épargne de sécurité irréprochable et d\'un mental d\'acier face aux baisses du marché.',
        recommendation: '70% S&P 500 (USA), 20% MSCI World et 10% Thématiques spécifiques (ex: Tech ou Climat).'
      };
    }
  };

  const activeQuestion = QUIZ_QUESTIONS[currentQIndex];

  return (
    <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-5">
      {/* Exercise Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md bg-rose-50 text-rose-800 text-[10px] font-extrabold uppercase tracking-wide border border-rose-200">
            <HelpCircle className="w-3 h-3 text-rose-600" />
            <span>Évaluation • Profil de Risque</span>
          </div>
          <h3 className="text-lg font-bold text-stone-900">
            Évaluez votre Profil d'Investisseur PEA
          </h3>
          <p className="text-xs text-stone-500 max-w-lg">
            Découvrez en 4 questions votre niveau de tolérance aux fluctuations et obtenez des recommandations d'allocation d'ETF adaptées.
          </p>
        </div>
      </div>

      {!quizFinished ? (
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-3xs space-y-4">
          <div className="flex justify-between items-center border-b border-stone-100 pb-2.5">
            <span className="text-xs font-bold text-stone-400">
              Question {currentQIndex + 1} sur {QUIZ_QUESTIONS.length}
            </span>
            <div className="h-1.5 w-24 bg-stone-100 rounded-full overflow-hidden">
              <div
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${((currentQIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
            {activeQuestion.text}
          </h4>

          <div className="space-y-2.5 pt-1.5">
            {activeQuestion.options.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleSelectOption(opt.score)}
                className="w-full text-left p-3.5 rounded-xl border border-stone-200 hover:border-blue-500 hover:bg-blue-50/20 text-xs sm:text-sm text-stone-700 font-medium transition-all flex justify-between items-center group cursor-pointer"
              >
                <span>{opt.text}</span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Quiz Finished - Results Screen */
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-3xs space-y-5">
          <div className="text-center space-y-2 py-2">
            <div className="inline-flex p-3 rounded-full bg-emerald-100 text-emerald-800">
              <Award className="w-8 h-8" />
            </div>
            <h4 className="text-base font-bold text-stone-500 uppercase tracking-widest">Votre diagnostic</h4>
            <h3 className="text-xl sm:text-2xl font-black text-stone-900 leading-none">
              {getProfile().title}
            </h3>
          </div>

          <div className="space-y-3.5 pt-2 border-t border-stone-100">
            <div className="space-y-1 text-xs text-stone-600 leading-relaxed">
              <span className="font-bold text-stone-800 uppercase text-[10px] tracking-wider block">Description du profil</span>
              <p>{getProfile().description}</p>
            </div>

            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1.5">
              <span className="text-[10px] text-emerald-800 font-extrabold uppercase tracking-widest block">Allocation ETF suggérée</span>
              <p className="text-xs sm:text-sm text-stone-800 font-semibold leading-relaxed">
                {getProfile().recommendation}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <button
              onClick={restartQuiz}
              className="px-4 py-3 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Refaire le test</span>
            </button>
            <button
              onClick={onComplete}
              className={`flex-1 py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'bg-stone-900 text-white hover:bg-stone-800'
              }`}
            >
              <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-white'}`} />
              <span>{isCompleted ? 'Diagnostic Enregistré ✓' : 'Valider et enregistrer mon profil'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
