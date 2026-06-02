import {
  ArrowRight,
  CheckCircle,
  Search,
  AlertTriangle,
  BarChart3,
  TrendingUp,
  Bot,
  Trophy,
} from "lucide-react";

function CompetitorAI() {
  return (
    <div>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white pt-28 pb-24">

        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <Trophy size={16} />
              <span className="text-sm font-medium">Competitor Intelligence</span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Stay Ahead Of Your{" "}
              <span className="text-blue-200">Competition</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-blue-100 leading-relaxed">
              Understand what your competitors are doing right and wrong.
              Track reviews, analyze trends, and uncover opportunities to
              outperform them.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                Get Demo
              </button>
            </div>
          </div>

          {/* RIGHT - leaderboard */}
          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Competitor Overview</h2>
              <span className="rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-100">Live</span>
            </div>

            <div className="space-y-4">
              {[
                { name: "Your Business", reviews: "234 Reviews", rating: "4.8", w: "96%", mine: true },
                { name: "Competitor A", reviews: "189 Reviews", rating: "4.5", w: "90%", mine: false },
                { name: "Competitor B", reviews: "156 Reviews", rating: "4.3", w: "86%", mine: false },
              ].map((c, i) => (
                <div key={i} className={`rounded-2xl p-5 border ${c.mine ? "bg-white/20 border-white/30" : "bg-white/5 border-white/10"}`}>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${c.mine ? "bg-white text-blue-700" : "bg-white/10 text-white"}`}>
                        #{i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-sm flex items-center gap-2">
                          {c.name}
                          {c.mine && <span className="text-[10px] uppercase bg-emerald-400 text-emerald-950 px-1.5 py-0.5 rounded-full">You</span>}
                        </h3>
                        <p className="text-xs text-blue-100">{c.reviews}</p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">{c.rating}</h3>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-white/10">
                    <div className="h-1.5 rounded-full bg-white/80" style={{ width: c.w }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW IT HELPS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Advantages</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              How RankReview Helps You Beat Competitors
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Turn competitor reviews into actionable business strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Search, title: "Discover Strengths", desc: "Learn what customers love about competing businesses.", c: "text-blue-600", bg: "bg-blue-50" },
              { Icon: AlertTriangle, title: "Find Weaknesses", desc: "Identify recurring complaints and avoid making the same mistakes.", c: "text-amber-600", bg: "bg-amber-50" },
              { Icon: BarChart3, title: "Benchmark Performance", desc: "Compare ratings, reviews, and customer satisfaction.", c: "text-purple-600", bg: "bg-purple-50" },
              { Icon: TrendingUp, title: "Spot Trends", desc: "Identify emerging patterns before competitors react.", c: "text-emerald-600", bg: "bg-emerald-50" },
              { Icon: Bot, title: "AI Recommendations", desc: "Receive suggestions to improve ratings and customer experience.", c: "text-indigo-600", bg: "bg-indigo-50" },
              { Icon: Trophy, title: "Gain Advantage", desc: "Make better decisions backed by real competitor data.", c: "text-rose-600", bg: "bg-rose-50" },
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

      {/* ================= COMPETITOR STRATEGY ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt=""
                className="rounded-3xl shadow-xl w-full object-cover"
              />
              {/* floating stat card */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-white p-5 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <TrendingUp size={22} />
                  </span>
                  <div>
                    <p className="text-xl font-bold text-slate-900">+27%</p>
                    <p className="text-xs text-slate-400">Outperforming rivals</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Strategy</span>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Know Your Competition Inside Out
              </h2>
              <p className="mt-6 text-lg text-slate-500 leading-relaxed">
                Understanding your competitors gives you the edge you need.
                See what works for them, learn from their mistakes, and position
                yourself for success.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {["Monitor competitors", "Compare ratings", "Track sentiment", "Weekly reports", "Market insights", "Growth opportunities"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <CheckCircle className="text-blue-600" size={16} />
                    </span>
                    <span className="text-[15px] text-slate-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 p-12 md:p-20 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Stay ahead today</span>
            </div>

            <h2 className="mt-7 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Ready To Outsmart Your Competition?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100 leading-relaxed">
              Track competitors, discover opportunities, and grow faster.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 shadow-lg hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                View Pricing
              </button>
            </div>

            <p className="mt-6 text-sm text-blue-200/80">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CompetitorAI;