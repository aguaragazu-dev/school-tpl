import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero2 = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-20"></div>
      <div className="relative z-10 text-center space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in-up">
          Welcome to Our Modern Landing Page
        </h1>
        <p className="text-xl text-gray-700 animate-fade-in-up animation-delay-200">
          Discover our amazing features, latest news, and upcoming events.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
          <Button asChild>
            <Link href="/noticias">Explore Blog</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/eventos">View Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
