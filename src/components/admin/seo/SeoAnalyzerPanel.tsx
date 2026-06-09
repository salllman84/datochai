'use client';

import { useState, useMemo } from 'react';
import { analyzeSEO } from '@/lib/seo/analyzer';
import { CheckCircle2, XCircle } from 'lucide-react';

const SeoAnalyzerPanel = () => {
  // State for the form inputs
  const [title, setTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeyword, setFocusKeyword] = useState('');
  // Using dummy content as per instructions, but we'll make it editable for demonstration
  const [content, setContent] = useState(
    'Ini adalah kandungan densummy untuk menunjukkan analyzer SEO. Selain itu, kita boleh tambah lebih banyak teks di sini. Walau bagaimanapun, kita perlu pastikan density keyword berada dalam julat yang sesuai. Kesimpulannya, analyzer ini akan membantu Dalam mengoptimalkan kandungan untuk carian.'
  );

  // Run analysis whenever any input changes
  const validationResults = useMemo(() => {
    if (!title && !metaDescription && !focusKeyword && !content) {
      return [];
    }
    return analyzeSEO(content, focusKeyword, title, metaDescription);
  }, [content, focusKeyword, title, metaDescription]);

  // Extract the density validation result for the visualizer
  const densityValidation = validationResults.find(v => v.id === 'density-keyword');
  const densityValue = densityValidation ?
    parseFloat(densityValidation.text.match(/[\d.]+/)?.[0] || '0') : 0;

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-4 shadow-md w-full">
      <h2 className="font-poppins text-lg font-bold mb-4">SEO Analyzer</h2>

      {/* Form Inputs */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-inter mb-2">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter page title"
            className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-inter mb-2">Meta Description</label>
          <textarea
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            placeholder="Enter meta description (150-160 characters)"
            className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary h-20 resize-none"
          />
        </div>
        <div>
          <label className="block text-sm font-inter mb-2">Focus Keyword</label>
          <input
            value={focusKeyword}
            onChange={(e) => setFocusKeyword(e.target.value)}
            placeholder="Enter primary keyword"
            className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-inter mb-2">Content (dummy)</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter content (or leave as dummy)"
            className="w-full px-4 py-3 font-inter border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
          />
        </div>
      </div>

      {/* Validation Results */}
      <div className="space-y-3">
        {validationResults.map((result) => (
          <div key={result.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
            {result.passed ? (
              <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
            ) : (
              <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
            )}
            <div className="flex-1">
              <p className="font-inter text-sm">{result.text}</p>
              {/* Density visualizer - only show for the density validation */}
              {result.id === 'density-keyword' && (
                <div className="mt-2 h-2 w-full bg-muted/50 rounded overflow-hidden">
                  <div
                    className={`h-full transition-width duration-500 ease-in-out
                      ${densityValue >= 1.0 && densityValue <= 2.5 ? 'bg-green-500'
                        : densityValue > 2.5 ? 'bg-crimson-600'
                        : 'bg-amber-500'}
                      w-[${Math.min(densityValue * 20, 100)}%]`}
                  ></div>
                </div>
              )}
            </div>
          </div>
        ))}
        {validationResults.length === 0 && (
          <p className="text-muted-foreground text-center py-8">
            Enter some data to see SEO analysis
          </p>
        )}
      </div>
    </div>
  );
};

export default SeoAnalyzerPanel;