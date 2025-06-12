import FbForm from '../feedback/FbForm';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const Feedback = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <ChatBubbleLeftRightIcon className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Share Your Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help us improve our platform. Your suggestions and experiences matter to us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Feedback Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <FbForm />
          </div>

          {/* Why Feedback Matters */}
          <div className="space-y-8">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Why Your Feedback Matters
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Helps us create better tutorials for your needs
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Improves accessibility features
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Guides us in adding new languages
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Shapes future content and features
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How We Use Your Feedback
              </h3>
              <p className="text-gray-700">
                Every piece of feedback is reviewed by our team. We use your suggestions to:
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Update existing tutorials
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Create new content
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Enhance user experience
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  Fix technical issues
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contact Support
              </h3>
              <p className="text-gray-700 mb-3">
                Need immediate help? Reach out to us:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> mail@collegetips.in<br />
                <strong>Phone:</strong> +91 7024577333 <br />
                <strong>Hours:</strong> Mon-Sat, 9 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;