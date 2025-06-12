import { Link } from 'react-router-dom';
import { 
  ComputerDesktopIcon, 
  DevicePhoneMobileIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Digital Literacy Program</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Make your Loved One's Digitally Independent.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/tutorials"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Start Learning
            </Link>
            <Link
              to="/ai-chat"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Chat with DigiBuddy
            </Link>
          </div>

          {/* Feature Icons */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DevicePhoneMobileIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Learn WhatsApp, UPI payments, and more</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <ComputerDesktopIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Computer Basics</h3>
              <p className="text-gray-600">Email, browsing, and online safety</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <UserGroupIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Video Calling</h3>
              <p className="text-gray-600">Connect with family and friends online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;