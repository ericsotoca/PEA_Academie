export type TierLevel = 1 | 2 | 3;

export interface ExamplePair {
  bad: {
    text: string;
    explanation: string;
  };
  good: {
    text: string;
    explanation: string;
  };
}

export interface ChapterContent {
  id: string;
  title: string;
  subtitle?: string;
  explanation: string;
  bulletPoints?: string[];
  examples?: ExamplePair[];
  errorsToAvoid?: string[];
  practicalTip?: string;
  quickExercise?: {
    prompt: string;
    placeholder: string;
    guidance: string;
  };
}

export interface Chapter {
  id: string;
  order: number;
  content: ChapterContent;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category?: string;
}

export interface ModuleData {
  id: string;
  tierRequired: TierLevel;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  badge: string;
  chapters: Chapter[];
  checklistTitle: string;
  checklist: ChecklistItem[];
  exerciseType: 'portfolio_builder' | 'dca_simulator' | 'investor_quiz';
}

export interface OfferPlan {
  id: string;
  tier: TierLevel;
  priceEur: number;
  stripePaymentLinkDefault: string;
  name: string;
  shortDescription: string;
  targetAudience: string;
  features: string[];
  ctaText: string;
  badge?: string;
}

export interface UserAccessState {
  currentTier: TierLevel | 0;
  enteredCode: string | null;
  unlockedAt: string | null;
}

export interface UserProgressState {
  completedChapters: string[];
  completedChecklists: string[];
}
