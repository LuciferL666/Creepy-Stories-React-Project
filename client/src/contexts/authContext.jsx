import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import * as authService from "../services/authService";
import Path from "../paths";
import usePersistedState from "../hooks/usePersistedState";

const AuthContext = createContext();

AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [auth, setAuth] = usePersistedState("auth", {});

  const loginSubmitHandler = async (values) => {
    try {
      // Проверка за празни полета
      if (!values.email || !values.password) {
        toast.error("Please provide both email and password.");
        return;
      }

      const result = await authService.login(values.email, values.password);
      setAuth(result);

      localStorage.setItem("accessToken", result.accessToken);
      navigate(Path.Home);
    } catch (error) {
      toast.error("Wrong password or email! Please try again.");
      console.error(error);
    }
  };

  const registerSubmitHandler = async (values) => {
    if (!values.email || !values.password || !values.repeatPassword) {
      toast.error("Please provide email, password and repeat password.");
      return;
    }

    if (values.password.trim() === "" || values.repeatPassword.trim() === "") {
      toast.error("Please provide correct password.");
      return;
    }

    if (values.password.length < 3) {
      toast.error("Password must be longer then 3 symbols.");
      return;
    }
    if (values.repeatPassword !== values.password) {
      toast.error("Password missmatch! Please make sure your passwords match.");
      return;
    }

    const result = await authService.register(values.email, values.password);
    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContext;
