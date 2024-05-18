import {
  FlatList,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Href, Link, router } from "expo-router";

export type IconNameType = keyof typeof MaterialIcons.glyphMap;

type CardProps = {
  text: string;
  url: Href<string>;
  iconName: IconNameType;
};

export const CardList = ({ iconName, text, url }: CardProps) => {
  return (
    <Link href={url} asChild>
      <TouchableOpacity style={styles.container} activeOpacity={0.8}>
        <MaterialIcons name={iconName} size={30} color={theme.colors.white} />
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.blue_600,
    height: 80,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.white,
    textAlign: "center",
  },
});
