import { motion } from 'motion/react';
import { FileText, BookOpen, FileDown, Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function ResourcesPage() {
  const blogs = [
    {
      title: '10 Ways AI is Transforming Invoice Processing',
      description: 'Discover how artificial intelligence is revolutionizing accounts payable and reducing manual effort by 90%.',
      image: 'https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaW5hbmNlJTIwdGVjaG5vbG9neSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzMwNTI1NDB8MA&ixlib=rb-4.1.0&q=80&w=600',
      category: 'Automation',
      date: 'March 5, 2026',
      readTime: '8 min read',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'The CFO\'s Guide to Strategic Financial Planning',
      description: 'Essential frameworks and strategies for effective financial planning in high-growth companies.',
      image: 'https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGNoYXJ0cyUyMGRhdGF8ZW58MXx8fHwxNzczMDUyNTQxfDA&ixlib=rb-4.1.0&q=80&w=600',
      category: 'Strategy',
      date: 'February 28, 2026',
      readTime: '12 min read',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'ERP Integration Best Practices for Finance Teams',
      description: 'Learn how to seamlessly integrate your finance automation tools with existing ERP systems.',
      image: 'https://images.unsplash.com/photo-1759884247144-53d52c31f859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzczMDIxMzgzfDA&ixlib=rb-4.1.0&q=80&w=600',
      category: 'Technology',
      date: 'February 20, 2026',
      readTime: '10 min read',
      gradient: 'from-violet-500 to-indigo-600',
    },
  ];

  const caseStudies = [
    {
      title: 'How a D2C Brand Reduced Invoice Processing Time by 85%',
      description: 'A leading e-commerce company automated their entire P2P cycle, processing 10,000+ invoices monthly with ArthaP2P.',
      image: 'https://images.unsplash.com/photo-1772734645532-a200e06f105d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhdXRvbWF0aW9uJTIwbGFwdG9wfGVufDF8fHx8MTc3MzA1MjU0MXww&ixlib=rb-4.1.0&q=80&w=600',
      industry: 'E-commerce',
      results: ['85% faster processing', '₹2Cr saved annually', '99.5% accuracy'],
      gradient: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Enterprise Bank Reconciliation at Scale',
      description: 'A fintech unicorn automated reconciliation of 50,000+ daily transactions across multiple banking partners.',
      image: 'https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBjbG91ZHxlbnwxfHx8fDE3NzMwNTI1NDJ8MA&ixlib=rb-4.1.0&q=80&w=600',
      industry: 'Fintech',
      results: ['98% automation', '200+ hours saved/month', 'Real-time matching'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Manufacturing Giant\'s Financial Transformation',
      description: 'Strategic CFO advisory helped restructure finance operations and raise $50M in Series B funding.',
      image: 'https://images.unsplash.com/photo-1762318986860-a7b18dd0da02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwZmluYW5jZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzI5NDkyMDh8MA&ixlib=rb-4.1.0&q=80&w=600',
      industry: 'Manufacturing',
      results: ['$50M raised', '40% cost reduction', 'IPO-ready finance ops'],
      gradient: 'from-orange-500 to-red-600',
    },
  ];

  const whitepapers = [
    {
      title: 'The State of Finance Automation in India 2026',
      description: 'Comprehensive industry report covering automation trends, adoption rates, and ROI analysis across 500+ enterprises.',
      pages: '45 pages',
      format: 'PDF',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'Building a Modern P2P Automation Strategy',
      description: 'Step-by-step guide to implementing purchase-to-pay automation with proven frameworks and templates.',
      pages: '32 pages',
      format: 'PDF',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'AI/ML in Financial Operations: A Practical Guide',
      description: 'Understanding machine learning applications in finance, from invoice matching to fraud detection.',
      pages: '28 pages',
      format: 'PDF',
      gradient: 'from-violet-500 to-indigo-600',
    },
    {
      title: 'ERP Integration Playbook for Finance Teams',
      description: 'Best practices for integrating automation tools with SAP, Oracle, Zoho, and other major ERP systems.',
      pages: '38 pages',
      format: 'PDF',
      gradient: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
<section className="relative pt-12 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />

  <div className="relative z-10 max-w-2xl mx-auto px-3 text-center" >
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 border border-indigo-200 rounded-full mb-4"
    >
      <BookOpen className="w-2 h-2 text-indigo-600" />
      <span className="text-xs text-indigo-700 font-medium">Resources & Insights</span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight"
    >
      Knowledge Hub for
      <br />              
      <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
        {'    '}Finance Leaders
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-sm text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed"
    >
      Insights, case studies, and guides to help you stay ahead in the world of finance automation and strategic planning.
    </motion.p>
  </div>
</section>

        {/* Blog Posts Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                {/*<FileText className="w-8 h-8 text-indigo-600" />*/}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Latest
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    {' '}Blog Posts
                  </span>
                </h2>
              </div>
              <p className="text-lg text-gray-600">Expert insights on finance automation and strategic planning</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${blog.gradient} text-white text-xs font-semibold rounded-lg`}>
                        {blog.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {blog.description}
                      </p>
                      <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-10 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                {/*<TrendingUp className="w-8 h-8 text-blue-600" />*/}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Success
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    {' '}Stories
                  </span>
                </h2>
              </div>
              <p className="text-lg text-gray-600">Real results from our clients across industries</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className={`absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r ${study.gradient} text-white text-xs font-semibold rounded-lg`}>
                        {study.industry}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                        {study.description}
                      </p>
                      
                      {/* Results */}
                      <div className="space-y-2 mb-4">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${study.gradient}`} />
                            <span className="text-gray-700 font-medium">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read Case Study
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepapers Section */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-4">
                {/*<FileDown className="w-8 h-8 text-purple-600" />*/}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Whitepapers{' '}
                  </span>
                  & Reports
                </h2>
              </div>
              <p className="text-lg text-gray-600">In-depth research and practical guides for finance professionals</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whitepapers.map((paper, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all">
                    {/* Icon */}
                    {/*<div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${paper.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                      <FileText className="w-8 h-8 text-white" />
                    </div>*/}

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {paper.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {paper.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {paper.pages}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileDown className="w-4 h-4" />
                        {paper.format}
                      </span>
                    </div>

                    <button className={`w-full px-6 py-3 bg-gradient-to-r ${paper.gradient} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}>
                      Download Free
                      {/*<FileDown className="w-5 h-5" />*/}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Want More Insights?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            >
              Subscribe to our newsletter for weekly updates on finance automation trends and best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-indigo-600 focus:outline-none text-gray-900"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-xl font-bold shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageLayout>
  );
}