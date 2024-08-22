import { View } from "react-native";
import { styles } from "./styles";
import Onboarding from "@/components/onboarding";

export default function Intro() {

  return (
    <View style={styles.container}>
      <Onboarding/>
    </View>
  );
}
