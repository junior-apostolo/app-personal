import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.bg_color
    },
    containerLogo: {
      flex: 2,
      backgroundColor: theme.colors.blue_600,
    },
    title: {
      fontSize: 18,
      color: theme.colors.black,
      fontFamily: theme.fontFamily.bold,
      marginTop: 28,
      marginBottom: 12,
    },
    text: {
      fontSize: 16,
      color: theme.colors.gray[600],
      fontFamily: theme.fontFamily.regular,
    },
    containerForm: {
      flex: 1,
      backgroundColor: theme.colors.white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingStart: "5%",
      paddingEnd: "5%",
    },
    button: {
      position: "absolute",
      backgroundColor: theme.colors.blue_600,
      borderRadius: 20,
      paddingVertical: 8,
      width: "60%",
      alignSelf: "center",
      bottom: "15%",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 12,
      fontFamily: theme.fontFamily.regular,
      color: theme.colors.white,
    },
  })