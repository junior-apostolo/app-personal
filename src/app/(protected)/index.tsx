import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../context/AuthContext";
import { MenuBottomSheet } from "@/components/MenuBottom";
import { CardList } from "@/components/CardList";
import { useBottomSheetRef } from "@/context/MenuSheetRefContext";

const Page = () => {
  const { authState, onLogout } = useAuth();

  const { bottomSheetRef } = useBottomSheetRef();

  const onLogoutPressed = () => {
    onLogout!();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seja sua melhor versão</Text>
      {/* <Text style={styles.title}>Role: {authState?.role}</Text> */}
      <Button title="Logout" onPress={onLogoutPressed} />
      <View style={styles.separator} />

      {/* <MenuBottomSheet
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
      </MenuBottomSheet> */}
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  separator: {
    height: 1,
    marginVertical: 30,
    width: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  containerContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 20,
    paddingBottom: 20,
  },
});
