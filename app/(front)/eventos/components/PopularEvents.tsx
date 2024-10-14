import Image from 'next/image';
import Link from 'next/link';

const popularEvents = [
  {
    id: 1,
    title: 'Php & mySql Adv Programming',
    image: '/placeholder.svg?height=80&width=80',
    price: 20.0,
    rating: 5,
  },
  {
    id: 2,
    title: 'Microsoft Excel for Beginner',
    image: '/placeholder.svg?height=80&width=80',
    price: 13.0,
    rating: 5,
  },
  {
    id: 3,
    title: 'Digital Marketing Course',
    image: '/placeholder.svg?height=80&width=80',
    price: 15.0,
    rating: 5,
  },
];

export default function PopularEvents() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">Popular Course</h2>
      <div className="space-y-4">
        {popularEvents.map((course) => (
          <Link
            key={course.id}
            href={`/courses/${course.id}`}
            className="flex items-center hover:bg-gray-100 p-2 rounded transition duration-300"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={80}
              height={80}
              className="rounded"
            />
            <div className="ml-4">
              <h3 className="font-semibold">{course.title}</h3>
              <div className="flex items-center">
                {[...Array(course.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-green-500 font-bold">
                ${course.price.toFixed(2)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
