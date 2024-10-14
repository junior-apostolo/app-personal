import AsyncStorage from "@react-native-async-storage/async-storage";
import { TokenStorageAsync, UserStorageAsync } from "@/constants/global";
import { User } from "@/interfaces/LoginResponse";


interface TokenData {
    accessToken: string;
    id: string;
    name: string;
    planExpirationDate: string; // ou Date, se preferir usar o objeto Date
    isFirstAccess: boolean;
    step: number;
}

export const storeData = async <T>(key: string, value: T): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error("Erro ao armazenar os dados", error);
    }
};

export const getData = async <T>(key: string): Promise<T | null> => {
    try {
        const data = await AsyncStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error("Erro ao obter os dados", error);
        return null;
    }
};

export const storeUserAndToken = async (token: string, user:User): Promise<void> => {
    const tokenData: TokenData = { 
        accessToken: token, 
        id: user.id,
        name: user.name, 
        step: user.step, 
        isFirstAccess: user.isFirstAccess, 
        planExpirationDate: user.planExpirationDate 
    };
    await storeData(TokenStorageAsync, tokenData);
};


export const signOut = async (): Promise<null> => {
    await AsyncStorage.removeItem(TokenStorageAsync);

    return null;
}
