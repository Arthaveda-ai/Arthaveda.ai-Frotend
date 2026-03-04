import { motion } from 'motion/react';
import { ArrowRight, Shield, Database, Sparkles, CheckCircle2, TrendingUp, Clock, Brain, FileCheck } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { ScrollToTop } from '../components/ScrollToTop';

export default function ArthaMatchPage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
            className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-indigo-900/20"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Shield className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300 font-medium">Bank Reconciliation AI</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              ArthaMatch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Intelligent reconciliation engine that automates bank statement and ledger matching. 
            Save hundreds of hours with ML-powered transaction matching.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-blue-500/50 flex items-center gap-2"
            >
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              View Pricing
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-32 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              The Reconciliation
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Problem
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Time-Consuming',
                description: 'Finance teams spend days manually matching thousands of transactions',
                impact: '100+ hours/month',
              },
              {
                title: 'Error-Prone',
                description: 'Manual reconciliation leads to missed transactions and discrepancies',
                impact: '10-15% error rate',
              },
              {
                title: 'Month-End Chaos',
                description: 'Pressure to close books creates stress and rushed reconciliations',
                impact: '5-7 day delays',
              },
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  {problem.impact}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-400">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-32 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Intelligent
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Automation
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ArthaMatch uses machine learning to automatically match transactions with 99%+ accuracy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: 'ML-Powered Matching',
                    description: 'Smart algorithms learn from your patterns to improve accuracy over time',
                  },
                  {
                    icon: Database,
                    title: 'Multi-Source Integration',
                    description: 'Connect all your bank accounts and accounting systems in one place',
                  },
                  {
                    icon: Sparkles,
                    title: 'Auto-Categorization',
                    description: 'Intelligent transaction categorization based on historical data',
                  },
                  {
                    icon: FileCheck,
                    title: 'Audit-Ready Reports',
                    description: 'Complete reconciliation reports with full transaction trails',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-3xl opacity-20" />
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-white mb-8">Performance Metrics</h3>
                  <div className="space-y-8">
                    {[
                      { label: 'Match Accuracy', value: 99, color: 'from-emerald-500 to-green-600' },
                      { label: 'Time Savings', value: 85, color: 'from-blue-500 to-cyan-600' },
                      { label: 'Cost Reduction', value: 70, color: 'from-indigo-500 to-purple-600' },
                    ].map((metric, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-400">{metric.label}</span>
                          <span className="text-2xl font-bold text-white">{metric.value}%</span>
                        </div>
                        <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${metric.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.2 }}
                            className={`h-full bg-gradient-to-r ${metric.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '100K+', label: 'Transactions/Month' },
                  { value: '24/7', label: 'Automation' },
                  { value: '<1min', label: 'Avg Match Time' },
                  { value: '50+', label: 'Bank Integrations' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-center"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gradient-to-b from-[#111827] to-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              How It
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Works
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Sources',
                description: 'Link your bank accounts and accounting system',
                icon: Database,
              },
              {
                step: '02',
                title: 'Import Data',
                description: 'Automatically fetch transactions from all sources',
                icon: TrendingUp,
              },
              {
                step: '03',
                title: 'AI Matching',
                description: 'ML algorithms match transactions instantly',
                icon: Brain,
              },
              {
                step: '04',
                title: 'Review & Close',
                description: 'Quick review of exceptions and close books',
                icon: CheckCircle2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 opacity-20">
                    {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Powerful
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Features
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: 'Smart Matching', description: 'AI learns your patterns for better accuracy' },
              { icon: Database, title: 'Multi-Currency', description: 'Handle transactions in 150+ currencies' },
              { icon: Clock, title: 'Real-Time Sync', description: 'Continuous transaction updates' },
              { icon: Shield, title: 'Bank-Grade Security', description: 'Encrypted data with SOC 2 compliance' },
              { icon: TrendingUp, title: 'Analytics Dashboard', description: 'Insights into cash flow and trends' },
              { icon: FileCheck, title: 'Audit Trail', description: 'Complete history for compliance' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Trusted By
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'SMEs & Startups',
                description: 'Close books faster without hiring dedicated reconciliation staff',
                benefits: ['Quick setup', 'Affordable pricing', 'Easy to use'],
              },
              {
                title: 'Accounting Firms',
                description: 'Serve more clients efficiently with automated reconciliation',
                benefits: ['Multi-client', 'White-label option', 'Bulk processing'],
              },
              {
                title: 'E-commerce Businesses',
                description: 'Handle high transaction volumes from multiple payment gateways',
                benefits: ['Payment gateway integration', 'Multi-currency', 'Real-time matching'],
              },
              {
                title: 'Enterprise Finance Teams',
                description: 'Scale reconciliation across multiple entities and bank accounts',
                benefits: ['Multi-entity support', 'Advanced workflows', 'API access'],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-6">{useCase.description}</p>
                <div className="flex flex-wrap gap-3">
                  {useCase.benefits.map((benefit, idx) => (
                    <div key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-6"
          >
            Stop Manual Reconciliation Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            See ArthaMatch in action with a live demo
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-blue-500/50 inline-flex items-center gap-3"
          >
            Request Demo
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}