import { Check, ArrowRight, Zap, Shield, Building2, Sparkles } from "lucide-react";

const PricingCard = ({
  title,
  price,
  features,
  buttonText,
  onClick,
  popular = false,
}) => {

  // pick icon + accent based on plan title
  const planStyle = (() => {
    const t = (title || "").toLowerCase();
    if (t.includes("pro")) {
      return { Icon: Building2, iconBg: "bg-purple-50", iconColor: "text-purple-600", accent: "purple" };
    }
    if (t.includes("starter")) {
      return { Icon: Shield, iconBg: "bg-blue-50", iconColor: "text-blue-600", accent: "blue" };
    }
    return { Icon: Zap, iconBg: "bg-emerald-50", iconColor: "text-emerald-600", accent: "emerald" };
  })();

  const { Icon, iconBg, iconColor } = planStyle;

  const isFree = String(price) === "0" || String(price).toLowerCase().includes("free");

  return (
    <div
      className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300
        ${popular
          ? "bg-gradient-to-b from-indigo-600 to-indigo-700 text-white shadow-2xl shadow-indigo-300/50 lg:scale-[1.04] lg:-translate-y-2"
          : "bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1"
        }`}
    >

      {/* MOST POPULAR BADGE */}
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-indigo-600 shadow-lg">
          <Sparkles size={13} /> Most Popular
        </div>
      )}

      {/* ICON + TITLE */}
      <div className="flex items-center gap-3">
        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl
          ${popular ? "bg-white/15 text-white" : `${iconBg} ${iconColor}`}`}>
          <Icon size={24} />
        </span>
        <h2 className={`text-xl font-bold ${popular ? "text-white" : "text-gray-900"}`}>{title}</h2>
      </div>

      {/* PRICE */}
      <div className="mt-6 flex items-end gap-1">
        {isFree ? (
          <span className={`text-5xl font-extrabold ${popular ? "text-white" : "text-gray-900"}`}>Free</span>
        ) : (
          <>
            <span className={`text-5xl font-extrabold ${popular ? "text-white" : "text-gray-900"}`}>₹{price}</span>
            <span className={`mb-1.5 text-base font-medium ${popular ? "text-indigo-200" : "text-gray-400"}`}>/month</span>
          </>
        )}
      </div>

      <p className={`mt-2 text-sm ${popular ? "text-indigo-200" : "text-gray-400"}`}>
        {isFree ? "Perfect to get started" : popular ? "Best value for growing teams" : "For scaling businesses"}
      </p>

      {/* BUTTON */}
      <button
        onClick={onClick}
        className={`group mt-7 flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-semibold transition-all duration-200
          ${popular
            ? "bg-white text-indigo-600 hover:bg-indigo-50 hover:-translate-y-0.5 shadow-lg"
            : "bg-gray-900 text-white hover:bg-gray-800"
          }`}
      >
        {buttonText}
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>

      {/* DIVIDER */}
      <div className={`my-7 border-t ${popular ? "border-white/15" : "border-gray-100"}`}></div>

      <p className={`mb-4 text-xs font-semibold uppercase tracking-wider ${popular ? "text-indigo-200" : "text-gray-400"}`}>
        What's included
      </p>

      {/* FEATURES */}
      <div className="space-y-3.5">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full
              ${popular ? "bg-white/20" : "bg-emerald-50"}`}>
              <Check className={popular ? "text-white" : "text-emerald-600"} size={13} strokeWidth={3} />
            </span>
            <span className={`text-[15px] ${popular ? "text-indigo-50" : "text-gray-600"}`}>{feature}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PricingCard;