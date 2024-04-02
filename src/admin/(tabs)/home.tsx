import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { theme } from "@/theme";
import { MenuBottomSheet } from "@/components/MenuBottom";
import { CardList } from "@/components/CardList";
import { ListItem } from "@/components/ListItem";

import * as Animatable from "react-native-animatable";
import { useBottomSheetRef } from "@/context/MenuSheetRefContext";

export default function Home() {
  // const [isBottomSheetOpen, setIsOpenSheetOpen] = useState(false);
  const { bottomSheetRef } = useBottomSheetRef();

  const data = [
    { id: "3", name: "Fernando", email: "teste@gmail.com" },
    { id: "4", name: "Alan", email: "alan@gmail.com" },
    { id: "5", name: "José", email: "jose@gmail.com" },
    { id: "8", name: "José", email: "jose@gmail.com" },
  ];

  const workouts = [
    { id: "3", name: "Costas", email: "teste@gmail.com" },
    { id: "4", name: "Peito", email: "alan@gmail.com" },
    { id: "5", name: "Ombro", email: "jose@gmail.com" },
    { id: "7", name: "Posterior", email: "jose@gmail.com" },
  ];


  return (
    <View style={styles.container}>

      {/* LISTA DOS ULTIMOS ALUNOS CADASTRADOS */}
      <Text style={styles.text}>Alunos Cadastrados</Text>

      <Animatable.View animation="fadeInRight" delay={300}>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={{ paddingVertical: 5 }}
          contentContainerStyle={{
            gap: 10,
            paddingTop: StatusBar.currentHeight || 42,
            paddingHorizontal: 20,
          }}
          renderItem={({ item, index }) => <ListItem data={item} />}
        />

        <TouchableOpacity style={{ paddingTop: 20, alignSelf: "flex-end" }}>
          <Text style={styles.textButton}>Ver Mais</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* LISTA DOS ULTIMOS TREINOS CADASTRADOS */}
      <Text style={styles.text}>Treinos Cadastrados</Text>

      <Animatable.View animation="fadeInRight" delay={300}>
        <FlatList
          data={workouts}
          horizontal
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            gap: 10,
            paddingTop: StatusBar.currentHeight || 42,
            paddingHorizontal: 20,
          }}
          renderItem={({ item, index }) => <ListItem data={item} />}
        />

        <TouchableOpacity style={{ paddingTop: 20, alignSelf: "flex-end" }}>
          <Text style={styles.textButton}>Ver Mais</Text>
        </TouchableOpacity>
      </Animatable.View>

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // padding: "5%",
    // paddingTop: 52,
    backgroundColor: theme.colors.white_200,
  },
  text: {
    paddingHorizontal: 20,
    fontSize: 20,
    color: theme.colors.black,
    fontFamily: theme.fonts.regular,
  },
  textButton: {
    paddingHorizontal: 20,
    fontSize: 18,
    color: theme.colors.blue_600,
    fontFamily: theme.fonts.regular,
  },
  containerContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 20,
    paddingBottom: 20,
  },
});
