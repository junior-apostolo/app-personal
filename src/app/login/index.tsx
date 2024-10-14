import React, { useState } from "react";
import { Input } from "@/components/input";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { colors } from "@/theme/colors";
import { postSingInAsync } from "@/services/authService";
import { storeUserAndToken } from "@/utils/tokenSave";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = async () => {
    try {
      const result = await postSingInAsync({
        email,
        password
      })
      if (typeof result == 'object') {
        if (result.user.isFirstAccess) {
          storeUserAndToken(result.token.tokenString, result.user);
          router.push({
            pathname: "form",  // Nome da tela de destino
            params: {
              step: result.user.step
            },
          })
        } else {
          storeUserAndToken(result.token.tokenString, result.user);
          router.push("(tabs)")
        }
      }
      if (!result) {
        Alert.alert("Erro de Credenciais", "Verifique se sua senha e email estão corretos")
      }
    } catch (err) {
      Alert.alert("Erro Inesperado")
    }
  }

  return (
    <View style={styles.container}>
      {/* Animação de Boas-vindas */}
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.text}>Bem-vindo(a)</Text>
      </Animatable.View>

      {/* Conteúdo principal */}
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {/* Imagem do logo */}
        <Image
          source={require('../../../assets/logo-image.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />

        {/* Inputs de e-mail e senha */}
        <Text style={{ textAlign: "left", width: "100%", color: colors.white, fontSize: 20, marginTop: 30 }}>Faça o login: </Text>
        <Input>
          <Feather name="user" size={16} color={theme.colors.black} />
          <Input.Field placeholder="E-mail" onChangeText={(text) => setEmail(text)} />
        </Input>

        <Input>
          <Feather name="eye" size={16} color={theme.colors.black} />
          <Input.Field
            placeholder="Senha"
            secureTextEntry
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => setPassword(text)}
          />
        </Input>
        <View style={{ width: "100%" }}>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
