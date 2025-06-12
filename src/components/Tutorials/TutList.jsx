import { useState } from 'react';
import TutorialCard from './TutCard';

const TutList = ({ tutorials }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const categories = ['all', 'communication', 'payments', 'entertainment', 'productivity', 'safety'];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  const filteredTutorials = tutorials.filter(tutorial => {
    const categoryMatch = selectedCategory === 'all' || tutorial.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || tutorial.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Category Filter */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full capitalize transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <h3 className="text-lg font-medium text-gray-700 mb-3">Difficulty Level</h3>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-full capitalize transition-all ${
                  selectedDifficulty === difficulty
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tutorial Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutorials.map((tutorial) => (
          <TutorialCard key={tutorial.id} tutorial={tutorial} />
        ))}
      </div>

      {filteredTutorials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No tutorials found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default TutList;