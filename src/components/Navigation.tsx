// Shared navigation shell. The layout is intentionally split into reusable data and a single
// helper so both desktop and mobile menu states stay consistent and easy to extend.
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/gameplay', label: 'Gameplay' },
  { path: '/champions', label: 'Champions' },
  { path: '/how-to-play', label: 'How to Play' },
  { path: '/community', label: 'Community' },
] as const;

const getNavLinkClasses = (isActive: boolean, isMobile = false) => {
  const baseClasses = isMobile
    ? 'block rounded-lg px-4 py-2.5 text-base font-medium transition-all duration-300'
    : 'rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300';

  return `${baseClasses} ${
    isActive
      ? 'bg-[#C89B3C]/10 text-[#C89B3C]'
      : 'text-gray-300 hover:bg-[#C89B3C]/5 hover:text-[#C89B3C]'
  }`;
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full">
      <div className="absolute inset-0 border-b border-[#C89B3C]/20 bg-gradient-to-r from-[#1B1F38]/95 to-black/95 backdrop-blur-md" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <NavLink
              to="/"
              className="text-2xl text-[#C89B3C] transition-colors duration-300 hover:text-[#E5B964]"
            >
              League of Legends
            </NavLink>
          </motion.div>

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
                    className={({ isActive }) => getNavLinkClasses(isActive)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://www.leagueoflegends.com/en-us/download/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 inline-flex items-center rounded-lg border-2 border-[#C89B3C] px-6 py-2.5 text-sm font-medium text-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C] hover:text-black group"
              >
                <Download className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
                Download
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="md:hidden">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-400 transition-colors duration-300 hover:bg-[#C89B3C]/10 hover:text-[#C89B3C] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative border-b border-[#C89B3C]/20 bg-[#1B1F38]/95 backdrop-blur-md md:hidden"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
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
                    className={({ isActive }) => getNavLinkClasses(isActive, true)}
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
                  className="block rounded-lg px-4 py-2.5 text-base font-medium text-[#C89B3C] transition-all duration-300 hover:bg-[#C89B3C]/10"
                >
                  <Download className="mr-2 inline-block h-4 w-4" />
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