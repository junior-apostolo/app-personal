import { OnboardingProps } from "@/types/OnboardingProps";
import { View, Text, Animated, useWindowDimensions } from "react-native";
import { styles } from "./styles";

type PaginatorProps = {
  data: OnboardingProps[];
  scrollX: Animated.Value;
};

export function Paginator({ data, scrollX }: PaginatorProps) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ flexDirection: "row", height: 64 }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const doWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            style={[styles.dot, { width: doWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}
