import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import { useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  Animated,
  TouchableOpacity,
} from "react-native";

const { height, width } = Dimensions.get("window");

const ITEM_SIZE = width * 0.38;
const ITEM_SPACING = (width - ITEM_SIZE) / 2;

type SelectListProps = {
  data: number[];
  setState: React.Dispatch<React.SetStateAction<number>>;
  info?: string;
};

export function SelectList({ data, setState, info }: SelectListProps) {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        position: "absolute",
        top: height / 3,
        left: 0,
        right: 0,
        flex: 1,
      }}
    >
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / ITEM_SIZE
          );
          setState(data[index]);
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{ flexGrow: 0 }}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: ITEM_SPACING,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
          });

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
          });
          const visibleInfo = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <View
              style={{
                width: ITEM_SIZE,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {info && (
                <Animated.Text
                  style={[
                    styles.infoText,
                    {
                      opacity: visibleInfo,
                    },
                  ]}
                >
                  {info}
                </Animated.Text>
              )}
              <Animated.Text
                style={[
                  styles.ageNumber,
                  {
                    opacity,
                    transform: [
                      {
                        scale,
                      },
                    ],
                  },
                ]}
              >
                {item}
              </Animated.Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ageNumber: {
    fontSize: ITEM_SIZE * 0.4,
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
  infoText: {
    fontSize: ITEM_SIZE * 0.2,
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
});
