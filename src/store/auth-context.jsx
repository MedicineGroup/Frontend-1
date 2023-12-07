/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { API_ROUTES, ROUTES } from "../utils/routes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useContext, createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(undefined);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return {
    isLoggedIn: context.isLoggedIn,
    onSignup: context.onSignup,
    onLogin: context.onLogin,
    onLogout: context.onLogout,
    errors: context.errors,
    jwtToken: context.jwtToken,
  };
}

const loginMutation = async (data) => {
  return axios.post(`${import.meta.env.VITE_API_URL}${API_ROUTES.Login}`, data);
};

const signupMutation = (data) => {
  const { confirmPassword, ...signUpData } = data;
  return axios.post(
    `${import.meta.env.VITE_API_URL}${API_ROUTES.Signup}`,
    signUpData
  );
};

const logoutMutation = (jwtToken) => {
  return axios.get(`${import.meta.env.VITE_API_URL}${API_ROUTES.Logout}`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });
};

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState();
  const [jwtToken, setJwtToken] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const authToken = localStorage.getItem("token");
    if (userData && authToken) {
      setJwtToken(authToken);
      setIsLoggedIn(true);
    }
  }, []);
  const mutationLogin = useMutation({
    mutationFn: loginMutation,
    onSuccess: (data) => {
      localStorage.setItem("userData", JSON.stringify(data.data.user));
      localStorage.setItem("token", data.data.token);
      setJwtToken(data.data.token);
      setIsLoggedIn(true);
      navigate(ROUTES.DOSSIER_MEDICAL);
    },
    onError: (error) => {
      setErrors({
        loginErrors: error.response.data.message || "Something went wrong",
      });
    },
  });
  const mutationSignup = useMutation({
    mutationFn: signupMutation,
    onSuccess: (data) => {
      const user = data.data.user;
      localStorage.setItem("userData", JSON.stringify(user));
      localStorage.setItem("token", data.data.token);
      setJwtToken(data.data.token);
      setIsLoggedIn(true);
      navigate(ROUTES.INFO_USER);
    },
    onError: (error) => {
      setErrors({
        signupErrors: error.response.data.message || "Something went wrong",
      });
    },
  });
  const mutationLogout = useMutation({
    mutationFn: logoutMutation,
    onSuccess: () => {
      setIsLoggedIn(false);
      setJwtToken("");
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
      navigate(ROUTES.LANDING);
    },
    onError: (error) => {
      setErrors({
        logoutErrors: error.response.data.message || "Something went wrong",
      });
    },
  });

  const onSignup = async (data) => {
    await mutationSignup.mutateAsync(data);
  };

  const onLogin = async (data) => {
    await mutationLogin.mutateAsync(data);
  };

  const onLogout = async () => {
    await mutationLogout.mutateAsync(jwtToken);
  };
  const value = {
    isLoggedIn,
    onSignup,
    onLogin,
    onLogout,
    errors,
    jwtToken,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
