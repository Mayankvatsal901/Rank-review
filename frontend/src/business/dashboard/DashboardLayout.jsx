import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout() {

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}

      <Sidebar />



      {/* RIGHT SIDE */}

      <div className="flex-1 flex flex-col">

        {/* TOPBAR */}

        <Topbar />



        {/* PAGE CONTENT */}

        <div className="p-6">

          <Outlet />

        </div>

      </div>

    </div>

  );

}

export default DashboardLayout;