import { Link } from 'react-router-dom';
import { 
  ComputerDesktopIcon,
  PhoneIcon,
  EnvelopeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <ComputerDesktopIcon className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">DLC</span>
            </div>
            <p className="text-gray-400">
              {t('Digital Literacy Campaign by CollegeTips.in - Empowering everyone with digital skills.')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Quick Links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  {t('Home')}
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                  {t('Tutorials')}
                </Link>
              </li>
              <li>
                <Link to="/ai-chat" className="text-gray-400 hover:text-white transition-colors">
                  {t('AI Chat')}
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-400 hover:text-white transition-colors">
                  {t('Feedback')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('Get Help')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <PhoneIcon className="h-5 w-5 mr-2" />
                 +91 7024577333
              </li>
              <li className="flex items-center text-gray-400">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                mail@collegetips.in
              </li>
            </ul>
          </div>

          {/* Initiative By */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('An Initiative By')}</h3>
            <p className="text-gray-400 mb-4">CollegeTips.in</p>
            <p className="text-sm text-gray-500">
              {t('Committed to bridging the digital divide')}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            {t('Made with')} <HeartIcon className="h-5 w-5 text-red-500 mx-2" /> {t('for Digital India')}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2025 DLC - Digital Literacy Campaign. {t('All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;