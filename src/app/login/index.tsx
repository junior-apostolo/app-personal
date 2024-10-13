import React from "react";
import { Input } from "@/components/input";
import { Link, router } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";
import { colors } from "@/theme/colors";

export default function Login() {
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
          <Input.Field placeholder="E-mail" />
        </Input>

        <Input>
          <Feather name="eye" size={16} color={theme.colors.black} />
          <Input.Field
            placeholder="Senha"
            secureTextEntry
            autoCorrect={false}
            keyboardType="default"
          />
        </Input>
        <View style={{width: "100%"}}>
          <TouchableOpacity style={styles.button} onPress={() => router.push("(tabs)")}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>

        <Link href="form">
          <Text >Voltar para Welcome</Text>
        </Link>
      </Animatable.View>
    </View>
  );
}
