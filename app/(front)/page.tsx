import Hero from "./_sections/Hero";
import Features from "./_sections/Features";
import AboutUs from "./_sections/AboutUs";
import Events from "./_sections/Events";
import FAQ from "./_sections/FAQ";
import ScrollToTop from "@/components/ScrollToTop";
import ContactCTA from "./_sections/ContactCTA";
import BlogPosts from "./_sections/BlogPosts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-5/12">
          <Hero />
        </div>
        <div className="hidden px-4 lg:block lg:w-1/12"></div>
        <div className="w-full px-4 lg:w-6/12">
          <div className="lg:ml-auto lg:text-right">
            <div className="relative z-10 inline-block pt-11 lg:pt-0">
              <Image
                src="/santarita/hero-sta-rita.png"
                alt="hero"
                className="max-w-full lg:ml-auto"
                width={515}
                height={491}
              />
            </div>
          </div>
        </div>
      </div>

      <Features />

      {/* <AboutUs /> */}
      <BlogPosts />
      
      <ContactCTA />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between">
          <Events />
          <FAQ />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
