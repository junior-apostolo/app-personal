import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";

import { ListItem } from "@/components/ListItem";
import * as Animatable from "react-native-animatable";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CardList } from "@/components/CardList";
import { MenuBottomSheet } from "@/components/MenuBottom";
import React from "react";
import { useBottomSheetRef } from "@/context/MenuSheetRefContext";

export default function Admin() {
  const { bottomSheetRef } = useBottomSheetRef();

  const handleBottomSheetOpen = () => {
    bottomSheetRef.current?.expand();
  };

  // const data = [
  //   {
  //     id: "3",
  //     text: "Cadastrar User",
  //     url: "/(login)",
  //     iconName: "person-add-alt",
  //   },
  //   {
  //     id: "35",
  //     text: "Meus alunos",
  //     url: "/(login)",
  //     iconName: "groups",
  //   },
  //   {
  //     id: "53",
  //     text: "Criar treino",
  //     url: "/(login)",
  //     iconName: "directions-run",
  //   },
  // ];

  const workouts = [
    { id: "3", name: "Lucas" },
    { id: "4", name: "Vinicius" },
    { id: "5", name: "Matheus" },
    { id: "7", name: "Gustavo" },
  ];

  const students = [
    { id: "3", name: "Lucas", email: "teste@gmail.com" },
    { id: "4", name: "Vinicius", email: "alan@gmail.com" },
    { id: "5", name: "Matheus", email: "jose@gmail.com" },
    { id: "7", name: "Gustavo", email: "jose@gmail.com" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleBottomSheetOpen} activeOpacity={0.6}>
          <Ionicons
            name="menu-outline"
            size={32}
            color={theme.colors.blue_600}
          />
        </TouchableOpacity>

        <Text style={styles.text}>Controle de Treinos e Alunos</Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.subTitle}>Alunos Cadastrados</Text>

        <FlatList
          data={students}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{
            gap: 5,
            padding: 20,
            paddingTop: StatusBar.currentHeight || 20,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ListItem data={item} />}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.subTitle}>Treinos Cadastrados</Text>

        <FlatList
          data={workouts}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 3,
            padding: 20,
            paddingTop: StatusBar.currentHeight || 20,
          }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => <ListItem data={item} />}
        />
      </View>

      <MenuBottomSheet
        ref={bottomSheetRef}
        title="Mais opções"
        snapPoints={[0.01, 280]}
      >
        <CardList
          iconName="person-add-alt"
          text="Novo aluno"
          url="/(protected)/admin"
        />
        <CardList
          iconName="groups"
          text="Meus alunos"
          url="/(protected)/admin"
        />
        <CardList
          iconName="directions-run"
          text="Criar treino"
          url="/(protected)/admin"
        />
      </MenuBottomSheet>

      {/* <Animatable.View animation="fadeInRight" delay={300}>
        <CardList data={data} />
      </Animatable.View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 40,
  },
  headerContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 18,
    color: theme.colors.blue_600,
    fontFamily: theme.fonts.regular,
    paddingHorizontal: 20,
  },

  subTitle: {
    fontSize: 15,
    color: theme.colors.blue_600,
    fontFamily: theme.fonts.regular,
    paddingHorizontal: 20,
  },
  textButton: {
    paddingHorizontal: 20,
    fontSize: 18,
    color: theme.colors.blue_600,
    fontFamily: theme.fonts.regular,
  },
  workoutContainer: {
    marginTop: 40,
  },
});
