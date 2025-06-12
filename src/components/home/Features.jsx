import { 
  MicrophoneIcon,
  LanguageIcon,
  EyeIcon,
  ChatBubbleBottomCenterTextIcon,
  VideoCameraIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: VideoCameraIcon,
      title: 'Video Tutorials',
      description: 'Easy-to-follow video guides in multiple languages',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Commands',
      description: 'Navigate using voice for hands-free learning',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: LanguageIcon,
      title: 'Multi-Language Support',
      description: 'Content available in Hindi, Tamil, Telugu, and more',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: EyeIcon,
      title: 'Large Text & Icons',
      description: 'Adjustable text size for comfortable reading',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      title: 'AI Assistant',
      description: '24/7 help from our friendly DigiBuddy chatbot',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Safe & Secure',
      description: 'Learn about online safety and privacy',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Designed for Easy Learning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is specially designed with features that make digital learning simple and enjoyable for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className={`inline-flex p-4 rounded-lg ${feature.color} mb-4`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;