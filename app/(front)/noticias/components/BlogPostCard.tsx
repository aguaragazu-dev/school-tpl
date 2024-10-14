import Image from 'next/image';
import Link from 'next/link';
import { User, MessageSquare, ThumbsUp } from 'lucide-react';

interface BlogPostCardProps {
  id: number;
  image: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  comments: number;
  likes: number;
}

export default function BlogPostCard({
  id,
  image,
  date,
  title,
  excerpt,
  author,
  comments,
  likes,
}: BlogPostCardProps) {
  return (
    <div className="blog-post">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <div className="blog-img">
            <Link href={`/noticias/${id}`}>
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="blog-content p-6">
            <div className="content-box">
              <div className="top-content flex items-start mb-4">
                <div className="blog-date text-center bg-green-500 text-white p-2 rounded mr-4">
                  <p>{date}</p>
                </div>
                <div className="blog-title">
                  <h6 className="text-xl font-bold">
                    <Link
                      href={`/noticias/${id}`}
                      className="hover:text-green-500 transition duration-300"
                    >
                      {title}
                    </Link>
                  </h6>
                </div>
              </div>
              <div className="blog-desk">
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <ul className="list-none flex items-center text-sm text-gray-500">
                  <li className="mr-4">
                    <Link
                      href={`/author/${author}`}
                      className="flex items-center hover:text-green-500 transition duration-300"
                    >
                      <User size={16} className="mr-1" />
                      {author}
                    </Link>
                  </li>
                  <li className="mr-4">
                    <Link
                      href={`/noticias/${id}#comments`}
                      className="flex items-center hover:text-green-500 transition duration-300"
                    >
                      <MessageSquare size={16} className="mr-1" />
                      {comments}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/noticias/${id}`}
                      className="flex items-center hover:text-green-500 transition duration-300"
                    >
                      <ThumbsUp size={16} className="mr-1" />
                      {likes}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
