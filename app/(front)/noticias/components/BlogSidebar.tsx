import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

interface RecentPost {
  id: number;
  title: string;
  image: string;
  date: string;
}

interface SidebarProps {
  categories: { name: string; count: number }[];
  recentPosts: RecentPost[];
  tags: string[];
}

export default function BlogSidebar({
  categories,
  recentPosts,
  tags,
}: SidebarProps) {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Search</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search Here"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="text-gray-400" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Course Category</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-2 border-b last:border-b-0"
            >
              <span>{category.name}</span>
              <span className="text-gray-500">({category.count})</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Recent Post</h2>
        <ul className="space-y-4">
          {recentPosts.map((post) => (
            <li key={post.id} className="flex space-x-4">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h3 className="font-semibold">
                  <Link
                    href={`/blog/${post.id}`}
                    className="hover:text-green-500 transition duration-300"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Link
              key={index}
              href={`/tag/${tag}`}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-green-500 hover:text-white transition duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
