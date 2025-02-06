const Footer: React.FC = () => {
  return (
    <footer className="bg-[#264653] text-white px-4 py-6">
      {/* Container to limit the width of footer content */}
      <div className="max-w-screen-lg mx-auto">
        {/* Container for the info columns */}
        <div className="flex flex-col md:flex-row md:justify-around">
          {/* Contact Information */}
          <div className="mb-4 md:mb-0 md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p>
              <strong>Email:</strong> ghpshonan@gmail.com
            </p>
          </div>

          {/* Sponsors */}
          <div className="mb-4 md:mb-0 md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Sponsors</h3>
            <p>Green Heart Place</p>
          </div>

          {/* Subscription & Company Information */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">
              Subscription & Company Information
            </h2>
            <p className="mb-2">
              <strong>Subscribe to our newsletter:</strong>
            </p>
            <form action="#" className="flex flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="px-4 py-2 rounded-md mb-2 border text-black"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Tagline */}
        <div className="text-center mt-6">
          <h1 className="text-sm sm:text-lg md:text-xl">
            Powered by Green Heart Place &amp; DAS Technologies

          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
