import { useEffect, useState } from 'react';

export default function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'ms'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'ms') return saved as 'en' | 'ms';
    }
    return 'ms'; // Default to Malay as per the project's language
  });

  useEffect(() => {
    // In a real app, you would use a library like next-i18next or react-i18next
    // For now, we just store the preference
    localStorage.setItem('language', language);
    // You could also reload the page or update context here
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ms' : 'en'));
  };

  const languageNames: Record<'en' | 'ms', string> = {
    en: 'EN',
    ms: 'MS',
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="p-2 rounded hover:bg-accent/20 focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <span className="text-sm font-medium">{languageNames[language]}</span>
    </button>
  );
}