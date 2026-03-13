import { motion } from 'motion/react';
import { ArrowRight, Brain, TrendingUp, Shield, Zap, Building2, DollarSign, Scale, Package, Factory, GitBranch, Lock, Key, Eye, FileCheck, Database, Scale3D } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { Link } from 'react-router';
import { PageLayout } from '../components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
    <div className="min-h-screen bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden pt-12">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50"
            style={{ backgroundSize: '200% 200%' }}
          />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl blur-2xl opacity-30" />
              <a
                href="/products"
                target=""
                rel="noopener noreferrer"
                className="relative w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-indigo-400/30 shadow-2xl mt-4"
              >
                <img
                  src="/applogo.png"
                  alt="Zoho Logo"
                  className="w-22 h-22 object-contain"
                />
              </a>
            </div>
          </motion.div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full mb-6">
                <Brain className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-indigo-700 font-medium">Strategic Finance. Intelligent Automation.</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight px-4"
            >
              Transforming Finance with
              <span className="text-indigo-600">
                {' '}Strategy{' '}
              </span> and
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-lg md:text-xl text-gray-600 mb-6 max-w-8xl mx-auto leading-relaxed px-4"
            >
              We help businesses scale with strategic financial planning and intelligent automation solutions.
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
                  className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-2xl font-semibold text-lg hover:border-gray-400 hover:shadow-md transition-all"
                >
                  Our Advisory
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
 
      {/* Product Section */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-[150vh] mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Artha <span className="text-indigo-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Strategic finance consulting backed by deep domain expertise
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-10">
            {[
              {
                icon: TrendingUp,
                title: 'ArthaP2Pay',
                description: 'Procure-to-Pay Automation',
                gradient: 'from-indigo-500 to-purple-600',
                link: "/products/arthap2p",
              },
              {
                icon: Building2,
                title: 'Artha Match',
                description: 'Bank Reconciliation AI',
                gradient: 'from-emerald-500 to-green-600',
                link: "/products/arthamatch",
              },
              {
                icon: DollarSign,
                title: 'Accounts Receivable',
                description: 'AI Collections Engine',
                gradient: 'from-blue-500 to-cyan-600',
                link: "/products/arthaAR",
              },
              {
                icon: Scale,
                title: 'Expense Management',
                description: 'AI Spend Intelligence',
                gradient: 'from-violet-500 to-indigo-600',
                link: "/products/arthaEM",
              },
              {
                icon: Scale3D,
                title: 'E-Invoicing',
                description: 'Global compliance automation',
                gradient: 'from-indigo-500 to-purple-600',
                link: "/products/arthaEInvoice",
              },
              {
                icon: FileCheck,
                title: 'Artha comply',
                description: 'Compliance Governance Platform',
                gradient: 'from-blue-500 to-purple-600',
                link: "/products/arthacomply",
              },
            ].map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group relative block"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition`}
                />
                {/* Card */}
                <div className="relative p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition">
                  {/* <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>*/}
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 border-y border-gray-100 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Trusted by <span className="text-indigo-600">Leading Companies</span>
        </h3>
        <p className="text-gray-600 text-sm">
          Powering finance automation across industries
        </p>
      </div>

      <div className="relative overflow-hidden">

        {/* gradient fade */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex partner-scroll w-max items-center">

          {[
            "https://upgradecleaning.com/wp-content/uploads/2023/02/Upgarde-Logo-Red-and-white-300x81-1.png",
            "https://www.technoilogy.it/wp-content/uploads/2021/06/cropped-Logo-Technoilogy-Orizz-POS-Colori.png",
            "https://www.narayananethralaya.org/wp-content/uploads/2025/08/Nn-Logo.svg",
            "https://nakshatech.com/wp-content/uploads/2025/10/logo_transparent.gif",
            "https://poovanthirehab.com/assets/images/flower.svg",
            "https://www.vivektailors.com/assets/Logo.d4f81aac.png",
            "https://telecom.polycab.com/wp-content/uploads/2024/06/polycab-logo.png",
            "https://www.uds.in/webroot/images/uds-logo.svg",
            "https://www.contiinex.com/assets/images/default/contiinexR.png",
            "https://www.anpecopack.com/logo1.png",
          ].map((logo, index) => (
            <div
              key={index}
              className="mx-8 min-w-[140px] flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <img
                src={logo}
                className="h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* duplicate logos for smooth loop */}
          {[
            "https://upgradecleaning.com/wp-content/uploads/2023/02/Upgarde-Logo-Red-and-white-300x81-1.png",
            "https://www.technoilogy.it/wp-content/uploads/2021/06/cropped-Logo-Technoilogy-Orizz-POS-Colori.png",
            "https://www.narayananethralaya.org/wp-content/uploads/2025/08/Nn-Logo.svg",
            "https://nakshatech.com/wp-content/uploads/2025/10/logo_transparent.gif",
            "https://poovanthirehab.com/assets/images/flower.svg",
            "https://www.vivektailors.com/assets/Logo.d4f81aac.png",
            "https://telecom.polycab.com/wp-content/uploads/2024/06/polycab-logo.png",
            "https://www.uds.in/webroot/images/uds-logo.svg",
            "https://www.contiinex.com/assets/images/default/contiinexR.png",
            "https://www.anpecopack.com/logo1.png",
          ].map((logo, index) => (
            <div
              key={"dup"+index}
              className="mx-8 min-w-[140px] flex items-center justify-center grayscale hover:grayscale-0 transition"
            >
              <img
                src={logo}
                className="h-10 object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
         </div>
        </div>
       </section>

      {/* Services Section */}
      <section className="py-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Advisory <span className="text-indigo-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Strategic finance consulting backed by deep domain expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              {
                icon: TrendingUp,
                title: 'The CFO Desk',
                description: 'CFO advisory and financial planning',
                gradient: 'from-indigo-500 to-purple-600',
              },
              {
                icon: Building2,
                title: 'CFO-Led Zoho Implementations',
                description: 'Books, Expense, Inventory implementation',
                gradient: 'from-emerald-500 to-green-600',
              },
              {
                icon: DollarSign,
                title: 'Equity Advisory Labs',
                description: 'Fundraising and valuation expertise',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Scale,
                title: 'Arthveda Legal',
                description: 'Financial legal structuring',
                gradient: 'from-violet-500 to-indigo-600',
              },
            ].map((service, index) => (
              <div key={index} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition">
                {/* <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>*/}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition inline-flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Arthveda */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-3">

          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why <span className="text-indigo-600">Arthveda</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Strategic thinking combined with real technology execution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: 'Strategy + Technology',
                description: 'Consulting combined with real product execution.',
                icon: Brain,
              },
              {
                title: 'Financial Expertise',
                description: 'CFO-level advisory experience.',
                icon: TrendingUp,
              },
              {
                title: 'Automation Driven',
                description: 'Identify and automate manual finance processes.',
                icon: Zap,
              },
              {
                title: 'ERP Expertise',
                description: 'Zoho, SAP, Oracle integrations.',
                icon: Package,
              },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
                {/* <div className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>*/}
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Financial Intelligence
            <span className="block text-indigo-600">
              Meets Execution
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Let's transform your finance operations together
          </p>

          <Link to="/contact">
            <button className="px-10 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition inline-flex items-center gap-2">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>

        </div>
      </section>

      <Footer />
    </div>
    </PageLayout>
  );
}