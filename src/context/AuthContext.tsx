import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  user: IUser | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  // useEffect(() => {
  //   async function loadStoragedData() {

  //   }
  // }, [])

  const login = async(email: string, password: string) => {
    try {
      const response = await axios.post("", {
        email,
        password,
      });

      await AsyncStorage.setItem("@Auth:user", JSON.stringify(response.data));
      await AsyncStorage.setItem("@Auth:token", response.data);

      setUser(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user, isAdmin: user.isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
}