import { colors } from '@/theme/colors';
import React, { useRef, useState } from 'react';
import { View, Text, FlatList, StyleSheet, NativeScrollEvent, NativeSyntheticEvent, FlatList as FlatListType } from 'react-native';

// Definindo os tipos das props
interface SelectListHorizontalProps {
  data?: number[]; // Array de números, padrão de 0 a 100
  itemHeight?: number; // Altura dos itens, padrão 60
  onValueChange?: (value: number) => void; // Função de callback para quando o valor muda
  initialSelectedIndex?: number; // Índice inicial selecionado
  label?: string; // Rótulo a ser exibido quando um item é selecionado
}

export function SelectListHorizontal({
  data = Array.from({ length: 101 }, (_, i) => i), // Padrão de 0 a 100 se não for passado nenhum dado
  itemHeight = 60, // Altura padrão dos itens
  onValueChange, // Callback para alterar o valor
  initialSelectedIndex = 0, // Índice selecionado inicialmente
  label,
}: SelectListHorizontalProps) {
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const flatListRef = useRef<FlatListType<number>>(null);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / itemHeight);
    setSelectedIndex(index + 3);

    if (onValueChange) {
      onValueChange(data[index + 3]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.item, index === selectedIndex && styles.selectedItem]}>
            <View style={[styles.item, index === selectedIndex && styles.contentText]}>
              <Text style={[styles.itemText, index === selectedIndex && styles.selectedItemText]}>
                {item}
              </Text>
              {index === selectedIndex && label && <Text style={{ marginRight: -20, fontSize: 20, color: colors.blue_700 }}>{label}</Text>}
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        snapToInterval={itemHeight}
        decelerationRate="fast"
        onScroll={onScroll}
        scrollEventThrottle={16}
        getItemLayout={(data, index) => ({
          length: itemHeight,
          offset: itemHeight * index,
          index,
        })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  contentText: {
    width: "100%",
    flexDirection: "row",
  },
  item: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 24,
    color: 'gray',
  },
  selectedItem: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    width: 100,
    borderColor: colors.blue_700,
    margin: "auto",
  },
  selectedItemText: {
    fontSize: 50,
    color: colors.blue_700,
    fontWeight: 'bold',
  },
});
