import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

import slides from "../../../slides";
import { OnboardingItem } from "@/components/onboardingItem";

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
      />
    </View>
  );
}
