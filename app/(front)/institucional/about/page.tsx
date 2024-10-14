import Image from 'next/image';

export default function About() {
  return (
    <div>
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-10">About Edulyn</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="About Edulyn"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                At Edulyn, our mission is to provide high-quality education to
                students around the world. We believe in the power of knowledge
                and its ability to transform lives.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision a world where education is accessible to all,
                regardless of geographical or economic barriers. Through
                innovative teaching methods and cutting-edge technology, we aim
                to create a global community of lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt={`Team Member ${member}`}
                  width={300}
                  height={300}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">John Doe</h3>
                  <p className="text-gray-600">Position</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
