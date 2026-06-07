import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

function DashboardHome() {

  const navigate = useNavigate();

  const {
    profileIncomplete
  } = useContext(AppContext);

  const hour = new Date().getHours();

  let greeting = "";

  if (hour < 12) {

    greeting = "Good Morning";

  }
  else if (hour < 17) {

    greeting = "Good Afternoon";

  }
  else if (hour < 21) {

    greeting = "Good Evening";

  }
  else {

    greeting = "Good Night";

  }

  return (

    <div className="space-y-10">

      {
        profileIncomplete && (

          <div className="rounded-3xl border border-yellow-300 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 shadow-sm">

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>

                <h2 className="text-2xl font-bold text-yellow-900">
                  Complete Your Business Profile
                </h2>

                <p className="text-yellow-800 mt-2">
                  Add your business slug, location and Google review link
                  to unlock Reviews, Analytics, QR Codes and Competition Tracking.
                </p>

              </div>

              <button
                onClick={() => navigate("/dashboard/profile")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl font-semibold transition"
              >
                Complete Profile
              </button>

            </div>

          </div>

        )
      }

      {/* WELCOME */}

      <div>

        <h1 className="text-4xl font-bold text-gray-800">
          {greeting} 👋
        </h1>

        <p className="text-gray-500 mt-2 text-lg">
          Manage your business reviews with AI
        </p>

      </div>

      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500 text-sm">
            Total Reviews
          </h2>

          <p className="text-4xl font-bold mt-4">
            156
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500 text-sm">
            Average Rating
          </h2>

          <p className="text-4xl font-bold mt-4">
            4.8 ⭐
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500 text-sm">
            AI Reviews Generated
          </h2>

          <p className="text-4xl font-bold mt-4">
            89
          </p>

        </div>

        <div className="bg-white p-6 rounded-2xl shadow">

          <h2 className="text-gray-500 text-sm mb-3">
            QR Generator
          </h2>

          <Link
            to="/dashboard/qr"
            className="text-2xl font-bold hover:text-blue-600 transition"
          >
            Open →
          </Link>

        </div>

      </div>

      {/* QUICK ACTIONS */}

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6">
          Quick Actions
        </h2>

        <div className="flex flex-wrap gap-4">

          <button
            onClick={() => navigate("/dashboard/qr")}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Generate QR
          </button>

          <button
            onClick={() => navigate("/dashboard/reviews")}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl"
          >
            View Reviews
          </button>

          <button
            onClick={() => navigate("/dashboard/profile")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl"
          >
            Update Profile
          </button>

        </div>

      </div>

      {/* RECENT REVIEWS */}

      <div className="bg-white p-6 rounded-2xl shadow">

        <h2 className="text-2xl font-semibold mb-6">
          Recent Reviews
        </h2>

        <div className="space-y-4">

          <div className="border rounded-xl p-4">

            <div className="flex justify-between">

              <h3 className="font-semibold">
                Rahul
              </h3>

              <p>
                ⭐⭐⭐⭐⭐
              </p>

            </div>

            <p className="text-gray-600 mt-2">
              Amazing food and great ambience
            </p>

          </div>

          <div className="border rounded-xl p-4">

            <div className="flex justify-between">

              <h3 className="font-semibold">
                Aman
              </h3>

              <p>
                ⭐⭐⭐⭐
              </p>

            </div>

            <p className="text-gray-600 mt-2">
              Nice service and professional staff
            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default DashboardHome;