import { motion } from 'motion/react';

const technologies = [
  {
    name: 'Next.js',
    category: 'Frontend Framework',
    color: 'from-gray-700 to-black',
    logo: '▲',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    color: 'from-cyan-500 to-blue-600',
    logo: '🎨',
  },
  {
    name: 'Spring Boot',
    category: 'Backend Framework',
    color: 'from-green-500 to-emerald-600',
    logo: '🍃',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    color: 'from-blue-600 to-indigo-700',
    logo: '🐘',
  },
  {
    name: 'Apache Kafka',
    category: 'Event Streaming',
    color: 'from-gray-800 to-black',
    logo: 'K',
  },
  {
    name: 'Redis',
    category: 'Caching Layer',
    color: 'from-red-500 to-rose-600',
    logo: '⚡',
  },
];

export function TechStack() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#111827] to-[#0B1120] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built with
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Modern Technology
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade tech stack for reliability, scalability, and performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${tech.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                {/* Logo/Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center mb-6 text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}>
                  {tech.logo}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {tech.category}
                </p>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.99%</div>
              <div className="text-sm text-gray-400">Uptime SLA</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">&lt;100ms</div>
              <div className="text-sm text-gray-400">Response Time</div>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10M+</div>
              <div className="text-sm text-gray-400">Events/Day</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
