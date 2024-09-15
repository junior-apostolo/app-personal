import { theme } from "@/theme";
import { colors } from "@/theme/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  // Step Weight
  containerWeight: {
    flex: 1,
    backgroundColor: colors.bg_color,
  },
  textContainerWeight: {
    marginTop: "18%",
    gap: 10,
    paddingHorizontal: "15%",
    alignItems: "center",
  },
  titleWeight: {
    fontSize: 32,
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
  descriptionWeight: {
    fontSize: 18,
    fontFamily: theme.fontFamily.regular,
    color: colors.white,
  },
  buttonWeight: {
    backgroundColor: theme.colors.blue_700,
    borderRadius: 100,
    padding: 20,
  },

  // Step Age
  containerAge: {
    flex: 1,
    backgroundColor: colors.bg_color,
  },
  textContainerAge: {
    marginTop: "18%",
    paddingHorizontal: "15%",
    gap: 10,
    alignItems: "center",
  },
  titleAge: {
    fontSize: 32,
    fontFamily: theme.fontFamily.bold,
    color: colors.white,
  },
  descriptionAge: {
    fontSize: 18,
    fontFamily: theme.fontFamily.regular,
    color: colors.white,
  },
  buttonAge: {
    backgroundColor: theme.colors.blue_700,
    borderRadius: 100,
    padding: 20,
  },
});
