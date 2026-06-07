import { Link } from "react-router-dom";

function ReviewsAI() {

  const features = [
    {
      title: "Better SEO",
      desc: "AI generated reviews improve local SEO rankings and Google visibility.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5M16.5 7.5h3.75v3.75" />
        </svg>
      ),
    },
    {
      title: "AI Optimization",
      desc: "Transform casual customer feedback into professional high-quality reviews.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
        </svg>
      ),
    },
    {
      title: "More Trust",
      desc: "Professional reviews increase customer trust and improve conversion rates.",
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      title: "Growth Analytics",
      desc: "Track customer sentiments, ratings and monthly review performance.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
  ];

  return (

    <div className="min-h-screen bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 lg:px-10 pt-28 pb-24 bg-gradient-to-b from-indigo-50/60 via-white to-white">

        {/* background accents */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute top-40 -left-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-semibold text-indigo-600">
                AI Powered Review Optimization
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900">
              Turn Simple Customer Feedback Into{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Professional Reviews
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-500 leading-relaxed">
              RankReview helps businesses transform raw customer feedback
              into SEO-optimized professional reviews using advanced AI.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="group flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-200">
                Start Free
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-7 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-50 transition">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                Watch Demo
              </button>
            </div>

            {/* trust */}
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                No credit card required
              </span>
              <span className="flex items-center gap-1.5"><span className="text-yellow-400">★★★★★</span> 4.9/5 rating</span>
            </div>
          </div>

          {/* RIGHT - transform card */}
          <div className="relative rounded-3xl bg-white shadow-2xl p-7 border border-gray-100">

            <div className="absolute -top-3 left-7 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
              ✦ AI Transformation
            </div>

            {/* original */}
            <div className="mt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
                Original Review
              </p>
              <div className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  food was nice and service was good
                </p>
              </div>
            </div>

            {/* arrow */}
            <div className="flex justify-center my-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg animate-bounce">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </span>
            </div>

            {/* AI optimized */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500 mb-2 flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                AI Optimized Review
              </p>
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  The food quality was exceptional and the staff provided
                  a highly professional dining experience. The ambience
                  and customer service made the visit truly memorable.
                </p>
                <div className="mt-3 flex items-center gap-1 text-yellow-400">★★★★★</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 lg:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Features</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Why Businesses Use RankReview
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              AI tools designed to improve online reputation and visibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group rounded-2xl bg-white p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-200">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.bg} ${f.color}`}>
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{f.title}</h3>
                <p className="mt-2.5 text-[15px] text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="px-6 lg:px-10 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              <span className="text-sm font-semibold text-indigo-600">AI Review Dashboard</span>
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-gray-900">
              Track Reviews With Powerful Analytics
            </h2>
            <p className="mt-6 max-w-lg text-lg text-gray-500 leading-relaxed">
              Monitor customer sentiments, average ratings,
              review growth and AI generated performance
              through a modern analytics dashboard.
            </p>

            <ul className="mt-7 space-y-3">
              {["Real-time sentiment analysis", "Monthly performance reports", "Smart rating insights"].map((t, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT - dashboard preview */}
          <div className="rounded-3xl bg-white shadow-2xl p-7 border border-gray-100">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Total Reviews</p>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mt-3">124</h3>
                <p className="text-xs font-medium text-emerald-600 mt-1">↑ 12% this month</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-100 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Average Rating</p>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-500">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mt-3">4.8 ⭐</h3>
                <p className="text-xs font-medium text-emerald-600 mt-1">Excellent score</p>
              </div>
            </div>

            {/* real CSS chart */}
            <div className="rounded-2xl bg-gray-50 border border-gray-100 p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-semibold text-gray-700">Monthly Reviews</p>
                <span className="text-xs text-gray-400">Last 7 months</span>
              </div>
              <div className="flex items-end justify-between gap-2 h-40">
                {["50%","70%","45%","85%","60%","95%","75%"].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-lg bg-gradient-to-t from-indigo-600 to-purple-400 hover:opacity-80 transition" style={{ height: h }}></div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 lg:px-10 py-24">
        <div className="relative max-w-6xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-12 md:p-20 text-center text-white">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Get started today</span>
            </div>

            <h2 className="mt-7 text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight">
              Ready To Grow Your Business Reputation?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100 leading-relaxed">
              Start using AI powered review optimization
              and analytics to improve customer trust
              and online visibility.
            </p>

            <button className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-xl hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200">
              Get Started
              <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>

            <p className="mt-6 text-sm text-indigo-200/80">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>
        </div>
      </section>

    </div>

  );

}

export default ReviewsAI;