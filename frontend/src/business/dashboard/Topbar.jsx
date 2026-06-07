import { useNavigate } from "react-router-dom";

function Topbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

    window.location.reload();
  };

  return (

    <div className="h-[72px] bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-30">

      {/* LEFT : Title */}
      <div>
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">
          Dashboard
        </h1>
        <p className="text-sm text-gray-400">
          Welcome back 👋
        </p>
      </div>

      {/* RIGHT : Actions */}
      <div className="flex items-center gap-4">

        {/* Notification bell */}
        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition">
          <svg
            className="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
          <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>

        {/* Divider */}
        <div className="h-7 w-px bg-gray-200"></div>

        {/* Profile */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-sm font-semibold">
            U
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-semibold text-gray-800">User</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <span className="hidden sm:inline">Logout</span>
        </button>

      </div>

    </div>

  );

}

export default Topbar;