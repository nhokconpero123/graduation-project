import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B1F38] border-t border-[#C89B3C]/20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display text-[#C89B3C] mb-4">League of Legends</h3>
            <p className="text-gray-400 mb-6">
              Experience the world's most popular MOBA game. Choose from over 150 champions and battle
              across multiple iconic battlefields.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display text-[#C89B3C] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-[#C89B3C] transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/champions" className="text-gray-400 hover:text-[#C89B3C] transition-colors">
                  Champions
                </NavLink>
              </li>
              <li>
                <NavLink to="/gameplay" className="text-gray-400 hover:text-[#C89B3C] transition-colors">
                  Gameplay
                </NavLink>
              </li>
              <li>
                <NavLink to="/community" className="text-gray-400 hover:text-[#C89B3C] transition-colors">
                  Community
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-display text-[#C89B3C] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/riotgames"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#C89B3C] transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com/leagueoflegends"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#C89B3C] transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://youtube.com/leagueoflegends"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#C89B3C] transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitch.tv/riotgames"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-[#C89B3C] transition-colors"
              >
                <Twitch className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} League of Legends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;