import { Pressable, StyleSheet, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { theme } from "@/theme";
import { Href, Link, router } from "expo-router";

export type IconNameType = keyof typeof MaterialIcons.glyphMap;

type CardProps = {
  text: string;
  url: Href<string>;
  iconName: IconNameType;
};

export const CardLink = ({ iconName, text, url }: CardProps) => {

  // function handleNavigate(value: string) {
  //   router.replace('/');
  // }

  return (
    <Link href={url} style={styles.container}>
      <MaterialIcons name={iconName} size={32} color={theme.colors.black} />
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
};

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#d3d3d3",
    borderRadius: theme.borderRadius.md,
    height: 100,
    width: "28%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: 2,
  },
  text: {
    fontFamily: theme.fonts.regular,
    textAlign: "center",
  },
});
