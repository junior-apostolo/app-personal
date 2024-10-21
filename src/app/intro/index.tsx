import { View } from "react-native";
import { styles } from "./styles";
import { Onboarding } from "@/components/onboarding";

export default function Intro({setViewedOnboarding}) {
  return (
    <View style={styles.container}>
      <Onboarding setViewedOnboarding={setViewedOnboarding}/>
    </View>
  );
}
