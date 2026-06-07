import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { AppContext } from "../../context/AppContext";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Analytics = () => {

  const {
    backendUrl,
    business
  } = useContext(AppContext);

  const [analytics, setAnalytics] = useState(null);

  const GetAnalytics = async () => {

    try {

      const response = await axios.get(
        `${backendUrl}/review/analytics/${business._id}`
      );

      if (response.data.success) {

        setAnalytics(response.data.analytics);

      }

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    if (business?._id) {

      GetAnalytics();

    }

  }, [business]);

  if (!analytics) {

    return (

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="h-8 w-64 rounded-lg bg-gray-200 animate-pulse mb-3"></div>
        <div className="h-4 w-80 rounded bg-gray-100 animate-pulse mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((s) => (
            <div key={s} className="h-36 rounded-2xl bg-white border border-gray-100 animate-pulse"></div>
          ))}
        </div>
      </div>

    );

  }

  const chartData = Object.entries(
    analytics.monthlyReviews || {}
  ).map(([month, count]) => ({
    month,
    reviews: count
  }));

  return (

    <div className="min-h-screen bg-gray-50 p-6 lg:p-8">

      {/* HEADING */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Track your business review performance
        </p>
      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

        {/* TOTAL REVIEWS */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-400">
              Total Reviews
            </h2>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
              </svg>
            </span>
          </div>
          <p className="text-4xl font-bold text-gray-900 mt-4">
            {analytics.totalReviews}
          </p>
          <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70"></div>
        </div>

        {/* AVERAGE RATING */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-medium text-gray-400">
              Average Rating
            </h2>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 text-yellow-500">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <p className="text-4xl font-bold text-gray-900">
              {analytics.averageRating}
            </p>
            <span className="text-2xl">⭐</span>
          </div>
          <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 opacity-70"></div>
        </div>

      </div>

      {/* SENTIMENT */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">

        <h2 className="text-lg font-bold text-gray-900 mb-5">
          Sentiment Analysis
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* POSITIVE */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l3.75 3.75 7.5-7.5" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-green-700">Positive</h3>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {analytics.sentiments.positive}
            </p>
          </div>

          {/* NEUTRAL */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-yellow-700">Neutral</h3>
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {analytics.sentiments.neutral}
            </p>
          </div>

          {/* NEGATIVE */}
          <div className="rounded-2xl p-6 bg-gradient-to-br from-red-50 to-rose-50 border border-red-100">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100 text-red-500">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 16.5L15 9.75l-3.75 3.75-7.5-7.5" />
                </svg>
              </span>
              <h3 className="text-sm font-semibold text-red-700">Negative</h3>
            </div>
            <p className="text-3xl font-bold text-red-500">
              {analytics.sentiments.negative}
            </p>
          </div>

        </div>

      </div>

      {/* RATING DISTRIBUTION */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">

        <h2 className="text-lg font-bold text-gray-900 mb-5">
          Rating Distribution
        </h2>

        <div className="space-y-4">

          {[5, 4, 3, 2, 1].map((star) => (

            <div key={star} className="flex items-center gap-4">

              <div className="flex items-center gap-1.5 w-12">
                <span className="text-sm font-semibold text-gray-700">{star}</span>
                <svg className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </div>

              <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2.5 rounded-full transition-all duration-500"
                  style={{
                    width: `${(
                      analytics.ratingDistribution[star] /
                      analytics.totalReviews
                    ) * 100}%`
                  }}
                />
              </div>

              <p className="text-sm font-semibold text-gray-600 w-8 text-right">
                {analytics.ratingDistribution[star]}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* MONTHLY CHART */}

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Monthly Reviews
          </h2>
          <span className="text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
            Last Months Performance
          </span>
        </div>

        <div className="w-full h-[360px]">

          <ResponsiveContainer width="100%" height="100%">

            <BarChart
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 5
              }}
            >

              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                tick={{
                  fontSize: 12,
                  fill: "#94a3b8"
                }}
                tickLine={false}
                axisLine={false}
              />

              <YAxis
                allowDecimals={false}
                tick={{
                  fontSize: 12,
                  fill: "#94a3b8"
                }}
                tickLine={false}
                axisLine={false}
              />

              <Tooltip
                cursor={{ fill: "rgba(99,102,241,0.05)" }}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  backgroundColor: "#0f172a",
                  color: "white",
                  fontSize: "13px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                }}
              />

              <Bar
                dataKey="reviews"
                fill="url(#barGradient)"
                radius={[10, 10, 0, 0]}
                barSize={42}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  );

};

export default Analytics;