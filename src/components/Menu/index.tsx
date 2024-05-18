import { CardList } from "@/components/CardList";
import { MenuBottomSheet } from "@/components/MenuBottom";
import React from "react";
import { View } from "react-native";

interface MenuProps {
  bottomSheetRef: any;
}

const Menu: React.FC<MenuProps> = ({ bottomSheetRef }) => {
  return (
    <MenuBottomSheet
      ref={bottomSheetRef}
      title="Mais opções"
      snapPoints={[0.01, 280]}
    >
      <CardList
        iconName="person-add-alt"
        text="Novo aluno"
        url="/(protected)/(admin)/home"
      />
      <CardList
        iconName="groups"
        text="Meus alunos"
        url="/(protected)/(admin)/home"
      />
      <CardList
        iconName="directions-run"
        text="Criar treino"
        url="/(protected)/(admin)/home"
      />
    </MenuBottomSheet>
  );
};

export default Menu;
