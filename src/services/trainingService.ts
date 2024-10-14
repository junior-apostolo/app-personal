import { AxiosResponse } from "axios";
import { TRAINING_PATH } from "@/constants/apiPath";
import api from "../factory/api";
import { Training } from "@/interfaces/Training";


export interface ResponseRegisterUser extends AxiosResponse {
    data: Array<Training>;
}

export const getAllTrainingAsync = async () => {
    try {
        const response = await api.get(`${TRAINING_PATH}/user`);
        return response.data.data;
    } catch (err) {
        console.log(err);
        return [];
    }
};