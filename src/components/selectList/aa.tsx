import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
} from "react-native";

const { height, width } = Dimensions.get("window");

type SelectListProps = {
  data: number[];
  setState: React.Dispatch<React.SetStateAction<number>>;
  info?: string;
  orientation?: "horizontal" | "vertical";
};

const getItemSize = (orientation: "horizontal" | "vertical") => {
  return orientation === "horizontal" ? width * 0.38 : height * 0.25;
};

export function SelectList({
  data,
  setState,
  info,
  orientation = "horizontal",
}: SelectListProps) {
  const scroll = useRef(new Animated.Value(0)).current;
  const ITEM_SIZE = getItemSize(orientation);

  const scrollEventName = orientation === "horizontal" ? "x" : "y";

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Para controlar o item selecionado

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#000",
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
          setSelectedIndex(index); // Atualiza o item selecionado
          setState(() => data[index]);
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={orientation === "horizontal"}
        style={{ flexGrow: 0 }}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: orientation === "horizontal" ? ITEM_SIZE / 2 : 0,
          paddingVertical: orientation === "vertical" ? ITEM_SIZE / 2 : 0,
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

          const isSelected = index === selectedIndex; // Verifica se é o item selecionado

          return (
            <View
              style={{
                width: orientation === "horizontal" ? ITEM_SIZE : "100%",
                height: orientation === "vertical" ? ITEM_SIZE : "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Texto acima do item */}
              {isSelected && (
                <Text style={styles.selectedText}>Item Selecionado</Text>
              )}

              <Animated.Text
                style={[
                  isSelected ? {...styles.ageNumber, color: colors.blue_700 }: styles.ageNumber,
                  {
                    opacity,
                    transform: [{ scale }],
                    fontSize: ITEM_SIZE * 0.3,
                  },
                ]}
              >

                {item}
              </Animated.Text>

              {/* Seta abaixo do item */}
              {isSelected && (
                <Text style={styles.arrow}>▲</Text>
              )}
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
  selectedText: {
    position: "relative",
    top: 200,
    fontSize: 16,
    color: colors.blue_700,
    fontFamily: theme.fontFamily.bold,
    marginBottom: 5, // Espaço entre o texto e o número
  },
  arrow: {
    fontSize: 24,
    color: colors.blue_700,
    marginTop: 5, // Espaço entre o número e a seta
  },
});
