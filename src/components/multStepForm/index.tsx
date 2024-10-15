import { View, TouchableOpacity } from "react-native";
import { useForm, FormProvider } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import stepsConfig from "./steps";
import { styles } from "./styles";
import { theme } from "@/theme";
import { router } from "expo-router";
import { FormContext } from "@/contexts/FormContext";
import { getData, storeUserAndToken } from "@/utils/tokenSave";
import { TokenStorageAsync } from "@/constants/global";
import { patchAlterIsFirstAccess } from "@/services/userService";

const stepKeys = Object.keys(stepsConfig) as Array<keyof typeof stepsConfig>;

interface MultiStepForm {
  step?: number;
}


export function MultiStepForm({step}: MultiStepForm) {
  const [currentStep, setCurrentStep] = useState(step || 0);
  const { submitForm } = useContext(FormContext);
  const methods = useForm();

  const currentStepKey = stepKeys[currentStep];
  const StepComponent = stepsConfig[currentStepKey].component;

  const handleNext = async() => {
    setCurrentStep((prev) => Math.min(prev + 1, stepKeys.length))
    await submitForm()
    const tokenData: any = await getData(TokenStorageAsync);
    storeUserAndToken(tokenData.accessToken,{...tokenData, step: currentStep})
    if(currentStep == stepKeys.length - 2){
      storeUserAndToken(tokenData.accessToken,{...tokenData, step: currentStep, isFirstAccess: false})
      await patchAlterIsFirstAccess()
      router.push("(tabs)")
    }
  };
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));


  const handleSubmit = () => {
    console.log(methods.getValues());
    // Aqui você pode fazer o que quiser com os dados do formulário
  };

  return (
    <View style={{ flex: 1 }}>
      <FormProvider {...methods}>
        <View style={{ flex: 1, backgroundColor: theme.colors.bg_color }}>
          <StepComponent nextStep={handleNext} prevStep={handlePrev} />
          <View style={styles.containerButtons}>
            {currentStep > 0 && (
              <TouchableOpacity
                style={[styles.buttonPrev, { justifyContent: "flex-start" }]}
                onPress={handlePrev}
                activeOpacity={0.8}
              >
                <AntDesign
                  name="arrowleft"
                  size={32}
                  color={theme.colors.blue_700}
                />
              </TouchableOpacity>
            )}
            {currentStep < stepKeys.length - 1 ? (
              <TouchableOpacity
                style={styles.buttonNext}
                onPress={handleNext}
                activeOpacity={0.8}
              >
                <AntDesign
                  name="arrowright"
                  size={32}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.buttonNext} activeOpacity={0.8}>
                <AntDesign
                  name="arrowright"
                  size={32}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </FormProvider>
    </View>
  );
}
