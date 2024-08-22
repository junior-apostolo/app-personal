import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: theme.colors.bg_color,
      paddingHorizontal: 24,
    },
    containerHeader: {
      marginTop: "14%",
      marginBottom: "8%",
      paddingStart: "5%",
    },
    text: {
      color: theme.colors.white,
      fontFamily: theme.fontFamily.bold,
      fontSize: 18,
    },
    containerForm: {
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
    button: {
      backgroundColor: theme.colors.blue_600,
      width: "100%",
      height: 50,
      borderRadius: 12,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: "center",
      alignItems: "center",
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 12,
      fontWeight: "bold",
    },
  });