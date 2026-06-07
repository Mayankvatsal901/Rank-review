import {
  Search,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Bot,
} from "lucide-react";

function KeywordsAI() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-teal-700 to-emerald-600 text-white pt-28 pb-24">

        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Search size={16} />
              <span className="text-sm font-medium">Keywords AI</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Rank Higher With
              <span className="block text-teal-200">Smart Keywords</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-teal-100 leading-relaxed">
              Discover exactly what customers search for when looking for
              businesses like yours. Optimize your Google presence and
              attract more local customers.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-teal-700 shadow-lg hover:bg-teal-50 hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                Get Demo
              </button>
            </div>
          </div>

          {/* KEYWORD DASHBOARD */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Keyword Opportunities</h2>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-teal-100">Updated today</span>
            </div>

            <div className="space-y-3">
              {[
                { kw: "best restaurant near me", tag: "High Opportunity", color: "bg-emerald-400/20 text-emerald-200", w: "85%", bar: "bg-emerald-400" },
                { kw: "top rated cafe", tag: "Medium", color: "bg-yellow-400/20 text-yellow-200", w: "55%", bar: "bg-yellow-400" },
                { kw: "family restaurant", tag: "High Opportunity", color: "bg-emerald-400/20 text-emerald-200", w: "78%", bar: "bg-emerald-400" },
                { kw: "best food in city", tag: "Competitive", color: "bg-red-400/20 text-red-200", w: "35%", bar: "bg-red-400" },
              ].map((k, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex justify-between items-center gap-3">
                    <span className="flex items-center gap-2 text-sm">
                      <Search size={14} className="text-teal-200" />
                      {k.kw}
                    </span>
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap ${k.color}`}>
                      {k.tag}
                    </span>
                  </div>
                  <div className="mt-2.5 h-1.5 w-full rounded-full bg-white/10">
                    <div className={`h-1.5 rounded-full ${k.bar}`} style={{ width: k.w }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">Features</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Why Use Keywords AI?
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Find the terms your customers actually search for.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Search, title: "Keyword Discovery", desc: "Discover local search terms that drive customers to businesses like yours.", c: "text-teal-600", bg: "bg-teal-50" },
              { Icon: TrendingUp, title: "Ranking Opportunities", desc: "Identify easy-to-rank keywords with strong customer intent.", c: "text-emerald-600", bg: "bg-emerald-50" },
              { Icon: Bot, title: "AI Suggestions", desc: "Receive AI-powered recommendations for profile optimization.", c: "text-cyan-600", bg: "bg-cyan-50" },
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              How Keywords AI Works
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Discover and optimize keywords that matter.
            </p>
          </div>

          <div className="relative grid lg:grid-cols-3 gap-8">
            <div className="pointer-events-none absolute top-10 left-[16%] right-[16%] hidden lg:block h-px bg-gradient-to-r from-teal-200 via-emerald-300 to-teal-200"></div>

            {[
              { num: "01", title: "AI Analyzes Your Business", desc: "Our AI studies your business category, reviews, and location." },
              { num: "02", title: "Discover Opportunities", desc: "Find valuable keywords customers are already searching for." },
              { num: "03", title: "Grow Visibility", desc: "Improve rankings and attract more local traffic." },
            ].map((s, i) => (
              <div key={i} className="relative text-center lg:text-left">
                <div className="mx-auto lg:mx-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-50 text-3xl font-extrabold text-teal-600 border border-teal-100">
                  {s.num}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-[15px] text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">Benefits</span>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Turn Searches Into Customers
              </h2>
              <p className="mt-6 max-w-lg text-lg text-slate-500 leading-relaxed">
                Keywords AI helps your business appear when potential customers
                search for services in your area.
              </p>

              <div className="mt-8 space-y-3">
                {["Local keyword discovery", "Better Google visibility", "Higher profile visits", "More customer inquiries", "Increased review generation"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-teal-100">
                      <CheckCircle className="text-teal-600" size={16} />
                    </span>
                    <span className="text-[15px] text-slate-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Keywords AI"
                className="rounded-3xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-4 sm:left-6 rounded-2xl bg-white p-5 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <TrendingUp size={22} />
                  </span>
                  <div>
                    <p className="text-xl font-bold text-slate-900">+58%</p>
                    <p className="text-xs text-slate-400">More search traffic</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-teal-700 via-emerald-600 to-teal-700 p-12 md:p-20 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Get started today</span>
            </div>

            <h2 className="mt-7 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Start Ranking Higher Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-teal-100 leading-relaxed">
              Discover the keywords your customers are already searching for.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-teal-700 shadow-lg hover:bg-teal-50 hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                View Pricing
              </button>
            </div>

            <p className="mt-6 text-sm text-teal-200/80">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default KeywordsAI;