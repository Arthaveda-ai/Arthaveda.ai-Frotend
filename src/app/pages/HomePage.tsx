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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-15">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl blur-2xl opacity-30" />
              <a
                href="/products"
                target=""
                rel="noopener noreferrer"
                className="relative w-24 h-24 bg-gradient-to-br from-indigo-200 to-blue-100 rounded-2xl flex items-center justify-center border-2 border-indigo-400/30 shadow-2xl"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full mb-8">
                <Brain className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-indigo-700 font-medium">Strategic Finance. Intelligent Automation.</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 leading-tight px-4"
            >
              Transforming Finance
              <br />
              with
              <span className="text-indigo-600">
                {' '}Strategy{' '}
              </span>
              and
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                {' '}Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            >
              Where CFO-level advisory meets cutting-edge automation. We help businesses scale with strategic 
              financial planning and intelligent automation solutions.
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

    <section className="relative py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
    
          <h2 className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-20">
            Trusted By Top <span className="text-indigo-600">Companies</span>
          </h2>

          <div className="relative overflow-hidden">

            {/* Left Gradient */}
            <div className="absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />

            {/* Right Gradient */}
            <div className="absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max partner-scroll">

              {[
                { logo: "https://upgradecleaning.com/wp-content/uploads/2023/02/Upgarde-Logo-Red-and-white-300x81-1.png", link: "https://upgradecleaning.com" },
                { logo: "https://www.technoilogy.it/wp-content/uploads/2021/06/cropped-Logo-Technoilogy-Orizz-POS-Colori.png", link: "https://www.technoilogy.it/" },
                { logo: "https://www.narayananethralaya.org/wp-content/uploads/2025/08/Nn-Logo.svg", link: "https://www.narayananethralaya.org" },
                { logo: "https://nakshatech.com/wp-content/uploads/2025/10/logo_transparent.gif", link: "https://nakshatech.com" },
                { logo: "https://poovanthirehab.com/assets/images/flower.svg", link: "https://poovanthirehab.com" },
                { logo: "https://www.vivektailors.com/assets/Logo.d4f81aac.png", link: "https://www.vivektailors.com/" },
                { logo: "https://telecom.polycab.com/wp-content/uploads/2024/06/polycab-logo.png", link: "https://telecom.polycab.com" },
                { logo: "https://www.uds.in/webroot/images/uds-logo.svg", link: "https://www.uds.in" },
                { logo: "https://www.contiinex.com/assets/images/default/contiinexR.png", link: "https://www.contiinex.com" },
                { logo: "https://www.anpecopack.com/logo1.png", link: "https://www.anpecopack.com" },
                { logo: "https://veremax.co.in/_astro/veremax_logo.BTYOBTzG.png", link: "https://veremax.co.in" },

                // duplicate for smooth scroll
                { logo: "https://upgradecleaning.com/wp-content/uploads/2023/02/Upgarde-Logo-Red-and-white-300x81-1.png", link: "https://upgradecleaning.com" },
                { logo: "https://www.technoilogy.it/wp-content/uploads/2021/06/cropped-Logo-Technoilogy-Orizz-POS-Colori.png", link: "https://www.technoilogy.it/" },
                { logo: "https://www.narayananethralaya.org/wp-content/uploads/2025/08/Nn-Logo.svg", link: "https://www.narayananethralaya.org" },
                { logo: "https://nakshatech.com/wp-content/uploads/2025/10/logo_transparent.gif", link: "https://nakshatech.com" },
                { logo: "https://poovanthirehab.com/assets/images/flower.svg", link: "https://poovanthirehab.com" },
                { logo: "https://www.vivektailors.com/assets/Logo.d4f81aac.png", link: "https://www.vivektailors.com/" },
                { logo: "https://telecom.polycab.com/wp-content/uploads/2024/06/polycab-logo.png", link: "https://telecom.polycab.com" },
                { logo: "https://www.uds.in/webroot/images/uds-logo.svg", link: "https://www.uds.in" },
                { logo: "https://www.contiinex.com/assets/images/default/contiinexR.png", link: "https://www.contiinex.com" },
                { logo: "https://www.anpecopack.com/logo1.png", link: "https://www.anpecopack.com" },
                { logo: "https://veremax.co.in/_astro/veremax_logo.BTYOBTzG.png", link: "https://veremax.co.in" },
              ].map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-6 md:mx-10 min-w-[120px] md:min-w-[180px]"
                >
                  <a
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block cursor-pointer z-20"
                  >
                    <img
                      src={partner.logo}
                      alt="Partner Logo"
                      className="h-12 md:h-16 object-contain opacity-70 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-indigo-500/10 blur-xl -z-10" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Artha
              <span className="text-indigo-600">
                {' '}Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic finance consulting backed by deep domain expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                icon: TrendingUp,
                title: 'ArthaP2Pay',
                description: 'Procure-to-Pay Automation',
                gradient: 'from-indigo-500 to-purple-600',
              },
               {
                icon: Building2,
                title: 'Artha Match',
                description: 'Bank Reconciliation AI',
                gradient: 'from-emerald-500 to-green-600',
              },
              {
                icon: DollarSign,
                title: 'Accounts Receivable',
                description: 'AI Collections Engine',
                gradient: 'from-blue-500 to-cyan-600',
              },
              {
                icon: Scale,
                title: 'Expense Management',
                description: 'AI Spend Intelligence',
                gradient: 'from-violet-500 to-indigo-600',
              },
              {
                icon: Scale3D,
                title: 'E-Invoicing',
                description: 'Global compliance automation',
                gradient: 'from-indigo-500 to-purple-600',
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
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative h-full p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all inline-flex items-center gap-2"
              >
                Explore Soultions
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advisory
              <span className="text-indigo-600">
                {' '}Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic finance consulting backed by deep domain expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  <div className="relative h-full p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.description}</p>
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

<section className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Why
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Arthveda
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                  className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 shadow-md">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Final CTA */}
        <section className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
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
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              Where Financial Intelligence
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Meets Execution
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
            >
              Let's transform your finance operations together
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
            <Link to='/contact'>
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
                Book a Demo
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </span>
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </PageLayout>
  );
}