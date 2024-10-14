import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 relative">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow">
              <Image
                src="/placeholder.svg?height=100&width=150"
                alt="Students"
                width={150}
                height={100}
                className="rounded"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded">
                <Play className="w-12 h-12 text-white" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h2 className="text-3xl font-bold mb-6">
              We Have Experienced Professionals & We Do Our Best To Achieve Your
              Goal. Your Happiness Is Our First Priority.
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              error ut provident vel repellendus nihil atque possimus aliquam,
              mollitia tempora neque voluptate debitis illum veniam.Numquam
              blanditiis dignissimos laboriosam illum ut officia.
            </p>
            <p className="text-gray-600 mb-6">
              Nam aperiam autem nesciunt perferendis id. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Quas nulla sequi pariatur quam
              animi ipsum molestias assumenda cumque.
            </p>
            <div className="flex justify-between items-center mb-6">
              <div className="text-center">
                <span className="block text-4xl font-bold text-red-500">
                  970+
                </span>
                <span className="text-gray-600">Happy Students</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-purple-500">
                  130+
                </span>
                <span className="text-gray-600">Teachers</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-blue-500">
                  340+
                </span>
                <span className="text-gray-600">Courses</span>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition duration-300"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
