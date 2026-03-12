import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Building2, FileSearch, AlertOctagon, BarChart3, RefreshCw, Lock, Globe2, Layers, Clock4, ShieldCheck, Network } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router';
import { useState, useEffect } from 'react';

const workflowSteps = [
  { icon: Network, title: 'Entity Mapping', description: 'Onboard all entities, subsidiaries & portfolios', color: 'from-indigo-500 to-violet-600' },
  { icon: FileSearch, title: 'Obligation Scan', description: 'Auto-detect regulatory filings per entity type', color: 'from-violet-500 to-purple-600' },
  { icon: RefreshCw, title: 'Live Monitoring', description: 'Track status across SEBI, RBI, MCA, IRDAI', color: 'from-purple-500 to-fuchsia-600' },
  { icon: AlertOctagon, title: 'Risk Alerts', description: 'Escalate non-compliance risks to CFO dashboard', color: 'from-amber-500 to-orange-600' },
  { icon: ShieldCheck, title: 'Board Reporting', description: 'Auto-generate compliance packs for boards', color: 'from-emerald-500 to-teal-600' },
];

const regulators = ['SEBI', 'RBI', 'MCA', 'IRDAI', 'FEMA', 'NCLT', 'IBBI', 'GSTN'];

export default function ArthaComplyPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeRegulator, setActiveRegulator] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % workflowSteps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRegulator((prev) => (prev + 1) % regulators.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50" />
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-30"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #c4b5fd 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full mb-8">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-indigo-700 font-medium">Compliance Governance Platform</span>
              </div>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
              ArthaComply
            </motion.h1>

            {/* Animated regulator ticker */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-3 mb-8">
              <span className="text-sm text-muted-foreground">Covering</span>
              <div className="relative w-20 h-8 overflow-hidden">
                {regulators.map((reg, i) => (
                  <motion.span key={reg}
                    animate={{ y: activeRegulator === i ? 0 : activeRegulator > i ? -32 : 32, opacity: activeRegulator === i ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center text-indigo-600 font-bold font-mono text-sm">
                    {reg}
                  </motion.span>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">& more</span>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              A compliance governance platform for CFOs managing multi-entity structures, NBFCs, and investment portfolios across India's complex regulatory environment.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-2xl font-semibold text-lg shadow-lg shadow-indigo-500/30 flex items-center gap-2">
                  Request Demo <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-background border-2 border-border text-foreground rounded-2xl font-semibold text-lg hover:shadow-md transition-all">
                View Pricing
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-32 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-indigo-600">Challenge</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Regulatory Overload', description: 'CFOs managing NBFCs and holding companies juggle filings across SEBI, RBI, MCA, IRDAI, and FEMA simultaneously', impact: '8+ regulators' },
                { title: 'Entity Sprawl', description: 'Multi-entity structures with subsidiaries, SPVs, and portfolio companies create impossible compliance blind spots', impact: '50+ filings/month' },
                { title: 'Board Accountability', description: 'Synthesizing compliance status across entities for board and audit committee reporting takes weeks', impact: '3–4 wks manual work' },
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
              <h2 className="text-5xl font-bold text-foreground mb-6">The <span className="text-indigo-600">Solution</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ArthaComply gives CFOs a single command center for enterprise-wide regulatory compliance — across every entity, regulator, and obligation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <div className="space-y-6">
                  {[
                    { title: 'Entity-Level Compliance Matrix', description: 'Map every regulatory obligation to each entity — holding cos, subsidiaries, NBFCs, AIFs, and SPVs' },
                    { title: 'Multi-Regulator Coverage', description: 'SEBI, RBI, MCA, IRDAI, FEMA, NCLT — one platform tracks obligations across all regulators' },
                    { title: 'NBFC & AIF Specialization', description: 'Pre-built compliance calendars for NBFC-MFI, NBFC-ICC, AIF Category I/II/III structures' },
                    { title: 'CFO Command Dashboard', description: 'Real-time compliance health score across the entire group with drill-down to entity level' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center flex-shrink-0">
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
                      { label: 'Compliance Visibility', value: '100%', width: '100%', gradient: 'from-indigo-500 to-violet-600' },
                      { label: 'Board Prep Time Saved', value: '-85%', width: '85%', gradient: 'from-violet-500 to-purple-600' },
                      { label: 'Missed Filings', value: '0', width: '100%', gradient: 'from-emerald-500 to-teal-600' },
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

                  {/* Regulator badges */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3 font-medium uppercase tracking-wide">Regulators Covered</p>
                    <div className="flex flex-wrap gap-2">
                      {regulators.map((reg) => (
                        <span key={reg} className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg">
                          {reg}
                        </span>
                      ))}
                    </div>
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
              <h2 className="text-5xl font-bold text-foreground mb-6">How It <span className="text-indigo-600">Works</span></h2>
              <p className="text-xl text-muted-foreground">From entity onboarding to board-ready compliance reporting</p>
            </motion.div>
            <div className="relative">
              <div className="absolute top-24 left-0 right-0 h-px bg-border hidden lg:block">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${(activeStep / (workflowSteps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5 }} className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-emerald-500" style={{ height: '2px' }} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative">
                {workflowSteps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }} className="relative">
                    <div className={`relative p-8 rounded-2xl border transition-all duration-500 ${activeStep === index ? 'bg-indigo-50 border-indigo-300 shadow-xl' : 'bg-background border-border'}`}>
                      <motion.div animate={activeStep === index ? { scale: [1, 1.1, 1] } : {}} transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${step.color} shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-foreground mb-2 text-center">{step.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{step.description}</p>
                      {activeStep === index && (
                        <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 2.5 }}
                          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-b-2xl" />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who It's Built For */}
        <section className="py-32 bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="text-5xl font-bold text-foreground mb-6">Built For <span className="text-indigo-600">Complex Structures</span></h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Purpose-designed for organizations operating under India's most demanding regulatory frameworks
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Building2, title: 'Holding Companies', description: 'Manage compliance across parent, subsidiaries, and associate companies under a unified view', tag: 'MCA / SEBI' },
                { icon: Layers, title: 'NBFCs', description: 'NBFC-ICC, NBFC-MFI, and NBFC-P2P specific compliance calendars with RBI circulars built in', tag: 'RBI' },
                { icon: BarChart3, title: 'Investment Managers', description: 'AIF Category I, II, III and PMS compliance tracking with SEBI reporting automation', tag: 'SEBI' },
                { icon: Globe2, title: 'Cross-Border Ops', description: 'FEMA compliance for inbound FDI, outbound ODI, and ECB reporting requirements', tag: 'FEMA / RBI' },
                { icon: Lock, title: 'Listed Entities', description: 'SEBI LODR compliance calendar with auto-scheduling of board meetings and disclosure deadlines', tag: 'SEBI LODR' },
                { icon: Clock4, title: 'Insolvency Cases', description: 'IBBI and NCLT filing calendars for resolution professionals and liquidators', tag: 'IBBI / NCLT' },
              ].map((segment, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }} whileHover={{ y: -8 }}
                  className="p-8 bg-background border border-border rounded-2xl hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center">
                      <segment.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="px-2 py-1 bg-indigo-50 border border-indigo-200 text-indigo-600 text-xs font-bold rounded-lg">{segment.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{segment.title}</h3>
                  <p className="text-sm text-muted-foreground">{segment.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 relative overflow-hidden border-t border-border">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #a5b4fc 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-5xl font-bold text-foreground mb-6">
              One Dashboard. Every Regulator. Zero Gaps.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground mb-12">
              See how ArthaComply gives CFOs complete regulatory visibility across their entire group structure
            </motion.p>
            <Link to="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-violet-700 text-white rounded-2xl font-bold text-xl shadow-lg shadow-indigo-500/30 inline-flex items-center gap-3">
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