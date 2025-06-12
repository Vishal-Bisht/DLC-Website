import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="py-12">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
          {t('About Digital Literacy Campaign')}
        </h1>
        <p className="text-xl text-gray-700 mb-8 text-center">
          {t('The Digital Literacy Campaign (DLC) by CollegeTips.in is dedicated to empowering people of all ages with essential digital skills. Our mission is to make technology accessible, understandable, and useful for everyone, especially seniors and beginners.')}
        </p>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t('Our Vision')}</h2>
          <p className="text-gray-700 mb-2">
            {t('We envision a world where everyone can confidently use digital tools to connect, learn, and thrive. Through easy-to-follow tutorials, accessible features, and personalized support, we help bridge the digital divide.')}
          </p>
        </div>
        <div className="bg-blue-50 rounded-2xl shadow p-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">{t('Why Choose Us?')}</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>{t('Simple, step-by-step video tutorials')}</li>
            <li>{t('Support for multiple Indian languages')}</li>
            <li>{t('Accessibility options for seniors and visually impaired')}</li>
            <li>{t('Friendly AI chatbot for instant help')}</li>
            <li>{t('Trusted by thousands of learners')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
