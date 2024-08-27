import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const recentNews = [
    { id: 1, title: "Breaking News: Big Event!" },
    { id: 2, title: "Latest Tech Updates" },
    { id: 3, title: "Market Insights" },
  ];

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8v">
        {/* Social Media Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-lg font-bold mb-4">Follow Us</h1>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-500">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Recent News Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-bold mb-4">Recent News</h2>
          <ul className="space-y-2">
            {recentNews.map((news) => (
              <li key={news.id}>
                <a href="#" className="hover:underline">
                  {news.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Membership Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-bold mb-4">Become a Member</h3>
          <p className="mb-4">Join our membership program to get exclusive news and updates.</p>
          <a
            href="#"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md"
          >
            Sign Up Now
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-600 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} News Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
