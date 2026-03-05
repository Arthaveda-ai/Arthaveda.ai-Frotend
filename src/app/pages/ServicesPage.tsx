import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Scale, Building2, CheckCircle2, ArrowRight, Users, Target, Clock } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';

const services = [
  {
    icon: TrendingUp,
    title: 'Arthveda Strategic Finance',
    subtitle: 'CFO Advisory & Financial Planning',
    gradient: 'from-indigo-500 to-purple-600',
    description: 'Comprehensive CFO-level advisory services for growing businesses. From financial planning to strategic decision support, we act as your virtual CFO.',
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
    title: 'Capital Advisory',
    subtitle: 'Fundraising & Valuation Expertise',
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Navigate the complexities of fundraising and capital structuring. We help you raise capital efficiently and at the right valuation.',
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
    title: 'Zoho Rollouts',
    subtitle: 'Implementation & Transformation',
    gradient: 'from-emerald-500 to-green-600',
    description: 'End-to-end implementation of Zoho Books, Zoho Expense, and Zoho Inventory. Transform your financial operations with expert guidance.',
    offerings: [
      'Zoho Books implementation',
      'Zoho Expense setup and training',
      'Zoho Inventory configuration',
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
    <div className="min-h-screen bg-[#0B1120]">
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
            Strategic Advisory
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
          >
            CFO-level expertise combined with deep operational knowledge to drive financial excellence
          </motion.p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-gradient-to-b from-[#0B1120] to-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
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
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-10">
                    {/* Left: Header */}
                    <div className="lg:col-span-1">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-2">{service.title}</h2>
                      <p className="text-lg text-indigo-300 mb-6">{service.subtitle}</p>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>

                    {/* Middle: Offerings */}
                    <div className="lg:col-span-1">
                      <h3 className="text-xl font-bold text-white mb-4">Key Offerings</h3>
                      <ul className="space-y-3">
                        {service.offerings.map((offering, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
                            <span>{offering}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-1 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-5 h-5 text-indigo-400" />
                          <h3 className="text-lg font-bold text-white">Who It's For</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{service.whoFor}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Target className="w-5 h-5 text-blue-400" />
                          <h3 className="text-lg font-bold text-white">Engagement Model</h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">{service.engagement}</p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
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
      <section className="py-32 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
                className="relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4 opacity-20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-gradient-to-b from-[#111827] to-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Why Partner with
              <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Arthveda
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6">
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
      <section className="py-32 bg-[#0B1120] relative overflow-hidden">
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
            Ready to Elevate Your Finance Function?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12"
          >
            Book a consultation to discuss your specific needs
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/50 inline-flex items-center gap-3"
          >
            Book Consultation
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
