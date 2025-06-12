import { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [language, setLanguage] = useState('en');
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  useEffect(() => {
    // Apply font size
    const sizes = {
      small: '14px',
      normal: '16px',
      large: '20px',
      xlarge: '24px'
    };
    document.documentElement.style.fontSize = sizes[fontSize];

    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [fontSize, highContrast]);

  const value = {
    fontSize,
    setFontSize,
    highContrast,
    setHighContrast,
    language,
    setLanguage,
    voiceEnabled,
    setVoiceEnabled
  };

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
};