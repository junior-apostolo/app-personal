import { TokenStorageAsync } from '@/constants/global';
import { postAnamnesisQuestionAsync } from '@/services/anamnesisQuestionService';
import { getData } from '@/utils/tokenSave';
import React, { createContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native';

// Define o tipo de dados do contexto
export interface FormContextType {
  formData: any;
  updateFormData: (stepData: { question: string; answer: string }, step: number) => void;
  updateFormDataAsArray: (stepDataArray: { question: string; answer: string }[], step: number) => void;
  submitForm: () => Promise<boolean>;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<any>({});
  const [formDataArray, setFormDataArray] = useState<any[]>([]);

  const updateFormData = async (stepData: { question: string; answer: string }, step: number) => {
    const tokenData: any = await getData(TokenStorageAsync);

    const newStepData = {
      ...stepData,
      step,
      dateAnswer: new Date().toISOString(),
      userId: tokenData.id,
    };

    setFormData(() => ({
      ...newStepData,
    }));

  };

  // Atualiza o formDataArray como uma lista de objetos
  const updateFormDataAsArray = async (stepDataArray: { question: string; answer: string }[], step: number) => {
    const tokenData: any = await getData(TokenStorageAsync);

    const newStepDataArray = stepDataArray.map((stepData) => ({
      ...stepData,
      step,
      dateAnswer: new Date().toISOString(),
      userId: tokenData.id,
    }));

    setFormDataArray((prevData) => [...prevData, ...newStepDataArray]);

  };

  const submitForm = async () => {
    try {

      if (Object.keys(formData).length) {
        if(formData.answer == ""){
          Alert.alert("Erro", "Preencha os campos");
          return false
        }
        const response = await postAnamnesisQuestionAsync(formData);
        if (!response) throw new Error('Erro ao enviar o formulário');
        console.log('Formulário enviado com sucesso!', formData);
      }

      if (formDataArray.length) {
        const listResponse = await Promise.all(
          formDataArray.map(async (item) => await postAnamnesisQuestionAsync(item))
        );

        if (!listResponse.length) throw new Error('Erro ao enviar o formulário');
        console.log('Lista de formulários enviada com sucesso!');
      }
      return true;
    } catch (error) {
      console.error('Erro na requisição:', error);
      return false;
    }
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, updateFormDataAsArray, submitForm }}>
      {children}
    </FormContext.Provider>
  );
};
