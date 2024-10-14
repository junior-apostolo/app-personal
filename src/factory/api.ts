import React from "react";
import axios from "axios";
import baseUrl from "@/config/baseUrl";
import { AUTHORIZATION, TokenStorageAsync } from "@/constants/global";
import { getData } from "@/utils/tokenSave";

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

  return api;
};

export default API();

