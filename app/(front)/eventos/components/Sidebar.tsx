import { Search } from 'lucide-react';

const categories = [
  { name: 'Web Development', count: 25 },
  { name: 'Graphic Design', count: 11 },
  { name: 'Php Programming', count: 17 },
  { name: 'React Js Learning', count: 23 },
  { name: 'Web Design', count: 19 },
];

export default function Sidebar() {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Search Event</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Event Category</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="flex items-center justify-between py-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{category.name}</span>
              </label>
              <span className="text-gray-500">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
