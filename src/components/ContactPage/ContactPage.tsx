// Community landing page. This section keeps the social discovery and contact form together,
// which makes it easier to manage the marketing content and user interactions in one place.
import { motion } from 'framer-motion';
import { MessageSquare, GithubIcon, Video, TwitterIcon } from 'lucide-react';
import SocialLink from './SocialLink';
import ContactForm from './ContactForm';

const socialLinks = [
  {
    href: 'https://discord.gg/leagueoflegends',
    icon: MessageSquare,
    label: 'Join our Discord',
    color: 'text-[#5865F2]',
  },
  {
    href: 'https://twitter.com/leagueoflegends',
    icon: TwitterIcon,
    label: 'Follow on Twitter',
    color: 'text-[#1DA1F2]',
  },
  {
    href: 'https://twitch.tv/riotgames',
    icon: Video,
    label: 'Watch on Twitch',
    color: 'text-[#9146FF]',
  },
  {
    href: 'https://github.com/RiotGames',
    icon: GithubIcon,
    label: 'Follow on GitHub',
    color: 'text-white',
  },
] as const;

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1B1F38] to-black pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center font-display text-4xl text-white md:text-6xl"
        >
          Join the Community
        </motion.h1>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <section>
            <h2 className="mb-8 font-display text-3xl text-white">Connect With Us</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {socialLinks.map((link) => (
                <SocialLink key={link.label} {...link} />
              ))}
            </div>

            <div className="mt-8 rounded-lg bg-[#2A2F4C] p-6">
              <h3 className="mb-4 font-display text-xl text-[#00FF7F]">Live Tournaments</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">LCS Spring Split</span>
                  <span className="text-gray-400">Live Now</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">LEC Masters</span>
                  <span className="text-gray-400">Tomorrow, 18:00</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-8 font-display text-3xl text-white">Get in Touch</h2>
            <ContactForm />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;