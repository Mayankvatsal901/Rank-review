import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../business/pages/Home";

import Login from "../business/auth/Login";
import Register from "../business/auth/Register";

import DashboardLayout from "../business/dashboard/DashboardLayout";
import DashboardHome from "../business/dashboard/DashboardHome";

import Reviews from "../business/dashboard/Reviews";
import Analytics from "../business/dashboard/Analytics";
import QRCode from "../business/dashboard/QRCode";
import Profile from "../business/dashboard/Profile";

import ProtectedRoute from "./ProtectedRoute";

import ReviewPage from "../customer/pages/ReviewPage";
// SOLUTIONS PAGES

import Healthcare from "../business/solutions/Healthcare";
import Dental from "../business/solutions/Dental";
import Restaurants from "../business/solutions/Restaurants";
import Automotive from "../business/solutions/Automotive";
import RealEstate from "../business/solutions/RealEstate";
import Legal from "../business/solutions/Legal";
import Retail from "../business/solutions/Retail";
import HomeServices from "../business/solutions/HomeServices";
import FinancialServices from "../business/solutions/FinancialServices";
import Wellness from "../business/solutions/Wellness";


// PLATFORM PAGES
import ReviewsAI from "../business/platform/ReviewsAI";
import AnalyticsAI from "../business/platform/AnalyticsAI";
import CompetitorAI from "../business/platform/CompetitorAI";
import KeywordsAI from "../business/platform/KeywordsAI";
import QRGenerator from "../business/platform/QRGenerator";
import Pricing from "../business/pricing/Pricing";
import Contact from "../business/contact/Contact";
import Location from "../business/dashboard/location";
import GoogleSuccess from "../business/auth/GoogleSuccess";


// PUBLIC LAYOUT
import PublicLayout from "../business/layouts/PublicLayout";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC LAYOUT */}

        <Route element={<PublicLayout />}>

          {/* HOME */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* AUTH */}

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
          <Route
    path="/google-success"
    element={<GoogleSuccess />}
/>


          {/* PLATFORM PAGES */}

          <Route
            path="/platform/reviews-ai"
            element={<ReviewsAI />}
          />

          <Route
            path="/platform/analytics-ai"
            element={<AnalyticsAI />}
          />

          <Route
            path="/platform/competitor-ai"
            element={<CompetitorAI />}
          />

          <Route
            path="/platform/keywords-ai"
            element={<KeywordsAI />}
          />

          <Route
            path="/platform/qr-generator"
            element={<QRGenerator />}
          />
          {/* SOLUTIONS */}

<Route
  path="/solutions/healthcare"
  element={<Healthcare />}
/>

<Route
  path="/solutions/dental"
  element={<Dental />}
/>

<Route
  path="/solutions/restaurants"
  element={<Restaurants />}
/>

<Route
  path="/solutions/automotive"
  element={<Automotive />}
/>

<Route
  path="/solutions/real-estate"
  element={<RealEstate />}
/>

<Route
  path="/solutions/legal"
  element={<Legal />}
/>

<Route
  path="/solutions/retail"
  element={<Retail />}
/>

<Route
  path="/solutions/home-services"
  element={<HomeServices />}
/>

<Route
  path="/solutions/financial-services"
  element={<FinancialServices />}
/>

<Route
  path="/solutions/wellness"
  element={<Wellness />}
/>
 <Route path="/pricing" element={<Pricing />} />
 <Route path="/contact" element={<Contact />} />


        </Route>
        



        {/* PROTECTED DASHBOARD */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route
            index
            element={<DashboardHome />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="qr"
            element={<QRCode />}
          />
          <Route
         path="location"
         element={<Location />}
      />

        </Route>



        {/* CUSTOMER REVIEW PAGE */}

        <Route
          path="/:slug"
          element={<ReviewPage />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default AppRoutes;