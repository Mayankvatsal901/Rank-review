import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Crown, Building2, Calendar, Clock } from "lucide-react";

const CurrentPlan = () => {

  const { business } = useContext(AppContext);

  if (!business) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-7 text-white shadow-xl">

      {/* glows */}
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl"></div>

      {/* HEADER */}
      <div className="relative flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
            <Crown size={20} />
          </span>
          <div>
            <h2 className="text-xl font-bold">Current Subscription</h2>
            <p className="text-sm text-indigo-300 mt-0.5">Manage your active plan</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold capitalize backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {business.plan}
        </div>
      </div>

      {/* INFO TILES */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        {[
          { Icon: Building2, label: "Business", val: business.name },
          {
            Icon: Calendar, label: "Started On",
            val: business.planStartedAt ? new Date(business.planStartedAt).toLocaleDateString("en-IN") : "-",
          },
          {
            Icon: Clock, label: "Expires On",
            val: business.planExpiresAt ? new Date(business.planExpiresAt).toLocaleDateString("en-IN") : "-",
          },
        ].map((t, i) => (
          <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-indigo-300">
              <t.Icon size={16} />
              <p className="text-xs font-medium uppercase tracking-wide">{t.label}</p>
            </div>
            <h3 className="font-bold text-lg mt-2">{t.val}</h3>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CurrentPlan;
