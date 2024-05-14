import { theme } from "@/theme";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useBottomSheetRef } from "@/context/MenuSheetRefContext";
import { Container, Content, Title, SubTitle } from "./styles";
import { MenuBottomSheet } from "../../MenuBottom";
import { CardList } from "../../CardList";

type Props = {
  userName: string;
  handleBottomSheetOpen: () => void;
};

export const Header = ({ userName, handleBottomSheetOpen }: Props) => {

  return (
    <Container>
      <Content>
        <TouchableOpacity style={{marginRight: 10, zIndex: 9999}} activeOpacity={0.5}
        >
          <MaterialCommunityIcons
            name="account-circle"
            size={32}
            color={theme.colors.white_200}
          />
        </TouchableOpacity>
        <View>
          <Title>Olá, {userName}</Title>
          <SubTitle>bem-vindo!</SubTitle>
        </View>
      </Content>
      <TouchableOpacity onPress={handleBottomSheetOpen} activeOpacity={0.6}>
          <Ionicons
            name="menu-outline"
            size={32}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      
    </Container>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 20,
    height: 90,
    gap: 10,
    backgroundColor: theme.colors.blue_600,
  },
  textContainer: {
    flexDirection: "column",
  },
  text: {
    color: theme.colors.white_200,
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.medium,
  },
  textSmall: {
    color: theme.colors.white_200,
    fontSize: theme.fonts.size.body.xs,
    fontFamily: theme.fonts.regular,
  },
});
