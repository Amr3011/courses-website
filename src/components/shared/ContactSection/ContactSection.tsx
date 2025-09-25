import instructor from "../../../../public/assets/instructor.webp";
const ContactSection = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Side - Image and Text */}
        <div className="w-full lg:w-2/5">
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={instructor}
              alt="Instructor"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-700 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <div className="pt-6">
              <h3 className="font-medium text-xl mb-4">
                Follow Our Social Account :
              </h3>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 2H1L9.26086 13.0145L1.44995 22H4.09998L10.4883 14.651L16 22H23L14.3917 10.5928L21.8001 2H19.15L13.1643 8.88952L8 2Z" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.24V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.5 1.25a5.25 5.25 0 15.25 5.25v11a5.25 5.25 0 01-5.25 5.25h-11a5.25 5.25 0 01-5.25-5.25v-11a5.25 5.25 0 015.25-5.25h11zm-5.5 7.25a4 4 0 100 8 4 4 0 000-8zm0-2a6 6 0 110 12 6 6 0 010-12zm6-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            We'd Love to Hear from You
          </h2>

          <div className="bg-gray-100 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm">
            <form className="space-y-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Example Text"
                  rows={7}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full px-8 py-3 transition-colors duration-200 text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
