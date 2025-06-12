import { useAccessibility } from '../contexts/AccessibilityContext';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { language, setLanguage } = useAccessibility();
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'bn', name: 'বাংলা' }
  ];

  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          i18n.changeLanguage(e.target.value);
        }}
        className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium appearance-none pr-8"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <GlobeAltIcon className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-600" />
    </div>
  );
};

export default LanguageSelector;