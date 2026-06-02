import { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import CurrentPlan from "./CurrentPlan";
import PricingCard from "./PricingCard";

import { plans } from "./pricingData";

import { handlePayment } from "./RazorpayPayment";

import changePlan from "./changePlan";

import { ShieldCheck, Headphones, RefreshCw } from "lucide-react";

function Pricing() {

  const {
    isLoggedIn,
    currentPlan,
    token,
    backendUrl,
    refreshBusiness
  } = useContext(AppContext);

  const getButtonText = (planName) => {
    if (!isLoggedIn) {
      if (planName === "free") return "Get Started";
      return "Login To Upgrade";
    }
    if (currentPlan === "free") {
      if (planName === "starter") return "Upgrade To Starter";
      if (planName === "pro") return "Upgrade To Pro";
    }
    if (currentPlan === "starter") {
      if (planName === "free") return "Switch To Free";
      if (planName === "pro") return "Upgrade To Pro";
    }
    if (currentPlan === "pro") {
      if (planName === "free") return "Switch To Free";
      if (planName === "starter") return "Switch To Starter";
    }
  };

  const handlePlanAction = async (planName) => {
    if (!isLoggedIn) {
      window.location.href = "/login";
      return;
    }
    if (currentPlan === "free" && (planName === "starter" || planName === "pro")) {
      await handlePayment(planName, token, backendUrl, refreshBusiness);
      return;
    }
    if (currentPlan === "starter" && planName === "pro") {
      await handlePayment(planName, token, backendUrl, refreshBusiness);
      return;
    }
    await changePlan(planName, token, backendUrl, refreshBusiness);
  };

  const visiblePlans = isLoggedIn
    ? plans.filter((plan) => plan.name !== currentPlan)
    : plans;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-28 pb-20 text-center">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #eef2ff 1px, transparent 1px), linear-gradient(to bottom, #eef2ff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 40%, transparent 100%)",
          }}
        ></div>

        <div className="relative max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="text-sm font-semibold text-indigo-600">Pricing</span>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
            Simple,{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-500">
            Choose the plan that fits your business. Upgrade or downgrade anytime.
          </p>

          {/* trust line */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><ShieldCheck size={16} className="text-emerald-500" /> Secure payments</span>
            <span className="flex items-center gap-1.5"><RefreshCw size={16} className="text-emerald-500" /> Cancel anytime</span>
            <span className="flex items-center gap-1.5"><Headphones size={16} className="text-emerald-500" /> 24/7 support</span>
          </div>
        </div>
      </section>

      {/* ================= CURRENT PLAN ================= */}
      {isLoggedIn && (
        <div className="max-w-7xl mx-auto px-6 mb-14">
          <CurrentPlan />
        </div>
      )}

      {/* ================= PRICING CARDS ================= */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 items-center">
            {visiblePlans.map((plan) => (
              <PricingCard
                key={plan.name}
                title={plan.name.charAt(0).toUpperCase() + plan.name.slice(1)}
                price={plan.price}
                features={plan.features}
                buttonText={getButtonText(plan.name)}
                popular={plan.name === "starter"}
                onClick={() => handlePlanAction(plan.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= MINI FAQ ================= */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-2xl font-bold text-gray-900">Frequently asked questions</h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {[
              { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan anytime from this page." },
              { q: "Is there a free trial?", a: "Absolutely. Start on the free plan with no credit card required." },
              { q: "How does billing work?", a: "Plans are billed monthly and you can cancel whenever you want." },
              { q: "Do you offer support?", a: "Yes, all plans include support — priority support on higher plans." },
            ].map((f, i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                <h3 className="font-semibold text-gray-900">{f.q}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            All plans include secure payments · Need help choosing?{" "}
            <span className="font-medium text-indigo-600 cursor-pointer hover:underline">Contact us</span>
          </p>
        </div>
      </section>

    </div>
  );
}

export default Pricing;
