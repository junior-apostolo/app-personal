import { View, Image, useWindowDimensions, Text } from "react-native";
import { styles } from "./styles";
import { OnboardingProps } from "../../types/OnboardingProps";

type OnboardingItemProps = {
  item: OnboardingProps;
};

export function OnboardingItem({ item }: OnboardingItemProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]} />

      <View style={{flex: 0.3}}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}
