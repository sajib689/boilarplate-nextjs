const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Subject"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full cursor-pointer transition duration-75 bg-gray-900 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md shadow"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
