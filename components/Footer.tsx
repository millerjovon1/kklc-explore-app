const Footer = () => {
  return (
    <footer className="footer bg-[#264653] text-white text-left flex flex-wrap justify-evenly items-center p-4 mt-2">
      <div className="contact-info flex flex-col items-start">
        <h2 className="text-lg font-semibold">Contact Information</h2>
        <p><strong>Email:</strong> ghpshonan@gmail.com</p>
      </div>

      <div className="company-info flex flex-col items-start">
        <h3 className="text-lg font-semibold">Sponsors</h3>
        <p>Green Heart Place</p>
      </div>

      <div className="subscription-info flex flex-col items-start">
        <h2 className="text-lg font-semibold">Subscription & Company Information</h2>
        <p><strong>Subscribe to our newsletter:</strong></p>
        <form action="#" className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="px-4 py-2 rounded-md mb-2 border"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
        </form>
      </div>

      <div className="footer-tag text-center w-full mt-4">
        <h1 className="text-sm sm:text-lg md:text-xl">Powered by Green Heart Place & DAS Technologies</h1>
      </div>
    </footer>
  );
};

export default Footer;
