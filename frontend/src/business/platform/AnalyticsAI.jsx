import {
  BarChart3,
  TrendingUp,
  Target,
  Brain,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function AnalyticsAI() {
  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-green-700 to-emerald-800 text-white pt-28 pb-24">

        {/* accents */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <BarChart3 size={16} />
                <span className="text-sm font-medium">Analytics Platform</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
                Make Smarter
                <br />
                Business Decisions
                <br />
                <span className="text-emerald-200">With AI Analytics</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg text-emerald-100 leading-relaxed">
                Understand customer behavior, monitor review trends,
                and uncover growth opportunities through powerful
                analytics built specifically for modern businesses.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-emerald-700 shadow-lg hover:bg-emerald-50 hover:-translate-y-0.5 transition-all duration-200">
                  Start Free Trial
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                  View Dashboard
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-3xl bg-white/10 backdrop-blur-md p-7 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Business Growth Snapshot</h3>
                <span className="flex items-center gap-1 rounded-full bg-emerald-400/20 px-2.5 py-1 text-xs font-semibold text-emerald-100">
                  <TrendingUp size={12} /> Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Customer Satisfaction", val: "+32%" },
                  { label: "Average Rating", val: "4.8★" },
                  { label: "Retention Rate", val: "+18%" },
                  { label: "Response Rate", val: "+40%" },
                ].map((s, i) => (
                  <div key={i} className="rounded-2xl bg-white/10 border border-white/10 p-5 hover:bg-white/15 transition">
                    <p className="text-sm text-emerald-100">{s.label}</p>
                    <h2 className="text-3xl font-bold mt-2">{s.val}</h2>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY ANALYTICS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Benefits</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
              Turn Customer Feedback Into Growth
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Analytics help businesses understand what customers think,
              identify trends, and make data-driven decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { Icon: TrendingUp, title: "Track Rating Trends", desc: "Monitor how customer satisfaction changes over time." },
              { Icon: BarChart3, title: "Measure Performance", desc: "Analyze review volume and customer engagement." },
              { Icon: Target, title: "Discover Opportunities", desc: "Find areas where your business can improve." },
              { Icon: Brain, title: "Understand Customers", desc: "Learn what customers love and dislike most." },
            ].map(({ Icon, title, desc }, i) => (
              <div key={i} className="group rounded-2xl bg-white p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-200">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
              How Analytics Works
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Get insights automatically as reviews come in.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
            {/* connecting line */}
            <div className="pointer-events-none absolute top-10 left-[16%] right-[16%] hidden md:block h-px bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200"></div>

            {[
              { num: "01", title: "Collect Reviews", desc: "Gather customer feedback from multiple review sources." },
              { num: "02", title: "AI Processes Data", desc: "Analyze ratings, sentiment, and customer topics." },
              { num: "03", title: "Get Insights", desc: "Receive actionable recommendations to grow." },
            ].map((s, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="mx-auto md:mx-0 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-3xl font-extrabold text-emerald-600 border border-emerald-100">
                  {s.num}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-[15px] text-slate-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUSINESS GROWTH ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Growth</span>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                Grow With Data-Driven Decisions
              </h2>
              <p className="mt-6 max-w-lg text-lg text-slate-500 leading-relaxed">
                Businesses that understand customer feedback respond
                faster, improve service quality, and build stronger
                customer relationships.
              </p>

              <div className="mt-7 space-y-3">
                {["Improve customer satisfaction", "Identify growth opportunities", "Make better business decisions"].map((t, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100">
                      <CheckCircle className="text-emerald-600" size={16} />
                    </span>
                    <span className="text-[15px] text-slate-700">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* metrics card with progress bars */}
            <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Growth Metrics</h3>
              <div className="space-y-5">
                {[
                  { label: "Customer Satisfaction", val: "+32%", w: "80%", c: "text-emerald-600", bar: "from-emerald-400 to-green-500" },
                  { label: "Average Rating", val: "4.8 ★", w: "96%", c: "text-slate-900", bar: "from-yellow-400 to-amber-500" },
                  { label: "Customer Retention", val: "+18%", w: "65%", c: "text-emerald-600", bar: "from-emerald-400 to-green-500" },
                  { label: "Response Rate", val: "+40%", w: "88%", c: "text-emerald-600", bar: "from-emerald-400 to-green-500" },
                ].map((m, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600">{m.label}</span>
                      <span className={`font-bold ${m.c}`}>{m.val}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${m.bar}`} style={{ width: m.w }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-12 md:p-20 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-500/20 blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Get started today</span>
            </div>

            <h2 className="mt-7 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Ready To Understand Your Customers Better?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
              Start using AI-powered analytics today and transform
              customer feedback into business growth.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <button className="rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold shadow-lg hover:bg-emerald-500 hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
              </button>
              <button className="group flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold backdrop-blur-md hover:bg-white/15 transition">
                Schedule Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AnalyticsAI;