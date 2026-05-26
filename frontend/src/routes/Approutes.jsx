import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReviewPage from "../customer/pages/ReviewPage";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<h1>Landing Page</h1>} />

        <Route path="/login" element={<h1>Login</h1>} />

        <Route path="/dashboard" element={<h1>Dashboard</h1>} />

        <Route path="/:slug" element={<ReviewPage/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;