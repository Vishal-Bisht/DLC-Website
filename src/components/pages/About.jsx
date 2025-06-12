import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container-custom max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-8 text-center drop-shadow-lg">
          {t('About Digital Literacy Program')}
        </h1>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* For Parents */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center relative overflow-hidden">
            <img src="/public/parents.webp" alt="Parents" className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-100" onError={e => e.target.style.display='none'} />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">For Parents</h2>
            <p className="text-gray-700 mb-2 text-center">Nowadays every parent has an android or iOS device, but they don't know how to use it, they are likely dependent on you even for small things, right?</p>
            <p className="text-gray-700 mb-2 font-semibold text-center">This is really sad... <span className="text-blue-600">NO WORRIES</span></p>
            <p className="text-gray-700 mb-2 text-center">Here is the solution for all your problems. <span className="font-bold">CollegeTips.in</span> is providing a wonderful chance for you to make your parents go <span className="font-bold text-blue-600">DIGITALLY INDEPENDENT</span>. Digital Literacy Program is for your parents and other elder members to help them get a stronger hold on the digital media platforms. We will also provide tutorials about latest Trends & Tech terms like what is tweet, meme, viral etc.</p>
            <p className="text-gray-700 mb-2 text-center">Most Importantly... <span className="font-bold">Dance, Communication, Fitness tutorials & Fashion Style Tips too.</span></p>
            <div className="bg-blue-50 rounded-xl p-4 mt-4 mb-2 w-full">
              <h3 className="font-semibold text-blue-700 mb-1">How it Works?</h3>
              <p className="text-gray-700">No need to go anywhere or download any new app. Every digital need and tutorial will be available on their WhatsApp in their respective language. It's time to gift, the ones who always worked hard to provide us the best things ever.</p>
            </div>
            <div className="mt-2 text-lg font-bold text-green-700">Special Price: Just Rs.499 Only!!</div>
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow transition">Gift to Parents</button>
          </div>
          {/* For Students */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center relative overflow-hidden">
            <img src="/public/students.webp" alt="Students" className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-100" onError={e => e.target.style.display='none'} />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">For Students</h2>
            <p className="text-gray-700 mb-2 text-center">Summer Internship Program 2025</p>
            <p className="text-gray-700 mb-2 text-center">Every year, CollegeTips.in comes up with its Summer Internship Program, the coolest and fun-learning internship you'll ever come across. This internship covers work fields like Social Media / Digital Marketing, Content Creation, HR, Finance, Media & PR, Sales, Marketing, Operations, Management, Social Work, Film Production, AI and more.</p>
            <ul className="list-disc pl-5 text-gray-700 mb-2 text-left w-full">
              <li>Duration: 30 Days</li>
              <li>Stipend: Up To Rs. 10,000</li>
              <li>Certificate, LOR, and fun memories</li>
            </ul>
            <p className="text-gray-700 text-center">If you have the zeal to learn something new and want to be part of this roller-coaster ride, register yourself now!</p>
            <button className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold shadow transition">Register Now</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* For Creators */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center relative overflow-hidden">
            <img src="/public/creators.webp" alt="Creators" className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-100" onError={e => e.target.style.display='none'} />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">For Creators</h2>
            <p className="text-gray-700 mb-2 text-center">Social Media Training Program.</p>
            <p className="text-gray-700 mb-2 text-center">CollegeTips.in is India's fastest growing youth community that provides a platform for youngsters to follow their passion and enhance their skills.</p>
            <p className="text-gray-700 mb-2 text-center">It is a Practical Based Virtual Training Program where you'll learn and practically implement your learnings for straight 2 months.</p>
            <p className="text-gray-700 mb-2 text-center">You will specifically work on Social Media Marketing and Content Creation for in-house projects of CollegeTips.in.</p>
            <ul className="list-disc pl-5 text-gray-700 mb-2 text-left w-full">
              <li>Training Course Certificate</li>
              <li>CT Care Social Work Certificate</li>
              <li>Internship Certificate</li>
            </ul>
            <div className="mt-2 text-lg font-bold text-green-700">Limited Offer: Rs.35000 Only</div>
            <button className="mt-4 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-full font-semibold shadow transition">Become a Creator</button>
          </div>
          {/* For Everyone */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center relative overflow-hidden">
            <img src="/public/lifestyle.webp" alt="Lifestyle" className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-100" onError={e => e.target.style.display='none'} />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">For Everyone</h2>
            <p className="text-gray-700 mb-2 text-center">Lifestyle Classes</p>
            <p className="text-gray-700 mb-2 text-center">In this Program we will enhance people's personality, interests, opinions, behaviour, and behavioural orientations. Our goal is to enhance people's "way or style of living".</p>
            <ul className="list-disc pl-5 text-gray-700 mb-2 text-left w-full">
              <li>Dance</li>
              <li>Communication</li>
              <li>Fashion</li>
              <li>Fitness</li>
            </ul>
            <p className="text-gray-700 mb-2 text-center">This program will build confidence and self-esteem in you, to stand out in society.</p>
            <div className="mt-2 text-lg font-bold text-green-700">Just Rs.499 for whole course (Early Bird Offer Price)</div>
            <button className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-semibold shadow transition">Join Lifestyle Classes</button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* For Society */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center relative overflow-hidden">
            <img src="/public/society.webp" alt="Society" className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-4 border-blue-100" onError={e => e.target.style.display='none'} />
            <h2 className="text-2xl font-bold text-blue-600 mb-2">For Society</h2>
            <p className="text-gray-700 mb-2 text-center">CT Care Volunteer Program</p>
            <p className="text-gray-700 mb-2 text-center">We all want a healthy community, a peaceful place where people can live and work together in harmony. We all have a lot of ideas to make that happen but the big question is, who will make that happen?</p>
            <p className="text-gray-700 mb-2 text-center">We at CollegeTips.in Community are looking for students, who are interested in volunteering assignments. These assignments include various social reforming activities. We are providing a platform where volunteers and the needy authorities can connect with each other and together they can work for a social cause.</p>
            <p className="text-gray-700 mb-2 text-center">We want to channelize the power of students for the betterment of upcoming INDIA. If you want to do something to help our country grow, then register yourself now!</p>
            <ul className="list-disc pl-5 text-gray-700 mb-2 text-left w-full">
              <li>Part Time/Full Time</li>
              <li>Certificate for Volunteers</li>
            </ul>
            <button className="mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold shadow transition">Become a Volunteer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
