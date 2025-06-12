import { useState } from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { AdjustmentsHorizontalIcon, SpeakerWaveIcon, SunIcon, MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline';
import useVoiceCommands from '../hooks/useVoiceCommands';
import { useTranslation } from 'react-i18next';

const AccessibilityDropdown = () => {
  const [open, setOpen] = useState(false);
  const { fontSize, setFontSize, highContrast, setHighContrast, voiceEnabled, setVoiceEnabled } = useAccessibility();
  const { t } = useTranslation();

  // Voice toggle logic
  useVoiceCommands(voiceEnabled);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 focus:outline-none"
        aria-label={t('Accessibility')}
        type="button"
      >
        <AdjustmentsHorizontalIcon className="h-5 w-5 mr-1" />
        <span className="hidden md:inline">{t('Accessibility')}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4 space-y-4">
          {/* Font Size Controls */}
          <div>
            <div className="flex items-center mb-2">
              <MagnifyingGlassPlusIcon className="h-5 w-5 text-gray-600 mr-2" />
              <span className="text-sm font-medium text-gray-700">{t('Text Size')}</span>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setFontSize('small')} className={`px-2 py-1 text-xs rounded ${fontSize === 'small' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>A-</button>
              <button onClick={() => setFontSize('normal')} className={`px-2 py-1 text-sm rounded ${fontSize === 'normal' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>A</button>
              <button onClick={() => setFontSize('large')} className={`px-2 py-1 text-base rounded ${fontSize === 'large' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>A+</button>
              <button onClick={() => setFontSize('xlarge')} className={`px-2 py-1 text-lg rounded ${fontSize === 'xlarge' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>A++</button>
            </div>
          </div>
          {/* High Contrast */}
          <div>
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`flex items-center w-full px-3 py-2 rounded ${highContrast ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <SunIcon className="h-4 w-4 mr-2" />
              {t('High Contrast')}
            </button>
          </div>
          {/* Voice Commands */}
          <div>
            <button
              onClick={() => setVoiceEnabled && setVoiceEnabled(!voiceEnabled)}
              className={`flex items-center w-full px-3 py-2 rounded ${voiceEnabled ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              <SpeakerWaveIcon className="h-4 w-4 mr-2" />
              {t('Voice Commands')} {voiceEnabled ? '(On)' : '(Off)'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityDropdown;
