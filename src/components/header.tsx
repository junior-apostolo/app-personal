import { theme } from "@/theme";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  userName: string,
  openMenu: () => void
}

export const Header = ({openMenu, userName}: Props) => {
  return (
    <View style={styles.containerHeader}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={openMenu}
      >
        <Ionicons name="menu" size={32} color={theme.colors.black}/>
      </TouchableOpacity>
      <Text style={styles.text}>{userName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    color: theme.colors.black,
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.medium,
  },
});
