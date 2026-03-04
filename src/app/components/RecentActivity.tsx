import { FileCheck, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const activities = [
  {
    icon: CheckCircle2,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    title: 'PO-2024-1847 matched successfully',
    description: 'Invoice INV-8473 matched with PO-2024-1847',
    time: '2 minutes ago',
  },
  {
    icon: AlertCircle,
    iconColor: 'text-red-600',
    iconBg: 'bg-red-50',
    title: 'Exception detected',
    description: 'Price mismatch in PO-2024-1832',
    time: '15 minutes ago',
  },
  {
    icon: Clock,
    iconColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
    title: 'Pending approval',
    description: 'INV-8465 awaiting review',
    time: '1 hour ago',
  },
  {
    icon: FileCheck,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    title: 'ERP bill created',
    description: 'Bill #2847 created in SAP',
    time: '2 hours ago',
  },
  {
    icon: CheckCircle2,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    title: 'Batch processing completed',
    description: '47 invoices processed successfully',
    time: '3 hours ago',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Recent Activity</h3>
        <p className="text-sm text-gray-500">Latest system events and updates</p>
      </div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className={`w-10 h-10 ${activity.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <activity.icon className={`w-5 h-5 ${activity.iconColor}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900 mb-0.5">{activity.title}</div>
              <div className="text-xs text-gray-500">{activity.description}</div>
            </div>
            <div className="text-xs text-gray-400 whitespace-nowrap">{activity.time}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
