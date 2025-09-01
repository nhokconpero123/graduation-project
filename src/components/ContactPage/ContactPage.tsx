import { motion } from 'framer-motion';
import { MessageSquare, GithubIcon, Video, TwitterIcon } from 'lucide-react';
import SocialLink from './SocialLink';
import ContactForm from './ContactForm';

const socialLinks = [
  {
    href: 'https://discord.gg/leagueoflegends',
    icon: MessageSquare,
    label: 'Join our Discord',
    color: 'text-[#5865F2]'
  },
  {
    href: 'https://twitter.com/leagueoflegends',
    icon: TwitterIcon,
    label: 'Follow on Twitter',
    color: 'text-[#1DA1F2]'
  },
  {
    href: 'https://twitch.tv/riotgames',
    icon: Video,
    label: 'Watch on Twitch',
    color: 'text-[#9146FF]'
  },
  {
    href: 'https://github.com/RiotGames',
    icon: GithubIcon,
    label: 'Follow on GitHub',
    color: 'text-white'
  }
];

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-display text-center text-white mb-12"
        >
          Join the Community
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links Section */}
          <section>
            <h2 className="text-3xl font-display text-white mb-8">Connect With Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>

            {/* eSports Schedule */}
            <div className="mt-8 p-6 bg-[#2A2F4C] rounded-lg">
              <h3 className="text-xl font-display text-[#00FF7F] mb-4">Live Tournaments</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white">LCS Spring Split</span>
                  <span className="text-gray-400">Live Now</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white">LEC Masters</span>
                  <span className="text-gray-400">Tomorrow, 18:00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <section>
            <h2 className="text-3xl font-display text-white mb-8">Get in Touch</h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;