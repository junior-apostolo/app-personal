import React from "react";
import axios from "axios";
import baseUrl from "@/config/baseUrl";
import { AUTHORIZATION, TokenStorageAsync } from "@/constants/global";
import { getData } from "@/utils/tokenSave";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const API = () => {
  axios.defaults.headers.common["Accept"] = "*/*";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  
  const api = axios.create({ baseURL: baseUrl.URL });

  api.interceptors.request.use(async (config) => {
    const tokenData: any = await getData(TokenStorageAsync);

    if (tokenData) {
      config.headers[AUTHORIZATION] = `Bearer ${tokenData?.accessToken}`;
    }
    
    return config;
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        AsyncStorage.removeItem(TokenStorageAsync);
        router.push("welcome");
      }

      return Promise.reject(error); // Corrigido para `Promise.reject` ao invés de `PromiseRejectionEvent`
    }
  );

  return api;
};

export default API();
