import { motion } from 'motion/react';
import { ArrowRight, Brain, TrendingUp, Shield, Zap, Building2, DollarSign, Scale, Package, Factory, GitBranch, Lock, Key, Eye, FileCheck, Database } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Link } from 'react-router';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1120]">
      <ScrollToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
          {/* Logo Display Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl blur-2xl opacity-30" />
              <div className="relative w-24 h-24 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl flex items-center justify-center border-2 border-indigo-400/30 shadow-2xl">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-8">
                <Brain className="w-4 h-4 text-indigo-400" />
                <span className="text-sm text-indigo-300 font-medium">Strategic Finance. Intelligent Automation.</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight px-4"
            >
              Transforming Finance
              <br />
              with
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}Strategy{' '}
              </span>
              and
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                {' '}Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Where CFO-level advisory meets cutting-edge automation. We help businesses scale with strategic 
              financial planning and intelligent automation products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              <Link to="/products" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Products
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all"
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Arthveda Section */}
      <section className="py-32 bg-gradient-to-b from-[#0B1120] to-[#111827] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Arthveda.ai is a unique blend of strategic finance advisory and intelligent automation platform provider. 
              We partner with businesses to optimize their financial operations through expert consulting and powerful SaaS solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'CFO-Level Advisory',
                description: 'Strategic financial planning and decision support',
                gradient: 'from-indigo-500 to-purple-600',
              },
              {
                icon: DollarSign,
                title: 'Capital Structuring',
                description: 'Expert guidance on fundraising and valuation',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Zap,
                title: 'Automation Products',
                description: 'Intelligent SaaS solutions for finance operations',
                gradient: 'from-violet-500 to-indigo-600',
              },
              {
                icon: Package,
                title: 'ERP & Zoho Experts',
                description: 'Transformation and implementation specialists',
                gradient: 'from-emerald-500 to-green-600',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-32 bg-[#111827] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Products
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Intelligent automation products designed for modern finance teams
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ArthaP2P */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative h-full p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">ArthaP2P</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Complete vendor portal automation from Purchase Order to Invoice matching to ERP Bill creation. 
                  Eliminate manual processing and reduce errors by 90%.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'AI-powered PO to Invoice matching',
                    'Automated ERP bill creation',
                    'Real-time vendor portal',
                    'Exception management system',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/products/arthap2p">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    View Product
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* ArthaMatch */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="relative h-full p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">ArthaMatch</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Intelligent reconciliation engine that automates bank statement and ledger matching. 
                  Save hundreds of hours with smart transaction matching.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Smart bank-ledger reconciliation',
                    'ML-powered transaction matching',
                    'Automated discrepancy detection',
                    'Audit-ready reports',
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/products/arthamatch">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    View Product
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-b from-[#111827] to-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Advisory
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Strategic finance consulting backed by deep domain expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: TrendingUp,
                title: 'Strategic Finance',
                description: 'CFO advisory and financial planning',
                gradient: 'from-indigo-500 to-purple-600',
              },
              {
                icon: DollarSign,
                title: 'Capital Advisory',
                description: 'Fundraising and valuation expertise',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Scale,
                title: 'Arthveda Legal',
                description: 'Financial legal structuring',
                gradient: 'from-violet-500 to-indigo-600',
              },
              {
                icon: Building2,
                title: 'Zoho Rollouts',
                description: 'Books, Expense, Inventory implementation',
                gradient: 'from-emerald-500 to-green-600',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all inline-flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Arthveda Section */}
      <section className="py-32 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Why
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Arthveda
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The perfect combination of strategic thinking and technological execution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Strategy + Technology Combined',
                description: 'We don\'t just advise - we build and implement. Our unique position as both consultants and product builders means we understand what works in theory and practice.',
                icon: Brain,
              },
              {
                title: 'Deep Financial Domain Expertise',
                description: 'Our team combines years of CFO-level advisory experience with cutting-edge technology expertise. We speak both finance and tech fluently.',
                icon: TrendingUp,
              },
              {
                title: 'Automation-Driven Efficiency',
                description: 'Every manual process we identify in our advisory work becomes an opportunity for automation through our products. Continuous improvement at scale.',
                icon: Zap,
              },
              {
                title: 'ERP Transformation Capability',
                description: 'From Zoho to SAP to Oracle - we\'ve implemented and integrated them all. Our solutions work seamlessly with your existing tech stack.',
                icon: Package,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Empower */}
      <section className="py-32 bg-[#111827] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Industries We
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Empower
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Trusted by enterprises across industries to streamline their procurement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Factory,
                title: 'Manufacturing',
                description: 'Complex BOMs and multi-level approval workflows',
                gradient: 'from-orange-500 to-red-600',
              },
              {
                icon: Building2,
                title: 'Construction',
                description: 'Project-based procurement with real-time tracking',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: GitBranch,
                title: 'Multi-branch Enterprises',
                description: 'Centralized control with branch-level autonomy',
                gradient: 'from-purple-500 to-pink-600',
              },
              {
                icon: TrendingUp,
                title: 'High-volume Procurement',
                description: 'Process thousands of transactions daily',
                gradient: 'from-emerald-500 to-green-600',
              },
              {
                icon: Package,
                title: 'Zoho ERP-based Companies',
                description: 'Seamless integration with Zoho ecosystem',
                gradient: 'from-violet-500 to-indigo-600',
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <industry.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-sm text-gray-400">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise-Grade Security */}
      <section className="py-32 bg-gradient-to-b from-[#111827] to-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-300 font-medium">Enterprise Security</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise-Grade
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                {' '}Security
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Your data security is our top priority
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Key,
                title: 'Role-Based Access',
                description: 'Granular permissions and access control',
              },
              {
                icon: Shield,
                title: 'Secure ERP Integration',
                description: 'Encrypted connections to all systems',
              },
              {
                icon: Lock,
                title: 'Data Encryption',
                description: 'AES-256 encryption at rest and in transit',
              },
              {
                icon: FileCheck,
                title: 'Audit Logging',
                description: 'Complete transaction history tracking',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built with Modern Technology */}
      <section className="py-32 bg-[#0B1120] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Built with
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Modern Technology
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Enterprise-grade tech stack for reliability and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Next.js', category: 'Frontend', color: 'from-gray-700 to-black', logo: '▲' },
              { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-500 to-blue-600', logo: '🎨' },
              { name: 'Spring Boot', category: 'Backend', color: 'from-green-500 to-emerald-600', logo: '🍃' },
              { name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-indigo-700', logo: '🐘' },
              { name: 'Apache Kafka', category: 'Streaming', color: 'from-gray-800 to-black', logo: 'K' },
              { name: 'Redis', category: 'Caching', color: 'from-red-500 to-rose-600', logo: '⚡' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 text-3xl font-bold text-white group-hover:scale-110 transition-transform`}>
                    {tech.logo}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-400">{tech.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Where Financial Intelligence
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Meets Execution
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Let's transform your finance operations together
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/50 hover:shadow-indigo-500/80 transition-all overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 blur-2xl"
              />
              <span className="relative z-10 flex items-center gap-3">
                Book Consultation
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}