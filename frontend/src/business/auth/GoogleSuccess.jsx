import { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

function GoogleSuccess() {

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const {
    login,
    isLoggedIn
  } = useContext(AppContext);

  useEffect(() => {

    const token = searchParams.get("token");

    if (token) {

      login(token);

    }

  }, []);

  useEffect(() => {

    if (isLoggedIn) {

      navigate("/dashboard");

    }

  }, [isLoggedIn]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold">
        Signing you in...
      </h1>
    </div>
  );
}

export default GoogleSuccess;