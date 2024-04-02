import axios from "axios";
import { createContext, useContext, useState } from "react";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

interface AuthProps {
  authState: {
    authenticated: boolean | null;
    username: string | null;
    role: Role | null;
  };
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
    username: string | null;
    role: Role | null;
  }>({
    authenticated: null,
    username: null,
    role: null,
  });
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    // try {
    //   const response = await axios.post(`${apiUrl}/Auth`, {
    //     email,
    //     password,
    //   });

    //   const user = response.data;
    //   console.log("Teste", user);

    //   setAuthState({
    //     authenticated: true,
    //     username: user.name,
    //     role: user.isAdmin ? Role.ADMIN : Role.USER,
    //   });
    // } catch (error) {
    //   console.log("Error", error);
    //   alert("Invalid username or password!");
    // } finally {
    //   setLoading(false);
    // }
    if (email === "admin" && password === "admin") {
      setAuthState({
        authenticated: true,
        username: email,
        role: Role.ADMIN,
      });
      setLoading(false);
    } else if (email === "user" && password === "user") {
      setAuthState({
        authenticated: true,
        username: email,
        role: Role.USER,
      });
      setLoading(false);
    } else {
      alert("Invalid username or password!");
    }
    setLoading(false);
  };

  const logout = async () => {
    setAuthState({
      authenticated: false,
      username: null,
      role: null,
    });
  };

  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
    isLoading: loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
