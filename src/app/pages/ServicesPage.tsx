import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Scale, Building2, CheckCircle2, ArrowRight, Users, Target, Clock } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { Link } from 'react-router';
import { PageLayout } from '../components/PageLayout';

const services = [
  {
    icon: TrendingUp,
    title: 'The CFO Desk',
    subtitle: 'CFO Advisory & Financial Planning',
    gradient: 'from-indigo-500 to-purple-600',
    description: 'Fractional and Strategic CFO support for fundraising, M&A readiness, and high-level board reporting. Get MNC-level insight without the full-time headcount.',
    offerings: [
      'Financial planning & analysis',
      'Budgeting and forecasting',
      'Cash flow management',
      'KPI design and monitoring',
      'Board reporting and presentations',
      'Strategic financial modeling',
    ],
    whoFor: 'Growing businesses, startups scaling beyond Series A, companies needing CFO expertise without full-time hire',
    engagement: 'Retainer-based monthly engagement with flexible scope',
  },
  {
    icon: DollarSign,
    title: 'Equity Advisory Labs',
    subtitle: 'Fundraising & Valuation Expertise',
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Specialized intelligence for cap table management, complex valuations, and equity-based incentive structuring.',
    offerings: [
      'Fundraising strategy and execution',
      'Investor pitch deck development',
      'Financial modeling for fundraising',
      'Valuation advisory',
      'Due diligence support',
      'Investor relations management',
    ],
    whoFor: 'Startups raising seed to Series B, companies planning M&A, businesses seeking strategic capital',
    engagement: 'Success-based fees or project-based consulting',
  },
  {
    icon: Scale,
    title: 'Arthveda Legal',
    subtitle: 'Financial Legal Structuring',
    gradient: 'from-violet-500 to-indigo-600',
    description: 'Expert guidance on financial legal structures, compliance, and regulatory matters. Bridge finance and legal for optimal outcomes.',
    offerings: [
      'Corporate financial structuring',
      'Tax planning and optimization',
      'Compliance advisory',
      'Contract review and negotiation',
      'Equity and cap table management',
      'Regulatory compliance support',
    ],
    whoFor: 'Companies restructuring, startups setting up operations, businesses expanding internationally',
    engagement: 'Hourly consulting or project-based fees',
  },
  {
    icon: Building2,
    title: 'CFO-Led Zoho Implementations',
    subtitle: 'Implementation & Transformation',
    gradient: 'from-emerald-500 to-green-600',
    description: 'We do not just "install" software. We re-engineer your finance processes through the lens of a CFO and deploy them seamlessly via the Zoho ecosystem.',
    offerings: [
      'Zoho One implementation',
      'Zoho One setup and training',
      'Zoho CRM configuration',
      'Custom workflow design',
      'Data migration from existing systems',
      'Team training and change management',
    ],
    whoFor: 'SMEs digitizing finance operations, companies switching from other ERPs, businesses needing integrated finance stack',
    engagement: 'Fixed-price implementation packages',
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="relative pt-24 pb-10 overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50"
              style={{ backgroundSize: '200% 200%' }}
            />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          </div>

  <div className="relative z-10 max-w-2xl mx-auto px-3 text-center" >
    <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 border border-indigo-200 rounded-full mb-4"
          >
            <Scale className="w-2 h-2 text-indigo-600" />
            <span className="text-xs text-indigo-700 font-medium">Advisory & Support</span>
          </motion.div>
    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight"
    >
      Strategic Advisory
      <br />
      <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
        Services
      </span>
    </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-base text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed"
            >
              CFO-level expertise combined with deep operational knowledge to drive financial excellence
            </motion.p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-10 sm:py-12 md:py-14 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-10 sm:space-y-14 md:space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 p-5 sm:p-7 md:p-10">

                      {/* Left: Header */}
                      <div className="lg:col-span-1">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 md:mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                          <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{service.title}</h2>
                        <p className={`text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {service.subtitle}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
                      </div>

                      {/* Middle: Offerings */}
                      <div className="lg:col-span-1">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Key Offerings</h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {service.offerings.map((offering, idx) => (
                            <li key={idx} className="flex items-start gap-2 sm:gap-3 text-gray-700 text-xs sm:text-sm">
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-indigo-500" />
                              <span>{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: Details */}
                      <div className="lg:col-span-1 space-y-4 sm:space-y-5 md:space-y-6">
                        <div>
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">Who It's For</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{service.whoFor}</p>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-2 sm:mb-3">
                            <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                            <h3 className="text-base sm:text-lg font-bold text-gray-900">Engagement Model</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{service.engagement}</p>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-10 sm:py-14 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Our
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Process
                </span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach to delivering exceptional results
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'Deep dive into your business, challenges, and goals' },
                { step: '02', title: 'Strategy', description: 'Develop tailored solutions and implementation roadmap' },
                { step: '03', title: 'Execution', description: 'Implement with precision and regular progress updates' },
                { step: '04', title: 'Optimize', description: 'Continuous improvement and ongoing support' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-5 sm:p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3 md:mb-4 opacity-30">
                    {item.step}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2 md:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10 sm:mb-12 md:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Why Partner with
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Arthveda
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Proven Track Record',
                  description: 'Successfully guided 100+ businesses through financial transformation',
                },
                {
                  icon: Clock,
                  title: 'Rapid Results',
                  description: 'See measurable improvements within the first 90 days of engagement',
                },
                {
                  icon: Users,
                  title: 'Expert Team',
                  description: 'Former CFOs, finance leaders, and industry specialists at your service',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 sm:p-6 md:p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 shadow-md">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-72 sm:h-72 md:w-[600px] md:h-[600px] bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3"
            >
              Ready to Elevate Your Finance Function?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm sm:text-sm text-gray-700 mb-5 sm:mb-6"
            >
              Book a consultation to discuss your specific needs
            </motion.p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold text-sm shadow-xl shadow-indigo-500/30 inline-flex items-center gap-1.5"
              >
                Book a Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
}