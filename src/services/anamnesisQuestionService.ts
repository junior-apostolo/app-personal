import { AxiosResponse } from "axios";
import { ANAMNESIS_QUESTION_PATH } from "@/constants/apiPath";
import api from "../factory/api";
import { QuestionAnswerInput } from "@/interfaces/QuestionAnswerInput";


export interface ResponseRegisterUser extends AxiosResponse {
  data: QuestionAnswerInput;
}

export const postAnamnesisQuestionAsync = async (questionAnswerInput: QuestionAnswerInput) => {
  try {
    const aa = await api.post(ANAMNESIS_QUESTION_PATH, questionAnswerInput);
    console.log(aa)
    return true;
  } catch (err) {
    console.log(err.response.data);
    return false;
  }
};