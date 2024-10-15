import { MultiStepForm } from "@/components/multStepForm";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router"; 
import { FormProvider } from "@/contexts/FormContext";

export default function Form() {
  const { step } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <FormProvider>
        <MultiStepForm step={Number(step)} />
      </FormProvider>
    </View>
  );
}
