// Footer layout and trust-building links. This keeps the website footer predictable and
// reduces repeated markup by storing the social links in a single, easy-to-update array.
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Github, Twitter, Youtube, Twitch } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/riotgames', label: 'GitHub', Icon: Github },
  { href: 'https://twitter.com/leagueoflegends', label: 'Twitter', Icon: Twitter },
  { href: 'https://youtube.com/leagueoflegends', label: 'YouTube', Icon: Youtube },
  { href: 'https://twitch.tv/riotgames', label: 'Twitch', Icon: Twitch },
] as const;

const quickLinks = [
  { path: '/about', label: 'About' },
  { path: '/champions', label: 'Champions' },
  { path: '/gameplay', label: 'Gameplay' },
  { path: '/community', label: 'Community' },
] as const;

const Footer = () => {
  return (
    <footer className="border-t border-[#C89B3C]/20 bg-[#1B1F38]">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl text-[#C89B3C]">League of Legends</h3>
            <p className="mb-6 text-gray-400">
              Experience the world&apos;s most popular MOBA game. Choose from over 150 champions
              and battle across multiple iconic battlefields.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg text-[#C89B3C]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(({ path, label }) => (
                <li key={path}>
                  <NavLink to={path} className="text-gray-400 transition-colors hover:text-[#C89B3C]">
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg text-[#C89B3C]">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  aria-label={label}
                  className="text-gray-400 transition-colors hover:text-[#C89B3C]"
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} League of Legends. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;