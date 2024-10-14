import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface FeaturedNewsCardProps {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
}

export default function FeaturedNewsCard({
  id,
  image,
  title,
  excerpt,
  author,
  date,
}: FeaturedNewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">
            <Link
              href={`/blog/${id}`}
              className="text-navy-blue hover:text-green-500 transition duration-300"
            >
              {title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center">
            <Image
              src={author.avatar}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full mr-4"
            />
            <div>
              <p className="font-semibold">{author.name}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
