import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Receipt, Bell, CreditCard, Users, PieChart, Clock, Wallet, Send, BarChart3, FileText } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const workflowSteps = [
  { icon: Receipt, title: 'Invoice Created', description: 'Generate and send professional invoices', color: 'from-emerald-500 to-teal-600' },
  { icon: Send, title: 'Auto Delivery', description: 'Multi-channel delivery to customers', color: 'from-teal-500 to-cyan-600' },
  { icon: Bell, title: 'Smart Reminders', description: 'Automated follow-ups and escalations', color: 'from-cyan-500 to-blue-600' },
  { icon: CreditCard, title: 'Payment Received', description: 'Real-time payment tracking & matching', color: 'from-blue-500 to-indigo-600' },
  { icon: CheckCircle2, title: 'Auto Reconciled', description: 'Invoice marked paid and books updated', color: 'from-emerald-500 to-green-600' },
];

export default function ArthaCollectPage() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50" />
          <div className="relative z-10 max-w-3xl mx-auto px-3 py-10 text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-100 border border-emerald-200 rounded-full mb-4">
                <Wallet className="w-2 h-2 text-emerald-600" />
                <span className="text-xs text-emerald-700 font-medium">Accounts Receivable Automation</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-4xl font-bold text-foreground mb-3 leading-tight">
              Artha Accounts Receivable
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-sm md:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Accelerate cash inflow with intelligent invoicing, automated reminders, and real-time payment tracking. Reduce DSO by up to 60%.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-emerald-500/30 flex items-center gap-1">
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
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-emerald-600">Challenge</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Slow Collections', description: 'Manual follow-ups and lack of visibility cause receivables to age', impact: '45+ day DSO' },
                { title: 'Cash Flow Gaps', description: 'Unpredictable collections create working capital constraints', impact: '30% tied up' },
                { title: 'Lost Revenue', description: 'Missed invoices, wrong amounts, and disputed charges lead to write-offs', impact: '2-5% revenue loss' },
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
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-emerald-600">Solution</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ArthaCollect transforms accounts receivable with smart invoicing, automated dunning, and predictive cash flow analytics
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-6">
                  {[
                    { title: 'Smart Invoicing', description: 'Auto-generate invoices from sales orders with multi-channel delivery' },
                    { title: 'Automated Dunning', description: 'Escalating reminder sequences based on customer payment behavior' },
                    { title: 'Payment Portal', description: 'Customer self-service portal with multiple payment options' },
                    { title: 'Predictive Analytics', description: 'AI-powered cash flow forecasting based on payment patterns' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
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
                      { label: 'DSO Reduction', value: '-60%', width: '60%', gradient: 'from-emerald-500 to-green-600' },
                      { label: 'Collection Rate', value: '98.5%', width: '98.5%', gradient: 'from-teal-500 to-cyan-600' },
                      { label: 'Write-off Reduction', value: '-85%', width: '85%', gradient: 'from-cyan-500 to-blue-600' },
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
              <h2 className="text-5xl font-bold text-foreground mb-6">How It <span className="text-emerald-600">Works</span></h2>
              <p className="text-xl text-muted-foreground">From invoice to cash in record time</p>
            </motion.div>
            <div className="relative">
              <div className="absolute top-24 left-0 right-0 h-px bg-border hidden lg:block">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" style={{ height: '2px' }} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
                {workflowSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }} className="relative">
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === index ? 'bg-emerald-50 border-emerald-200 shadow-xl' : 'bg-background border-border'}`}>
                      <motion.div animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${step.color} shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                      {activeStep === index && (
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.5 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-2xl" />
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
              <h2 className="text-5xl font-bold text-foreground mb-6">Powerful <span className="text-emerald-600">Features</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Receipt, title: 'Smart Invoicing', description: 'Template-driven invoicing with auto-generation from orders' },
                { icon: Bell, title: 'Automated Reminders', description: 'Multi-channel dunning with escalation workflows' },
                { icon: PieChart, title: 'AR Analytics', description: 'Aging analysis, DSO trends, and collection forecasting' },
                { icon: Users, title: 'Customer Portal', description: 'Self-service payment and statement access' },
                { icon: CreditCard, title: 'Multi-Payment', description: 'Accept bank transfer, UPI, cards, and digital wallets' },
                { icon: BarChart3, title: 'Cash Flow Forecast', description: 'Predictive analytics for working capital planning' },
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
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
        <section className="py-10 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl font-bold text-foreground mb-6">Ready to Accelerate Collections?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12">See how ArthaCollect can reduce your DSO by 60%</motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-emerald-500/30 inline-flex items-center gap-3">
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
