// import { motion } from 'framer-motion';

// const HeroSection = () => {
//   return (
//     <div className="relative h-screen">
//       <div className="absolute inset-0">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//         >
//          {/* bỏ link video vào phần này */}
//           <source src="////////////" type="video/mp4" /> 

//         </video>
//         <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F38] to-transparent" />
//       </div>

//       <div className="relative h-full flex items-center justify-center text-center px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-4xl"
//         >
//           <h1 className="text-5xl md:text-7xl font-display text-[#C89B3C] mb-6">
//             All Random All Mid
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8">
//             Experience intense 5v5 battles on the Howling Abyss bridge with random champions
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import { motion } from 'framer-motion';
 
const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://cdnb.artstation.com/p/assets/covers/images/004/058/423/large/maokai-xiao-howling-abyss-turret.jpg?1479909718" // Thay đổi đường dẫn hình ảnh tại đây
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B1F38] to-transparent" />
      </div>

      <div className="relative h-full flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-display text-[#C89B3C] mb-6">
            All Random All Mid
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Experience intense 5v5 battles on the Howling Abyss bridge with random champions
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;