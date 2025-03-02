import { FaFacebookF, FaTwitter, FaSkype, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d251c] text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lime-400 text-2xl font-bold">Agridex</h2>
          <p className="mt-2 text-gray-300">
            We provide Agriculture Services and solutions to help farmers and help them grow in their lives.
          </p>
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="text-gray-300 hover:text-lime-400 cursor-pointer" />
            <FaTwitter className="text-gray-300 hover:text-lime-400 cursor-pointer" />
            <FaSkype className="text-lime-400 cursor-pointer" />
            <FaLinkedinIn className="text-gray-300 hover:text-lime-400 cursor-pointer" />
          </div>
        </div>
        
        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">LINKS</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-lime-400 cursor-pointer">About</li>
            <li className="hover:text-lime-400 cursor-pointer">Services</li>
            <li className="hover:text-lime-400 cursor-pointer">Blog</li>
            <li className="hover:text-lime-400 cursor-pointer">Contact</li>
          </ul>
        </div>
        
        {/* Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">INFO</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
                AITR , Indore
            </li>
            <li>123456789</li>
            <li>📧 TheCtrlFreaks@gmail.com</li>
          </ul>
        </div>
        
        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
          <p className="text-gray-300 mb-2">Sign up to get updates & news.</p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-md outline-none"
          />
          <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-md  transition">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-400 border-t border-gray-700 pt-6">
        <p>© 2025 All Right Reserved by The Ctrl Freaks</p>
        <div className="flex justify-center gap-4 mt-2">
          <span className="hover:text-lime-400 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-lime-400 cursor-pointer">Terms of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
