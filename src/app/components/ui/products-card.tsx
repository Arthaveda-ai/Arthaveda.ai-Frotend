import { motion } from "framer-motion";
import { Link } from "react-router";
import { CheckCircle2, ArrowRight, LucideIcon } from "lucide-react";

type Stat = { value: string; label: string };

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
  isActive?: boolean;
  isOtherHovered?: boolean;
  onHover?: (hovered: boolean) => void;
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
  isActive = false,
  isOtherHovered = false,
  onHover,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{
        scale: isActive ? 1.02 : isOtherHovered ? 0.96 : 1,
        opacity: isOtherHovered ? 0.75 : 1,
      }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="group relative cursor-default"
      onMouseEnter={() => onHover?.(true)}
      onMouseLeave={() => onHover?.(false)}
    >
      {/* Glow */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-3xl blur-2xl transition-opacity duration-500 ${
          isActive ? "opacity-15" : "opacity-0"
        }`}
      />

      <motion.div
        className="relative bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg transition-shadow"
        animate={{
          boxShadow: isActive
            ? "0 25px 50px -12px rgba(0,0,0,0.18)"
            : "0 4px 16px -4px rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.35 }}
      >
        {/* Header */}
        <div
          className={`p-7 md:p-9 border-b border-gray-200 bg-gradient-to-br ${headerGradient} text-center`}
        >
          <motion.div
            animate={{ scale: isActive ? 1.1 : 1 }}
            transition={{ duration: 0.35 }}
            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${iconGradient} flex items-center justify-center mb-5 shadow-md mx-auto`}
          >
            <Icon className={`w-7 h-7 md:w-8 md:h-8 ${iconColor}`} />
          </motion.div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h2>

          <p className="text-sm md:text-base text-gray-700 mb-4">
            {description}
          </p>

          <div
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${badgeStyle}`}
          >
            <span className="text-xs font-medium">{badge}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-7 md:p-9 text-center">
          {/* Stats — always visible */}
          <div
            className={`grid grid-cols-3 gap-3 p-4 md:p-5 rounded-xl border bg-gradient-to-br ${headerGradient}`}
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features — expand on hover */}
          <motion.div
            initial={false}
            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2.5 mb-6">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      x: isActive ? 0 : -8,
                    }}
                    transition={{
                      delay: isActive ? idx * 0.04 : 0,
                      duration: 0.25,
                    }}
                    className="flex items-center justify-center gap-2.5 text-gray-700 text-sm"
                  >
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 ${featureIconColor}`}
                    />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Button */}
          <div className="mt-5">
            <Link to={link}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-5 py-3 bg-gradient-to-r ${buttonGradient} text-white rounded-xl font-semibold text-sm md:text-base hover:shadow-lg transition-all flex items-center justify-center gap-2`}
              >
                Explore {title}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}