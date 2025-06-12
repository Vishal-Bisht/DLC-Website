import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'Home': 'Home',
      'Tutorials': 'Tutorials',
      'AI Chat': 'AI Chat',
      'Feedback': 'Feedback',
      'Digital Literacy Campaign': 'Digital Literacy Campaign',
      'Accessibility': 'Accessibility',
      'High Contrast': 'High Contrast',
      'Voice Commands': 'Voice Commands',
      'Text Size': 'Text Size',
      // Add more keys as needed
    }
  },
  hi: {
    translation: {
      'Home': 'होम',
      'Tutorials': 'ट्यूटोरियल',
      'AI Chat': 'एआई चैट',
      'Feedback': 'प्रतिक्रिया',
      'Digital Literacy Campaign': 'डिजिटल साक्षरता अभियान',
      'Accessibility': 'सुलभता',
      'High Contrast': 'हाई कॉन्ट्रास्ट',
      'Voice Commands': 'वॉयस कमांड',
      'Text Size': 'टेक्स्ट साइज',
      // Add more keys as needed
    }
  },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
