import { View, Animated } from "react-native";
import { styles } from "./styles";
import { useEffect, useRef, useState } from "react";
import { theme } from "@/theme";

type ProgressBarProps = {
  currentStep: number;
  steps: number;
  height: number;
};

export function ProgressBar({
  currentStep,
  steps,
  height,
}: ProgressBarProps) {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * currentStep) / steps)
  }, [currentStep, width])

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;

        setWidth(newWidth);
      }}
      style={{
        height,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 10,
        overflow: "hidden",
      }}
    >
      <Animated.View
        style={{
          height,
          width: '100%',
          borderRadius: height,
          backgroundColor: theme.colors.white,
          position: "absolute",
          left: 0,
          top: 0,
          transform: [{
            translateX: animatedValue,
          }]
        }}
      ></Animated.View>
    </View>
  );
}
