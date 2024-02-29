import axiosInstance, { saveToken } from "./config";

type LoginUserTypes = IUser;

export const loginUser = async ({email, password}: LoginUserTypes) => {
  try {
    const response = await axiosInstance.post("", {
      email,
      password
    })
    return response.data
  } catch (error) {
    console.log("error in loginUser", error)
    throw error
  }
};
