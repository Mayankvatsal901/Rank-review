import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicLayout() {

  return (
    <div>

      <Navbar />

      <main className="pt-28 min-h-screen">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default PublicLayout;