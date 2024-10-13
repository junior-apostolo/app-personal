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
      alignItems: "center",
      width: "100%"
    },
    button: {
      width: "100%",
      alignSelf: "center",
      backgroundColor: theme.colors.blue_750,
      height: 50,
      borderRadius: 12,
      paddingVertical: 8,
      marginTop: 14,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 12,
      fontWeight: "bold",
    },
  });