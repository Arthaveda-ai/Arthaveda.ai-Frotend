import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';

export function DashboardPreview() {
  const progress = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      progress.set((progress.get() + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, [progress]);

  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Beautiful Analytics
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time insights into your entire procure-to-pay workflow
          </p>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
          
          {/* Dashboard Container */}
          <div className="relative bg-[#111827] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            {/* Dashboard Header */}
            <div className="bg-white/5 backdrop-blur-xl border-b border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="text-sm text-gray-400">ArthaFlow Dashboard</div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-8">
              <div className="grid grid-cols-4 gap-6 mb-8">
                {/* KPI Cards */}
                {[
                  { label: 'Total POs', value: '1,324', change: '+12.5%' },
                  { label: 'Matched', value: '856', change: '+8.2%' },
                  { label: 'Pending', value: '89', change: '-15.3%' },
                  { label: 'Time Saved', value: '347h', change: '+24.8%' },
                ].map((kpi, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                  >
                    <div className="text-xs text-gray-400 mb-2">{kpi.label}</div>
                    <div className="flex items-end justify-between">
                      <div className="text-2xl font-bold text-white">{kpi.value}</div>
                      <div className="text-xs text-emerald-400">{kpi.change}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-sm text-gray-400 mb-4">PO vs Invoice Trends</div>
                <div className="h-48 relative">
                  {/* Animated Chart Lines */}
                  <svg width="100%" height="100%" className="absolute inset-0">
                    <defs>
                      <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                      <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10B981" />
                        <stop offset="100%" stopColor="#3B82F6" />
                      </linearGradient>
                    </defs>
                    
                    {/* Line 1 */}
                    <motion.path
                      d="M 0 150 Q 150 120, 300 100 T 600 80"
                      fill="none"
                      stroke="url(#lineGradient1)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    
                    {/* Line 2 */}
                    <motion.path
                      d="M 0 170 Q 150 140, 300 130 T 600 110"
                      fill="none"
                      stroke="url(#lineGradient2)"
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
                    />
                  </svg>

                  {/* Grid Lines */}
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-white/5"
                      style={{ top: `${i * 33}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
