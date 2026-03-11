import { motion } from 'motion/react';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/products' },
    { name: 'Advisory', path: '/services' },
    { name: 'Zoho Soultions', path: '/zoho'},
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity p-3" />
              <div className="relative w-10 h-10 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl flex items-center justify-center border border-indigo-400/20 group-hover:scale-110 transition-transform">
                <img
                  src="/applogo.png"
                  alt="Zoho Logo"
                  className="w-22 h-22 object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-gray-900">Arthaveda</div>
              <div className="text-xs text-gray-600">Strategic Finance. Intelligent Automation.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? 'text-indigo-600 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link to = "/contact">
          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
            >
              Book a Demo
            </motion.button>
          </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden py-6 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm transition-colors ${
                    location.pathname === item.path
                      ? 'text-indigo-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to = "/contact">
              <button className="mt-4 w-full px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-semibold text-sm">
                Book a Demo
              </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}