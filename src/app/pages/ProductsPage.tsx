import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Link } from 'react-router';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
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
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Intelligent Finance
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Automation Products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            Purpose-built SaaS solutions that automate complex finance workflows with AI precision
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* ArthaP2P */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="p-10 border-b border-white/10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">ArthaP2P</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Complete vendor portal automation platform
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
                    <span className="text-sm text-indigo-300 font-medium">Procure-to-Pay Automation</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      'AI-powered PO to Invoice matching',
                      'Automated ERP bill creation',
                      'Real-time vendor portal with document exchange',
                      'Exception management and alerts',
                      'Multi-level approval workflows',
                      'Seamless ERP integration (SAP, Oracle, Zoho)',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">90%</div>
                      <div className="text-xs text-gray-400">Faster Processing</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                      <div className="text-xs text-gray-400">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">10K+</div>
                      <div className="text-xs text-gray-400">POs/Month</div>
                    </div>
                  </div>

                  <Link to="/products/arthap2p">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Explore ArthaP2P
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* ArthaMatch */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="p-10 border-b border-white/10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">ArthaMatch</h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Intelligent reconciliation engine
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                    <span className="text-sm text-blue-300 font-medium">Bank Reconciliation AI</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-4 mb-8">
                    {[
                      'Smart bank-ledger reconciliation',
                      'ML-powered transaction matching',
                      'Automated discrepancy detection',
                      'Multi-currency support',
                      'Audit-ready reports and trails',
                      'Integration with all major banks',
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-white/5 rounded-xl">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">85%</div>
                      <div className="text-xs text-gray-400">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">100K+</div>
                      <div className="text-xs text-gray-400">Transactions</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">24/7</div>
                      <div className="text-xs text-gray-400">Automation</div>
                    </div>
                  </div>

                  <Link to="/products/arthamatch">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                    >
                      Explore ArthaMatch
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Choose
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Arthveda
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Proven ROI',
                description: 'Average 10x return on investment within first year',
                gradient: 'from-indigo-500 to-purple-600',
              },
              {
                icon: Zap,
                title: 'Rapid Deployment',
                description: 'Go live in weeks, not months with our quick implementation',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade encryption and SOC 2 Type II certified',
                gradient: 'from-violet-500 to-indigo-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-[#111827] to-[#0B1120] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Finance Operations?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Schedule a demo to see our products in action
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/50 inline-flex items-center gap-3"
          >
            Schedule Demo
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}