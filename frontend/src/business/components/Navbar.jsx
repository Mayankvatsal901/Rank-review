import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import { Link } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const { token, logout } = useContext(AppContext);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 lg:px-10 py-4 border-b border-gray-100 bg-white/90 backdrop-blur-md">

      {/* LOGO */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 7.5h3.75v3.75" />
          </svg>
        </span>
        <span className="text-xl font-bold tracking-tight">
          Rank<span className="text-indigo-600">Review</span>
        </span>
      </div>

      {/* CENTER LINKS */}
      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-600">

        {/* PLATFORM DROPDOWN */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 hover:text-gray-900 transition py-2">
            Platform
            <svg className="h-4 w-4 text-gray-400 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <div className="absolute top-full left-0 pt-3 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
              <Link to="/platform/reviews-ai" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">⭐</span>
                <span className="text-sm font-medium">Reviews AI</span>
              </Link>
              <Link to="/platform/analytics-ai" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-50 text-purple-600">📊</span>
                <span className="text-sm font-medium">Analytics</span>
              </Link>
              <Link to="/platform/competitor-ai" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-50 text-pink-600">🏆</span>
                <span className="text-sm font-medium">Competitor AI</span>
              </Link>
              <Link to="/platform/keywords-ai" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">🔑</span>
                <span className="text-sm font-medium">Keywords AI</span>
              </Link>
              <Link to="/platform/qr-generator-ai" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition text-gray-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">📱</span>
                <span className="text-sm font-medium">QR Generator</span>
              </Link>
            </div>
          </div>
        </div>

        {/* SOLUTIONS DROPDOWN */}
        <div className="relative group">
          <button className="flex items-center gap-1.5 hover:text-gray-900 transition py-2">
            Solutions
            <svg className="h-4 w-4 text-gray-400 group-hover:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          <div className="absolute top-full left-0 pt-3 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 max-h-[460px] overflow-y-auto">

              <Link to="/solutions/healthcare" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Healthcare</h3>
                <p className="text-xs text-gray-400 mt-0.5">Hospitals, Clinics & Healthcare Providers</p>
              </Link>
              <Link to="/solutions/dental" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Dental</h3>
                <p className="text-xs text-gray-400 mt-0.5">Dental Clinics & Orthodontists</p>
              </Link>
              <Link to="/solutions/restaurants" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Restaurants</h3>
                <p className="text-xs text-gray-400 mt-0.5">Restaurants, Cafes & Food Businesses</p>
              </Link>
              <Link to="/solutions/automotive" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Automotive</h3>
                <p className="text-xs text-gray-400 mt-0.5">Dealerships & Auto Repair Shops</p>
              </Link>
              <Link to="/solutions/real-estate" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Real Estate</h3>
                <p className="text-xs text-gray-400 mt-0.5">Real Estate Agents & Agencies</p>
              </Link>
              <Link to="/solutions/legal" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Legal</h3>
                <p className="text-xs text-gray-400 mt-0.5">Lawyers & Law Firms</p>
              </Link>
              <Link to="/solutions/retail" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Retail</h3>
                <p className="text-xs text-gray-400 mt-0.5">Retail Stores & Local Shops</p>
              </Link>
              <Link to="/solutions/home-services" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Home Services</h3>
                <p className="text-xs text-gray-400 mt-0.5">Plumbers, Electricians & Contractors</p>
              </Link>
              <Link to="/solutions/financial-services" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Financial Services</h3>
                <p className="text-xs text-gray-400 mt-0.5">Accountants & Financial Advisors</p>
              </Link>
              <Link to="/solutions/wellness" className="block px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                <h3 className="text-sm font-semibold text-gray-800">Wellness</h3>
                <p className="text-xs text-gray-400 mt-0.5">Gyms, Yoga Studios & Spas</p>
              </Link>

            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/pricing")}
          className="hover:text-gray-900 transition py-2"
        >
          Pricing
        </button>

        <Link
          to="/contact"
          className="hover:text-gray-900 transition py-2"
        >
          Contact
        </Link>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {
          token ? (

            <>
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
              >
                Go to Dashboard
              </button>

              <button
                onClick={logout}
                className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition"
              >
                Logout
              </button>
            </>

          ) : (

            <button
              onClick={() => navigate("/register")}
              className="bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition"
            >
              Get Started
            </button>

          )
        }

      </div>

    </nav>

  );

}

export default Navbar;