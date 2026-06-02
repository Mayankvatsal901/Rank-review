import {
  Home,
  Star,
  MessageSquare,
  TrendingUp
} from "lucide-react";

function HomeServices() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Home Services Solutions
              </span>

              <h1 className="text-6xl font-bold mt-6 leading-tight">
                Win More Local Clients With Better Reviews
              </h1>

              <p className="text-xl mt-6 text-green-100">
                Attract homeowners, boost satisfaction, and grow your home
                services business with AI‑powered review management.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold">
                  Start Free Trial
                </button>
                <button className="border border-white px-8 py-4 rounded-xl">
                  Book Demo
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Home Services Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Average Rating</span>
                  <span>4.9 ⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Reviews</span>
                  <span>3,120</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Leads</span>
                  <span>+28%</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            Built For Home Services
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Home size={40} />
              <h3 className="text-xl font-bold mt-4">Local Trust</h3>
              <p className="mt-3 text-gray-600">
                Showcase reliability and build trust with homeowners.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Star size={40} />
              <h3 className="text-xl font-bold mt-4">Rating Tracking</h3>
              <p className="mt-3 text-gray-600">
                Monitor ratings across Google and service platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <MessageSquare size={40} />
              <h3 className="text-xl font-bold mt-4">AI Responses</h3>
              <p className="mt-3 text-gray-600">
                Reply to client reviews instantly with AI assistance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <TrendingUp size={40} />
              <h3 className="text-xl font-bold mt-4">Business Growth</h3>
              <p className="mt-3 text-gray-600">
                Increase visibility and attract more local clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-7xl font-bold text-green-200">01</h3>
              <h4 className="text-2xl font-bold mt-4">Connect Your Business</h4>
              <p className="text-gray-600 mt-3">
                Link your Google Business Profile in a few clicks.
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-bold text-green-200">02</h3>
              <h4 className="text-2xl font-bold mt-4">Collect More Reviews</h4>
              <p className="text-gray-600 mt-3">
                Use QR codes and smart review requests to gather feedback.
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-bold text-green-200">03</h3>
              <h4 className="text-2xl font-bold mt-4">Grow Your Reputation</h4>
              <p className="text-gray-600 mt-3">
                Build trust and attract more homeowners through positive reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-5xl font-bold">
          Ready To Grow Your Home Services Business?
        </h2>
        <p className="text-xl mt-6 text-slate-300">
          Turn client feedback into more leads and repeat customers.
        </p>
        <button className="mt-8 bg-green-600 px-8 py-4 rounded-xl">
          Start Free Trial
        </button>
      </section>

    </div>
  );
}

export default HomeServices;
