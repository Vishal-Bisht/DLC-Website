import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TutCard from '../Tutorials/TutCard';
import { tutorialsData } from '../data/tutorialsData.js';

const Preview = () => {
  const { t } = useTranslation();
  const featuredTutorials = tutorialsData.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('Popular Tutorials')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('Start with these easy tutorials to begin your digital journey')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTutorials.map((tutorial) => (
            <TutCard key={tutorial.id} tutorial={tutorial} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/tutorials"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            {t('View All Tutorials')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Preview;