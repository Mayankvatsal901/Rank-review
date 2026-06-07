import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";

function Register() {

  const navigate = useNavigate();

  const { backendUrl, login } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
    googleLink: ""
  });

  const [loading, setLoading] = useState(false);

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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${backendUrl}/business/register`,
        {
          name: formData.name,
          slug: formData.slug,
          email: formData.email,
          password: formData.password,
          location: formData.location,
          googleLink: formData.googleLink
        }
      );

      if (response.data.status) {
        login(response.data.token);
        alert("Registration successful");
        navigate("/");
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

  // small reusable input wrapper with icon
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
            Grow your business
            <br />
            with <span className="text-indigo-200">AI-powered</span> reviews
          </h2>
          <p className="mt-5 text-indigo-100 leading-relaxed max-w-md">
            Join thousands of businesses using RankReview to manage reviews,
            improve SEO, and build customer trust effortlessly.
          </p>

          {/* mini features */}
          <div className="mt-8 space-y-3">
            {["AI-generated professional reviews", "Smart analytics dashboard", "Competitor tracking & insights"].map((t, i) => (
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
            "RankReview transformed our online reputation in weeks."
          </p>
          <p className="mt-2 text-xs text-indigo-200">— Aman, Founder</p>
        </div>

      </div>

      {/* ============ RIGHT FORM ============ */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 lg:p-12 overflow-y-auto">

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

          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="mt-1.5 text-sm text-gray-400">Start managing your reviews with AI</p>

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
            <span className="text-xs text-gray-400">or sign up with email</span>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          <div className="space-y-4">

            {/* Business Name */}
            <div className={inputWrap}>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              </svg>
              <input type="text" name="name" placeholder="Business Name" value={formData.name} onChange={handleChange} className={inputBase} />
            </div>

            {/* Slug */}
            <div className={inputWrap}>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <input type="text" name="slug" placeholder="Business Slug" value={formData.slug} onChange={handleChange} className={inputBase} />
            </div>

            {/* Email */}
            <div className={inputWrap}>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputBase} />
            </div>

            {/* Password + Confirm (side by side) */}
            <div className="grid grid-cols-2 gap-3">
              <div className={inputWrap}>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className={inputBase} />
              </div>
              <div className={inputWrap}>
                <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <input type="password" name="confirmPassword" placeholder="Confirm" value={formData.confirmPassword} onChange={handleChange} className={inputBase} />
              </div>
            </div>

            {/* Location */}
            <div className={inputWrap}>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} className={inputBase} />
            </div>

            {/* Google Link */}
            <div className={inputWrap}>
              <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
              </svg>
              <input type="text" name="googleLink" placeholder="Google Review Link" value={formData.googleLink} onChange={handleChange} className={inputBase} />
            </div>

          </div>

          {/* submit */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          {/* login link */}
          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
              Log in
            </Link>
          </p>

        </form>

      </div>

    </div>

  );

}

export default Register;