import { motion } from 'motion/react';
import { ArrowRight, Play, FileText, Receipt, Zap, CheckCircle2 } from 'lucide-react';

const floatingCards = [
  { icon: FileText, label: 'PO Created', color: 'from-indigo-500 to-purple-600', delay: 0 },
  { icon: Receipt, label: 'Invoice Received', color: 'from-blue-500 to-cyan-600', delay: 0.2 },
  { icon: Zap, label: 'AI Matching', color: 'from-violet-500 to-indigo-600', delay: 0.4 },
  { icon: CheckCircle2, label: 'Bill Created', color: 'from-emerald-500 to-green-600', delay: 0.6 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1120]">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/10 to-purple-900/20"
          style={{ backgroundSize: '200% 200%' }}
        />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingCards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              y: [100, -20, 100],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              delay: card.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute ${
              index === 0 ? 'top-20 left-[10%]' :
              index === 1 ? 'top-40 right-[15%]' :
              index === 2 ? 'bottom-40 left-[15%]' :
              'bottom-20 right-[10%]'
            }`}
          >
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} blur-xl opacity-50`} />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                <card.icon className="w-8 h-8 text-white mb-2" />
                <p className="text-sm text-gray-300 font-medium">{card.label}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">Intelligent P2P Automation</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Automate Your
          <br />
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Purchase to Pay
          </span>
          <br />
          Workflow
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Transform your procurement with AI-powered PO to Invoice matching and automated ERP bill creation. 
          Reduce processing time by 90% and eliminate manual errors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            See How It Works
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '90%', label: 'Faster Processing' },
            { value: '99.9%', label: 'Accuracy Rate' },
            { value: '50K+', label: 'POs Automated' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
