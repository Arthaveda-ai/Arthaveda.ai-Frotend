import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, BookOpen, Package, Users, BarChart3, Settings, Code2, FolderKanban, UserCheck, Receipt, Layers, RefreshCw, FileText, Wallet, Briefcase, Shield, Headphones, Rocket, Target } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router';

const zohoApps = [
  { name: 'Zoho Books', desc: 'Accounting & Finance', icon: BookOpen, gradient: 'from-blue-600 to-indigo-600' },
  { name: 'Zoho Creator', desc: 'Low-Code App Development', icon: Code2, gradient: 'from-yellow-500 to-amber-600' },
  { name: 'Zoho Inventory', desc: 'Stock & Warehouse', icon: Package, gradient: 'from-amber-600 to-orange-600' },
  { name: 'Zoho CRM', desc: 'Sales & Pipeline', icon: Users, gradient: 'from-blue-500 to-cyan-600' },
  { name: 'Zoho Analytics', desc: 'Business Intelligence', icon: BarChart3, gradient: 'from-rose-600 to-pink-600' },
  { name: 'Zoho ERP', desc: 'Enterprise Resource Planning', icon: Building2, gradient: 'from-slate-500 to-gray-600' },
  { name: 'Zoho Projects', desc: 'Project Management', icon: FolderKanban, gradient: 'from-cyan-500 to-teal-600' },
  { name: 'Zoho People', desc: 'HR & Workforce Management', icon: UserCheck, gradient: 'from-violet-600 to-purple-600' },
  { name: 'Zoho Expense', desc: 'Expense Management', icon: Receipt, gradient: 'from-emerald-600 to-teal-600' },
  { name: 'Zoho Payroll', desc: 'Payroll Processing', icon: Wallet, gradient: 'from-pink-500 to-rose-600' },
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
        <section className="relative pt-24 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50" />
          <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-100 border border-blue-200 rounded-full mb-4">
                <Building2 className="w-3 h-3 text-blue-600" />
                <span className="text-xs text-blue-700 font-medium">Authorized Zoho Partner</span>
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">
              CFO-Led <span className="text-blue-600">Zoho</span>{' '}
              <span className="text-amber-600">Implementations</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
              Not just a technical rollout — a strategic finance transformation. We bring CFO-level thinking to every Zoho implementation, ensuring your ERP serves your business strategy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-500/30 flex items-center justify-center gap-1.5">
                  Schedule Consultation <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-5 py-2.5 bg-background border-2 border-border text-foreground rounded-xl font-semibold text-sm hover:shadow-md transition-all">
                View Case Studies
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Why CFO-Led */}
        <section className="py-12 sm:py-16 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Why <span className="text-blue-600">CFO-Led</span> Matters
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Most ERP implementations fail because they're IT-driven, not finance-driven. We flip that.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {[
                { title: 'IT-Driven Rollouts', description: 'Focus on features, not financial outcomes. Config matches software docs, not business reality.', impact: '70% fail rate', negative: true },
                { title: 'Consultant-Led Rollouts', description: 'Generic best practices applied without understanding your specific financial workflows.', impact: '18-month timelines', negative: true },
                { title: 'Arthveda CFO-Led', description: 'Finance-first approach ensuring every configuration decision serves your P&L and cash flow.', impact: '100% go-live rate', negative: false },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-5 sm:p-6 md:p-8 border rounded-2xl text-center ${index === 2 ? 'bg-blue-50 border-blue-200' : 'bg-background border-border'}`}>
                  <div className={`text-2xl sm:text-3xl font-bold font-mono-data mb-3 ${item.negative ? 'text-red-500' : 'text-emerald-600'}`}>{item.impact}</div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Zoho Apps We Implement */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 sm:mb-3">
                <span className="text-blue-600">Zoho</span> Apps We Implement
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                End-to-end implementation across the Zoho ecosystem
              </p>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {zohoApps.map((app, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -6 }}
                  className="p-4 sm:p-5 md:p-6 bg-background border border-border rounded-2xl hover:shadow-lg transition-all text-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-3 sm:mb-4 mx-auto`}>
                    <app.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground mb-1">{app.name}</h3>
                  <p className="text-xs text-muted-foreground leading-snug">{app.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Methodology */}
        <section className="py-12 sm:py-16 md:py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 sm:mb-14 md:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                Our <span className="text-blue-600">Methodology</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                A proven 6-phase framework refined across 50+ enterprise implementations
              </p>
            </motion.div>
            <div className="space-y-4">
              {phases.map((phase, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 p-5 sm:p-6 md:p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="lg:col-span-1 flex lg:block items-center gap-3">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono-data text-blue-600">{phase.phase}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-1.5 sm:mb-2">{phase.title}</h3>
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 border border-amber-200 rounded-full text-xs text-amber-700 font-medium font-mono-data">
                      {phase.duration}
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{phase.description}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {phase.items.map((item, idx) => (
                        <span key={idx} className="px-2 sm:px-3 py-1 bg-muted border border-border rounded-lg text-xs text-muted-foreground">{item}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-12 sm:py-16 md:py-20 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
                The Arthveda <span className="text-amber-600">Difference</span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {[
                { icon: Target, title: 'Finance-First Configuration', description: 'Every chart of accounts, workflow, and report is designed by finance experts who understand what a CFO needs — not what the software manual says.' },
                { icon: Layers, title: 'Integrated Ecosystem', description: 'We don\'t just implement one app — we architect the entire Zoho ecosystem to work as a unified financial operating system.' },
                { icon: Rocket, title: 'Faster Go-Live', description: 'Our CFO-led approach eliminates the usual back-and-forth between IT and finance, cutting implementation time by 40%.' },
                { icon: Shield, title: 'Post-Go-Live Partnership', description: 'We don\'t disappear after go-live. Quarterly optimization reviews and dedicated support ensure continuous improvement.' },
              ].map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 sm:p-6 md:p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all text-center">
                  {/*<div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-600 to-amber-600 flex items-center justify-center mb-4 sm:mb-5 md:mb-6 mx-auto">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>*/}
                  <h3 className="text-base sm:text-lg md:text-2xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 sm:py-16 md:py-20 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { value: '50+', label: 'Implementations' },
                { value: '100%', label: 'Go-Live Rate' },
                { value: '40%', label: 'Faster Delivery' },
                { value: '4.9/5', label: 'Client Rating' },
              ].map((stat, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono-data text-blue-600 mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-amber-50 relative overflow-hidden border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-5 md:mb-6">
              Ready for a Finance-First Zoho Rollout?
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12">
              Let's discuss how we can transform your finance operations with Zoho
            </motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/30 inline-flex items-center gap-2">
                Schedule Consultation <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
}