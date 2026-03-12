import { motion } from 'motion/react';
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle2, Wallet, Receipt, FileText,} from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import ProductCard from '../components/ui/products-card';
import { Link } from 'react-router';

export default function ProductsPage() {
  return (
    <PageLayout>
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[25vh] flex items-center justify-center overflow-hidden pt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />
        <div className="absolute inset-0 blur-3xl">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50"
            style={{ backgroundSize: '200% 200%' }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Intelligent Finance
            <br />
            <span className="text-indigo-600">
              Automation Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Purpose-built SaaS solutions that automate complex finance workflows with AI precision
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[140vh] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* ArthaP2P */}
          <ProductCard
            title="ArthaP2Pay"
            description="Complete vendor portal automation platform"
            badge="Procure-to-Pay Automation"
            icon={Zap}
            gradient="from-indigo-500 to-purple-600"
            headerGradient="from-indigo-50 to-purple-50"
            badgeStyle="bg-indigo-100 border-indigo-200 text-indigo-700"
            iconGradient="from-indigo-500 to-purple-600"
            buttonGradient="from-indigo-600 to-purple-600"
            featureIconColor="text-indigo-500"
            link="/products/arthap2p"
            features={[
              "AI-powered PO to Invoice matching",
              "Automated ERP bill creation",
              "Real-time vendor portal",
              "Exception management",
              "Multi-level approval workflows",
              "ERP integration (SAP, Oracle, Zoho)",
            ]}
            stats={[
              { value: "90%", label: "Faster Processing" },
              { value: "99.9%", label: "Accuracy" },
              { value: "10K+", label: "POs/Month" },
            ]}
          />

          {/* ArthaMatch */}
          <ProductCard
            title="ArthaMatch"
            description="Intelligent reconciliation engine"
            badge="Bank Reconciliation AI"
            icon={Shield}
            gradient="from-blue-500 to-cyan-600"
            headerGradient="from-blue-50 to-cyan-50"
            badgeStyle="bg-blue-100 border-blue-200 text-blue-700"
            iconGradient="from-blue-500 to-cyan-600"
            buttonGradient="from-blue-600 to-cyan-600"
            featureIconColor="text-blue-500"
            link="/products/arthamatch"
            features={[
              "Smart bank-ledger reconciliation",
              "ML-powered transaction matching",
              "Automated discrepancy detection",
              "Multi-currency support",
              "Audit-ready reports",
              "Bank integrations",
            ]}
            stats={[
              { value: "85%", label: "Time Saved" },
              { value: "100K+", label: "Transactions" },
              { value: "24/7", label: "Automation" },
            ]}
          />

          {/* Accounts Receivable */}
          <ProductCard
            title="Accounts Receivable"
            description="Accelerate your cash flow"
            badge="AI Collections Engine"
            icon={Wallet}
            gradient="from-purple-500 to-indigo-600"
            headerGradient="from-purple-50 to-indigo-50"
            badgeStyle="bg-purple-100 border-purple-200 text-purple-700"
            iconGradient="from-purple-500 to-indigo-600"
            buttonGradient="from-purple-600 to-indigo-600"
            featureIconColor="text-purple-500"
            link="/products/arthaAR"
            features={[
              "Automated payment reminders",
              "Collections prioritization",
              "Customer payment insights",
              "Smart invoice follow-ups",
              "Receivable dashboard",
              "ERP integrations",
            ]}
            stats={[
              { value: "40%", label: "Faster Payments" },
              { value: "60%", label: "Reduced DSO" },
              { value: "24/7", label: "Automation" },
            ]}
          />

          {/* Expense Management */}
          <ProductCard
            title="Expense Management"
            description="Policy-first spending control"
            badge="AI Spend Intelligence"
            icon={Receipt}
            gradient="from-green-500 to-emerald-600"
            headerGradient="from-green-50 to-emerald-50"
            badgeStyle="bg-green-100 border-green-200 text-green-700"
            iconGradient="from-green-500 to-emerald-600"
            buttonGradient="from-green-600 to-emerald-600"
            featureIconColor="text-green-500"
            link="/products/arthaEM"
            features={[
              "Receipt scanning",
              "Fraud detection",
              "Real-time expense visibility",
              "Policy compliance automation",
              "Reimbursement workflows",
              "Corporate card integrations",
            ]}
            stats={[
              { value: "3x", label: "Faster Approvals" },
              { value: "95%", label: "Accuracy" },
              { value: "100%", label: "Policy Control" },
            ]}
          />

        {/* E-Invoicing centered */}
          <ProductCard
            title="E-Invoicing"
            description="Global compliance automation"
            badge="Tax Compliance Engine"
            icon={FileText}
            gradient="from-orange-500 to-red-600"
            headerGradient="from-orange-50 to-red-50"
            badgeStyle="bg-orange-100 border-orange-200 text-orange-700"
            iconGradient="from-orange-500 to-red-600"
            buttonGradient="from-orange-600 to-red-600"
            featureIconColor="text-orange-500"
            link="/products/arthaEInvoice"
              features={[
                "Automated e-invoice generation",
                "Multi-country tax compliance",
                "GST and VAT integrations",
                "Real-time validation",
                "Digital signature support",
                "ERP integrations",
              ]}
              stats={[
                { value: "120+", label: "Countries" },
                { value: "99%", label: "Compliance" },
                { value: "Instant", label: "Validation" },
              ]}
            />

            {/* Artha-Comply */}
            <ProductCard
              title="Artha Comply"
              description="Automated compliance management"
              badge="Regulatory Compliance AI"
              icon={Shield}
              gradient="from-green-500 to-teal-600"
              headerGradient="from-green-50 to-teal-50"
              badgeStyle="bg-green-100 border-green-200 text-green-700"
              iconGradient="from-green-500 to-teal-600"
              buttonGradient="from-green-600 to-teal-600"
              featureIconColor="text-green-500"
              link="/products/arthacomply"
              features={[
                "Automated regulatory tracking",
                "Compliance alerts and notifications",
                "Policy management & audits",
                "Document verification and storage",
                "Multi-jurisdiction support",
                "Audit-ready compliance reports",
              ]}
              stats={[
                { value: "90%", label: "Manual Effort Reduced" },
                { value: "500+", label: "Regulations Covered" },
                { value: "24/7", label: "Monitoring" },
              ]}
            />
          </div>
      </div>
    </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"

            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Arthveda
                </span>
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Proven ROI',
                  description: 'Average 10x return on investment within first year',
                  gradient: 'from-indigo-500 to-purple-600',
                },
                {
                  icon: Zap,
                  title: 'Rapid Deployment',
                  description: 'Go live in weeks, not months with our quick implementation',
                  gradient: 'from-blue-500 to-cyan-600',
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Bank-grade encryption and SOC 2 Type II certified',
                  gradient: 'from-violet-500 to-indigo-600',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-md`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-32 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full blur-3xl"
            />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Need more than just a software?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 mb-12"
          >
            Our Artha Advisory team provides the strategic oversight to help you implement these solutions at scale.
          </motion.p>
          <Link to= "/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-bold text-xl shadow-2xl shadow-indigo-500/50 inline-flex items-center gap-3"
          >
            Explore Advisory Services
            <ArrowRight className="w-6 h-6" />
          </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
    </PageLayout>
  );
}