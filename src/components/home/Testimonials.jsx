import { StarIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      age: '65',
      location: 'Delhi',
      content: t('I learned to video call my grandchildren abroad. The tutorials are so simple!'),
      rating: 5
    },
    {
      name: 'Kamala Devi',
      age: '58',
      location: 'Chennai',
      content: t('Now I can do online banking and pay bills myself. Very helpful platform.'),
      rating: 5
    },
    {
      name: 'Suresh Patel',
      age: '62',
      location: 'Mumbai',
      content: t('The voice commands feature helps me navigate easily. Great for seniors!'),
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('Success Stories')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('Hear from people who have transformed their digital lives')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{t('Age')} {testimonial.age}, {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;