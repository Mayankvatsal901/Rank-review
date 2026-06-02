import {
  Heart,
  Star,
  MessageSquare,
  TrendingUp
} from "lucide-react";

function Wellness() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-white/20 px-4 py-2 rounded-full">
                Wellness Solutions
              </span>

              <h1 className="text-6xl font-bold mt-6 leading-tight">
                Grow Your Wellness Brand With Reviews
              </h1>

              <p className="text-xl mt-6 text-pink-100">
                Attract more clients, improve satisfaction, and expand your
                wellness practice with AI‑powered review management.
              </p>

              <div className="flex gap-4 mt-8">
                <button className="bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold">
                  Start Free Trial
                </button>
                <button className="border border-white px-8 py-4 rounded-xl">
                  Book Demo
                </button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                Wellness Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Average Rating</span>
                  <span>4.9 ⭐</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Reviews</span>
                  <span>2,750</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Clients</span>
                  <span>+30%</span>
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
            Built For Wellness Practices
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Heart size={40} />
              <h3 className="text-xl font-bold mt-4">Client Care</h3>
              <p className="mt-3 text-gray-600">
                Understand what clients value most in your services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <Star size={40} />
              <h3 className="text-xl font-bold mt-4">Rating Tracking</h3>
              <p className="mt-3 text-gray-600">
                Monitor ratings across Google and wellness platforms.
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
              <h3 className="text-xl font-bold mt-4">Practice Growth</h3>
              <p className="mt-3 text-gray-600">
                Increase visibility and attract more wellness clients.
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
              <h3 className="text-7xl font-bold text-pink-200">01</h3>
              <h4 className="text-2xl font-bold mt-4">Connect Your Practice</h4>
              <p className="text-gray-600 mt-3">
                Link your Google Business Profile in a few clicks.
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-bold text-pink-200">02</h3>
              <h4 className="text-2xl font-bold mt-4">Collect More Reviews</h4>
              <p className="text-gray-600 mt-3">
                Use QR codes and smart review requests to gather feedback.
              </p>
            </div>

            <div>
              <h3 className="text-7xl font-bold text-pink-200">03</h3>
              <h4 className="text-2xl font-bold mt-4">Grow Your Reputation</h4>
              <p className="text-gray-600 mt-3">
                Build trust and attract more clients through positive reviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h2 className="text-5xl font-bold">
          Ready To Grow Your Wellness Practice?
        </h2>
        <p className="text-xl mt-6 text-slate-300">
          Turn client feedback into stronger trust and more loyal customers.
        </p>
        <button className="mt-8 bg-pink-600 px-8 py-4 rounded-xl">
          Start Free Trial
        </button>
      </section>

    </div>
  );
}

export default Wellness;
