import { 
  LayoutDashboard, 
  FileText, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  ChevronLeft,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Purchase Orders', active: false },
  { icon: Package, label: 'Invoices', active: false },
  { icon: Zap, label: 'Exceptions', active: false },
  { icon: Users, label: 'Vendors', active: false },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export function Sidebar({ isCollapsed, setIsCollapsed }: SidebarProps) {
  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? 80 : 240 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen bg-white border-r border-gray-200 flex flex-col relative"
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        {!isCollapsed ? (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">ArthaFlow</div>
              <div className="text-xs text-gray-500">by ArthaP2Pay</div>
            </div>
          </div>
        ) : (
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mx-auto">
            <Zap className="w-5 h-5 text-white" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 px-3">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`
              w-full flex items-center gap-3 px-3 py-3 rounded-xl mb-1
              transition-all duration-200
              ${item.active 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }
            `}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </motion.button>
        ))}
      </nav>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft 
          className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          }`} 
        />
      </button>
    </motion.div>
  );
}
