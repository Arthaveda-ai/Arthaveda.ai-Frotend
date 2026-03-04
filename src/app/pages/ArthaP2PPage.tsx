import { motion } from 'motion/react';
import { ArrowRight, FileText, Send, Upload, Sparkles, CheckCircle2, Zap, TrendingUp, Clock, Shield } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { useState, useEffect } from 'react';

const workflowSteps = [
  {
    icon: FileText,
    title: 'PO Created',
    description: 'Purchase order generated in your system',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Send,
    title: 'Vendor Receives',
    description: 'Automatically sent to vendor portal',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Upload,
    title: 'Invoice Uploaded',
    description: 'Vendor submits invoice through portal',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Sparkles,
    title: 'AI Matching',
    description: 'Intelligent comparison & validation',
    color: 'from-violet-500 to-indigo-600',
  },
  {
    icon: CheckCircle2,
    title: 'Bill Auto Created',
    description: 'ERP bill automatically generated',
    color: 'from-emerald-500 to-green-600',
  },
];

export default function ArthaP2PPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
            className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-blue-900/20"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm text-indigo-300 font-medium">Procure-to-Pay Automation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              ArthaP2P
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Complete vendor portal automation from Purchase Order to Invoice matching to ERP Bill creation. 
            Transform your P2P process with AI-powered intelligence.
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
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/50 flex items-center gap-2"
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
              The
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Challenge
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Manual Processing',
                description: 'Hours spent manually matching POs with invoices, leading to delays and errors',
                impact: '85% of finance time',
              },
              {
                title: 'Data Entry Errors',
                description: 'Human errors in matching and data entry cause payment delays and disputes',
                impact: '15-20% error rate',
              },
              {
                title: 'Vendor Friction',
                description: 'Email back-and-forth, lost documents, and slow approvals frustrate vendors',
                impact: '2-3 weeks average',
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
              The
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Solution
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              ArthaP2P automates the entire procure-to-pay workflow with AI-powered matching and seamless ERP integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    title: 'Automated Vendor Portal',
                    description: 'Vendors access a self-service portal to view POs and submit invoices',
                  },
                  {
                    title: 'AI-Powered Matching',
                    description: '3-way matching between PO, Invoice, and GRN with 99.9% accuracy',
                  },
                  {
                    title: 'Exception Management',
                    description: 'Smart alerts for discrepancies with suggested resolutions',
                  },
                  {
                    title: 'ERP Integration',
                    description: 'Seamless bill creation in SAP, Oracle, Zoho, or any ERP system',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Impact Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Processing Time</span>
                      <span className="text-emerald-400 font-bold">-90%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Accuracy Rate</span>
                      <span className="text-emerald-400 font-bold">99.9%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '99.9%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Cost Reduction</span>
                      <span className="text-emerald-400 font-bold">-75%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workflow Animation */}
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
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Works
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              5 simple steps to complete automation
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-emerald-500/20 hidden lg:block">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`
                    relative p-8 rounded-2xl border transition-all duration-500
                    ${activeStep === index 
                      ? 'bg-white/10 backdrop-blur-xl border-indigo-500/50 shadow-2xl shadow-indigo-500/20' 
                      : 'bg-white/5 backdrop-blur-sm border-white/10'
                    }
                  `}>
                    <div className="relative mb-6">
                      <motion.div
                        animate={activeStep === index ? {
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 0.5 }}
                        className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center mx-auto
                          bg-gradient-to-br ${step.color} shadow-lg
                        `}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400 text-center">
                      {step.description}
                    </p>

                    {activeStep === index && (
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
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
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Features
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Real-time Matching', description: 'Instant PO-Invoice comparison with AI validation' },
              { icon: TrendingUp, title: 'Analytics Dashboard', description: 'Complete visibility into P2P metrics and trends' },
              { icon: Clock, title: 'Fast Approvals', description: 'Multi-level workflow with automated routing' },
              { icon: Shield, title: 'Audit Trail', description: 'Complete transaction history for compliance' },
              { icon: FileText, title: 'Document Management', description: 'Centralized storage for all POs and invoices' },
              { icon: CheckCircle2, title: 'Auto Bill Creation', description: 'Direct ERP integration for bill generation' },
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
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
              Perfect For
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Manufacturing Companies',
                description: 'Handle complex BOMs and multi-supplier procurement',
                stats: ['500+ POs/month', '50+ suppliers', '3-way matching'],
              },
              {
                title: 'Construction Firms',
                description: 'Project-based procurement with real-time cost tracking',
                stats: ['Multi-project', 'Site-wise tracking', 'Contractor management'],
              },
              {
                title: 'Retail Chains',
                description: 'Centralized procurement with branch-level control',
                stats: ['200+ branches', 'Centralized approval', 'Local flexibility'],
              },
              {
                title: 'Enterprise Businesses',
                description: 'High-volume transaction processing at scale',
                stats: ['10K+ POs/month', 'Multiple ERPs', 'Global operations'],
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
                  {useCase.stats.map((stat, idx) => (
                    <div key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300">
                      {stat}
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-white mb-6"
          >
            Ready to Automate Your P2P Process?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            See ArthaP2P in action with a personalized demo
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/50 inline-flex items-center gap-3"
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