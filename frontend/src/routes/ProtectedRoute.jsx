import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

const ProtectedRoute = ({ children }) => {

  const { isLoggedIn, loading } = useContext(AppContext);

console.log("loading =", loading);

  if (loading) {

    return <div>Loading...</div>;

  }
 console.log("isLoggedIn =", isLoggedIn);


  if (!isLoggedIn) {

    return <Navigate to="/register" />;

  }



  return children;

};

export default ProtectedRoute;