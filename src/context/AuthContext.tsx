import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  user: UserProps | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean
};

type UserProps = {
  id: string;
  email: string;
  token: string;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<UserProps | null>(null);

  const login = async(email: string, password: string) => {
    try {
      const response = await axios.post("", {
        email,
        password,
      });

      AsyncStorage.setItem("", JSON.stringify({}))

      setUser(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}