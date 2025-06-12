import TutList from '../Tutorials/TutList';
import { tutorialsData } from '../data/tutorialsData.js';
import { BookOpenIcon } from '@heroicons/react/24/outline';

const Tutorials = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <BookOpenIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Video Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn at your own pace with our easy-to-follow video tutorials. 
            Available in multiple languages with step-by-step instructions.
          </p>
        </div>

        {/* Tutorial List */}
        <TutList tutorials={tutorialsData} />
      </div>
    </div>
  );
};

export default Tutorials;