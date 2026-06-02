function Cta() {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 px-8 py-16 md:px-16 md:py-20 text-center text-white">

          {/* glowing accents */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"></div>

          {/* subtle grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          ></div>

          <div className="relative">

            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-sm font-medium text-white/90">Get started in minutes</span>
            </div>

            <h2 className="mt-7 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Start Growing
              <br />
              Your Brand Today
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-indigo-100 leading-relaxed">
              Generate AI powered reviews, improve SEO visibility,
              and build customer trust with RankReview.
            </p>

            {/* buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

              <button className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200">
                Start Free Trial
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>

              <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white/15 transition-all duration-200">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Book Demo
              </button>

            </div>

            {/* trust line */}
            <p className="mt-7 text-sm text-indigo-200/80">
              No credit card required · 14-day free trial · Cancel anytime
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Cta;