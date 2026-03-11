import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";

function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm pointer-events-none">
      <div className="relative w-28 h-28 flex items-center justify-center">
        <motion.div
          className="absolute w-28 h-28 rounded-full border-4 border-t-blue-400 border-b-transparent border-l-purple-400 border-r-transparent"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
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

export default function AnimatedLayout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const minDuration = 500;
    const startTime = Date.now();
    const timer = setTimeout(() => {
      const elapsed = Date.now() - startTime;
      setTimeout(() => setLoading(false), Math.max(minDuration - elapsed, 0));
    }, 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && <PageLoader />}

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </motion.div>
      </AnimatePresence>
    </>
  );
}