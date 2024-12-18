// IMPORTS
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  // CONSTS
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/incidentor/home");
  }, [navigate]);

  return <div>Login</div>;
};

export default Auth;
