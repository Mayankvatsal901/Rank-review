import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

function Login() {

  const navigate = useNavigate();

  const {
    backendUrl,
    login,
    isLoggedIn
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGoogleLogin = () => {
    window.location.href = `${backendUrl}/business/google`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        `${backendUrl}/business/login`,
        {
          email: formData.email,
          password: formData.password
        }
      );

      if (response.data.status) {
        login(response.data.token);
        alert("Login successful");
      }

    } catch (error) {
      console.log(error);
      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const inputWrap = "flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3.5 focus-within:border-indigo-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100 transition";
  const inputBase = "w-full py-3 bg-transparent outline-none text-sm text-gray-800 placeholder-gray-400";

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* ============ LEFT BRAND PANEL ============ */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 p-12 flex-col justify-between text-white">

        {/* glows */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl"></div>

        {/* logo */}
        <div className="relative flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5M16.5 7.5h3.75v3.75" />
            </svg>
          </span>
          <span className="text-xl font-bold">RankReview</span>
        </div>

        {/* middle text */}
        <div className="relative">
          <h2 className="text-4xl font-extrabold leading-tight">
            Welcome back to
            <br />
            <span className="text-indigo-200">RankReview</span>
          </h2>
          <p className="mt-5 text-indigo-100 leading-relaxed max-w-md">
            Log in to manage your reviews, track analytics, and keep growing
            your online reputation with AI.
          </p>

          {/* mini features */}
          <div className="mt-8 space-y-3">
            {["Manage all your reviews in one place", "AI-powered review responses", "Real-time analytics dashboard"].map((t, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-indigo-50">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* bottom quote */}
        <div className="relative rounded-2xl bg-white/10 border border-white/15 p-5 backdrop-blur-md">
          <p className="text-sm text-indigo-50 italic">
            "The best decision we made for our online reputation."
          </p>
          <p className="mt-2 text-xs text-indigo-200">— Rahul, Restaurant Owner</p>
        </div>

      </div>

      {/* ============ RIGHT FORM ============ */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 lg:p-12">

        <form onSubmit={handleSubmit} className="w-full max-w-md">

          {/* mobile logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5M16.5 7.5h3.75v3.75" />
              </svg>
            </span>
            <span className="text-lg font-bold text-gray-900">RankReview</span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
          <p className="mt-1.5 text-sm text-gray-400">Login to manage your reviews</p>

          {/* google */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="mt-6 w-full flex items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          {/* divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200"></div>
            <span className="text-xs text-gray-400">or login with email</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="space-y-4">

            {/* Email */}
            <div>
              <label className="block mb-1.5 text-sm font-medium text-gray-600">Email</label>
              <div className={inputWrap}>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className={inputBase} />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-gray-600">Password</label>
                <span className="text-xs font-medium text-indigo-600 hover:underline cursor-pointer">Forgot?</span>
              </div>
              <div className={inputWrap}>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} className={inputBase} />
              </div>
            </div>

          </div>

          {/* submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* register link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/register" className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
              Sign up
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;