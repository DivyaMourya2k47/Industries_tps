import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#003060] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src="/screenshot_2025-12-23_110123.png"
              alt="TPS Industries"
              className="h-16 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-gray-300 text-sm">
              Your Trusted Partner in Industrial Chemical Trading & Distribution
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FDB913]">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-[#FDB913] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#FDB913] transition-colors">About Us</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-[#FDB913] transition-colors">Products</a></li>
              <li><a href="#industries" className="text-gray-300 hover:text-[#FDB913] transition-colors">Industries</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#FDB913] transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FDB913]">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0 text-[#FDB913]" />
                <span className="text-gray-300">Boisar, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0 text-[#FDB913]" />
                <a href="tel:9373956572" className="text-gray-300 hover:text-[#FDB913] transition-colors">
                  +91 9373956572
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0 text-[#FDB913]" />
                <a href="mailto:sales@tpsglobal.co" className="text-gray-300 hover:text-[#FDB913] transition-colors">
                  sales@tpsglobal.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} TPS Industries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
