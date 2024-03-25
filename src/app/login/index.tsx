import { Input } from "@/components/input";
import { theme } from "@/theme";
import { Link } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import * as Animatable from "react-native-animatable";

export default function Login() { 
  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.text}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View style={styles.containerInput}>
          <Input label="E-mail" placeholder="Digite o E-mail..." />
          <Input label="Senha" placeholder="Digite o nome..." />
        </View>

        <Link href='/admin/registerUser' asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.buttonResetPassword}>
          <Text style={styles.buttonResetText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue_600,
  },

  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },

  text: {
    color: theme.colors.white_200,
    fontFamily: theme.fonts.bold,
    fontSize: theme.fonts.size.heading.lg,
  },

  containerForm: {
    flex: 1,
    backgroundColor: theme.colors.white_200,
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    paddingStart: "5%",
    paddingEnd: "5%",
  },

  containerInput: {
    marginTop: 28,
  },

  button: {
    backgroundColor: theme.colors.blue_600,
    width: "100%",
    height: 50,
    borderRadius: theme.borderRadius.xl,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: theme.colors.white_200,
    fontSize: theme.fonts.size.body.md,
    fontWeight: "bold",
  },

  buttonResetPassword: {
    marginTop: 14,
    alignSelf: "center",
  },

  buttonResetText: {
    color: theme.colors.blue_600,
  },
});
