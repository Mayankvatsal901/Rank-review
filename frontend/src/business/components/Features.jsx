function Features() {

  const features = [
    {
      title: "AI Review Generator",
      desc: "Generate SEO optimized customer reviews using AI to improve your online presence and rankings.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ),
    },
    {
      title: "Smart Analytics",
      desc: "Track reviews, customer engagement, traffic growth, and business performance from one dashboard.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      desc: "Improve local search visibility and rank higher with AI powered review strategies and keywords.",
      color: "text-pink-600",
      bg: "bg-pink-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5M16.5 7.5h3.75v3.75" />
        </svg>
      ),
    },
    {
      title: "AI Competitor Tracking",
      desc: "Monitor competitor reviews, rankings, ratings, and online reputation automatically.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
        </svg>
      ),
    },
    {
      title: "High Performance APIs",
      desc: "Dockerized microservice architecture capable of handling high traffic and concurrent users.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Secure Authentication",
      desc: "Secure JWT authentication and protected APIs for businesses and customer interactions.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP TEXT (centered) */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Features</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            AI Agents Built{" "}
            <span className="text-gray-400">To Grow Your Brand</span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            RankReview helps businesses automate reviews,
            improve SEO visibility, monitor competitors,
            and increase customer trust with AI.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white p-7 border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-200"
            >
              {/* icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${f.bg} ${f.color}`}>
                {f.icon}
              </div>

              {/* title */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {f.title}
              </h3>

              {/* description */}
              <p className="mt-2.5 text-[15px] text-gray-500 leading-relaxed">
                {f.desc}
              </p>

              {/* learn more */}
              <div className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}>
                Learn more
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;