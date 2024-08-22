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

// const ITEM_SIZE = width * 0.38;
// const ITEM_SPACING = (width - ITEM_SIZE) / 2;

type SelectListProps = {
  data: number[];
  setState: React.Dispatch<React.SetStateAction<number>>;
  info?: string;
  orientation?: "horizontal" | "vertical";
};

const getItemSize = (orientation: "horizontal" | "vertical") => {
  return orientation === "horizontal" ? width * 0.38 : height * 0.25;
};

const getItemSpacing = (orientation: "horizontal" | "vertical") => {
  return orientation === "horizontal"
    ? (width - getItemSize(orientation)) / 2
    : (height - getItemSize(orientation)) / 4;
};

export function SelectList({
  data,
  setState,
  info,
  orientation = "horizontal",
}: SelectListProps) {
  const scroll = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = getItemSize(orientation);
  const ITEM_SPACING = getItemSpacing(orientation);

  const scrollEventName = orientation === "horizontal" ? "x" : "y";

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
      }}
    >
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.toString()}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { [scrollEventName]: scroll } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset[scrollEventName] / ITEM_SIZE
          );
          setState(data[index]);
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={orientation === "horizontal"}
        style={{ flexGrow: 0 }}
        snapToInterval={ITEM_SIZE}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: orientation === "horizontal" ? ITEM_SPACING : 0,
          paddingVertical: orientation === "vertical" ? ITEM_SPACING : 0,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
            (index + 1) * ITEM_SIZE,
          ];

          const opacity = scroll.interpolate({
            inputRange,
            outputRange: [0.4, 1, 0.4],
          });

          const scale = scroll.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
          });
          const visibleInfo = scroll.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
          });
          return (
            <View
              style={{
                width: orientation === "horizontal" ? ITEM_SIZE : "100%",
                height: orientation === "vertical" ? ITEM_SIZE : "100%",
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
                      fontSize: ITEM_SIZE * 0.2,
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
                    fontSize: ITEM_SIZE * 0.3,
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
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
  infoText: {
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
});
