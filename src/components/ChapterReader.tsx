import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Info
} from 'lucide-react';
import { Chapter } from '../types';

interface ChapterReaderProps {
  chapter: Chapter;
  chapterIndex: number;
  totalChapters: number;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ChapterReader: React.FC<ChapterReaderProps> = ({
  chapter,
  chapterIndex,
  totalChapters,
  isCompleted,
  onToggleComplete,
  onNext,
  onPrev,
}) => {
  const content = chapter.content;

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 border border-stone-200/90 shadow-sm space-y-6">
      {/* Chapter Top Bar */}
      <div className="flex items-center justify-between border-b border-stone-100 pb-3.5">
        <div className="flex items-center space-x-2">
          <span className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-600 text-xs font-bold font-mono">
            {chapterIndex + 1}/{totalChapters}
          </span>
          <span className="text-xs font-semibold text-stone-500">
            Chapitre d'apprentissage
          </span>
        </div>
      </div>

      {/* Chapter Title */}
      <div className="space-y-1">
        <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight leading-snug">
          {content.title}
        </h2>
        {content.subtitle && (
          <p className="text-xs sm:text-sm text-stone-500 font-medium">
            {content.subtitle}
          </p>
        )}
      </div>

      {/* 1. Clear explanation */}
      <div className="text-stone-700 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans">
        {content.explanation}
      </div>

      {/* 2. Key Bullet points */}
      {content.bulletPoints && content.bulletPoints.length > 0 && (
        <div className="space-y-2.5 bg-stone-50/70 p-4 rounded-xl border border-stone-200/70">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
            Points essentiels à retenir :
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
            {content.bulletPoints.map((pt, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. Concrete Examples (Bad vs Good) */}
      {content.examples && content.examples.length > 0 && (
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
            Exemples concrets comparés :
          </span>
          {content.examples.map((ex, i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Bad Example */}
              <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-rose-700">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Formulation ou pratique déconseillée</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-rose-100 text-xs sm:text-sm font-sans italic text-stone-800 whitespace-pre-line">
                  "{ex.bad.text}"
                </div>
                <p className="text-[11px] text-rose-800 leading-normal">
                  <strong>Pourquoi :</strong> {ex.bad.explanation}
                </p>
              </div>

              {/* Good Example */}
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Pratique optimale recommandée</span>
                </div>
                <div className="p-3 bg-white rounded-lg border border-emerald-100 text-xs sm:text-sm font-sans font-medium text-stone-800 whitespace-pre-line">
                  "{ex.good.text}"
                </div>
                <p className="text-[11px] text-emerald-800 leading-normal">
                  <strong>Points forts :</strong> {ex.good.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. Errors to avoid */}
      {content.errorsToAvoid && content.errorsToAvoid.length > 0 && (
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 space-y-2">
          <div className="flex items-center space-x-1.5 text-xs font-bold text-amber-800">
            <AlertTriangle className="w-4 h-4" />
            <span>Erreurs à proscrire absolument :</span>
          </div>
          <ul className="space-y-1.5 text-xs sm:text-sm text-amber-950">
            {content.errorsToAvoid.map((err, i) => (
              <li key={i} className="flex items-start space-x-2">
                <span className="text-amber-600 font-bold">•</span>
                <span>{err}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 5. Practical tip (Conseil pratique) */}
      {content.practicalTip && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 flex items-start space-x-3">
          <div className="p-1.5 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wide block">
              Conseil pratique d'expert :
            </span>
            <p className="text-xs sm:text-sm text-stone-800 font-medium mt-0.5 leading-relaxed">
              {content.practicalTip}
            </p>
          </div>
        </div>
      )}

      {/* 6. Quick Exercise */}
      {content.quickExercise && (
        <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2.5">
          <div className="flex items-center space-x-2 text-xs font-bold text-indigo-800 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Mini-exercice de mise en pratique d'évaluation :</span>
          </div>
          <p className="text-xs sm:text-sm text-stone-800 font-medium leading-relaxed">
            {content.quickExercise.prompt}
          </p>
          <div className="bg-white rounded-lg p-3 border border-stone-200 shadow-2xs">
            <textarea
              className="w-full text-xs sm:text-sm text-stone-700 bg-transparent border-none outline-none resize-none focus:ring-0 placeholder:text-stone-400"
              rows={2}
              placeholder={content.quickExercise.placeholder}
            />
            <div className="text-[10px] text-stone-500 mt-1 border-t border-stone-100 pt-1.5 leading-normal">
              <strong>Guidance :</strong> {content.quickExercise.guidance}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Completion & Navigation Controls */}
      <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Toggle completed button */}
        <button
          onClick={onToggleComplete}
          className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border shadow-xs cursor-pointer ${
            isCompleted
              ? 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100'
              : 'bg-stone-50 border-stone-300 text-stone-700 hover:bg-stone-100'
          }`}
        >
          <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600' : 'text-stone-400'}`} />
          <span>
            {isCompleted ? 'Chapitre assimilé ✓' : 'Marquer comme lu et assimilé'}
          </span>
        </button>

        {/* Prev / Next */}
        <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
          <button
            onClick={onPrev}
            disabled={chapterIndex === 0}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-3 py-2.5 rounded-xl text-xs font-semibold border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Précédent</span>
          </button>
          <button
            onClick={onNext}
            disabled={chapterIndex === totalChapters - 1}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2.5 rounded-xl text-xs font-semibold bg-stone-900 text-white hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <span>{chapterIndex === totalChapters - 1 ? 'Accéder à l\'Atelier' : 'Suivant'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
