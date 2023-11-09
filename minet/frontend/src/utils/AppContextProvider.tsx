import { useAuth0 } from "@auth0/auth0-react";
import React, { createContext, useEffect } from "react";
import { findUserByEmail, signInToApp, singUpToApp } from "../services/details";
import {
  getUserIdFromSessionStorage,
  setTokenInSessionStorage,
  setUserIdInSessionStorage,
} from "./Utility";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

const AuthContextProvider = ({ children }: AuthContextProps) => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    const addUserViaGoogleLogin = async () => {
      await singUpToApp(user?.email, "Abcd@123", user?.name).then(
        (response) => {
          setUserIdInSessionStorage(response.id);
        }
      );
    };
    const checkUserPresentInSystem = async () => {
      await findUserByEmail(user?.email).then((response) => {
        if (response && response.id) {
          setUserIdInSessionStorage(response.id);
        }
      });
    };

    const getToken = async (emailId?: string, passwor?: string) => {
      await signInToApp(emailId, passwor).then((resposne) => {
        if (resposne?.userId) {
          setUserIdInSessionStorage(resposne.userId);
          setTokenInSessionStorage(resposne.token);
          navigate("/dashboard");
        } else {
          alert(resposne.message);
        }
      });
    };

    const doOperations = async () => {
      if (isAuthenticated) {
        const userIdfromStorage = getUserIdFromSessionStorage("userId");
        if (userIdfromStorage === null || userIdfromStorage === undefined) {
          await checkUserPresentInSystem();
          await addUserViaGoogleLogin();
          await getToken(user?.email, "Abcd@123");
        }
      }
    };
    doOperations();
  }, [isAuthenticated, navigate, user]);
  return <AuthContext.Provider value={""}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
