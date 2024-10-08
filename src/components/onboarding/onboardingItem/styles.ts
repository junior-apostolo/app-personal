import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      flex: 0.7,
      justifyContent: 'center'
    },
    title: {
      fontWeight: '800',
      fontSize: 28,
      marginBottom: 10,
      color: theme.colors.bg_color,
      textAlign: 'center',
    },
    description: {
      fontWeight: '400',
      color: theme.colors.gray[600],
      textAlign: 'center',
      paddingHorizontal: 64,
      fontFamily: theme.fontFamily.regular
    }
})