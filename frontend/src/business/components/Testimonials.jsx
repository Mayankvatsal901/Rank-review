function Testimonial() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24">

      {/* soft background accents */}
      <div className="pointer-events-none absolute top-20 left-0 h-80 w-80 rounded-full bg-indigo-100/40 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* TOP (centered) */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
            <span className="text-yellow-400 text-sm">★★★★★</span>
            <span className="text-sm font-semibold text-indigo-600">Testimonials</span>
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            Trusted By{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Growing Businesses
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-relaxed">
            Businesses use RankReview to automate customer engagement,
            improve SEO visibility, and generate more positive reviews.
          </p>

        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 md:p-14 text-white shadow-2xl">

          {/* glowing blobs inside */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

          {/* big quote mark */}
          <div className="absolute top-8 left-8 text-8xl font-serif leading-none text-white/10 select-none">
            “
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              {/* stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                ))}
              </div>

              <p className="text-2xl md:text-3xl leading-relaxed font-medium text-gray-100">
                “RankReview completely transformed our online reputation.
                We started getting more customer engagement and improved
                our local SEO rankings within weeks.”
              </p>

              {/* author */}
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-xl font-bold shadow-lg">
                  A
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    Aman Sharma
                  </h3>
                  <p className="text-indigo-300 text-sm mt-0.5">
                    Founder, Sharma Cafe
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT - STATS */}
            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  245%
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Increase in review volume
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  86%
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  More customer engagement
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  137%
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  More reviews generated
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 hover:bg-white/10 transition">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  4.9★
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Average business rating
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonial;