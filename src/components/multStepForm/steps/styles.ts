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
  selectedText: {
    fontSize: 30,
    color: colors.blue_700,
    fontFamily: theme.fontFamily.bold,
    marginBottom: 5, // Espaço entre o texto e o número
  },
  arrow: {
    fontSize: 24,
    color: colors.blue_700,
    opacity: 1,
    marginTop: 5, // Espaço entre o número e a seta
  },
  session: {
    marginTop: 20,
  },
  contentButtonDayHours: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    marginTop: 50
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    margin: "auto"
  },
  subtitle: {
    color: colors.white,
    fontSize: 25,
    marginBottom: 10
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
    width: 300,
    textAlign: "center"
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
  ball: {
    width: 180,
    height: 180,
    borderRadius: 100, // Para fazer a bola redonda
    backgroundColor: colors.blue_750, // Cor de fundo (pode ser alterada)
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  symbol: {
    fontSize: 80,
    color: colors.white, // Azul para masculino
  },
  genderContainer: {
    alignItems: 'center', // Centraliza a bola e o texto
  },
  genderText: {
    fontSize: 20,
    color: colors.white,
  },
  textInput: {
    width: "50%",
    borderBottomWidth: 1,
    borderBottomColor: colors.blue_800,
    fontSize: 20,
    paddingTop: 10,
    color: colors.white
  }
});

