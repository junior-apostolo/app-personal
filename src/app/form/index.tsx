import { MultiStepForm } from "@/components/multStepForm";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router"; // Importa corretamente o hook para pegar os parâmetros
import { FormProvider } from "@/contexts/FormContext";

export default function Form() {
  const { step } = useLocalSearchParams(); // Pega o parâmetro `step`

  return (
    <View style={{ flex: 1 }}>
      <FormProvider>
        <MultiStepForm step={Number(step)} />
      </FormProvider>
    </View>
  );
}
