
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          Welcome to our platform! We are dedicated to providing top-notch services
          to help you achieve your goals. Our mission is to make your experience
          seamless, efficient, and rewarding.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>
              To be a trusted and innovative platform that transforms the way users
              engage with technology and services.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              Empower users through cutting-edge tools, reliable support, and
              user-friendly solutions tailored to modern needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
            <p>
              We blend creativity with technical excellence, ensuring every user
              interaction is smooth, intuitive, and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
