import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';
import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
}

export function KPICard({ 
  title, 
  value, 
  prefix = '', 
  suffix = '', 
  change, 
  icon: Icon,
  iconColor,
  iconBg 
}: KPICardProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [value, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className={`
          px-2.5 py-1 rounded-lg text-xs font-medium
          ${change >= 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}
        `}>
          {change >= 0 ? '+' : ''}{change}%
        </div>
      </div>
      <div className="text-gray-500 text-sm mb-1">{title}</div>
      <motion.div className="text-3xl font-semibold text-gray-900">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </motion.div>
    </motion.div>
  );
}
