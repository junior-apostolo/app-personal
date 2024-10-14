import { AxiosResponse } from "axios";
import { PHYSICAL_ASSESSMENT } from "@/constants/apiPath";
import api from "../factory/api";
import { ComposicaoCorporalData } from "@/interfaces/ComposicaoCorporalData";


export interface ResponseRegisterUser extends AxiosResponse {
  data: ComposicaoCorporalData;
}

export const getPhysicalAssessmentAsync = async (id: string) => {
  try {
    const response = await api.get(`${PHYSICAL_ASSESSMENT}/user?userId=${id}`);
    return response.data.data;
  } catch (err) {
    console.log(err);
    return false;
  }
};