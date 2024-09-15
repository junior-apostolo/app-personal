import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  buttonNext: {
    backgroundColor: theme.colors.blue_700,
    borderRadius: 100,
    padding: 20,
  },
  buttonPrev: {
    borderWidth: 2,
    borderColor: theme.colors.blue_700,
    borderRadius: 100,
    padding: 20,
  },
  containerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 80,
    paddingBottom: '15%'
  }
});
