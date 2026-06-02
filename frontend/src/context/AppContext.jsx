import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {

  const [token, setToken] = useState(
    localStorage.getItem("token") || ""
  );

  const [business, setBusiness] = useState(null);

  const [loading, setLoading] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const backendUrl = import.meta.env.VITE_BASE_URL;



  // ==========================
  // CHECK AUTH
  // ==========================

  const checkAuth = async () => {

    if (!token) {

      setBusiness(null);

      setIsLoggedIn(false);

      setLoading(false);

      return;

    }
    console.log("CHECK AUTH TOKEN =", token);

    try {


      const response = await axios.get(
        `${backendUrl}/business/me`,
        {
          headers: {
            Authorization: token
          }
        }
      );
      console.log("ME RESPONSE =", response.data);

      if (response.data.success) {
          console.log("SETTING LOGIN TRUE");
        setBusiness(response.data.business);

        setIsLoggedIn(true);

      }

    } catch (error) {
      console.log(error.response?.data);
      console.log("SETTING LOGIN FALSE");
      console.log(error);

      localStorage.removeItem("token");

      setToken("");

      setBusiness(null);

      setIsLoggedIn(false);

    }

    setLoading(false);

  };
  
  useEffect(() => {
  console.log("IS LOGGED IN CHANGED =", isLoggedIn);
}, [isLoggedIn]);


  // ==========================
  // LOGIN
  // ==========================

  const login = async(newToken) => {

    localStorage.setItem(
      "token",
      newToken
    );

    setToken(newToken);

    await checkAuth();
    console.log(isLoggedIn)

};



  // ==========================
  // LOGOUT
  // ==========================

  const logout = () => {

    localStorage.removeItem("token");

    setToken("");

    setBusiness(null);

    setIsLoggedIn(false);

  };



  // ==========================
  // REFRESH BUSINESS
  // ==========================

  const refreshBusiness = async () => {

    try {

      const response = await axios.get(
        `${backendUrl}/business/me`,
        {
          headers: {
            Authorization: token
          }
        }
      );

      if (response.data.success) {

        setBusiness(
          response.data.business
        );

      }

    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    checkAuth();

  }, [token]);



  // ==========================
  // PROFILE COMPLETION CHECK
  // ==========================

  const profileIncomplete =

    isLoggedIn && (

      !business?.slug ||
      !business?.location ||
      !business?.googleLink

    );



  const value = {

    token,
    setToken,

    business,
    setBusiness,

    isLoggedIn,
    
    login,
    logout,

    backendUrl,
    
    
    setIsLoggedIn,

    loading,

    currentPlan:
      business?.plan || "free",

    subscriptionStatus:
      business?.subscriptionStatus || "inactive",

    planStartDate:
      business?.planStartedAt || null,

    planExpiryDate:
      business?.planExpiresAt || null,

    refreshBusiness,

    profileIncomplete

  };



  return (

    <AppContext.Provider value={value}>

      {children}

    </AppContext.Provider>

  );

};

export default AppContextProvider;