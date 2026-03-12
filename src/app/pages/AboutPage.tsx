import { motion } from 'motion/react';
import { Brain, Target, Users, Lightbulb, ArrowRight, Award, TrendingUp, Zap } from 'lucide-react';
import { Navbar } from '../components/arthveda/Navbar';
import { Footer } from '../components/arthveda/Footer';
import { PageLayout } from '../components/PageLayout';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
{/*import { ScrollToTop } from '../components/ScrollToTop';*/}
import { Link } from 'react-router';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Shreyas Kumar',
      designation: 'Founder & CEO',
      description: 'Former CFO with 15+ years in strategic finance. Expert in enterprise financial transformation and scaling operations.',
      image: 'https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.wattpad.com%2F242915810-chasing-wattpad-user-not-found&ved=0CBYQjRxqFwoTCPDuprrekpMDFQAAAAAdAAAAABAI&opi=89978449',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      name: 'Rahul Reddy',
      designation: 'Co-Founder & CTO',
      description: 'Tech innovator specializing in AI/ML and fintech automation. Previously led engineering at major SaaS companies.',
      image: 'https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.wattpad.com%2F242915810-chasing-wattpad-user-not-found&ved=0CBYQjRxqFwoTCPDuprrekpMDFQAAAAAdAAAAABAI&opi=89978449',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      name: 'Chethan Sharma',
      designation: 'Co-Founder & COO',
      description: 'Product visionary with deep domain expertise in ERP systems and financial workflows. Champions user-centric design.',
      image: 'https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.wattpad.com%2F242915810-chasing-wattpad-user-not-found&ved=0CBYQjRxqFwoTCPDuprrekpMDFQAAAAAdAAAAABAI&opi=89978449',
      gradient: 'from-violet-500 to-indigo-600',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Client-Centric Excellence',
      description: 'Every decision we make starts with understanding our clients\' challenges and delivering measurable value.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Automation',
      description: 'We believe in continuous innovation, turning manual processes into intelligent automated workflows.',
    },
    {
      icon: Award,
      title: 'Domain Expertise',
      description: 'Deep financial and technical knowledge drives everything we do, ensuring best-in-class solutions.',
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We work alongside our clients as trusted partners, not just vendors, for lasting success.',
    },
  ];

  const stats = [
    { number: '50+', label: 'Enterprise Clients' },
    { number: '₹500Cr+', label: 'Transactions Processed' },
    { number: '90%', label: 'Time Saved' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-white">
        {/*<ScrollToTop />*/}
        <Navbar />
        {/* Hero Section */}
        <section className="relative pt-25 pb-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          
          <div className="relative z-10 max-w-2xl mx-auto px-3 text-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-1 px-2 py-1 bg-indigo-100 border border-indigo-200 rounded-full mb-4"
            >
              <Brain className="w-2 h-2 text-indigo-600" />
              <span className="text-xs text-indigo-700 font-medium">About Arthveda.ai</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight"
            >
              Transforming Finance Through
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}Strategy & Technology
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm text-gray-600 mb-4 max-w-xl mx-auto leading-relaxed"
            >
              We're a unique blend of strategic finance consultants and product builders, 
              helping businesses scale with intelligent automation and expert advisory.
            </motion.p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 mx-auto mb-8 rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-600 leading-relaxed"
            >
              <p>
                Arthveda.ai was born from a simple observation: businesses were struggling with the same 
                financial operations challenges repeatedly, while consultants kept offering temporary solutions 
                without lasting impact.
              </p>
              <p>
                We decided to do things differently. By combining CFO-level strategic advisory with 
                intelligent automation products, we help businesses not just plan better, but execute better. 
                Our unique position means we understand the problems deeply and build solutions that actually work.
              </p>
              <p>
                Today, we're proud to partner with leading enterprises across India, processing billions in 
                transactions and saving thousands of hours through our automation platforms, while providing 
                strategic guidance that shapes their financial future.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Leadership
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced leaders driving innovation at the intersection of finance and technology
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Gradient glow effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${member.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Gradient badge */}
                      <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <div className={`inline-block px-3 py-1 bg-gradient-to-r ${member.gradient} text-white text-sm font-semibold rounded-lg mb-4`}>
                        {member.designation}
                      </div>
                      <p className="text-gray-600 leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our
                <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  {' '}Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-xl hover:border-indigo-200 transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Join Us on This Journey
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
            >
              Ready to transform your finance operations? Let's talk about how we can help.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all inline-flex items-center gap-3"
              >
                <Link to="/contact">
                    Get in Touch
                </Link>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    </PageLayout>
  );
}