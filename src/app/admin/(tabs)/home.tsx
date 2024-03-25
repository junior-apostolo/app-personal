import { View, StyleSheet, Text, ScrollView } from "react-native";
import { theme } from "@/theme";
import Bottom from "@gorhom/bottom-sheet";

import { Header } from "@/components/header";
import { MenuBottomSheet } from "@/components/menu";
import { useRef } from "react";
import { CardLink } from "@/components/cardLink";

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
      <Header userName="Olá, Admin" openMenu={handleBottomSheetOpen} />
      <Text style={styles.text}>Home</Text>

      <MenuBottomSheet
        ref={bottomSheetRef}
        title="Mais opções"
        snapPoints={[0.01, 280]}
      >
        <ScrollView contentContainerStyle={styles.containerContent}>
          <CardLink
            iconName="person-add-alt"
            text="Novo aluno"
            url="/admin/registerUser"
          />
          <CardLink
            iconName="groups"
            text="Meus alunos"
            url="/admin/registerUser"
          />
          <CardLink
            iconName="directions-run"
            text="Criar treino"
            url="/admin/registerWorkout"
          />
        </ScrollView>
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

  containerContent: {
    flexWrap: "wrap",
    flexDirection: 'row',
    gap: 20,
    paddingBottom: 20
  }
});
