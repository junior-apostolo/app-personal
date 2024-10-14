import { AxiosResponse } from "axios";
import { EXERCISE_TRAINING_TREINO_PATH } from "@/constants/apiPath";
import api from "../factory/api";
import { TrainingDetail } from "@/interfaces/TrainingDetail";


export interface ResponseRegisterUser extends AxiosResponse {
    data: Array<TrainingDetail>;
}

export const getAllExerciseTraining = async (id: string) => {
    try {
        const response = await api.get(`${EXERCISE_TRAINING_TREINO_PATH}?treinoId=${id}`);
        return response.data.data;
    } catch (err) {
        console.log(err);
        return [];
    }
};