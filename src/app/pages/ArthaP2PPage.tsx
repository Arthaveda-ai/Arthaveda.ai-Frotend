import { motion } from 'motion/react';
import { ArrowRight, FileText, Send, Upload, Sparkles, CheckCircle2, Zap, TrendingUp, Clock, Shield } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const workflowSteps = [
  { icon: FileText, title: 'PO Created', description: 'Purchase order generated in your system', color: 'from-indigo-500 to-purple-600' },
  { icon: Send, title: 'Vendor Receives', description: 'Automatically sent to vendor portal', color: 'from-purple-500 to-pink-600' },
  { icon: Upload, title: 'Invoice Uploaded', description: 'Vendor submits invoice through portal', color: 'from-blue-500 to-cyan-600' },
  { icon: Sparkles, title: 'AI Matching', description: 'Intelligent comparison & validation', color: 'from-violet-500 to-indigo-600' },
  { icon: CheckCircle2, title: 'Bill Auto Created', description: 'ERP bill automatically generated', color: 'from-emerald-500 to-green-600' },
];

export default function ArthaP2PPage() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
<section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden pt-20">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />
  <div className="relative z-10 max-w-3xl mx-auto px-3 py-10 text-center" >
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
      <div className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 border border-indigo-200 rounded-full mb-4">
        <Zap className="w-2 h-2 text-indigo-600" />
        <span className="text-xs text-indigo-700 font-medium">Procure-to-Pay Automation</span>
      </div>
    </motion.div>

    <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
      ArthaP2Pay
    </motion.h1>

    <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
      Complete vendor portal automation from Purchase Order to Invoice matching to ERP Bill creation. Transform your P2P process with AI-powered intelligence.
    </motion.p>

    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-2 justify-center items-center">
      <Link to="/contact">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/30 flex items-center gap-1">
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
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-indigo-600">Challenge</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Manual Processing', description: 'Hours spent manually matching POs with invoices, leading to delays and errors', impact: '85% of finance time' },
                { title: 'Data Entry Errors', description: 'Human errors in matching and data entry cause payment delays and disputes', impact: '15-20% error rate' },
                { title: 'Vendor Friction', description: 'Email back-and-forth, lost documents, and slow approvals frustrate vendors', impact: '2-3 weeks average' },
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
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-indigo-600">Solution</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ArthaP2Pay automates the entire procure-to-pay workflow with AI-powered matching and seamless ERP integration
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-6">
                  {[
                    { title: 'Automated Vendor Portal', description: 'Vendors access a self-service portal to view POs and submit invoices' },
                    { title: 'AI-Powered Matching', description: '3-way matching between PO, Invoice, and GRN with 99.9% accuracy' },
                    { title: 'Exception Management', description: 'Smart alerts for discrepancies with suggested resolutions' },
                    { title: 'ERP Integration', description: 'Seamless bill creation in SAP, Oracle, Zoho, or any ERP system' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
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

              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                <div className="bg-background border border-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Impact Metrics</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Processing Time', value: '-90%', width: '90%', gradient: 'from-emerald-500 to-green-600' },
                      { label: 'Accuracy Rate', value: '99.9%', width: '99.9%', gradient: 'from-indigo-500 to-purple-600' },
                      { label: 'Cost Reduction', value: '-75%', width: '75%', gradient: 'from-blue-500 to-cyan-600' },
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
              <h2 className="text-5xl font-bold text-foreground mb-6">How It <span className="text-indigo-600">Works</span></h2>
              <p className="text-xl text-muted-foreground">5 simple steps to complete automation</p>
            </motion.div>

            <div className="relative">
              <div className="absolute top-24 left-0 right-0 h-px bg-border hidden lg:block">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500" style={{ height: '2px' }} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
                {workflowSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }} className="relative">
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === index ? 'bg-indigo-50 border-indigo-200 shadow-xl' : 'bg-background border-border'}`}>
                      <div className="relative mb-6">
                        <motion.div animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 0.5 }}
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto bg-gradient-to-br ${step.color} shadow-lg`}>
                          <step.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                      {activeStep === index && (
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-b-2xl" />
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
              <h2 className="text-5xl font-bold text-foreground mb-6">Powerful <span className="text-indigo-600">Features</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: 'Real-time Matching', description: 'Instant PO-Invoice comparison with AI validation' },
                { icon: TrendingUp, title: 'Analytics Dashboard', description: 'Complete visibility into P2P metrics and trends' },
                { icon: Clock, title: 'Fast Approvals', description: 'Multi-level workflow with automated routing' },
                { icon: Shield, title: 'Audit Trail', description: 'Complete transaction history for compliance' },
                { icon: FileText, title: 'Document Management', description: 'Centralized storage for all POs and invoices' },
                { icon: CheckCircle2, title: 'Auto Bill Creation', description: 'Direct ERP integration for bill generation' },
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
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
                { title: 'Manufacturing Companies', description: 'Handle complex BOMs and multi-supplier procurement', stats: ['500+ POs/month', '50+ suppliers', '3-way matching'] },
                { title: 'Construction Firms', description: 'Project-based procurement with real-time cost tracking', stats: ['Multi-project', 'Site-wise tracking', 'Contractor management'] },
                { title: 'Retail Chains', description: 'Centralized procurement with branch-level control', stats: ['200+ branches', 'Centralized approval', 'Local flexibility'] },
                { title: 'Enterprise Businesses', description: 'High-volume transaction processing at scale', stats: ['10K+ POs/month', 'Multiple ERPs', 'Global operations'] },
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
        <section className="py-10 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl font-bold text-foreground mb-6">Ready to Automate Your P2P Process?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12">See ArthaP2Pay in action with a personalized demo</motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-indigo-500/30 inline-flex items-center gap-3">
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
