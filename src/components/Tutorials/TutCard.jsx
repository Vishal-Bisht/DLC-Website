import { PlayCircleIcon, ClockIcon, SignalIcon } from '@heroicons/react/24/outline';

const TutCard = ({ tutorial }) => {
  const difficultyColors = {
    beginner: 'bg-green-100 text-green-700',
    intermediate: 'bg-yellow-100 text-yellow-700',
    advanced: 'bg-red-100 text-red-700'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
      <div className="relative">
        <img
          src={tutorial.thumbnail}
          alt={tutorial.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <PlayCircleIcon className="h-16 w-16 text-white" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {tutorial.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {tutorial.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{tutorial.duration}</span>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyColors[tutorial.difficulty]}`}>
            {tutorial.difficulty}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tutorial.languages.map((lang, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutCard;