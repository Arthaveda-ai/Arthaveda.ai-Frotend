import { Search, Bell, ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <div className="h-16 bg-white/80 backdrop-blur-xl border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Search */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search POs, invoices, vendors..."
            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Date Range */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-sm text-gray-600">
          <span>Mar 1 - Mar 31, 2026</span>
        </div>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-50 rounded-xl transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <button className="flex items-center gap-3 pl-3 pr-4 py-2 hover:bg-gray-50 rounded-xl transition-colors">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
            AR
          </div>
          <div className="hidden md:block text-left">
            <div className="text-sm font-medium text-gray-900">Arjun Reddy</div>
            <div className="text-xs text-gray-500">Finance Manager</div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
