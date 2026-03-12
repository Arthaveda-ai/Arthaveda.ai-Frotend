import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, GitCompare, BarChart3, Search, Database, FileCheck, AlertTriangle, Layers, RefreshCw } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const reconciliationSteps = [
  { icon: Database, title: 'Data Import', description: 'Bank statements & ledger data ingested', color: 'from-sky-500 to-cyan-600' },
  { icon: Search, title: 'Smart Parsing', description: 'AI extracts and normalizes transactions', color: 'from-cyan-500 to-teal-600' },
  { icon: GitCompare, title: 'Auto Matching', description: 'ML-powered transaction reconciliation', color: 'from-teal-500 to-emerald-600' },
  { icon: AlertTriangle, title: 'Flag Exceptions', description: 'Discrepancies surfaced for review', color: 'from-amber-500 to-orange-600' },
  { icon: FileCheck, title: 'Report Generated', description: 'Audit-ready reconciliation report', color: 'from-emerald-500 to-green-600' },
];

export default function ArthaMatchPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % reconciliationSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
<section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden pt-20">
  <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50" />
  <div className="relative z-10 max-w-3xl mx-auto px-3 py-10 text-center">
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
      <div className="inline-flex items-center gap-1 px-2 py-1 bg-sky-100 border border-sky-200 rounded-full mb-4">
        <GitCompare className="w-2 h-2 text-sky-600" />
        <span className="text-xs text-sky-700 font-medium">Intelligent Reconciliation</span>
      </div>
    </motion.div>

    <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
      ArthaMatch
    </motion.h1>

    <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
      Intelligent reconciliation engine that automates bank statement and ledger matching. Save hundreds of hours with ML-powered transaction matching.
    </motion.p>

    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-2 justify-center items-center">
      <Link to="/contact">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-sky-500/30 flex items-center gap-1">
          Request Demo <ArrowRight className="w-3 h-3" />
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
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-sky-600">Challenge</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Manual Reconciliation', description: 'Finance teams spend days matching bank statements with ledger entries line by line', impact: '40+ hours/month' },
                { title: 'Unresolved Discrepancies', description: 'Mismatches pile up creating audit risks and financial inaccuracies', impact: '12% mismatch rate' },
                { title: 'Delayed Closings', description: 'Month-end close stretched by manual reconciliation bottlenecks', impact: '5-7 day delays' },
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
        <section className="py-10 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-sky-600">Solution</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ArthaMatch uses machine learning to automatically reconcile transactions across bank statements, ERPs, and ledgers
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-6">
                  {[
                    { title: 'Multi-Source Ingestion', description: 'Connect bank feeds, ERP exports, and manual uploads in any format' },
                    { title: 'ML-Powered Matching', description: 'Self-learning algorithms that improve accuracy over time with 99.5% match rate' },
                    { title: 'Exception Workflows', description: 'Automated routing of mismatches with suggested resolutions' },
                    { title: 'Audit-Ready Reports', description: 'One-click compliance reports with full transaction trail' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center flex-shrink-0">
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
                      { label: 'Reconciliation Time', value: '-95%', width: '95%', gradient: 'from-emerald-500 to-green-600' },
                      { label: 'Match Accuracy', value: '99.5%', width: '99.5%', gradient: 'from-sky-500 to-cyan-600' },
                      { label: 'Month-End Close', value: '-80%', width: '80%', gradient: 'from-blue-500 to-indigo-600' },
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
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-[115vh] mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="text-5xl font-bold text-foreground mb-6">How It <span className="text-sky-600">Works</span></h2>
              <p className="text-xl text-muted-foreground">From raw data to reconciled reports in minutes</p>
            </motion.div>
            <div className="relative">
              <div className="absolute top-24 left-0 right-0 h-px bg-border hidden lg:block">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${(activeStep / (reconciliationSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500" style={{ height: '2px' }} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
                {reconciliationSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }} className="relative">
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === index ? 'bg-sky-50 border-sky-200 shadow-xl' : 'bg-background border-border'}`}>
                      <motion.div animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${step.color} shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                      {activeStep === index && (
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.5 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-b-2xl" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-10 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Powerful <span className="text-sky-600">Features</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: GitCompare, title: 'Smart Matching', description: 'Fuzzy matching algorithms handle partial matches and date variations' },
                { icon: BarChart3, title: 'Reconciliation Dashboard', description: 'Real-time status of all reconciliation processes' },
                { icon: RefreshCw, title: 'Auto-Retry', description: 'Unmatched items re-processed with evolving ML models' },
                { icon: Layers, title: 'Multi-Currency', description: 'Reconcile across currencies with auto FX conversion' },
                { icon: Database, title: 'Any Data Source', description: 'CSV, Excel, API feeds, bank integrations supported' },
                { icon: FileCheck, title: 'Compliance Reports', description: 'SOX, IFRS, and custom audit report generation' },
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-10 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Perfect For</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Banks & NBFCs', description: 'High-volume nostro/vostro and interbank reconciliation', stats: ['1M+ txns/day', 'Multi-bank', 'Real-time'] },
                { title: 'E-Commerce', description: 'Payment gateway to bank to ERP reconciliation', stats: ['Multi-gateway', 'Refund tracking', 'Settlement match'] },
                { title: 'Insurance Companies', description: 'Premium collection and claims reconciliation', stats: ['Policy-level', 'Agent commission', 'Reinsurance'] },
                { title: 'Enterprise Finance', description: 'Multi-entity, multi-currency consolidated reconciliation', stats: ['100+ entities', 'Cross-currency', 'Intercompany'] },
              ].map((useCase, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }} className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {useCase.stats.map((stat, idx) => (
                      <div key={idx} className="px-4 py-2 bg-muted border border-border rounded-xl text-sm text-muted-foreground font-mono-data">{stat}</div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-gradient-to-br from-sky-50 via-cyan-50 to-teal-50 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl font-bold text-foreground mb-6">Ready to Automate Reconciliation?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12">See ArthaMatch reconcile thousands of transactions in minutes</motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-sky-600 to-cyan-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-sky-500/30 inline-flex items-center gap-3">
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
