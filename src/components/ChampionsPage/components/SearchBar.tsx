// import { motion } from 'framer-motion';
// import { Search, X } from 'lucide-react';
// import { useDebounce } from 'use-debounce';
// import { useState, useEffect } from 'react';

// interface SearchBarProps {
//   value: string;
//   onChange: (value: string) => void;
// }

// const SearchBar = ({ value, onChange }: SearchBarProps) => {
//   const [localValue, setLocalValue] = useState(value);
//   const [debouncedValue] = useDebounce(localValue, 300);
//   const [isFocused, setIsFocused] = useState(false);

//   useEffect(() => {
//     onChange(debouncedValue);
//   }, [debouncedValue, onChange]);

//   const handleClear = () => {
//     setLocalValue('');
//     onChange('');
//   };

//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: -10 }}
//       animate={{ opacity: 1, y: 0 }}
//       className={`relative max-w-2xl mx-auto transition-all duration-300 ${
//         isFocused ? 'ring-2 ring-[#C89B3C]/20 scale-[1.02]' : ''
//       }`}
//     >
//       <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
//         <Search className={`w-5 h-5 transition-colors duration-300 ${
//           isFocused ? 'text-[#C89B3C]' : 'text-gray-400'
//         }`} />
//       </div>

//       <input
//         type="text"
//         value={localValue}
//         onChange={(e) => setLocalValue(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         placeholder="Search champions by name..."
//         className="w-full pl-12 pr-12 py-4 bg-[#1B1F38] text-white rounded-lg border border-[#C89B3C]/20 
//                   focus:outline-none focus:border-[#C89B3C]
//                   transition-all duration-300 placeholder:text-gray-400"
//       />

//       {localValue && (
//         <motion.button
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           onClick={handleClear}
//           className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-[#C89B3C] transition-colors duration-300"
//         >
//           <X className="w-5 h-5" />
//         </motion.button>
//       )}
//     </motion.div>
//   );
// };

// export default SearchBar;

import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useDebounce } from 'use-debounce';
import { useState, useEffect } from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [localValue, setLocalValue] = useState(value);
  const [debouncedValue] = useDebounce(localValue, 300);
  const [isFocused, setIsFocused] = useState(false);

  // Update search results based on debounce
  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  // Update local input immediately for better responsiveness
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    onChange(e.target.value); // Instant update while debouncing API calls
  };

  // Clear search input immediately
  const handleClear = () => {
    setLocalValue('');
    onChange('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative max-w-2xl mx-auto transition-all duration-300 ${
        isFocused ? 'ring-2 ring-[#C89B3C]/20 scale-[1.02]' : ''
      }`}
    >
      {/* Search Icon */}
      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
        <Search
          className={`w-5 h-5 transition-colors duration-300 ${
            isFocused ? 'text-[#C89B3C]' : 'text-gray-400'
          }`}
        />
      </div>

      {/* Input Field */}
      <input
        type="text"
        value={localValue}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search champions by name..."
        className="w-full pl-12 pr-12 py-4 bg-[#1B1F38] text-white rounded-lg border border-[#C89B3C]/20 
                  focus:outline-none focus:border-[#C89B3C]
                  transition-all duration-300 placeholder:text-gray-400"
      />

      {/* Clear Button with Animation */}
      <AnimatePresence>
        {localValue && (
          <motion.button
            key="clear-button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-[#C89B3C] transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchBar;
