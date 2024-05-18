import { Input } from "@/components/Input";
import { Form } from "@unform/mobile";
import { useAuth } from "@/context/AuthContext";
import { theme } from "@/theme";
import { Link } from "expo-router";
import { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { AuthAuthentication } from "@/types/AuthAuthentication";
import { FormHandles } from "@unform/core";

export default function Login() {
  
  const formRef: FormHandles | any = useRef(null);
  const { onLogin, isLoading } = useAuth();

  const onSignInPress = async (data: AuthAuthentication) => {
    console.log(data)
    onLogin!(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.text}>Bem-vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Form ref={formRef} onSubmit={onSignInPress}>
          <View style={styles.containerInput}>
            <Input
              label="E-mail"
              name="email"
              icon="mail"
              placeholder="Digite o E-mail..."
              autoCorrect={false}
              keyboardType="email-address"
            />
            <Input
              icon="lock-closed"
              label="Senha"
              name="password"
              secureTextEntry
              placeholder="Digite o nome..."
              autoCorrect={false}
              keyboardType="default"
            />
          </View>
        </Form>

        <TouchableOpacity
          onPress={() => formRef?.current?.submitForm()}
          style={styles.button}
          activeOpacity={0.8}
        >
          {!isLoading ? (
            <Text style={styles.buttonText}>Acessar</Text>
          ) : (
            <ActivityIndicator color={"#fff"} size={30} />
          )}
        </TouchableOpacity>

        {/* <Link href="/admin/home" asChild></Link> */}

        <TouchableOpacity style={styles.buttonResetPassword}>
          <Text style={styles.buttonResetText}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </KeyboardAvoidingView>
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
    borderRadius: theme.borderRadius.md,
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
