import { Mail, Phone, MapPin, Clock, CheckCircle, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 pt-32 pb-40 text-white">

        {/* glow + grid */}
        <div className="pointer-events-none absolute -top-20 right-1/4 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        ></div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <MessageCircle size={14} className="text-indigo-300" />
            <span className="text-sm font-medium text-indigo-200">We'd love to hear from you</span>
          </div>

          <h1 className="mt-7 text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Let's Talk About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Your Growth
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Have questions about RankReview? Need help managing your online
            reputation? Our team is here to help you grow your business with
            AI-powered review management and analytics.
          </p>
        </div>
      </section>

      {/* ================= CONTACT CARDS (overlapping hero) ================= */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 relative z-10">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { Icon: Phone, grad: "from-blue-500 to-indigo-500", title: "Call Us", sub: "Speak directly with our support team", val: "+91 98765 43210" },
            { Icon: Mail, grad: "from-emerald-500 to-green-500", title: "Email Us", sub: "We'll respond within 24 hours", val: "support@rankreview.in" },
            { Icon: Clock, grad: "from-purple-500 to-fuchsia-500", title: "Working Hours", sub: "Monday - Saturday", val: "9:00 AM - 6:00 PM" },
          ].map(({ Icon, grad, title, sub, val }, i) => (
            <div key={i} className="group rounded-3xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 p-7 text-center hover:-translate-y-2 transition-all duration-300">
              <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${grad} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <Icon size={26} />
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
              <p className="mt-1.5 text-sm text-gray-400">{sub}</p>
              <p className="mt-3 font-bold text-gray-800">{val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FORM + INFO PANEL ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">

          {/* LEFT - gradient info panel */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-8 md:p-10 text-white">
            <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-pink-400/20 blur-2xl"></div>

            <div className="relative">
              <h2 className="text-2xl font-bold">Get in touch</h2>
              <p className="mt-2 text-indigo-100 text-sm leading-relaxed">
                Reach out and our team will get back to you as soon as possible.
              </p>

              {/* address */}
              <div className="mt-8 flex items-start gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                  <MapPin size={18} />
                </span>
                <div>
                  <h3 className="font-semibold">RankReview Headquarters</h3>
                  <p className="mt-1 text-sm text-indigo-100 leading-relaxed">
                    A-51, Near Police Chowki, Akash Nagar,
                    Govindpuram, Ghaziabad, Uttar Pradesh,
                    India - 201013
                  </p>
                </div>
              </div>

              {/* why choose */}
              <div className="mt-8 border-t border-white/15 pt-6">
                <h3 className="font-semibold mb-4">Why Choose RankReview?</h3>
                <ul className="space-y-3">
                  {[
                    "AI-powered review responses",
                    "Customer sentiment analysis",
                    "Multi-location business support",
                    "SEO keyword insights",
                    "Reputation monitoring dashboard",
                    "Review analytics and reporting",
                  ].map((t, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-indigo-50">
                      <CheckCircle size={16} className="text-emerald-300 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT - form */}
          <div className="lg:col-span-3 rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
            <p className="mt-1.5 text-sm text-gray-400">Fill out the form and we'll be in touch shortly.</p>

            <form className="mt-7 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-600">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none placeholder-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-gray-600">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none placeholder-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-600">Subject</label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none placeholder-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                />
              </div>

              <div>
                <label className="block mb-1.5 text-sm font-medium text-gray-600">Your Message</label>
                <textarea
                  rows="6"
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none placeholder-gray-400 focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm p-8 md:p-12 text-center">
          <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <span className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
            <MessageCircle size={24} />
          </span>
          <h2 className="mt-5 text-2xl font-bold text-gray-900">About RankReview</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] text-gray-500 leading-relaxed">
            RankReview is an AI-powered review management platform designed to
            help businesses monitor, analyze, and improve their online
            reputation. Our platform enables businesses to track customer
            reviews, generate AI-assisted responses, analyze review trends, and
            gain valuable insights to improve customer satisfaction.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] text-gray-500 leading-relaxed">
            Whether you're a restaurant, healthcare provider, retail store,
            dental clinic, or multi-location business, RankReview helps you
            manage your online presence efficiently and grow your brand through
            customer feedback intelligence.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;