import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    height: 54,
    padding: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: theme.colors.black,
    fontFamily: theme.fontFamily.regular
  }
})