import { Brain, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-xl flex items-center justify-center shadow-md">
                <img
                  src="/applogo.png"
                  alt="Zoho Logo"
                  className="w-22 h-22 object-contain"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Arthaveda</div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Strategic Finance. Intelligent Automation.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/arthaveda/" target='blank' className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-gray-600" />
              </a>
              <a href="mailto: shreyas.kemar@arthaveda.ai" className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5 text-gray-600" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/arthap2p" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  ArthaP2Pay
                </Link>
              </li>
              <li>
                <Link to="/products/arthamatch" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  ArthaMatch
                </Link>
              </li>
              <li>
                <Link to="/products/arthaAR" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Accounts Receivable
                </Link>
              </li>
              <li>
                <Link to="/products/arthaEM" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Expense Management
                </Link>
              </li>
              <li>
                <Link to="/products/arthaEInvoice" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  E-Invoicing
                </Link>
              </li>
              <li>
                <Link to="/products/arthacomply" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  Artha Comply
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              {['The CFO Desk', 'Equity Advisory Labs', 'Arthveda Legal', 'CFO-Led Zoho Implementations'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>contact@arthaveda.ai</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 88267 55111</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bangalore, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">
            © 2026 Arthaveda.ai. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
