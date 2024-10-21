import { AxiosResponse } from "axios";
import { AUTH_PATH } from "@/constants/apiPath";
import api from "../factory/api";
import { LoginResponse } from "@/interfaces/LoginResponse";


export interface ResponseRegisterUser extends AxiosResponse {
    data: LoginResponse;
}

export const postSingInAsync = async (credencials: UserCredentials) => {
    try {
        const response = await api.post(AUTH_PATH, credencials);
        if (response.data.data.user == null) {
            return false;
        }
        return response.data.data;
    } catch (err) {
        console.log(err);
        return false;
    }
};