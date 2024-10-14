import { MultiStepForm } from "@/components/multStepForm";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router"; // Importa corretamente o hook para pegar os parâmetros

export default function Form() {
  const { step } = useLocalSearchParams(); // Pega o parâmetro `step`
  
  return (
    <View style={{ flex: 1 }}>
      <MultiStepForm step={Number(step)} />
    </View>
  );
}
