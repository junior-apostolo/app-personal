import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Animated,
  useWindowDimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

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
  const width = useWindowDimensions()?.width;
  const scrollEventName = orientation === "horizontal" ? "x" : "y";

  const [selectedIndex, setSelectedIndex] = useState<number | null>(18); // Para controlar o item selecionado

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.FlatList
        data={data}
        initialScrollIndex={0}
        keyExtractor={(item) => item.toString()}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { [scrollEventName]: scroll } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x + 200/ width 
          );

          setSelectedIndex(() => data[index]); // Atualiza o item selecionado
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
            outputRange: [0.7, 1, 0.7],
          });

          const scale = scroll.interpolate({
            inputRange,
            outputRange: [0.7, 1, 0.7],
          });
          const isSelected = selectedIndex == item;
          return (
            <TouchableOpacity
            onPress={() => {
              setSelectedIndex(() => data[index]); // Atualiza o item selecionado
              setState(() => data[index]);
            }}
              style={{
                width: 90,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 2,
                height: 130,
                opacity: isSelected ? 1 : 0.7, // Todos os itens terão opacidade 0.7, exceto o selecionado
              }}
            >
              {isSelected && (
                <Text style={styles.selectedText}>KG</Text>
              )}

              {/* Número do item */}
              <Animated.Text
                style={[
                  {
                    fontSize: ITEM_SIZE * 0.3,
                  },
                  isSelected
                    ? { ...styles.ageNumber, color: colors.blue_700, fontSize: ITEM_SIZE * 0.4, opacity: 1 }
                    :  { ...styles.ageNumber, fontSize: ITEM_SIZE * 0.3 },
                ]}
              >
                {item}
              </Animated.Text>

              {/* Seta abaixo do item */}
              {isSelected && (
                <Text style={styles.arrow}>▲</Text>
              )}
            </TouchableOpacity>
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
    opacity: 0.7
  },
  infoText: {
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
  selectedText: {
    fontSize: 16,
    color: colors.blue_700,
    fontFamily: theme.fontFamily.bold,
    marginBottom: 5, // Espaço entre o texto e o número
  },
  arrow: {
    fontSize: 24,
    color: colors.blue_700,
    opacity: 1,
    marginTop: 5, // Espaço entre o número e a seta
  },
});
