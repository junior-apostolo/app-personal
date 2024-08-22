import { TouchableOpacity, View, Animated } from "react-native";
import Svg, { G, Circle } from "react-native-svg";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef } from "react";

type ButtonProps = {
  percentage: number;
  scrollTo: () => void;
};

export function NextButton({ percentage, scrollTo }: ButtonProps) {
  const size = 120;
  const strokeWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef<Svg | null>(null);

  const animation = (toValue: number) => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener((value) => {
      const strokeDashoffset =
        circumference - (circumference * value.value) / 100;

      if (progressRef?.current) {
        progressRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });
  });

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        <G rotation="-90" fill="#FFF" origin={center}>
          <Circle
            stroke="#e6e7e8"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <Circle
            ref={progressRef}
            stroke="#122E46"
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>

      <TouchableOpacity onPress={scrollTo} style={styles.button} activeOpacity={0.6}>
        <AntDesign name="arrowright" size={32} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
