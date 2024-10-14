import BlogPostCard from './BlogPostCard';

const blogPosts = [
  {
    id: 1,
    image: '/placeholder.svg?height=400&width=600',
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
    image: '/placeholder.svg?height=400&width=600',
    date: '26 Mar',
    title: 'Quo vadis? The future of AI and machine learning',
    excerpt:
      'Explore the cutting-edge developments in AI and machine learning, and their potential impact on various industries.',
    author: 'Jane',
    comments: 23,
    likes: 45,
  },
  {
    id: 3,
    image: '/placeholder.svg?height=400&width=600',
    date: '27 Mar',
    title: 'The rise of remote work: Challenges and opportunities',
    excerpt:
      'Discover how the shift to remote work is reshaping the modern workplace and what it means for employees and employers alike.',
    author: 'Mike',
    comments: 31,
    likes: 52,
  },
  {
    id: 4,
    image: '/placeholder.svg?height=400&width=600',
    date: '28 Mar',
    title: 'Sustainable living: Small changes, big impact',
    excerpt:
      'Learn about simple yet effective ways to adopt a more sustainable lifestyle and contribute to a healthier planet.',
    author: 'Sarah',
    comments: 27,
    likes: 41,
  },
];

export default function BlogPostsSection() {
  return (
    <section className="home-blog-area py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="sec-title text-center mb-12">
          <h4 className="text-3xl md:text-4xl font-bold">
            Lets See What We Can Show To You Our <br />
            <span className="text-green-500">Useful Blog Article Post.</span>
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
