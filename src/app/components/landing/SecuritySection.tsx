import { motion } from 'motion/react';
import { Shield, Lock, Key, Eye, FileCheck, Cloud } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'SOC 2 Type II Certified',
    description: 'Independently audited security controls',
  },
  {
    icon: Lock,
    title: 'Bank-Grade Encryption',
    description: 'AES-256 encryption at rest and in transit',
  },
  {
    icon: Key,
    title: 'OAuth 2.0 Integration',
    description: 'Secure authentication with SSO support',
  },
  {
    icon: Eye,
    title: 'Role-Based Access',
    description: 'Granular permissions and access control',
  },
  {
    icon: FileCheck,
    title: 'Compliance Ready',
    description: 'GDPR, ISO 27001, and HIPAA compliant',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Hosted on AWS with 99.99% uptime',
  },
];

export function SecuritySection() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0B1120] to-[#111827] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Security &
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Compliance First
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your data security is our top priority. Built with enterprise-grade security from the ground up.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              <div className="relative h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl"
            >
              <div className="text-lg font-bold text-white">{badge}</div>
              <div className="text-xs text-gray-400 text-center">Certified</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
