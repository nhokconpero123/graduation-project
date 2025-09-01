import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    summonerName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="summonerName" className="block text-sm font-medium text-gray-300 mb-2">
          Summoner Name
        </label>
        <input
          type="text"
          id="summonerName"
          name="summonerName"
          value={formData.summonerName}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[#2A2F4C] border border-gray-600 text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[#2A2F4C] border border-gray-600 text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg bg-[#2A2F4C] border border-gray-600 text-white focus:outline-none focus:border-[#00FF7F] transition-colors"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-[#2A2F4C] border border-gray-600 text-white focus:outline-none focus:border-[#00FF7F] transition-colors resize-none"
          required
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#00FF7F] text-black font-semibold rounded-lg hover:bg-[#00CC6A] transition-colors"
      >
        <Send className="w-5 h-5" />
        Send Message
      </motion.button>
    </form>
  );
};

export default ContactForm;