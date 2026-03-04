import { motion } from 'motion/react';
import { FileText, Send, Upload, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const steps = [
  {
    icon: FileText,
    title: 'PO Created',
    description: 'Purchase order generated in your system',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    icon: Send,
    title: 'Vendor Receives',
    description: 'Automatically sent to vendor',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Upload,
    title: 'Invoice Uploaded',
    description: 'Vendor submits invoice',
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

export function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">ArthaFlow</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            End-to-end automation from purchase order to ERP bill creation
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/20 via-blue-500/20 to-emerald-500/20 hidden lg:block">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-500"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Arrow between steps (desktop) */}
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-20 w-8 h-8 text-indigo-500/50 z-20" />
                )}

                <div className={`
                  relative p-8 rounded-2xl border transition-all duration-500
                  ${activeStep === index 
                    ? 'bg-white/10 backdrop-blur-xl border-indigo-500/50 shadow-2xl shadow-indigo-500/20' 
                    : 'bg-white/5 backdrop-blur-sm border-white/10'
                  }
                `}>
                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      animate={activeStep === index ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      } : {}}
                      transition={{ duration: 0.5 }}
                      className={`
                        w-16 h-16 rounded-2xl flex items-center justify-center mx-auto
                        bg-gradient-to-br ${step.color} shadow-lg
                      `}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-30`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center">
                    {step.description}
                  </p>

                  {/* Active Indicator */}
                  {activeStep === index && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 2 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-b-2xl"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
