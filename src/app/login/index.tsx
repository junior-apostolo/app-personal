import { Input } from "@/components/input";
import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "@/theme";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./styles";

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

        <Link href="(tabs)" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Link>

        <Link href="welcome">Voltar para Welcome</Link>
      </Animatable.View>
    </View>
  );
}
