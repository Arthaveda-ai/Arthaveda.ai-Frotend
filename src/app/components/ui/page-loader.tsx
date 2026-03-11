import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Rotating gradient circle */}
        <motion.div
          className="absolute w-28 h-28 rounded-full border-4 border-t-blue-400 border-b-transparent border-l-purple-400 border-r-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />

        {/* Logo with subtle scaling */}
        <motion.img
          src="/applogo.png"
          alt="Arthaveda Logo"
          className="w-16 h-16 z-10"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}