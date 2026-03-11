import { motion } from 'motion/react';

export function PageLoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
      >
        <div className="relative">
          {/* Background Glow / Blur */}
          <div className="absolute inset-0 rounded-10xl blur-2xl opacity-30" />
          <a
            href="/products"
            target=""
            rel="noopener noreferrer"
            className="relative w-18 h-18 bg-gradient-to-br from-indigo-200 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-indigo-400/30 shadow-2xl"
          >
            <img
              src="/applogo.png"
              alt="Zoho Logo"
              className="w-22 h-22 object-contain"
            />
          </a>
        </div>
      </motion.div>

      {/* Bouncing Dots */}
      <div className="flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-indigo-500 rounded-full"
            animate={{ y: ["0%", "-50%", "0%"] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}