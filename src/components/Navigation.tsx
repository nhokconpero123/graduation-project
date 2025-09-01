import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/gameplay', label: 'Gameplay' },
    { path: '/champions', label: 'Champions' },
    { path: '/how-to-play', label: 'How to Play' },
    { path: '/community', label: 'Community' },
  ];

  return (
    <nav className="fixed w-full z-50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F38]/95 to-black/95 backdrop-blur-md border-b border-[#C89B3C]/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <NavLink 
              to="/" 
              className="text-[#C89B3C] font-display text-2xl hover:text-[#E5B964] transition-colors duration-300"
            >
              League of Legends
            </NavLink>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-[#C89B3C] bg-[#C89B3C]/10'
                          : 'text-gray-300 hover:text-[#C89B3C] hover:bg-[#C89B3C]/5'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://www.leagueoflegends.com/en-us/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 inline-flex items-center px-6 py-2.5 border-2 border-[#C89B3C] text-sm font-medium rounded-lg text-[#C89B3C] hover:bg-[#C89B3C] hover:text-black transition-all duration-300 group"
              >
                <Download className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
                Download
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-400 hover:text-[#C89B3C] hover:bg-[#C89B3C]/10 transition-colors duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden relative bg-[#1B1F38]/95 backdrop-blur-md border-b border-[#C89B3C]/20"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 rounded-lg text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-[#C89B3C] bg-[#C89B3C]/10'
                          : 'text-gray-300 hover:text-[#C89B3C] hover:bg-[#C89B3C]/5'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="https://www.leagueoflegends.com/en-us/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 rounded-lg text-base font-medium text-[#C89B3C] hover:bg-[#C89B3C]/10 transition-all duration-300"
                >
                  <Download className="w-4 h-4 inline-block mr-2" />
                  Download
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;