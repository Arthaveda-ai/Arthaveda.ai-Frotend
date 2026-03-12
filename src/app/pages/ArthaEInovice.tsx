import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Scale, FileText, Calculator, Shield, Clock, AlertTriangle, Database, Globe, BookOpen, Landmark } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const workflowSteps = [
  { icon: Database, title: 'Data Collection', description: 'Auto-pull transaction data from ERP', color: 'from-slate-500 to-gray-600' },
  { icon: Calculator, title: 'Tax Computation', description: 'Rules engine computes applicable taxes', color: 'from-gray-500 to-slate-600' },
  { icon: AlertTriangle, title: 'Validation', description: 'Cross-check against compliance rules', color: 'from-amber-500 to-yellow-600' },
  { icon: FileText, title: 'Return Filing', description: 'Auto-generate and file tax returns', color: 'from-slate-600 to-gray-700' },
  { icon: Shield, title: 'Audit Ready', description: 'Complete trail and documentation', color: 'from-emerald-500 to-green-600' },
];

export default function ArthaTaxPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50" />
          <div className="relative z-10 max-w-3xl mx-auto px-3 py-10 text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 border border-slate-200 rounded-full mb-4">
                <Scale className="w-2 h-2 text-slate-600" />
                <span className="text-xs text-slate-700 font-medium">Tax Compliance Automation</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">
              Artha E-Invoicing
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Automate GST, TDS, and income tax compliance with intelligent computation, validation, and filing. Stay compliant, always.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-800 text-white rounded-xl font-semibold text-sm shadow-lg shadow-slate-500/30 flex items-center gap-1">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-background border-2 border-border text-foreground rounded-xl font-semibold text-sm hover:shadow-md transition-all">
                View Pricing
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-slate-700">Challenge</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Complex Regulations', description: 'Ever-changing tax rules across GST, TDS, and direct taxes create compliance nightmares', impact: '100+ rule changes/yr' },
                { title: 'Manual Filing Risk', description: 'Errors in tax computation and return filing lead to penalties and notices', impact: '₹2-5L avg penalty' },
                { title: 'Missed Deadlines', description: 'Tracking multiple filing deadlines across entities and tax types', impact: '15+ monthly filings' },
              ].map((problem, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="p-8 bg-background border border-border rounded-2xl">
                  <div className="text-4xl font-bold font-mono-data text-red-500 mb-4">{problem.impact}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-32 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-slate-700">Solution</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ArthaTax automates tax computation, reconciliation, and filing with built-in compliance rules that update automatically
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-6">
                  {[
                    { title: 'Auto Tax Computation', description: 'Rules engine that computes GST, TDS, and other taxes from transaction data' },
                    { title: 'GSTR Reconciliation', description: 'Auto-match purchase register with GSTR-2A/2B for ITC optimization' },
                    { title: 'Return Auto-Filing', description: 'Generate and file GSTR-1, GSTR-3B, TDS returns with one click' },
                    { title: 'Deadline Management', description: 'Calendar-based tracking with auto-reminders for all filing deadlines' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="bg-background border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Impact Metrics</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Filing Accuracy', value: '99.9%', width: '99.9%', gradient: 'from-emerald-500 to-green-600' },
                      { label: 'Penalty Reduction', value: '-100%', width: '100%', gradient: 'from-slate-500 to-gray-600' },
                      { label: 'Time Saved', value: '-90%', width: '90%', gradient: 'from-blue-500 to-indigo-600' },
                    ].map((metric, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-muted-foreground text-sm">{metric.label}</span>
                          <span className="text-emerald-600 font-bold font-mono-data">{metric.value}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: metric.width }} viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + idx * 0.2 }}
                            className={`h-full bg-gradient-to-r ${metric.gradient} rounded-full`} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section className="py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="text-5xl font-bold text-foreground mb-6">How It <span className="text-slate-700">Works</span></h2>
              <p className="text-xl text-muted-foreground">From transaction to compliant filing in minutes</p>
            </motion.div>
            <div className="relative">
              <div className="absolute top-24 left-0 right-0 h-px bg-border hidden lg:block">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-slate-500 via-gray-500 to-emerald-500" style={{ height: '2px' }} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
                {workflowSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }} className="relative">
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === index ? 'bg-slate-50 border-slate-300 shadow-xl' : 'bg-background border-border'}`}>
                      <motion.div animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${step.color} shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                      {activeStep === index && (
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.5 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-slate-500 to-gray-600 rounded-b-2xl" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-32 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Powerful <span className="text-slate-700">Features</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Calculator, title: 'GST Engine', description: 'Automated GSTR-1, 3B computation with ITC reconciliation' },
                { icon: Scale, title: 'TDS Management', description: 'Auto TDS calculation, deduction, and challan generation' },
                { icon: BookOpen, title: 'Rule Library', description: 'Self-updating compliance rules for all Indian tax regulations' },
                { icon: Globe, title: 'Multi-Entity', description: 'Consolidated compliance for multi-GSTIN, multi-state operations' },
                { icon: Clock, title: 'Deadline Tracker', description: 'Calendar with alerts for every filing and payment deadline' },
                { icon: Landmark, title: 'E-Way Bill', description: 'Automated e-way bill generation for goods transportation' },
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-600 to-gray-700 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl font-bold text-foreground mb-6">Ready for Zero-Penalty Compliance?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12">See ArthaTax automate your entire tax compliance workflow</motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-slate-700 to-gray-800 text-white rounded-2xl font-bold text-xl shadow-lg shadow-slate-500/30 inline-flex items-center gap-3">
                Request Demo <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
}
