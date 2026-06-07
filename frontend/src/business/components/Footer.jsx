import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#0a0a14] text-white">
      {/* top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      {/* soft glow */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5M16.5 7.5h3.75v3.75"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-bold tracking-tight">
                <span className="text-white">Rank</span>
                <span className="text-indigo-400">Review</span>
              </h1>
            </Link>

            <p className="mt-5 max-w-sm text-sm text-gray-400 leading-relaxed">
              AI-powered reputation management platform helping businesses
              generate reviews, improve SEO visibility, track competitors, and
              increase customer engagement.
            </p>

            {/* SOCIALS */}
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  label: "Twitter",
                  path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  label: "LinkedIn",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z",
                },
                {
                  label: "Instagram",
                  path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm-5 14a4 4 0 110-8 4 4 0 010 8zm5-9a1 1 0 110-2 1 1 0 010 2z",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-200"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* PLATFORM */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Platform
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <Link
                to="/platform/reviews-ai"
                className="block hover:text-white transition w-fit"
              >
                AI Reviews
              </Link>

              <Link
                to="/platform/analytics-ai"
                className="block hover:text-white transition w-fit"
              >
                Analytics AI
              </Link>

              <Link
                to="/platform/competitor-ai"
                className="block hover:text-white transition w-fit"
              >
                Competitor Tracking
              </Link>

              <Link
                to="/platform/qr-generator"
                className="block hover:text-white transition w-fit"
              >
                QR Generator
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Company
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <Link
                to="/pricing"
                className="block hover:text-white transition w-fit"
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="block hover:text-white transition w-fit"
              >
                Contact
              </Link>

              <Link
                to="/login"
                className="block hover:text-white transition w-fit"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="block hover:text-white transition w-fit"
              >
                Register
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2.5">
                📧 support@rankreview.ai
              </p>

              <p className="flex items-center gap-2.5">
                📞 +91 89330 69165
              </p>

              <p className="flex items-center gap-2.5">
                📍 Ghaziabad, India
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2026 RankReview. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;