import { View, StyleSheet, Text } from "react-native";
import { theme } from "@/theme";
import Bottom from "@gorhom/bottom-sheet";

import { Header } from "@/components/Header";
import { MenuBottomSheet } from "@/components/MenuBottom";
import { useRef } from "react";

export default function Home() {
  // const [isBottomSheetOpen, setIsOpenSheetOpen] = useState(false);

  const bottomSheetRef = useRef<Bottom>(null);
  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };

  // const handleBottomSheetClose = () => {
  //   setIsOpenSheetOpen(false);
  //   bottomSheetRef.current?.snapToIndex(0);
  // };

  return (
    <View style={styles.container}>
      <Header userName="Olá, Junior" openMenu={handleBottomSheetOpen} />
      <Text style={styles.text}>Home</Text>

      <MenuBottomSheet
        ref={bottomSheetRef}
        title="Mais opções"
        snapPoints={[0.01, 280]}
      >
        <Text>Hello!!</Text>
      </MenuBottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "5%",
    paddingTop: 52,
    backgroundColor: theme.colors.white_200,
  },
  text: {
    fontSize: 22,
    color: theme.colors.blue_600,
    fontFamily: theme.fonts.regular,
  },
});
