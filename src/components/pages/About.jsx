import { 
  AcademicCapIcon, 
  UsersIcon, 
  GlobeAltIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';
import Button from '../common/Button';

const About = () => {
  const stats = [
    { label: 'Students Enrolled', value: '10,000+', icon: UsersIcon },
    { label: 'Courses Offered', value: '50+', icon: AcademicCapIcon },
    { label: 'Cities Reached', value: '100+', icon: GlobeAltIcon },
    { label: 'Success Rate', value: '95%', icon: SparklesIcon },
  ];

  const values = [
    {
      title: 'Quality Education',
      description: 'We maintain high standards in curriculum design and delivery to ensure our students receive the best education.'
    },
    {
      title: 'Student-Centric Approach',
      description: 'Every decision we make is centered around our students\' success and their learning experience.'
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our teaching methods and adopt new technologies to enhance learning.'
    },
    {
      title: 'Accessibility',
      description: 'Education should be accessible to all. We ensure our programs are affordable and flexible.'
    }
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About DLC College Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students through quality distance education since 2010
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                DLC College Tips was founded with a simple mission: to make quality higher 
                education accessible to everyone, regardless of their location or circumstances.
              </p>
              <p>
                Over the years, we've partnered with leading universities and institutions to 
                offer UGC-approved distance learning programs that meet the highest academic standards.
              </p>
              <p>
                Our commitment to student success has helped thousands of learners achieve their 
                educational goals while balancing work, family, and other responsibilities.
              </p>
            </div>
            <Button to="/contact" size="lg" className="mt-8">
              Start Your Journey
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3" 
              alt="University building" 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Impact in Numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who chose distance learning with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/courses" variant="secondary" size="lg">
              Browse Courses
            </Button>
            <Button to="/contact" variant="outline" size="lg" className="!text-white !border-white hover:!bg-white hover:!text-primary-600">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;