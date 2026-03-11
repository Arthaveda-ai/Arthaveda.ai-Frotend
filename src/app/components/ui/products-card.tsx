import { motion } from "framer-motion";
import { Link } from "react-router";
import { CheckCircle2, ArrowRight, LucideIcon } from "lucide-react";

type Stat = {
  value: string;
  label: string;
};

type ProductCardProps = {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
  gradient: string;
  headerGradient: string;
  badgeStyle: string;
  iconGradient: string;
  buttonGradient: string;
  features: string[];
  stats: Stat[];
  link: string;
  iconColor?: string;
  featureIconColor?: string;
};

export default function ProductCard({
  title,
  description,
  badge,
  icon: Icon,
  gradient,
  headerGradient,
  badgeStyle,
  iconGradient,
  buttonGradient,
  features,
  stats,
  link,
  iconColor = "text-white",
  featureIconColor = "text-gray-500",
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Glow Effect */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
      />

      <div className="relative h-full bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
        
        {/* Header */}
        <div
          className={`p-10 border-b border-gray-200 bg-gradient-to-br ${headerGradient}`}
        >
          <div
            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}
          >
            <Icon className={`w-10 h-10 ${iconColor}`} />
          </div>

          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            {description}
          </p>

          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${badgeStyle}`}
          >
            <span className="text-sm font-medium">{badge}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Key Features
          </h3>

          <ul className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-gray-700"
              >
                <CheckCircle2
                  className={`w-5 h-5 flex-shrink-0 mt-0.5 ${featureIconColor}`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-4 mb-8 p-6 rounded-xl border bg-gradient-to-br ${headerGradient}`}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <Link to={link}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full px-6 py-4 bg-gradient-to-r ${buttonGradient} text-white rounded-xl font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2`}
            >
              Explore {title}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}