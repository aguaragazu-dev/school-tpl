import { ThumbsUp, BookOpen, Users } from 'lucide-react';

const features = [
  {
    icon: <ThumbsUp className="w-12 h-12 text-red-500" />,
    title: 'POPULAR COURSES',
    description: 'Lorem ipsum dolor sit, amet consectetur elit.',
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple-500" />,
    title: 'MODERN LIBRARY',
    description: 'Lorem ipsum dolor sit, amet consectetur elit.',
  },
  {
    icon: <Users className="w-12 h-12 text-blue-500" />,
    title: 'QUALIFIED TEACHER',
    description: 'Lorem ipsum dolor sit, amet consectetur elit.',
  },
];

export default function Features() {
  return (
    <div className="container mx-auto px-4 -mt-20 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
