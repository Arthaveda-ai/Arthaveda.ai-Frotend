import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, BookOpen, Package, Users, BarChart3, Settings, Layers, RefreshCw, Shield, Headphones, Rocket, Target } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router';

const zohoApps = [
  { name: 'Zoho Books', desc: 'Accounting & Finance', icon: BookOpen, gradient: 'from-blue-600 to-indigo-600' },
  { name: 'Zoho Inventory', desc: 'Stock & Warehouse', icon: Package, gradient: 'from-amber-600 to-orange-600' },
  { name: 'Zoho Expense', desc: 'Spend Management', icon: BarChart3, gradient: 'from-emerald-600 to-teal-600' },
  { name: 'Zoho CRM', desc: 'Sales & Pipeline', icon: Users, gradient: 'from-blue-500 to-cyan-600' },
  { name: 'Zoho People', desc: 'HR & Payroll', icon: Users, gradient: 'from-violet-600 to-purple-600' },
  { name: 'Zoho Analytics', desc: 'Business Intelligence', icon: BarChart3, gradient: 'from-rose-600 to-pink-600' },
];

const phases = [
  { phase: '01', title: 'Discovery & Audit', description: 'Deep-dive into existing processes, data flows, and pain points. Map current state and design future state architecture.', duration: '2-3 weeks', items: ['Process mapping', 'Data audit', 'Gap analysis', 'Future-state design'] },
  { phase: '02', title: 'Configuration & Setup', description: 'Configure Zoho apps to match your business rules, chart of accounts, workflows, and approval hierarchies.', duration: '3-4 weeks', items: ['App configuration', 'Workflow setup', 'User roles', 'Custom fields'] },
  { phase: '03', title: 'Data Migration', description: 'Clean, transform, and migrate historical data from legacy systems with full validation and reconciliation.', duration: '2-3 weeks', items: ['Data cleansing', 'Migration scripts', 'Validation checks', 'Reconciliation'] },
  { phase: '04', title: 'Integration & Testing', description: 'Connect Zoho with banks, payment gateways, and third-party tools. Rigorous UAT and performance testing.', duration: '2-3 weeks', items: ['API integrations', 'Bank feeds', 'UAT testing', 'Performance testing'] },
  { phase: '05', title: 'Training & Go-Live', description: 'Hands-on training for all user groups, parallel run, and supported go-live with real-time issue resolution.', duration: '1-2 weeks', items: ['User training', 'Parallel run', 'Go-live support', 'Handover docs'] },
  { phase: '06', title: 'Post-Go-Live Support', description: 'Dedicated support period for optimization, issue resolution, and continuous improvement based on real usage.', duration: 'Ongoing', items: ['Issue resolution', 'Optimization', 'New features', 'Quarterly reviews'] },
];

export default function ZohoRolloutsPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
<section className="relative pt-25 pb-8 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50" />
  <div className="relative z-10 max-w-2xl mx-auto px-3 text-center" >
    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
      <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 border border-blue-200 rounded-full mb-4">
        <Building2 className="w-2 h-2 text-blue-600" />
        <span className="text-xs text-blue-700 font-medium">Authorized Zoho Partner</span>
      </div>
    </motion.div>

    <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
      className="text-2xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
      CFO-Led <span className="text-blue-600">Zoho</span>{' '}
      <span className="text-amber-600">Implementations</span>
    </motion.h1>

    <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
      Not just a technical rollout — a strategic finance transformation. We bring CFO-level thinking to every Zoho implementation, ensuring your ERP serves your business strategy.
    </motion.p>

    <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-2 justify-center items-center">
      <Link to="/contact">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/30 flex items-center gap-1">
          Schedule Consultation <ArrowRight className="w-3 h-3" />
        </motion.button>
      </Link>
      <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-background border-2 border-border text-foreground rounded-xl font-semibold text-sm hover:shadow-md transition-all">
        View Case Studies
      </motion.button>
    </motion.div>
  </div>
</section>

        {/* Why CFO-Led */}
        <section className="py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Why <span className="text-blue-600">CFO-Led</span> Matters</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Most ERP implementations fail because they're IT-driven, not finance-driven. We flip that.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'IT-Driven Rollouts', description: 'Focus on features, not financial outcomes. Config matches software docs, not business reality.', impact: '70% fail rate', negative: true },
                { title: 'Consultant-Led Rollouts', description: 'Generic best practices applied without understanding your specific financial workflows.', impact: '18-month timelines', negative: true },
                { title: 'Arthveda CFO-Led', description: 'Finance-first approach ensuring every configuration decision serves your P&L and cash flow.', impact: '100% go-live rate', negative: false },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className={`p-8 border rounded-2xl ${index === 2 ? 'bg-blue-50 border-blue-200' : 'bg-background border-border'}`}>
                  <div className={`text-4xl font-bold font-mono-data mb-4 ${item.negative ? 'text-red-500' : 'text-emerald-600'}`}>{item.impact}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zoho Apps We Implement */}
        <section className="py-32 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">
                <span className="text-blue-600">Zoho</span> Apps We Implement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                End-to-end implementation across the Zoho ecosystem
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {zohoApps.map((app, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-6`}>
                    <app.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{app.name}</h3>
                  <p className="text-sm text-muted-foreground">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Methodology */}
        <section className="py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
              <h2 className="text-5xl font-bold text-foreground mb-6">Our <span className="text-blue-600">Methodology</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven 6-phase framework refined across 50+ enterprise implementations
              </p>
            </motion.div>
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="lg:col-span-1 flex items-start">
                    <span className="text-4xl font-bold font-mono-data text-blue-600">{phase.phase}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-xs text-amber-700 font-medium font-mono-data">
                      {phase.duration}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">{phase.description}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-2">
                      {phase.items.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-muted border border-border rounded-lg text-xs text-muted-foreground">{item}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-32 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">The Arthveda <span className="text-amber-600">Difference</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { icon: Target, title: 'Finance-First Configuration', description: 'Every chart of accounts, workflow, and report is designed by finance experts who understand what a CFO needs — not what the software manual says.' },
                { icon: Layers, title: 'Integrated Ecosystem', description: 'We don\'t just implement one app — we architect the entire Zoho ecosystem to work as a unified financial operating system.' },
                { icon: Rocket, title: 'Faster Go-Live', description: 'Our CFO-led approach eliminates the usual back-and-forth between IT and finance, cutting implementation time by 40%.' },
                { icon: Shield, title: 'Post-Go-Live Partnership', description: 'We don\'t disappear after go-live. Quarterly optimization reviews and dedicated support ensure continuous improvement.' },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-amber-600 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '50+', label: 'Implementations' },
                { value: '100%', label: 'Go-Live Rate' },
                { value: '40%', label: 'Faster Delivery' },
                { value: '4.9/5', label: 'Client Rating' },
              ].map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="text-4xl md:text-5xl font-bold font-mono-data text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl font-bold text-foreground mb-6">Ready for a Finance-First Zoho Rollout?</motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12">Let's discuss how we can transform your finance operations with Zoho</motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl shadow-lg shadow-blue-500/30 inline-flex items-center gap-3">
                Schedule Consultation <ArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
}
