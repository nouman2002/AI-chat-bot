import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export function LanguageSelector({
  currentLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-5 h-5 text-gray-500" />
      <select
        value={currentLanguage}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="border-none bg-transparent focus:outline-none text-sm text-gray-600"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}