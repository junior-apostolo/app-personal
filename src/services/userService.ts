import { AxiosResponse } from "axios";
import { ANAMNESIS_QUESTION_PATH, USER_PATH } from "@/constants/apiPath";
import api from "../factory/api";
import { User } from "@/interfaces/LoginResponse";


export interface ResponseRegisterUser extends AxiosResponse {
  data: User;
}

export const patchAlterIsFirstAccess = async () => {
  try {
    await api.patch(USER_PATH);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};