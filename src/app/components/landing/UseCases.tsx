import { motion } from 'motion/react';
import { Factory, Building2, GitBranch, TrendingUp } from 'lucide-react';

const useCases = [
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Handle complex BOMs and multi-level approval workflows with ease. Perfect for automotive, electronics, and heavy machinery manufacturers.',
    stats: ['500+ POs/month', '15 suppliers', '3-way matching'],
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Building2,
    title: 'Construction',
    description: 'Manage project-based procurement with real-time cost tracking. Ideal for contractors handling multiple sites and vendors.',
    stats: ['1000+ invoices/month', '50+ vendors', 'Multi-project tracking'],
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: GitBranch,
    title: 'Multi-branch Companies',
    description: 'Centralized procurement control with branch-level autonomy. Perfect for retail chains and franchise businesses.',
    stats: ['200+ branches', 'Centralized control', 'Local flexibility'],
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'High-volume Procurement',
    description: 'Process thousands of transactions daily with complete automation. Built for enterprises with complex P2P needs.',
    stats: ['10K+ POs/month', '99.9% accuracy', 'Real-time processing'],
    gradient: 'from-emerald-500 to-green-600',
  },
];

export function UseCases() {
  return (
    <section className="py-32 bg-[#111827] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built for Your
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Industry Needs
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trusted by enterprises across industries to streamline their procurement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${useCase.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-3">
                  {useCase.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm text-gray-300"
                    >
                      {stat}
                    </div>
                  ))}
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center`}>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
