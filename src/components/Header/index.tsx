import { theme } from "@/theme";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { useBottomSheetRef } from "@/context/MenuSheetRefContext";

type Props = {
  userName: string;
};

export const Header = ({ userName }: Props) => {
  // const { bottomSheetRef } = useBottomSheetRef();

  // const handleBottomSheetOpen = () => {
  //   bottomSheetRef.current?.expand();
  // };

  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity activeOpacity={0.5}>
        <MaterialCommunityIcons
          name="account-circle"
          size={32}
          color={theme.colors.white_200}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.textSmall}>Olá, {userName}</Text>
        <Text style={styles.text}>bem-vindo!</Text>
      </View>
    </View>
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
    flexDirection: 'column',
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
