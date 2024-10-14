import Image from 'next/image';
import { User, MessageSquare, ThumbsUp } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    image: '/placeholder.svg?height=200&width=300',
    date: '25 Mar',
    title: 'Libero nulla illo quam iure reiciendis maxime.',
    excerpt:
      'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.',
    author: 'Jhon',
    comments: 19,
    likes: 37,
  },
  {
    id: 2,
    image: '/placeholder.svg?height=200&width=300',
    date: '25 Mar',
    title: 'Libero nulla illo quam iure reiciendis maxime.',
    excerpt:
      'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.',
    author: 'Jhon',
    comments: 19,
    likes: 37,
  },
  {
    id: 3,
    image: '/placeholder.svg?height=200&width=300',
    date: '25 Mar',
    title: 'Libero nulla illo quam iure reiciendis maxime.',
    excerpt:
      'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.',
    author: 'Jhon',
    comments: 19,
    likes: 37,
  },
  {
    id: 4,
    image: '/placeholder.svg?height=200&width=300',
    date: '25 Mar',
    title: 'Libero nulla illo quam iure reiciendis maxime.',
    excerpt:
      'Lorem ipsum dolor sit amet consecte adipisicing elit. Quisquam excepturi eum necessitatibus.',
    author: 'Jhon',
    comments: 19,
    likes: 37,
  },
];

export default function BlogPosts() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Lets See What We Can Show To You Our <br />
        <span className="text-navy-blue">Useful Blog Article Post.</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={200}
                className="w-full"
              />
              <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded">
                {post.date}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <User size={16} className="mr-1" />
                <span className="mr-4">{post.author}</span>
                <MessageSquare size={16} className="mr-1" />
                <span className="mr-4">{post.comments}</span>
                <ThumbsUp size={16} className="mr-1" />
                <span>{post.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
