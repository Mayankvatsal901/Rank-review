import {
  TrendingUp,
  Shield,
  BarChart3,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

function FinancialServices() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-indigo-600 text-white pt-28 pb-24">

        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <Shield size={16} />
                <span className="text-sm font-medium">Financial Services Solutions</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Build Trust With{" "}
                <span className="text-blue-200">Smarter Reviews</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-blue-100 leading-relaxed">
                Enhance client confidence, improve transparency, and grow your
                financial services brand with AI‑powered review management.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200">
                  Start Free Trial
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                  Book Demo
                </button>
              </div>
            </div>

            {/* RIGHT - financial card */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Financial Overview</h3>
                <span className="rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-100">Live</span>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Average Rating", val: "4.7 ⭐", w: "94%", bar: "from-yellow-400 to-amber-500" },
                  { label: "Total Reviews", val: "1,850", w: "80%", bar: "from-blue-400 to-indigo-500" },
                  { label: "Client Growth", val: "+22%", w: "60%", bar: "from-emerald-400 to-green-500" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-blue-100">{m.label}</span>
                      <span className="font-bold">{m.val}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-white/10">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${m.bar}`} style={{ width: m.w }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Features</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Built For Financial Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: Shield, title: "Trust & Compliance", desc: "Showcase transparency and compliance through verified reviews.", c: "text-blue-600", bg: "bg-blue-50" },
              { Icon: BarChart3, title: "Performance Insights", desc: "Track ratings and feedback trends to improve client services.", c: "text-purple-600", bg: "bg-purple-50" },
              { Icon: MessageSquare, title: "AI Responses", desc: "Reply to client reviews instantly with AI assistance.", c: "text-indigo-600", bg: "bg-indigo-50" },
              { Icon: TrendingUp, title: "Business Growth", desc: "Increase visibility and attract more high‑value clients.", c: "text-emerald-600", bg: "bg-emerald-50" },
            ].map(({ Icon, title, desc, c, bg }, i) => (
              <div key={i} className="group rounded-2xl bg-white p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-200">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${bg} ${c}`}>
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2.5 text-[15px] text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              How It Works
            </h2>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="pointer-events-none absolute top-10 left-[16%] right-[16%] hidden md:block h-px bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200"></div>

            {[
              { num: "01", title: "Connect Your Firm", desc: "Link your Google Business Profile or client portals in minutes." },
              { num: "02", title: "Collect More Reviews", desc: "Use smart review requests to gather client feedback securely." },
              { num: "03", title: "Grow Your Reputation", desc: "Build trust and attract more clients through positive reviews." },
            ].map((s, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="mx-auto md:mx-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-3xl font-extrabold text-blue-600 border border-blue-100">
                  {s.num}
                </div>
                <h4 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h4>
                <p className="mt-2 text-[15px] text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 md:p-20 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Get started today</span>
            </div>

            <h2 className="mt-7 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Ready To Grow Your Financial Services Firm?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Turn client feedback into stronger trust and more business growth.
            </p>

            <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-200">
              Start Free Trial
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-6 text-sm text-slate-400">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default FinancialServices;