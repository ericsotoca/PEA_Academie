import { OfferPlan } from '../types';

export const offerPlans: OfferPlan[] = [
  {
    id: 'offer-1',
    tier: 1,
    priceEur: 19,
    stripePaymentLinkDefault: 'https://buy.stripe.com/bJebJ152Lga7gOM7Wu1B604',
    name: 'Niveau 1 : Les Fondations du PEA & des ETF',
    shortDescription: 'Acquérez les bases indispensables pour ouvrir votre PEA, choisir votre courtier et comprendre le fonctionnement des ETF.',
    targetAudience: 'Idéal pour les parfaits débutants qui souhaitent se lancer sans commettre d\'erreurs coûteuses.',
    features: [
      'Accès complet au Module 1 (5 chapitres ultra-pédagogiques)',
      'Guide pas-à-pas pour choisir et ouvrir le meilleur PEA',
      'Atelier interactif de simulation d\'allocation d\'ETF',
      'Checklist complète de validation avant le premier ordre',
      'Accès illimité à vie sans aucun abonnement'
    ],
    ctaText: 'Débloquer le Niveau 1 (19 €)',
    badge: 'Débuter sereinement'
  },
  {
    id: 'offer-2',
    tier: 2,
    priceEur: 49,
    stripePaymentLinkDefault: 'https://buy.stripe.com/8x2eVd1QzaPN1TS2Ca1B605',
    name: 'Niveau 2 : Stratégies DCA & Portefeuilles Lazy',
    shortDescription: 'Maîtrisez l\'investissement passif par répartition mensuelle (DCA) et construisez votre portefeuille d\'ETF personnalisé.',
    targetAudience: 'Pour ceux qui souhaitent automatiser leur épargne et investir quelques dizaines de minutes par an.',
    features: [
      'Tout le contenu du Niveau 1 inclus',
      'Accès complet au Module 2 (5 chapitres stratégiques)',
      'Comprendre les ETF synthétiques éligibles au PEA (Swap)',
      'Simulateur interactif d\'intérêts composés et d\'épargne DCA',
      'Modèles de portefeuilles "Lazy" clés en main (ex: MSCI World)',
      'Checklist d\'automatisation et de rééquilibrage de portefeuille'
    ],
    ctaText: 'Débloquer le Niveau 2 (49 €)',
    badge: 'Le plus populaire'
  },
  {
    id: 'offer-3',
    tier: 3,
    priceEur: 99,
    stripePaymentLinkDefault: 'https://buy.stripe.com/14A3cv8eXbTRbusdgO1B606',
    name: 'Niveau 3 : Optimisation, Fiscalité & Sélection d\'ETF',
    shortDescription: 'Devenez un investisseur chevronné en analysant les fiches techniques des ETF et en optimisant vos retraits du PEA.',
    targetAudience: 'La formation d\'excellence pour décoder les indices complexes, gérer la fiscalité et optimiser sa rente.',
    features: [
      'Accès intégral aux 3 Modules de la formation',
      'Analyse approfondie de la fiscalité complexe du PEA (retraits, cotisations, CSG/CRDS)',
      'Méthode pour décoder la fiche technique d\'un ETF (frais cachés, devise, encours)',
      'Liste exclusive des meilleurs ETF PEA de référence (Amundi, iShares, BNP)',
      'Quiz interactif de profil d\'investisseur et d\'évaluation des risques',
      'Guide psychologique pour rester serein en cas de krach boursier'
    ],
    ctaText: 'Débloquer la Formation Intégrale (99 €)',
    badge: 'Pack Expert Intégral'
  }
];
