'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface MethodologySectionProps {
  title: string;
  content: string;
  technical?: boolean;
}

export function MethodologySection({ title, content, technical = false }: MethodologySectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center p-4 bg-neutral-50 dark:bg-slate-800/50 rounded-lg hover:bg-neutral-100 dark:hover:bg-slate-700/50 transition-colors duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>
        <div className="transition-transform duration-200">
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 p-4 bg-neutral-50 dark:bg-slate-800/50 rounded-lg">
          <div className="prose dark:prose-invert max-w-none">
            <p>{content}</p>
            {technical && (
              <div className="mt-6 p-4 bg-neutral-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-primary">
                <p className="font-semibold mb-2">Nota Teknis:</p>
                <p>Analisis matematikal yang lebih lanjut menunjukkan bahawa pendekatan hierarchical ensemble yang digunakan oleh Datochai 4d memberikan peningkatan signifikan dalam keupanarutan model berbanding dengan model tunggal seperti ARIMA atau LSTM sahaja. Kombinasi dari modèles ARIMA, Prophet, dan LSTM dalam bentuk stacked hybrid ensemble membolehkan platform untuk menangkap baik trend jangka panjang maupun pola-pola non-linear yang kompleks dalam data sejarah.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}