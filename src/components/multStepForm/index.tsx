import { useState } from "react";
import stepsConfig from "./steps";
import { FormProvider, useForm } from "react-hook-form";
import { TouchableOpacity, View } from "react-native";
import { theme } from "@/theme";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { ProgressBar } from "../progressBar";

const stepKeys = Object.keys(stepsConfig) as Array<keyof typeof stepsConfig>;

export function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm();

  const currentStepKey = stepKeys[currentStep];
  const StepComponent = stepsConfig[currentStepKey].component;

  const handleNext = () =>
    setCurrentStep((prev) => Math.min(prev + 1, stepKeys.length - 1));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleSubmit = () => {
    console.log(methods.getValues());
    // Aqui você pode fazer o que quiser com os dados do formulário
  };

  return (
    <View style={{ flex: 1 }}>
      <FormProvider {...methods}>
        <View style={{ flex: 1, backgroundColor: theme.colors.bg_color}}>
          <StepComponent nextStep={handleNext} prevStep={handlePrev} />
          <View style={{ padding: 20}}>
            <ProgressBar
              currentStep={currentStep + 1}
              steps={stepKeys.length}
              height={10}
            />
          </View>
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
