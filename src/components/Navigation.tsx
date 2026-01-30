import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' },
    { name: 'Packaging & Logistics', href: '#packaging' },
    { name: 'Quality & Compliance', href: '#quality' },
    { name: 'Why TPS', href: '#why-tps' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img
              src="/Industries_tps/screenshot_2025-12-23_110123.png"
              alt="TPS Industries"
              className="h-16 w-auto"
            />
          </div>

          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:bg-[#003060] hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#003060] p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:bg-[#003060] hover:text-white px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
