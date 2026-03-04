import { motion } from 'motion/react';
import { 
  Zap, 
  Brain, 
  Shield, 
  BarChart3, 
  Clock, 
  CheckCircle, 
  RefreshCw, 
  Database 
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast Processing',
    description: 'Process thousands of POs and invoices in seconds with our optimized matching engine',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Machine learning algorithms ensure 99.9% accuracy in matching POs with invoices',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with SOC 2, ISO 27001, and GDPR',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards with insights into your P2P workflow performance',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    icon: Clock,
    title: '90% Time Savings',
    description: 'Reduce manual processing time from hours to minutes with full automation',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: CheckCircle,
    title: 'Exception Management',
    description: 'Smart exception handling with automated alerts and suggested resolutions',
    color: 'from-rose-500 to-red-600',
  },
  {
    icon: RefreshCw,
    title: 'Seamless Integration',
    description: 'Connect with SAP, Oracle, NetSuite, and 50+ ERP systems out of the box',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: Database,
    title: 'Audit Trail',
    description: 'Complete transaction history with immutable logs for compliance and auditing',
    color: 'from-cyan-500 to-blue-600',
  },
];

export function FeaturesGrid() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0B1120] to-[#111827] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Modern Finance Teams
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to automate your procure-to-pay process
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow Effect on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              />
              
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
