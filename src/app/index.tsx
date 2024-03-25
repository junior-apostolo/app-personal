import { View, StyleSheet, Text, Image, Pressable } from "react-native";
import { Link } from "expo-router";

import { theme } from "@/theme";

import * as Animatable from "react-native-animatable";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        {/* <Image
          source={}
          style={{}}
          resizeMode="contain"
        /> */}
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>Bem-vindo ao melhor app fitness</Text>
        <Text style={styles.text}>Faça login para iniciar</Text>

        <Link href="/login/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </Pressable>
        </Link>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue_600,
  },
  title: {
    fontSize: theme.fonts.size.heading.lg,
    color: theme.colors.black,
    fontFamily: theme.fonts.bold,
    marginTop: 28,
    marginBottom: 12,
  },
  text: {
    fontSize: theme.fonts.size.heading.md,
    color: theme.colors.gray[600],
    fontFamily: theme.fonts.regular,
  },
  button: {
    position: "absolute",
    backgroundColor: theme.colors.blue_600,
    borderRadius: theme.borderRadius.lg,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: theme.fonts.size.heading.sm,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white_200,
  },
  containerLogo: {
    flex: 2,
    backgroundColor: theme.colors.blue_600,
  },
  containerForm: {
    flex: 1,
    backgroundColor: theme.colors.white_200,
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
});
