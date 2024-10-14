import Hero from './_sections/Hero';
import Features from './_sections/Features';
import AboutUs from './_sections/AboutUs';
import Events from './_sections/Events';
import FAQ from './_sections/FAQ';
import ScrollToTop from '@/components/ScrollToTop';
import ContactCTA from './_sections/ContactCTA';
import BlogPosts from './_sections/BlogPosts';
import BlogPostsSection from './noticias/components/BlogPostsSection';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <AboutUs />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between">
          <Events />
          <FAQ />
        </div>
      </div>
      <ContactCTA />
      <BlogPostsSection />
      <ScrollToTop />
    </div>
  );
}
